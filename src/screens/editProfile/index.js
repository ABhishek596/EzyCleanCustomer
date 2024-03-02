import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images } from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import { connect } from 'react-redux';
import { GetUserDataApi } from '../../redux/actions/authActions';
import InputWithIcon from '../../component/input/InputWithIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/button/Button1';
import Loading from '../../component/loading';
// import { http2 } from '../../services/api';
import ImageCropPicker from 'react-native-image-crop-picker';
import { RNToasty } from 'react-native-toasty';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const EditProfile = ({
  // UpdateUserApi,
  navigation,
  userData,
  loading,
}) => {
  const userId = userData.id;
  const branch = userData.branch_id;
  // console.log("userDataedtedtedtedt.........", userId,  userData.branch_id );
  const [secure, setSecure] = useState(true);
  const [dob, setDob] = useState(true);
  const [gender, setGender] = useState(true);
  const [city, setCity] = useState(true);
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  // const userData = route.params && route.params.userData
  const [profileImage, setProfileImage] = useState(images.profile1);
  // const customerData = userData?.customer_details
  // console.log("userData", userData)
  // console.log("profile image : ", userData && userData.image)

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  console.log("userData date", date);

  // Create a Date object from the input string
  const inputDate = new Date(date);

  // Format the date using toLocaleDateString with options
  const formattedDate = inputDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');

  console.log(formattedDate);

  const [isTokenSet, setIsTokenSet] = useState(false);
  const [token, setToken] = useState();

  // console.log('ContactUs token-------->>', token);
  // console.log('addrss userId-------->>', userId);

  useEffect(() => {
    const getToken = async () => {
      if (!isTokenSet) {
        const tokenFromStorage = await AsyncStorage.getItem('@USER_TOKEN');
        setToken(tokenFromStorage);
        setIsTokenSet(true);
      }
    };

    getToken();
  }, [isTokenSet]);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    // console.log("currentDate---", currentDate);

    const inputDateone = new Date(currentDate);
    const newdd = inputDateone.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '-');
    console.log("newdd---", newdd);
    if (newdd) {
      handleChange('date_of_birth', newdd);
    }
    // Handle any additional logic based on the selected date

  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };



  // const hideDatePickerModal = () => {
  //   setShowDatePicker(false);
  // };

  const [postData, setPostData] = useState({
    email: null,
    password: null,
    phone_number: null,
    customer_name: null,
    // branch_id:7,
    // first_name: null,
    // last_name: null,
    date_of_birth: null,
    gender: null,
    city: null,
    address: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const ImagePick = () => {
    ImageCropPicker.openPicker({
      width: SIZES.width * 0.3,
      height: SIZES.height * 0.15,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log('editProfileImage', image);
      setProfileImage({ uri: image.path });
      // handleChange('profile_image', {
      //   uri: image.path,
      //   name: image.filename || Date.now() + '-' + image.path.slice(-10),
      //   type: image.mime,
      // });
      handleChange('profile_image', image.data);
    });
  };
  // postData.profile_image &&
  //     postData.email &&
  //     postData.password &&
  //     postData.customer_name &&
  //     // postData.last_name &&
  //     postData.date_of_birth &&
  //     postData.gender &&
  //     postData.city &&
  //     postData.address
  const handleSubmit = () => {

    let data = JSON.stringify({
      "id": userId,
      "email": postData.email,
      "password": postData.password,
      "phone_number": postData.phone_number,
      // "first_name": "John",
      // "last_name": "Doe",
      "date_of_birth": postData.date_of_birth,
      "gender": postData.gender,
      "customer_name": postData.customer_name,
      "branch_id": branch,
      "city": postData.city,
      "address": postData.address,
      "profile_image": postData.profile_image
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ezyclean.theprojectxyz.xyz/api/customer/update-profile',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        // console.log('update customer received',JSON.stringify(response.data));
        RNToasty.Success({
          title: response.data.message,
          duration: 2,
        });
        navigation?.goBack();
      })
      .catch((error) => {
        console.log(error);
      });


    // if (
    //   postData.profile_image &&
    //   postData.email &&
    //   postData.password &&
    //   postData.customer_name &&
    //   // postData.last_name &&
    //   postData.date_of_birth &&
    //   postData.gender &&
    //   postData.city &&
    //   postData.address
    // ) {
    //   // SignUpApi(postData, navigation)
    //   UpdateUserApi(postData, navigation, data => setLoadingIndicator(data));
    //   Alert.alert('profile updated');
    // } else {
    //   RNToasty.Error({
    //     title: 'Please fill all fields',
    //     duration: 2,
    //   });
    // }
  };

  useEffect(() => {
    GetUserDataApi();
  }, []);

  useEffect(() => {
    if (userData) {
      if (userData.profile_picture) {
        setProfileImage({ uri: userData.profile_picture });
      }
      setPostData({
        // last_name: userData.last_name,
        // first_name: userData.first_name,        
        phone_number: userData.phone_number,
        // password: userData.password,
        // profile_image: {
        //   uri: userData.profile_image,
        //   name: 'profile_image.jpg',
        //   type: 'image/jpg',
        // },
      });
    }
  }, [userData]);

  console.log('uodate customer profile : ', postData);
  console.log('laldsfjao g; ', loadingIndicator);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={globalStyles.container}>
            <StatusBar
              backgroundColor="transparent"
              translucent={true}
              barStyle="light-content"
            />

            {/* header */}
            <ImageBackground
              source={images.bg}
              style={styles.header_bg}
              resizeMode='stretch'>
              <View style={styles.header_row}>
                <TouchableOpacity
                  style={styles.back_btn}
                  onPress={() => navigation.goBack()}>
                  <Icons name={'back'} size={22} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.page_title}>Edit Profile</Text>
              </View>
            </ImageBackground>

            <TouchableOpacity style={styles.profile_box} onPress={ImagePick}>
              <View style={styles.image_box}>
                {/* <Image source={postData?.profile_picture?.uri ?{ uri: postData.profile_picture?.uri} : images.profile1} style={styles.profile}
                                    //  resizeMode='contain'
                                    resizeMode='stretch'
                                /> */}
                <Image
                  source={profileImage}
                  style={styles.profile}
                  //  resizeMode='contain'
                  resizeMode="stretch"
                />
              </View>
              <TouchableOpacity style={styles.edit_btn} onPress={ImagePick}>
                <Icons name={'edit'} size={15} color={COLORS.secondary} />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={{ height: SIZES.height * 0.05 }} />
            <View style={{ flex: 1 }}>
              {/* button container */}
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps={'handled'}
                showsVerticalScrollIndicator={false}
              // style={{top: SIZES.height * -0.08, flex: 1}}
              >
                <View style={styles.box}>
                  <Text style={styles.title}>Basic Details</Text>

                  <InputWithIcon
                    placeholder={'Enter your Name'}
                    leftIcon={'user'}
                    label={'Name'}
                    value={postData.first_name}
                    onChangeText={text => handleChange('customer_name', text)}
                  />
                  {/* <InputWithIcon
                    placeholder={'Enter your Last Name'}
                    leftIcon={'user'}
                    label={'Last Name'}
                    value={postData.last_name}
                    onChangeText={text => handleChange('customer_name', text)}
                  /> */}

                  <InputWithIcon
                    placeholder={'Email Address'}
                    leftIcon={'email'}
                    label={'Email Address'}
                    // value={userData?.customer_details?.email}
                    value={postData.email}
                    // editable={false}
                    onChangeText={text => handleChange('email', text)}
                  />
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginBottom: SIZES.width * 0.02,
                      marginLeft: SIZES.width * 0.05,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        color: COLORS.blueezy,
                        fontSize: SIZES.body3,
                        // fontWeight: 'bold',
                      }}>
                      Email Password
                    </Text>
                  </View>
                  <InputWithIcon1
                    placeholder={'Email Password'}
                    // leftIcon={'lock'}
                    rightIcon={secure ? 'eye-off' : 'eye'}
                    onPress={() => setSecure(!secure)}
                    secureTextEntry={secure}
                    value={postData.password}
                    onChangeText={text => handleChange('password', text)}
                  />

                  <InputWithIcon
                    placeholder={'Phone Number'}
                    leftIcon={'call'}
                    label={'Phone Number'}
                    keyboardType={'phone-pad'}
                    maxLength={10}
                    value={postData.phone_number}
                    onChangeText={text => handleChange('phone_number', text)}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: SIZES.width * 0.9,
                      alignSelf: 'center',
                    }}>
                    <View>
                      <View
                        style={{
                          alignSelf: 'flex-start',
                          marginBottom: SIZES.width * 0.02,
                          // marginLeft: SIZES.width * .05,
                        }}>
                        <Text
                          style={{
                            textAlign: 'left',
                            color: COLORS.blueezy,
                            fontSize: SIZES.body3,
                          }}>
                          Date of Birth
                        </Text>
                      </View>
                      {/* <InputWithIcon1
                        placeholder={'D.O.B.'}
                        // leftIcon={'lock'}
                        rightIcon={dob ? 'down-outline' : 'up-outline'}
                        onPress={() => setDob(!dob)}
                        secureTextEntry={false}
                        value={postData.date_of_birth}
                        onChangeText={text => handleChange('password', text)}
                        inputStyle={{
                          width: SIZES.width * 0.4,
                          alignSelf: 'flex-start',
                        }}
                        inputTextStyle={{ width: SIZES.width * 0.29 }}
                        style={{ marginLeft: SIZES.width * 0.02 }}
                        iconColor={COLORS.white}
                      /> */}
                      <TouchableWithoutFeedback onPress={showDatePickerModal} >
                        <View style={{
                          width: SIZES.width * 0.43,
                          borderWidth: 1.2,
                          // borderRadius: 8,
                          borderRadius: SIZES.width * .024,
                          borderColor: COLORS.borderColor,
                          backgroundColor: COLORS.white,
                          // alignItems: 'center',
                          height: SIZES.width * 0.13,
                          justifyContent: 'center'
                          // marginBottom: SIZES.height * .03,
                        }}>
                          {/* Your UI for displaying the selected date */}
                          <Text style={{ marginLeft: 10 }}>{formattedDate}</Text>
                        </View>
                      </TouchableWithoutFeedback>

                      {showDatePicker && (
                        <DateTimePicker
                          value={date}
                          mode="date"
                          display="default"
                          onChange={handleDateChange}
                        />
                      )}
                    </View>
                    <View>
                      <View
                        style={{
                          alignSelf: 'flex-start',
                          marginBottom: SIZES.width * 0.02,
                          // marginLeft: SIZES.width * .05,
                        }}>
                        <Text
                          style={{
                            textAlign: 'left',
                            color: COLORS.blueezy,
                            fontSize: SIZES.body3,
                          }}>
                          Gender
                        </Text>
                      </View>
                      <InputWithIcon1
                        placeholder={'Gender'}
                        // leftIcon={'lock'}
                        rightIcon={gender ? 'down-outline' : 'up-outline'}
                        onPress={() => setGender(!gender)}
                        secureTextEntry={false}
                        value={postData.gender}
                        onChangeText={text => handleChange('gender', text)}
                        inputStyle={{
                          width: SIZES.width * 0.4,
                          alignSelf: 'flex-start',
                        }}
                        inputTextStyle={{ width: SIZES.width * 0.29 }}
                        style={{ marginLeft: SIZES.width * 0.02 }}
                        iconColor={COLORS.white}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      marginBottom: SIZES.width * 0.02,
                      marginLeft: SIZES.width * 0.05,
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        color: COLORS.blueezy,
                        fontSize: SIZES.body3,
                      }}>
                      Select City
                    </Text>
                  </View>
                  <InputWithIcon1
                    placeholder={'Select City'}
                    // leftIcon={'lock'}
                    rightIcon={city ? 'down-outline' : 'up-outline'}
                    onPress={() => setCity(!city)}
                    secureTextEntry={false}
                    value={postData.city}
                    onChangeText={text => handleChange('city', text)}
                    iconColor={COLORS.white}
                  />
                  <InputWithIcon
                    placeholder={'Type Address...'}
                    leftIcon={'location'}
                    label={'Address'}
                    value={postData.address}
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={text => handleChange('address', text)}
                  />
                  <Button1
                    disabled={loadingIndicator}
                    loading={loadingIndicator}
                    onPress={handleSubmit}
                    style={{
                      borderRadius: SIZES.width * 0.06,
                      marginTop: SIZES.height * 0.03,
                      marginBottom: SIZES.height * 0.02,
                    }}>
                    Update
                  </Button1>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  // UpdateUserApi,
  GetUserDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
