import {RNToasty} from 'react-native-toasty';
import http from '../../services/api';
import {AUTH_TOKEN, LOADING, USER_DATA, USER_ROLE} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import objectToFormData from '../../services/objectToFormData';
import {formDataHeader} from '../../services/formDataHeader';
import {GetAllCategory, GetAllService} from './homeAction';
// import { GetAllNotification } from "./notificationAction";

export const AuthFunction = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: 's',
  });
};

export const InitialCall = () => async dispatch => {
  dispatch(GetUserDataApi());
  dispatch(GetAllCategory());
  dispatch(GetAllService());
  // dispatch(GetAllNotification())
};

export const SignUpApi = (postData, navigation, cb) => async dispatch => {
  postData = await objectToFormData(postData);

  cb && cb(true);
  http
    .post('register', postData, formDataHeader)
    .then(async response => {
      console.log('registeraallllllllllllll..',JSON.stringify(response.data));
      if (response.data.message) {
        navigation?.goBack();
        // navigation.navigate('Login');
        RNToasty.Success({
          title: 'Create account successfully',
          duration: 2,
        });
        cb && cb(false);
      } else {
        cb && cb(false);
        RNToasty.Info({
          title: response.data?.message,
          duration: 2,
        });
      }
    })
    .catch(error => {
      console.log('sign up error : ', error.response?.data);
      cb && cb(false);

      RNToasty.Error({
        title: error?.response?.data?.message,
        duration: 2,
      });
    });
};

export const LoginApi = (postData, navigation, cb) => async dispatch => {
  postData = await objectToFormData(postData);

  cb && cb(true);
  http
    .post('login', postData, formDataHeader)
    .then(async response => {
      console.log('This is response ', response.data.result);
      console.log('This is response status ', response.data.status);
      if (response.data.status == 200) {
        dispatch({
          type: AUTH_TOKEN,
          payload: response.data.token,
        });
        await AsyncStorage.setItem(
          '@USER_TOKEN',
          response.data.token,
        );
        await AsyncStorage.setItem(
          '@USER_ID',
          JSON.stringify(response.data.result.id),
        );
        // dispatch({
        //   type: AUTH_TOKEN,
        //   payload: response.data.customer_data?.fcm_token,
        // });
        // await AsyncStorage.setItem(
        //   '@USER_TOKEN',
        //   JSON.stringify(response.data.customer_data?.fcm_token),
        // );
        // await AsyncStorage.setItem(
        //   '@USER_ID',
        //   JSON.stringify(response.data.customer_data?.id),
        // );
        dispatch(InitialCall());
        navigation &&
        navigation.navigate('StackNavigator', {data: response.data.token});
        RNToasty.Success({
          title: 'User Loggedin successfully.',
          duration: 2,
        });
        cb && cb(false);
      } else {
        RNToasty.Info({
          title: response.data.message,
          duration: 2,
        });
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
      console.log('login error : ', error);
      RNToasty.Error({
        title: error?.response?.data?.message,
        duration: 2,
      });
    });
};

export const LogoutApi = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: null,
  });
  dispatch({
    type: USER_DATA,
    payload: null,
  });
  AsyncStorage.removeItem('@USER_TOKEN');
  AsyncStorage.removeItem('@USER_ID');
};

export const UpdateUserApi = (postData, navigation, cb) => async dispatch => {
  // const userId = await AsyncStorage.getItem('@USER_ID');
  // console.log("user id updata user : ", userId)

  postData = await objectToFormData(postData);
  // console.log("update user post data : ", postData)

  cb && cb(true);
  http
    .post(`update-profile`, postData, formDataHeader)
    .then(async response => {
      console.log("update-profile update user post data auth screen for edit profile : ", response.data)
      if (response.data) {
        dispatch(GetUserDataApi());
        RNToasty.Success({
          title: response.data.message,
          duration: 2,
        });
        cb && cb(false);
        navigation?.goBack();
      } else {
        cb && cb(false);
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      cb && cb(false);
      console.log('edit user error : ', error.response);
      RNToasty.Error({
        title: error.response?.data?.message,
        duration: 2,
      });
    });
};

export const GetUserDataApi = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  console.log("usfs fi id from auth action =====; ", userId)

  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`get-customer-data/${userId}`)
    .then(async response => {
      console.log("usfs fi id data ========; ", response.data)
      if (response.data) {
        dispatch({
          type: USER_DATA,
          payload: response.data,
        });
        // RNToasty.Success({
        //     title: "get user data successfully",
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};

export const ForgetPasswordApi =
  (postDataIn, navigation, cb) => async (dispatch, getState) => {
    // const {userData} = getState().auth
    // console.log("forget userData : ", userData)

    const postData = await objectToFormData(postDataIn);

    cb && cb(true);
    http
      .post(`request_otp`, postData, formDataHeader)
      .then(async response => {
        if (response.data.response) {
          navigation?.navigate('Otp', {data: response.data.data[0]});
          // navigation && navigation.navigate("Otp", { data: postDataIn, otp: response.data.data[0].otp, id: response.data.id })
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          cb && cb(false);
        } else {
          cb && cb(false);
          RNToasty.Info({
            title: response.data?.message,
            duration: 2,
          });
        }
      })
      .catch(error => {
        cb && cb(false);
        console.log('forget error : ', error);
        RNToasty.Error({
          title: error.response?.data?.message,
          duration: 2,
        });
      });
  };

export const VerifyOtpApi =
  (postData, navigation, userId, cb) => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem("@USER_ID")
    const {userData} = getState().auth
    console.log("otp userId : ", userId)

    postData = await objectToFormData(postData);

    cb && cb(true);
    http
      .post(`verify-otp`, postData, formDataHeader)
      .then(async response => {
        console.log('verify otp res : ', response.data);
        if (response.data.message === 'OTP verification successful') {
          dispatch({
            type: AUTH_TOKEN,
            payload: response.data.token,
          });
          await AsyncStorage.setItem(
            '@USER_TOKEN',
            response.data.token,
          );
          await AsyncStorage.setItem(
            '@USER_ID',
            JSON.stringify(response.data.user_id),
          );
          dispatch(InitialCall());
          navigation.navigate('StackNavigator');
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          cb && cb(false);
        } else {
          cb && cb(false);
          RNToasty.Info({
            title: response.data.massage,
            duration: 2,
          });
        }
      })
      .catch(error => {
        cb && cb(false);
        console.log('forget error : ', error);
        RNToasty.Error({
          title: error.response?.data?.massage,
          duration: 2,
        });
      });
  };

export const ResetPasswordApi =
  (postData, navigation, user_id, cb) => async dispatch => {
    const userId = await AsyncStorage.getItem('@USER_ID');

    user_id = user_id ? user_id : userId;

    postData = await objectToFormData(postData);

    console.log('ResetPasswordApi data userid : ', postData, user_id);

    cb && cb(true);
    http
      .post(`reset_password?userid=${user_id}`, postData, formDataHeader)
      .then(async response => {
        if (response.data.response) {
          if (userId) {
            navigation?.goBack();
            dispatch(GetUserDataApi());
          } else {
            navigation?.replace('Login');
          }
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          cb && cb(false);
        } else {
          cb && cb(false);
          RNToasty.Info({
            title: response.data.message,
            duration: 2,
          });
        }
      })
      .catch(error => {
        cb && cb(false);
        console.log('reset password  error : ', error);
        RNToasty.Error({
          title: error.response?.data?.message,
          duration: 2,
        });
      });
  };

  export const LoginByOtpApi =
  (postData, navigation, user_id, cb) => async dispatch => {
    // const userId = await AsyncStorage.getItem('@USER_ID');

    // user_id = user_id ? user_id : userId;

    postData = await objectToFormData(postData);

    console.log('LoginByOtpApi data userid : ', postData, user_id);

    cb && cb(true);
    http
      .post(`generate-otp`, postData, formDataHeader)
      .then(async response => {
        console.log('OtpApi data : ', response.data);
        if (response.data.otp) {
          console.log('LoginByOtpApi data userid : ', response.data.otp);
          // if (userId) {
          //   navigation?.goBack();
          //   dispatch(GetUserDataApi());
          // } else {
          //   navigation?.replace('Login');
          // }
          navigation.navigate('Otp', {data:response.data})
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          cb && cb(false);
        } else {
          cb && cb(false);
          RNToasty.Info({
            title: response.data.message,
            duration: 2,
          });
        }
      })
      .catch(error => {
        cb && cb(false);
        console.log('reset password  error : ', error.response.data);
        RNToasty.Error({
          title: error.response?.data?.message,
          duration: 2,
        });
      });
  };

export const GoogleLoginApi = (postData, cb) => async dispatch => {
  // postData = objectToFormData(postData)
  cb && cb(true);
  http
    .post('customer_google_login', postData)
    .then(async response => {
      // console.log("GoogleLoginApi res : ", response.data.data)
      if (response.data.response) {
        dispatch({
          type: AUTH_TOKEN,
          payload: response.data.data?.google_token,
        });
        // await AsyncStorage.setItem('@USER_TOKEN', response.data?.data?.token);
        await AsyncStorage.setItem(
          '@USER_TOKEN',
          response.data?.data?.google_token,
        );
        await AsyncStorage.setItem(
          '@USER_ID',
          JSON.stringify(response.data?.data?.id),
        );
        dispatch(InitialCall());
        // navigation && navigation.goBack()
        RNToasty.Success({
          title: response.data.message,
          duration: 2,
        });
        cb && cb(false);
      } else {
        RNToasty.Info({
          title: response.data.message,
          duration: 2,
        });
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
      console.log('GoogleLoginApi error : ', error);
      RNToasty.Error({
        title: error.response?.data?.message,
        duration: 2,
      });
    });
};
