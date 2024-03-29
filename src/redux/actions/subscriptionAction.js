import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../services/api';
import {
  BUY_SUBSCRIPTION,
  LOADING,
  SUBSCRIPTION_DETAILS,
  SUBSCRIPTION_PACKAGE_DETAILS,
  SUBSCRIPTION_PACKAGE_LIST,
} from '../types';
import {RNToasty} from 'react-native-toasty';
import objectToFormData from '../../services/objectToFormData';
import {formDataHeader} from '../../services/formDataHeader';

export const GetAllSubsPackages = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');

  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(`get_subscription_packages?customer_id=${userId}`)
    .then(async response => {
      if (response.data?.status === 1) {
        dispatch({
          type: SUBSCRIPTION_PACKAGE_LIST,
          payload: response.data.result.subscriptions,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetActiveSubscription = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');

  // console.log(''`subscription/${userId}`);
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`customer/subscription/${userId}`)
    .then(async response => {
      console.log('get_subscription_details', response?.data?.result);
      if (response?.data?.status == 1) {
        dispatch({
          type: SUBSCRIPTION_DETAILS,
          payload: response?.data?.result,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};
//-------------------------------------   GetSubsPackagesDetails  copy 1  ---------------------------------------------
// export const GetSubsPackagesDetails = id => async dispatch => {
//   dispatch({
//     type: LOADING,
//     payload: true,
//   });
//   http
//     .post(`get_subscription_package_by_id?subscription_id=${id}`)
//     .then(async response => {
//       if (response.data?.status === 1) {
//         dispatch({
//           type: SUBSCRIPTION_PACKAGE_DETAILS,
//           payload: response.data.result,
//         });
//         dispatch({
//           type: LOADING,
//           payload: false,
//         });
//       } else {
//         dispatch({
//           type: LOADING,
//           payload: false,
//         });
//       }
//     })
//     .catch(error => {
//       dispatch({
//         type: LOADING,
//         payload: false,
//       });
//     });
// };

//-------------------------------------   GetSubsPackagesDetails  copy 2  ---------------------------------------------

// export const GetSubsPackagesDetails = id => async dispatch => {
//   dispatch({
//     type: LOADING,
//     payload: true,
//   });
//   http
//     .get(`admin-plans`)
//     .then(async response => {
//       console.log('admin-plans SUBSCRIPTION',response.data?.data);
//       if (response.data?.data) {
//         dispatch({
//           type: SUBSCRIPTION_PACKAGE_DETAILS,
//           payload: response.data.data,
//         });
//         dispatch({
//           type: LOADING,
//           payload: false,
//         });
//       } else {
//         dispatch({
//           type: LOADING,
//           payload: false,
//         });
//       }
//     })
//     .catch(error => {
//       dispatch({
//         type: LOADING,
//         payload: false,
//       });
//     });
// };

//-------------------------------------   GetSubsPackagesDetails  copy 3  ---------------------------------------------


export const GetSubsPackagesDetails = id => async dispatch => {
  try {
    dispatch({ type: LOADING, payload: true });

    const response = await http.get('admin-plans');

    console.log('admin-plans SUBSCRIPTION', response.data?.data);

    if (response.data?.data) {
      dispatch({
        type: SUBSCRIPTION_PACKAGE_DETAILS,
        payload: response.data.data,
      });
    }

    dispatch({ type: LOADING, payload: false });
  } catch (error) {
    console.error('Error fetching subscription details:', error);

    dispatch({ type: LOADING, payload: false });
    // Optionally, dispatch an action to handle the error (e.g., show an error message).
    // dispatch({ type: ERROR, payload: error.message });
  }
};


export const BuySubscription = (postData) => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  postData = await objectToFormData(postData);
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(
      `customer/buy_subscription`,postData,formDataHeader
    )
    .then(async response => {
      console.log('BuySubscription'.response.data);
      if (response.data?.status == 200) {
        dispatch({
          type: BUY_SUBSCRIPTION,
          payload: {success: true},
        });
        RNToasty.Success({
          title: 'Your subscription was successfully purchased.',
          duration: 2,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};
