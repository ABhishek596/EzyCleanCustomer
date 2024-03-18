// import React, {useState} from 'react';
// import {useEffect} from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   PermissionsAndroid,
//   Alert,
// } from 'react-native';
// import {connect} from 'react-redux';
// import {COLORS, SIZES} from '../../constants';
// import {
//   DeleteAddressApi,
//   GetAllAddressApi,
// } from '../../redux/actions/addressAction';
// import styles from './styles';
// import Loading from '../../component/loading';
// import Button1 from '../../component/button/Button1';
// import Icons from '../../component/Icons';
// import {RadioButton} from 'react-native-paper';
// import InputWithIcon from '../../component/input/InputWithIcon';
// import InputWithIcon1 from '../../component/input/InputWithIcon1';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {RNToasty} from 'react-native-toasty';
// import Geolocation from 'react-native-geolocation-service';


// const Address = ({
//   navigation,
//   GetAllAddressApi,
//   DeleteAddressApi,
//   // CreateOrder,
//   address,
//   loading,
//   route,
// }) => {
//   // const [userAddress, setUserAddress] = useState(0);
//   const [currentCoords, setCurrentCoords] = useState(null);
//   const [gettingCords, setGettingCords] = useState(false);
//   const [locationAllowed, setLocationAllowed] = useState(false);
//   // console.log('address-=-==========--addressScreen', address);
//   const [isTokenSet, setIsTokenSet] = useState(false);
//   const [token, setToken] = useState();
//   const [userId, setUserId] = useState();
//   const productdataall = route?.params?.data;
//   // console.log('ContactUs token-------->>', token);
//   // console.log('addrss userId-------->>', userId);
//   console.log('addrss from productdataall-------->>', productdataall);
//   useEffect(() => {
//     const getToken = async () => {
//       if (!isTokenSet) {
//         const tokenFromStorage = await AsyncStorage.getItem('@USER_TOKEN');
//         const userIdFromStorage = await AsyncStorage.getItem('@USER_ID');
//         setToken(tokenFromStorage);
//         setUserId(userIdFromStorage);
//         setIsTokenSet(true);
//       }
//     };

//     getToken();
//   }, [isTokenSet]);

//   const [secure, setSecure] = useState(true);

//   const [postData, setPostData] = useState({
//     // name: null,
//     phone_number: null,
//     pincode: null,
//     address: null,
//     locality: null,
//     city: null,
//     state: null,
//     country: null,
//   });

//   const handleChange = (name, value) => {
//     setPostData({
//       ...postData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     // navigation.navigate('Login');
//     // if (postData.phone_number) {
//     //   LoginApi({...postData, fcm_token: fcm}, navigation, data =>
//     //     setLoading(data),
//     //   );
//     //   setPostData({
//     //     phone_number: null,
//     //   });
//     // } else {
//     //   RNToasty.Error({
//     //     title: 'Please Enter Mobile Number.',
//     //     duration: 2,
//     //   });
//     // }
//   };

//   const onSubmit = () => {
//     if (postData.phone_number) {
//       // LoginApi({...postData, fcm_token: fcm}, navigation, data =>
//       //   setLoading(data),
//       // );
//       let data = JSON.stringify({
//         userid: userId,
//         pincode: postData.pincode,
//         address: postData.address,
//         locality: postData.locality,
//         city: postData.city,
//         state: postData.state,
//         country: postData.country,
//         phone_number: postData.phone_number,
//       });

//       let config = {
//         method: 'post',
//         maxBodyLength: Infinity,
//         url: 'https://ezyclean.theprojectxyz.xyz/api/add_address',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         data: data,
//       };

//       axios
//         .request(config)
//         .then(response => {
//           RNToasty.Success({
//             title: response.data.message,
//             duration: 2,
//           });
//           console.log('adddressdatapost', JSON.stringify(response.data));
//           navigation.navigate('Payment', {
//             data: productdataall,
//             address: response.data,
//           });
//         })
//         .catch(error => {
//           console.log(error);
//         });
//       setPostData({
//         phone_number: null,
//       });
//     } else {
//       RNToasty.Error({
//         title: 'Please Enter Mobile Number.',
//         duration: 2,
//       });
//     }
//   };

//   const getGPSLocation = () => {
//     setGettingCords(true);
//     Geolocation.getCurrentPosition(
//       position => {
//         setGettingCords(false);
//         setCurrentCoords(position.coords);
//       },
//       error => {
//         // See error code charts below.
//         console.log(error.code, error.message);
//         setGettingCords(false);
//       },
//       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//     );
//   };

//   // const valuestatus = route.params?.valuestatus;
//   // console.log('valuestatus............', valuestatus);

//   // useEffect(() => {
//   //   permission();
//   //   GetAllAddressApi();
//   // }, []);

//   useEffect(() => {
//     getGPSLocation();
//   }, [locationAllowed]);

//   // const postData = {
//   //   // ...route.params.data,
//   //   // address_id: userAddress,
//   // };

//   // console.log('postData--on--addressScreen', postData);
//   // const handlePress = ()=>{
//   //   // CreateOrder(
//   //   //   {
//   //   //     ...postData,
//   //   //     // payment_mode: id,
//   //   //   },
//   //   //   navigation,
//   //   // );
//   //   //Payment
//   //   if (valuestatus === true) {
//   //     navigation.navigate('AppointmentCompleted', { data: postData });
//   //   } else if (valuestatus === false) {
//   //     navigation.navigate('Payment', { data: postData });
//   //   }
//   // }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         backgroundColor="transparent"
//         translucent={true}
//         barStyle="light-content"
//       />
//       {loading ? (
//         <View style={{height: SIZES.height * 0.9, justifyContent: 'center'}}>
//           <Loading />
//         </View>
//       ) : (
//         <View
//           style={[
//             styles.address_box,
//             address?.length > 0 && {justifyContent: 'space-between'},
//             address?.length <= 3 && {height: SIZES.height * 0.92},
//           ]}>
//           <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
//             <View
//               style={{
//                 alignSelf: 'flex-start',
//                 marginBottom: SIZES.width * 0.05,
//               }}>
//               <Text
//                 style={{
//                   textAlign: 'left',
//                   color: COLORS.blueezy,
//                   fontSize: SIZES.body3,
//                   fontWeight: 'bold',
//                 }}>
//                 Contact Details
//               </Text>
//             </View>
//             <InputWithIcon
//               placeholder={'Name'}
//               // leftIcon={'smartphone'}
//               value={postData.name}
//               keyboardType={'default'}
//               onChangeText={text => handleChange('name', text)}
//             />

//             <InputWithIcon
//               placeholder={'Phone Number'}
//               // leftIcon={'smartphone'}
//               value={postData.phone_number}
//               keyboardType={'numeric'}
//               onChangeText={text => handleChange('phone_number', text)}
//             />
//             <View
//               style={{
//                 alignSelf: 'flex-start',
//                 marginBottom: SIZES.width * 0.05,
//               }}>
//               <Text
//                 style={{
//                   textAlign: 'left',
//                   color: COLORS.blueezy,
//                   fontSize: SIZES.body3,
//                   fontWeight: 'bold',
//                 }}>
//                 Address
//               </Text>
//             </View>
//             <InputWithIcon
//               placeholder={'Address'}
//               // leftIcon={'smartphone'}
//               value={postData.address}
//               keyboardType={'default'}
//               onChangeText={text => handleChange('address', text)}
//             />
//             <InputWithIcon
//               placeholder={'Pin Code'}
//               // leftIcon={'smartphone'}
//               value={postData.pincode}
//               keyboardType={'numeric'}
//               onChangeText={text => handleChange('pincode', text)}
//             />
//             <InputWithIcon
//               placeholder={'Locality'}
//               // leftIcon={'smartphone'}
//               value={postData.locality}
//               keyboardType={'default'}
//               onChangeText={text => handleChange('locality', text)}
//             />

//             <InputWithIcon
//               placeholder={'Country'}
//               // leftIcon={'smartphone'}
//               value={postData.country}
//               // keyboardType={'numeric'}
//               onChangeText={text => handleChange('country', text)}
//             />

//             <InputWithIcon
//               placeholder={'City'}
//               // leftIcon={'smartphone'}
//               value={postData.city}
//               keyboardType={'default'}
//               onChangeText={text => handleChange('city', text)}
//             />

//             <InputWithIcon
//               placeholder={'State'}
//               // leftIcon={'smartphone'}
//               value={postData.state}
//               // keyboardType={'numeric'}
//               onChangeText={text => handleChange('state', text)}
//             />

//             {/* <InputWithIcon1
//               placeholder={'City'}
//               // leftIcon={'lock'}
//               rightIcon={secure ? 'down-outline' : 'up-outline'}
//               onPress={() => setSecure(!secure)}
//               // secureTextEntry={secure}
//               value={postData.city}
//               onChangeText={text => handleChange('city', text)}
//             />
//             <InputWithIcon1
//               placeholder={'State'}
//               // leftIcon={'lock'}
//               rightIcon={secure ? 'down-outline' : 'up-outline'}
//               onPress={() => setSecure(!secure)}
//               // secureTextEntry={secure}
//               value={postData.state}
//               onChangeText={text => handleChange('state', text)}
//             /> */}

//             {/* <View style={styles.box}>
// <TouchableOpacity
//   onPress={() => navigation.navigate('Otp')}
//   style={styles.forget_btn}>
//   <Text style={styles.forget_text}>Forgot Your Password?</Text>
// </TouchableOpacity>
// </View> */}

//             {/* <Button1
//   // disabled={loading}
//   // loading={loading}
//   onPress={handleSubmit}
//   style={{ marginTop: 20 }}
// >
//   Submit
// </Button1> */}

//             {/* <View style={globalStyles.center}>
// <View style={styles.or_box}>
//   <Text style={styles.or}>Or</Text>
// </View>
// </View> */}

//             {/* <View style={styles.btnRow}>
// <TouchableOpacity
//   style={styles.socailBtn}
//   // onPress={signIn}
//   // onPress={() => GoogleLoginApi(googleLogin((data) => setLoading(data)), (data) => setLoading(data))}
//   onPress={() =>
//     googleLogin(GoogleLoginApi, data => setLoading(data))
//   }>
//   <Icons name={'google'} size={25} />
// </TouchableOpacity>
// <TouchableOpacity style={styles.socailBtn}>
//   <Icons name={'facebook'} size={25} color={COLORS.blue} />
// </TouchableOpacity>
// </View> */}
//           </ScrollView>
//           {/* {userAddress && address && address[0] ? (
//             <Button1
//               style={styles.btn}                  //Payment
//               onPress={handlePress}>
//               Place Booking
//             </Button1>
//           ) : (
//             <View>
//               <Button1
//                 style={{
//                   ...styles.btn,
//                   marginBottom: SIZES.height * 0.01,
//                   borderWidth: 1,
//                   borderColor: COLORS.primary,
//                 }}
//                 backgroundColor={COLORS.white}
//                 textColor={COLORS.primary}
//                 onPress={() => {
//                   if (locationAllowed) {
//                     navigation.navigate('AddCurrentAddress', {
//                       currentCoords: currentCoords,
//                       addressLngLat: currentCoords,
//                       firstTime: false,
//                     });
//                   } else {
//                     Alert.alert(
//                       'Location Permission',
//                       'Please allow location permission first.',
//                     );
//                   }
//                 }}>
//                 Use my current location
//               </Button1>
//               <Button1
//                 style={styles.btn}
//                 onPress={() => {
//                   if (locationAllowed) {
//                     navigation.navigate('AddNewAddress', {
//                       currentCoords: currentCoords,
//                     });
//                   } else {
//                     Alert.alert(
//                       'Location Permission',
//                       'Please allow location permission first.',
//                     );
//                   }
//                 }}>
//                 Add New Address
//               </Button1>
//             </View>
//           )} */}
//           <Button1
//             style={styles.btn}
//             // onPress={() => {
//             //   navigation.navigate('Payment');
//             //   // if (locationAllowed) {
//             //   //   navigation.navigate('AddNewAddress', {
//             //   //     currentCoords: currentCoords,
//             //   //   });
//             //   // } else {
//             //   //   Alert.alert(
//             //   //     'Location Permission',
//             //   //     'Please allow location permission first.',
//             //   //   );
//             //   // }
//             // }}
//             onPress={onSubmit}>
//             Save
//           </Button1>
//           <Button1
//             style={{
//               ...styles.btn,
//               marginBottom: SIZES.height * 0.01,
//               borderWidth: 1,
//               borderColor: COLORS.primary,
//             }}
//             backgroundColor={COLORS.white}
//             textColor={COLORS.primary}
//             onPress={() => {
//               if (locationAllowed) {
//                 navigation.navigate('AddCurrentAddress', {
//                   currentCoords: currentCoords,
//                   addressLngLat: currentCoords,
//                   firstTime: false,
//                 });
//               } else {
//                 Alert.alert(
//                   'Location Permission',
//                   'Please allow location permission first.',
//                 );
//               }
//             }}>
//             Use my current location
//           </Button1>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const mapStateToProps = state => ({
//   loading: state.address.loading,
//   // address: state.address.address,
// });

// const mapDispatchToProps = {
//   // GetAllAddressApi,
//   // DeleteAddressApi,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Address);
// // export default Address;








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
import Geolocation from 'react-native-geolocation-service';

const Address = ({
  navigation,
  GetAllAddressApi,
  DeleteAddressApi,
  // CreateOrder,
  address,
  loading,
  route,
}) => {
  const [userAddress, setUserAddress] = useState(0);
  const [currentCoords, setCurrentCoords] = useState(null);
  const [gettingCords, setGettingCords] = useState(false);
  const [locationAllowed, setLocationAllowed] = useState(false);

  const valuestatus = route.params;
  console.log('valuestatus............', JSON.stringify(valuestatus));
  console.log('userAddress..........------', userAddress);
  const getGPSLocation = () => {
    setGettingCords(true);
    Geolocation.getCurrentPosition(
      position => {
        setGettingCords(false);
        setCurrentCoords(position.coords);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        setGettingCords(false);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setLocationAllowed(true);
      } else {
        setLocationAllowed(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    permission();
    GetAllAddressApi();
  }, []);

  useEffect(() => {
    getGPSLocation();
  }, [locationAllowed]);

  const postData = {
    ...route.params,
    address_id: userAddress,
  };
  console.log('postData--on--addressScreen', postData);
  const handlePress = ()=>{
    // CreateOrder(
    //   {
    //     ...postData,
    //     // payment_mode: id,
    //   },
    //   navigation,
    // );
    //Payment
    navigation.navigate('Payment', { data: postData });
    // if (valuestatus === true) {
    //   navigation.navigate('AppointmentCompleted', { data: postData });
    // } else if (valuestatus === false) {
    //   navigation.navigate('Payment', { data: postData });
    // }
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading || gettingCords ? (
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {address &&
                address[0] &&
                address.map((item, index) => {
                  // const address_field = item.address?.split(",")
                  // console.log("add : ", address_field)
                  return (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.5}
                      // onPress={() => {setUserAddress(item.id), navigation.navigate("Payment")}}
                      onPress={() => setUserAddress(item.id)}
                      style={[
                        styles.card,
                        index == 0 && {marginTop: SIZES.height * 0.025},
                      ]}>
                      <RadioButton
                        // value={userAddress}
                        color={COLORS.primary}
                        status={
                          userAddress === item.id ? 'checked' : 'unchecked'
                        }
                        onPress={() => setUserAddress(item.id)}
                      />
                      <View
                      //  style={styles.box}
                      >
                        {item.customer_name && (
                          <View style={styles.box_row}>
                            <Text style={styles.key}>Name</Text>
                            <Text style={styles.value}>
                              {item.customer_name}
                            </Text>
                          </View>
                        )}
                        {item.phone_number && (
                          <View style={styles.box_row}>
                            <Text style={styles.key}>Phone</Text>
                            <Text style={styles.value}>
                              {item.phone_number}
                            </Text>
                          </View>
                        )}
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Address</Text>
                          <Text style={styles.value}>{item.address}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Locality</Text>
                          <Text style={styles.value}>{item.locality}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Country</Text>
                          <Text style={styles.value}>{item.country}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>City</Text>
                          <Text style={styles.value}>{item.city}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>State</Text>
                          <Text style={styles.value}>{item.state}</Text>
                        </View>
                        <View style={styles.box_row}>
                          <Text style={styles.key}>Pin Code</Text>
                          <Text style={styles.value}>{item.pincode}</Text>
                        </View>
                      </View>

                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.edit_btn}
                        onPress={() =>
                          navigation.navigate('editAddress', {
                            addressData: item,
                          })
                        }>
                        <Icons name={'edit1'} size={20} color={COLORS.gray30} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.delete_btn}
                        onPress={() => DeleteAddressApi(item.id)}>
                        <Icons
                          name={'delete'}
                          size={20}
                          color={COLORS.danger}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </ScrollView>
          {userAddress && address && address[0] ? (
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
          )}
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

