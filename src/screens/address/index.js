import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import {
  DeleteAddressApi,
  GetAllAddressApi,
} from '../../redux/actions/addressAction';
import styles from './styles';
import Loading from '../../component/loading';
import Button1 from '../../component/button/Button1';
import Icons from '../../component/Icons';
import {RadioButton} from 'react-native-paper';
import InputWithIcon from '../../component/input/InputWithIcon';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';

const Address = ({
  navigation,
  GetAllAddressApi,
  DeleteAddressApi,
  // CreateOrder,
  address,
  loading,
  route,
}) => {
  // const [userAddress, setUserAddress] = useState(0);
  // const [currentCoords, setCurrentCoords] = useState(null);
  // const [gettingCords, setGettingCords] = useState(false);
  // const [locationAllowed, setLocationAllowed] = useState(false);
  // console.log('address-=-==========--addressScreen', address);
  const [isTokenSet, setIsTokenSet] = useState(false);
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  console.log('ContactUs token-------->>', token);

  useEffect(() => {
    const getToken = async () => {
      if (!isTokenSet) {
        const tokenFromStorage = await AsyncStorage.getItem('@USER_TOKEN');
        const userIdFromStorage = await AsyncStorage.getItem('@USER_ID');
        setToken(tokenFromStorage);
        setUserId(userIdFromStorage);
        setIsTokenSet(true);
      }
    };

    getToken();
  }, [isTokenSet]);

  const [secure, setSecure] = useState(true);

  const [postData, setPostData] = useState({
    // name: null,
    phone_number: null,
    pincode: null,
    address: null,
    locality: null,
    city: null,
    state: null,
    country: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // navigation.navigate('Login');
    // if (postData.phone_number) {
    //   LoginApi({...postData, fcm_token: fcm}, navigation, data =>
    //     setLoading(data),
    //   );
    //   setPostData({
    //     phone_number: null,
    //   });
    // } else {
    //   RNToasty.Error({
    //     title: 'Please Enter Mobile Number.',
    //     duration: 2,
    //   });
    // }
  };

  const onSubmit = () => {
    if (postData.phone_number) {
      // LoginApi({...postData, fcm_token: fcm}, navigation, data =>
      //   setLoading(data),
      // );
      let data = JSON.stringify({
        userid: userId,
        pincode: postData.pincode,
        address: postData.address,
        locality: postData.locality,
        city: postData.city,
        state: postData.state,
        country: postData.country,
        phone_number: postData.phone_number,
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://ezyclean.theprojecttest.xyz/api/add_address',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      axios
        .request(config)
        .then(response => {
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          navigation.navigate('Payment');
          console.log('adddressdatapost', JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });
      setPostData({
        phone_number: null,
      });
    } else {
      RNToasty.Error({
        title: 'Please Enter Mobile Number.',
        duration: 2,
      });
    }
  };

  // const valuestatus = route.params?.valuestatus;
  // console.log('valuestatus............', valuestatus);

  // useEffect(() => {
  //   permission();
  //   GetAllAddressApi();
  // }, []);

  // useEffect(() => {
  //   getGPSLocation();
  // }, [locationAllowed]);

  // const postData = {
  //   // ...route.params.data,
  //   // address_id: userAddress,
  // };

  // console.log('postData--on--addressScreen', postData);
  // const handlePress = ()=>{
  //   // CreateOrder(
  //   //   {
  //   //     ...postData,
  //   //     // payment_mode: id,
  //   //   },
  //   //   navigation,
  //   // );
  //   //Payment
  //   if (valuestatus === true) {
  //     navigation.navigate('AppointmentCompleted', { data: postData });
  //   } else if (valuestatus === false) {
  //     navigation.navigate('Payment', { data: postData });
  //   }
  // }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <View style={{height: SIZES.height * 0.9, justifyContent: 'center'}}>
          <Loading />
        </View>
      ) : (
        <View
          style={[
            styles.address_box,
            address?.length > 0 && {justifyContent: 'space-between'},
            address?.length <= 3 && {height: SIZES.height * 0.92},
          ]}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View
              style={{
                alignSelf: 'flex-start',
                marginBottom: SIZES.width * 0.05,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  color: COLORS.blueezy,
                  fontSize: SIZES.body3,
                  fontWeight: 'bold',
                }}>
                Contact Details
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Name'}
              // leftIcon={'smartphone'}
              value={postData.name}
              keyboardType={'default'}
              onChangeText={text => handleChange('name', text)}
            />

            <InputWithIcon
              placeholder={'Phone Number'}
              // leftIcon={'smartphone'}
              value={postData.phone_number}
              keyboardType={'numeric'}
              onChangeText={text => handleChange('phone_number', text)}
            />
            <View
              style={{
                alignSelf: 'flex-start',
                marginBottom: SIZES.width * 0.05,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  color: COLORS.blueezy,
                  fontSize: SIZES.body3,
                  fontWeight: 'bold',
                }}>
                Address
              </Text>
            </View>
            <InputWithIcon
              placeholder={'Address'}
              // leftIcon={'smartphone'}
              value={postData.address}
              keyboardType={'default'}
              onChangeText={text => handleChange('address', text)}
            />
            <InputWithIcon
              placeholder={'Pin Code'}
              // leftIcon={'smartphone'}
              value={postData.pincode}
              keyboardType={'numeric'}
              onChangeText={text => handleChange('pincode', text)}
            />
            <InputWithIcon
              placeholder={'Locality'}
              // leftIcon={'smartphone'}
              value={postData.locality}
              keyboardType={'default'}
              onChangeText={text => handleChange('locality', text)}
            />

            <InputWithIcon
              placeholder={'Country'}
              // leftIcon={'smartphone'}
              value={postData.country}
              // keyboardType={'numeric'}
              onChangeText={text => handleChange('country', text)}
            />

            <InputWithIcon
              placeholder={'City'}
              // leftIcon={'smartphone'}
              value={postData.city}
              keyboardType={'default'}
              onChangeText={text => handleChange('city', text)}
            />

            <InputWithIcon
              placeholder={'State'}
              // leftIcon={'smartphone'}
              value={postData.state}
              // keyboardType={'numeric'}
              onChangeText={text => handleChange('state', text)}
            />

            {/* <InputWithIcon1
              placeholder={'City'}
              // leftIcon={'lock'}
              rightIcon={secure ? 'down-outline' : 'up-outline'}
              onPress={() => setSecure(!secure)}
              // secureTextEntry={secure}
              value={postData.city}
              onChangeText={text => handleChange('city', text)}
            />
            <InputWithIcon1
              placeholder={'State'}
              // leftIcon={'lock'}
              rightIcon={secure ? 'down-outline' : 'up-outline'}
              onPress={() => setSecure(!secure)}
              // secureTextEntry={secure}
              value={postData.state}
              onChangeText={text => handleChange('state', text)}
            /> */}

            {/* <View style={styles.box}>
<TouchableOpacity
  onPress={() => navigation.navigate('Otp')}
  style={styles.forget_btn}>
  <Text style={styles.forget_text}>Forgot Your Password?</Text>
</TouchableOpacity>
</View> */}

            {/* <Button1
  // disabled={loading}
  // loading={loading}
  onPress={handleSubmit}
  style={{ marginTop: 20 }}
>
  Submit
</Button1> */}

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
          {/* {userAddress && address && address[0] ? (
            <Button1
              style={styles.btn}                  //Payment
              onPress={handlePress}>
              Place Booking
            </Button1>
          ) : (
            <View>
              <Button1
                style={{
                  ...styles.btn,
                  marginBottom: SIZES.height * 0.01,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                }}
                backgroundColor={COLORS.white}
                textColor={COLORS.primary}
                onPress={() => {
                  if (locationAllowed) {
                    navigation.navigate('AddCurrentAddress', {
                      currentCoords: currentCoords,
                      addressLngLat: currentCoords,
                      firstTime: false,
                    });
                  } else {
                    Alert.alert(
                      'Location Permission',
                      'Please allow location permission first.',
                    );
                  }
                }}>
                Use my current location
              </Button1>
              <Button1
                style={styles.btn}
                onPress={() => {
                  if (locationAllowed) {
                    navigation.navigate('AddNewAddress', {
                      currentCoords: currentCoords,
                    });
                  } else {
                    Alert.alert(
                      'Location Permission',
                      'Please allow location permission first.',
                    );
                  }
                }}>
                Add New Address
              </Button1>
            </View>
          )} */}
          <Button1
            style={styles.btn}
            // onPress={() => {
            //   navigation.navigate('Payment');
            //   // if (locationAllowed) {
            //   //   navigation.navigate('AddNewAddress', {
            //   //     currentCoords: currentCoords,
            //   //   });
            //   // } else {
            //   //   Alert.alert(
            //   //     'Location Permission',
            //   //     'Please allow location permission first.',
            //   //   );
            //   // }
            // }}
            onPress={onSubmit}>
            Save
          </Button1>
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  loading: state.address.loading,
  address: state.address.address,
});

const mapDispatchToProps = {
  GetAllAddressApi,
  DeleteAddressApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
// export default Address;
