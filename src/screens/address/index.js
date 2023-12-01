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
  const [secure, setSecure] = useState(true);
  const handleSubmit = () => {
    navigation.navigate('Login');
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
  // const valuestatus = route.params?.valuestatus;
  // console.log('valuestatus............', valuestatus);

  // useEffect(() => {
  //   permission();
  //   GetAllAddressApi();
  // }, []);

  // useEffect(() => {
  //   getGPSLocation();
  // }, [locationAllowed]);

  const postData = {
    // ...route.params.data,
    // address_id: userAddress,
  };
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
              value={postData.phone_number}
              keyboardType={'default'}
              onChangeText={text => handleChange('phone_number', text)}
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
              value={postData.phone_number}
              keyboardType={'default'}
              onChangeText={text => handleChange('phone_number', text)}
            />
            <InputWithIcon
              placeholder={'Pin Code'}
              // leftIcon={'smartphone'}
              value={postData.phone_number}
              keyboardType={'numeric'}
              onChangeText={text => handleChange('phone_number', text)}
            />
            <InputWithIcon
              placeholder={'Locality'}
              // leftIcon={'smartphone'}
              value={postData.phone_number}
              keyboardType={'default'}
              onChangeText={text => handleChange('phone_number', text)}
            />

            <InputWithIcon
              placeholder={'Country'}
              // leftIcon={'smartphone'}
              value={postData.phone_number}
              keyboardType={'numeric'}
              onChangeText={text => handleChange('phone_number', text)}
            />

            <InputWithIcon1
              placeholder={'City'}
              // leftIcon={'lock'}
              rightIcon={secure ? 'down-outline' : 'up-outline'}
              onPress={() => setSecure(!secure)}
              secureTextEntry={secure}
              value={postData.password}
              onChangeText={text => handleChange('password', text)}
            />
            <InputWithIcon1
              placeholder={'State'}
              // leftIcon={'lock'}
              rightIcon={secure ? 'down-outline' : 'up-outline'}
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
            onPress={() => {
              navigation.navigate('Payment');
              // if (locationAllowed) {
              //   navigation.navigate('AddNewAddress', {
              //     currentCoords: currentCoords,
              //   });
              // } else {
              //   Alert.alert(
              //     'Location Permission',
              //     'Please allow location permission first.',
              //   );
              // }
            }}>
            Save
          </Button1>
        </View>
      )}
    </SafeAreaView>
  );
};

// const mapStateToProps = state => ({
//   loading: state.address.loading,
//   address: state.address.address,
// });

// const mapDispatchToProps = {
//   GetAllAddressApi,
//   DeleteAddressApi,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Address);
export default Address;
