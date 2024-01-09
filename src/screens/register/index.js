import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Button1 from '../../component/button/Button1';
// import Icons from '../../component/Icons';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import {COLORS, SIZES, FONTS} from '../../constants';
import styles from './styles';
import {RNToasty} from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import {SignUpApi} from '../../redux/actions/authActions';
import {
  AuthFunction,
  GoogleLoginApi,
  LoginApi,
} from '../../redux/actions/authActions';
// import Loading from '../../component/loading';
// import {googleLogin} from '../../services/socialLogin';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import Loader from '../../component/Loader/Loader';
// import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import Icons from '../../component/Icons';
const Register = ({navigation, SignUpApi, AuthFunction, GoogleLoginApi}) => {
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [branch, setBranch] = useState(true);
  const [fcm, setFcm] = useState();

  const branches = ['Vijay Nagar', 'LIG', 'Bhawarkuan','Scheme No.71'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGenderSelect = (name, branch) => {
    setSelectedBranch(branch);
    setIsDropdownOpen(false);
    setPostData({
      ...postData,
      [name]: branch,
    });
  };

  // useEffect(() => {
  //   getDeviceToken();
  // }, []);

  // const getDeviceToken = async () => {
  //   let fcmToken = await messaging().getToken();
  //   console.log('signin fcm : ', fcmToken);
  //   setFcm(fcmToken);
  // };

  // const [postData, setPostData] = useState({
  //   phone_number: null,
  // });
  const [postData, setPostData] = useState({
    name: null,
    phone_number: null,
    email: null,
    password: null,
    branch: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  // const handleSubmit = () => {
  //   navigation.navigate('Login');
  //   // if (postData.phone_number) {
  //   //   LoginApi({...postData, fcm_token: fcm}, navigation, data =>
  //   //     setLoading(data),
  //   //   );
  //   //   setPostData({
  //   //     phone_number: null,
  //   //   });
  //   // } else {
  //   //   RNToasty.Error({
  //   //     title: 'Please Enter Mobile Number.',
  //   //     duration: 2,
  //   //   });
  //   // }
  // };

  // const handleSubmit = () => {
  //   console.log('signup postdata ; ', postData);
  //   // console.log("phone slice : ", postData.phone_with_code?.slice(-10))

  //   if (
  //     postData.name &&
  //     postData.email &&
  //     postData.password &&
  //     postData.branch &&
  //     postData.phone_number
  //   ) {
  //     // SignUpApi(postData, navigation)
  //     if (postData.password) {
  //       // SignUpApi(postData, navigation)
  //       // SignUpApi({...postData, fcm_token: fcm}, navigation, data =>
  //       //   setLoading(data),
  //       // );
  //       SignUpApi({...postData}, navigation, data =>
  //         setLoading(data),
  //       );

  //       setPostData({
  //         name: null,
  //         phone_number: null,
  //         email: null,
  //         password: null,
  //         branch: null,
  //       });
  //     } else {
  //       RNToasty.Error({
  //         title: 'Password and confirm password does not match',
  //         duration: 2,
  //       });
  //     }
  //   } else {
  //    RNToasty.Error({
  //       title: 'Please fill all fields',
  //       duration: 2,
  //     });
  //   }
  // };

  const handleSubmit = () => {
    console.log('signup postdata ; ', postData);
    // console.log("phone slice : ", postData.phone_with_code?.slice(-10))

    if (
      postData.name &&
      postData.email &&
      postData.password &&
      postData.branch &&
      postData.phone_number
    ) {
      // SignUpApi(postData, navigation)
      if (postData.password) {
        SignUpApi(postData, navigation, data => setLoading(data));
        setPostData({
          name: null,
          phone_number: null,
          email: null,
          password: null,
          branch: null,
        });
      } else {
        RNToasty.Error({
          title: 'Password and confirm password does not match',
          duration: 2,
        });
        console.log('Password and confirm password does not match ');
      }
    } else {
      RNToasty.Error({
        title: 'Please fill all fields',
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
            <Text style={globalStyles.title}>Register</Text>
          </View>
          <ScrollView style={{flex: 1}}>
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
                  fontFamily: FONTS.regular,
                }}>
                Enter Name
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Your Name'}
              // leftIcon={'smartphone'}
              value={postData.name}
              keyboardType={'default'}
              onChangeText={text => handleChange('name', text)}
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
                Enter Email
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Your Email'}
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
              placeholder={'Set Password'}
              // leftIcon={'lock'}
              rightIcon={secure ? 'eye-off' : 'eye'}
              onPress={() => setSecure(!secure)}
              secureTextEntry={secure}
              value={postData.password}
              onChangeText={text => handleChange('password', text)}
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
                Moibile Number
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Enter Number'}
              // leftIcon={'smartphone'}
              value={postData.phone_number}
              keyboardType={'phone-pad'}
              onChangeText={text => handleChange('phone_number', text)}
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
                Enter Location
              </Text>
            </View>
            {/* <InputWithIcon1
              placeholder={'Enter Location'}
              // leftIcon={'lock'}
              rightIcon={isDropdownOpen ? 'up-outline' : 'down-outline'}
              onPress={toggleDropdown}
              // rightIcon={branch ? 'down-outline' : 'up-outline'}
              // onPress={() => setBranch(!branch)}
              secureTextEntry={false}
              // value={selectedBranch}
              value={postData.branch}
              // onChangeText={text => handleChange('branch', text)}
            /> */}
            <TouchableWithoutFeedback onPress={toggleDropdown} >
              <View style={styles.button}>
                <Text style={{color:COLORS.secondary}}>{postData.branch?postData.branch:'Enter Location'}</Text>
                <Icons
                    name={isDropdownOpen ? 'down-outline' : 'up-outline'}
                    size={20}
                    // color={focusColor == COLORS.secondary ? COLORS.secondary : COLORS.placeholderColor}
                    color={COLORS.gray30}
                />
              </View>
            </TouchableWithoutFeedback>
            {/* <View style={styles.box}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Otp')}
              style={styles.forget_btn}>
              <Text style={styles.forget_text}>Forgot Your Password?</Text>
            </TouchableOpacity>
          </View> */}
            {isDropdownOpen && (
              <View style={styles.dropdownContainer}>
                <FlatList
                  data={branches}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => handleGenderSelect('branch', item)}>
                      <View style={styles.dropdownItem}>
                        <Text style={{color:COLORS.black1}}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            <Button1
              // disabled={loading}
              // loading={loading}
              onPress={handleSubmit}
              style={{marginTop: 20}}>
              Submit
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
          </ScrollView>
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

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {
//   LoginApi,
//   AuthFunction,
//   GoogleLoginApi,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  SignUpApi,
};
// export default Register;
export default connect(mapStateToProps, mapDispatchToProps)(Register);
