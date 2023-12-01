import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Linking, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
// import Icons from '../../component/Icons';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';
import {RNToasty} from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import {
  AuthFunction,
  GoogleLoginApi,
  LoginApi,
} from '../../redux/actions/authActions';
import axios from 'axios';
// import Loading from '../../component/loading';
// import {googleLogin} from '../../services/socialLogin';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import Loader from '../../component/Loader/Loader';
// import messaging from '@react-native-firebase/messaging';

const Login = ({navigation, LoginApi, AuthFunction, GoogleLoginApi}) => {
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [fcm, setFcm] = useState();

  // useEffect(() => {
  //   getDeviceToken();
  // }, []);

  // const getDeviceToken = async () => {
  //   let fcmToken = await messaging().getToken();
  //   console.log('signin fcm : ', fcmToken);
  //   setFcm(fcmToken);
  // };

  const [postData, setPostData] = useState({
    email: null,
    password: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // navigation.navigate('StackNavigator');
    if (postData.email) {
      // LoginApi({...postData, fcm_token: fcm}, navigation, data =>
      //   setLoading(data),
      // );
      // LoginApi(postData, navigation, data =>
      //     setLoading(data),
      //   );
      // const axios = require('axios');
      let data = JSON.stringify({
        email: postData.email,
        password: postData.password,
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://ezyclean.theprojecttest.xyz/api/login',
        headers: {
          'Content-Type': 'application/json',
          
          // Cookie:
          //   'XSRF-TOKEN=eyJpdiI6IjVwdGhBWDlKM0dIeDJTeEErdDd3Ync9PSIsInZhbHVlIjoiR0xTblhOZlhpT0xJRXNib3lGN1JuUWpKbUNDSkVSN21ITTNVdXpTV0didGwzVXhTS2t5WFFOMXhvTytyRHFjV2VvYkdHM3d3OE11b1hENkNEc3NNU0Q0WTRQdVVQLzhRcTc4bmNyaWxYMVNkSW81c1FXM0VqVGpnUDlrTjNPcWciLCJtYWMiOiIwYjc3ODRiZTZkZTc2YjRjNjM4ZjZjZjE5ZjQ2NjcwZGJiM2JiMWNiNDY3NjZlZDg2MzA4ZTRlZDkyODYzZjBkIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InArOFdvNjJQVms2MjdQcTJDRVdwUnc9PSIsInZhbHVlIjoiditPVk5zemNpcjF4ZTJVMWhpN3c5eFpTWUNKUG51VGRORjU0TnpCalBPbDNWaDNwRmJZaW1xRHE0T1ErN3N0V1ZiZ0pGeHFCR2pnOGJUZ1AwR2VVaHRxSW8va1RHQ21OSi9VcWRvVWhYRy80U1FqMFVWbmdFRXlCRm55dTBHZlUiLCJtYWMiOiI5ODIzMWI5MGRhNjZhY2YzYzBjMTc2ZDY4NTQ4ODkwMTIxZTJkZmNkMzgzZjYxODI3MWE3MjdiOWM0OWEwYTMwIiwidGFnIjoiIn0%3D',
        },
        data: data,
      };

      
        axios(config)
        .then(response => {
          console.log('logindata.........',JSON.stringify(response.data));
          navigation.navigate('StackNavigator');
          RNToasty.Success({
            title: 'User login successfully',
            duration: 2,
          }); 
        })
        .catch(error => {
          console.log(error);
          console.log('loginError.........',JSON.stringify(response.data));
        });

      setPostData({
        email: null,
        password: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please Enter Email',
        duration: 2,
      });
    }
  };

  // useEffect(() => {
  //   // GoogleSignin.configure();
  //   GoogleSignin.configure({
  //     androidClientId:
  //       '224749907988-9r04i0gq53ktr9c0qef2dh6b4st3jd6l.apps.googleusercontent.com', //debug
  //     offlineAccess: true,
  //     webClientId:
  //       '224749907988-39nk28ebu1dijftbtjvon9tqbrbtdf41.apps.googleusercontent.com',
  //   });
  // }, []);

  // const signIn = async () => {
  //   // GoogleSignin.configure();
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     await GoogleSignin.signOut();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('user info : ', userInfo);
  //     GoogleLoginApi(userInfo, data => setLoading(data));
  //     // setState({ userInfo });
  //     // return userInfo
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('sign in cancel : ', error);
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('already in progress : ', error);
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('not available : ', error);
  //       // play services not available or outdated
  //     } else {
  //       console.log(' other error : ');
  //       // some other error happened
  //     }
  //   }
  // };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />

      {/* <Loader loading={loading} /> */}

      <View style={globalStyles.justify_between}>
        <View style={globalStyles.center}>
          <View style={globalStyles.title_box}>
            <Text style={globalStyles.title}>Log In Now</Text>
            <Text style={globalStyles.text}>
              Please login to continue using our app
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              marginBottom: SIZES.width * 0.02,
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: COLORS.blueezy,
                fontSize: SIZES.body3,
                fontWeight: 'bold',
              }}>
              Enter Email
            </Text>
          </View>
          <InputWithIcon
            placeholder={'Enter Email'}
            // leftIcon={'smartphone'}
            value={postData.email}
            keyboardType={'email-address'}
            onChangeText={text => handleChange('email', text)}
          />
          <View
            style={{
              alignSelf: 'flex-start',
              marginBottom: SIZES.width * 0.02,
            }}>
            <Text
              style={{
                textAlign: 'left',
                color: COLORS.blueezy,
                fontSize: SIZES.body3,
                fontWeight: 'bold',
              }}>
              Enter Password
            </Text>
          </View>
          <InputWithIcon1
            placeholder={'Password'}
            // leftIcon={'lock'}
            rightIcon={secure ? 'eye-off' : 'eye'}
            onPress={() => setSecure(!secure)}
            secureTextEntry={secure}
            value={postData.password}
            onChangeText={text => handleChange('password', text)}
          />
          {/* <View style={styles.box}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Otp')}
              style={styles.forget_btn}>
              <Text style={styles.forget_text}>Forgot Your Password?</Text>
            </TouchableOpacity>
          </View> */}
          <View style={{...globalStyles.row1, ...styles.mv2}}>
            <TouchableOpacity
            // onPress={resendOtp}
            >
              <Text
                style={styles.btn_text}
                onPress={() => navigation.navigate('Logbyotp')}>
                Login by OTP
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.time}
              onPress={() => navigation.navigate('Register')}>
              Register
            </Text>
          </View>

          <Button1
            // disabled={loading}
            // loading={loading}
            onPress={handleSubmit}
            style={{marginTop: SIZES.height * 0.06}}>
            Login
          </Button1>

          {/* <View style={globalStyles.center}>
            <View style={styles.or_box}>
              <Text style={styles.or}>Or</Text>
            </View>
          </View> */}

          {/* <View style={styles.btnRow}>
            <TouchableOpacity
              style={styles.socailBtn}
              // onPress={signIn}
              // onPress={() => GoogleLoginApi(googleLogin((data) => setLoading(data)), (data) => setLoading(data))}
              onPress={() =>
                googleLogin(GoogleLoginApi, data => setLoading(data))
              }>
              <Icons name={'google'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socailBtn}>
              <Icons name={'facebook'} size={25} color={COLORS.blue} />
            </TouchableOpacity>
          </View> */}
        </View>
        {/* 
        <View style={globalStyles.row}>
          <Text style={globalStyles.text}>Don’t have an account? </Text>
          <TouchableOpacity
            style={styles.signup_btn}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signup_text}>Sign up</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  LoginApi,
  AuthFunction,
  // GoogleLoginApi,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
