import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
// import {GetActiveSubscription} from '../../redux/actions/subscriptionAction';
import { GetSubsPackagesDetails } from '../../redux/actions/subscriptionAction';
import Loading from '../../component/loading';
// import {formatDate} from '../../services/date';
import Button1 from '../../component/button/Button1';
import { useFocusEffect } from '@react-navigation/native';
import { SIZES, COLORS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import RazorpayCheckout from 'react-native-razorpay';
// import http from '../../services/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';

const FormData = require('form-data');
// import {BuySubscription} from '../../redux/actions/subscriptionAction';
const Subscription = ({
  loading,
  // GetActiveSubscription,
  // subsDetails,
  navigation,
  subsPackageDetails,
  // buySubStatus
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [catId, setCatId] = useState(1);
  const [itembyservice, setItembyservice] = useState(1);
  //console.log('subsDetails', subsPackageDetails);
  //console.log('itembyservice', itembyservice);
  const [packagedata, setPackagedata] = useState([]);
  const planType0Data = packagedata.filter(item => item.plan_type === '0');
  const planType1Data = packagedata.filter(item => item.plan_type === '1');
  const onRefresh = () => {
    // This function will be called when the user pulls down to refresh.
    // Put your data refresh logic here.
    GetSubsPackagesDetails();
    //GetActiveSubscription();
  };
  // //console.log('buySubStatusbuybuybuybuy', buySubStatus);

  const [isTokenSet, setIsTokenSet] = useState(false);
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  // //console.log('ContactUs token-------->>', token);
  // //console.log('addrss userId-------->>', userId);

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

  const BuySubscription = (sId, pId) => {
    (async () => {
      try {
        const formData = new FormData();
        formData.append('customer_id', userId);
        formData.append('sub_id', sId);
        formData.append('payment_id', pId);

        const response = await axios.post('https://ezyclean.theprojectxyz.xyz/api/customer/buy_subscription', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        });

        //console.log('buydatadatadata///////////', JSON.stringify(response.data));
      } catch (error) {
        //console.error(error);
      }
    })();

  }

  // useFocusEffect(
  //   useCallback(() => {
  //     GetActiveSubscription();
  //   }, []),
  // );

  // useEffect(() => {
  // // GetActiveSubscription();
  //   // GetSubsPackagesDetails();
  //    const GetSubsPackagesDetails = id => async dispatch => {
  //     // dispatch({
  //     //   type: LOADING,
  //     //   payload: true,
  //     // });
  //     http
  //       .get(`admin-plans`)
  //       .then(async response => {
  //         //console.log('admin-plans SUBSCRIPTION',response.data?.data);
  //         // if (response.data?.data) {
  //         //   dispatch({
  //         //     type: SUBSCRIPTION_PACKAGE_DETAILS,
  //         //     payload: response.data.data,
  //         //   });
  //         //   dispatch({
  //         //     type: LOADING,
  //         //     payload: false,
  //         //   });
  //         // } else {
  //         //   dispatch({
  //         //     type: LOADING,
  //         //     payload: false,
  //         //   });
  //         // }
  //       })
  //       .catch(error => {
  //         // dispatch({
  //         //   type: LOADING,
  //         //   payload: false,
  //         // });
  //       });
  //   };
  //   GetSubsPackagesDetails();
  // }, []);

  // useEffect(() => {
  //   if (paymentid) {
  //     const FormData = require('form-data');
  //     let data = new FormData();
  //     data.append('customer_id', '112');
  //     data.append('sub_id', '1');
  //     data.append('payment_id', '2fsr55ztyxx');
  //     BuySubscription({customer_id: 112,sub_id: 1,payment_id: '2fsr55ztyxx'});
  //   }
  // }, []);

  //-----------------------------------------  buy Subscription  ---------------------------------------

  const [paymentid, setPaymentid] = useState();
  //console.log('paymentid//SUBSCRIPTION', paymentid);
  // const [subid, setSubid] = useState();

  // useEffect(async () => {
  //   const idid = await AsyncStorage.getItem('@USER_ID');
  //   //console.log('ididUser//SUBSCRIPTION', idid);
  //   setIdidUser(idid);
  // }, []);
  // const [ididUser, setIdidUser] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (paymentid || ididUser || subid) {
  //       const FormData = require('form-data');
  //       let data = new FormData();
  //       data.append('customer_id', ididUser);
  //       data.append('sub_id', subid);
  //       data.append('payment_id', paymentid);

  //       let config = {
  //         method: 'post',
  //         maxBodyLength: Infinity,
  //         url: 'https://ezyclean.theprojecttest.xyz/api/customer/buy_subscription',
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           Authorization:
  //             'Bearer 280|CnGtPEbeDqzb1NIhPqNaZKt9QXjGnuFXZRFQX0axc0c392de',
  //         },
  //         data: data,
  //       };

  //       try {
  //         const response = await axios(config);
  //         //console.log('buyPackageDone', JSON.stringify(response.data));
  //       } catch (error) {
  //         //console.log('Error-buyPackageDone', error);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [paymentid, ididUser, subid]);

  //---------------------------------------  X  ---------------------------------------------------


  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://ezyclean.theprojectxyz.xyz/api/admin-plans',
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer 270|Ja7AgpwcROZbHt3BKIHTltozFPqx9Dtzm9ZhffNub92833b8',
      },
    };

    axios
      .request(config)
      .then(response => {
        // //console.log('ccccccccccccccccccccccccccccc',JSON.stringify(response.data));
        setPackagedata(response.data.data);
      })
      .catch(error => {
        //console.log(error);
      });
  }, []);

  const CategoryButton = ({
    onPress,
    title,
    isActive,
    marginLeft,
    marginBottom,
    style,
    titlestyl,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.cat_touch,
          backgroundColor: isActive ? COLORS.white : null,
          marginLeft: marginLeft,
          marginBottom: marginBottom,
          ...style,
        }}
        onPress={onPress}>
        <Text
          style={[
            styles.cat_text,
            isActive && styles.active_cat_text,
            titlestyl,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  CategoryButton.defaultProps = {
    onPress: null,
    title: null,
    isActive: false,
    marginLeft: null,
    marginBottom: null,
  };

  const handleGenderPress = gender => {
    // //console.log('flatlist------------------', gender);
    setCatId(gender);
    setItembyservice(gender);
  };

  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.mainView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <LinearGradient
              colors={['#651898', '#2C0D8F']}
              style={{
                marginVertical: SIZES.height * 0.03,
                alignItems: 'center',
              }} // Your styles for the LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}>
              <FlatList
                data={categoryList}
                renderItem={({ item, index }) => (
                  <CategoryButton
                    marginLeft={index == 0 ? SIZES.width * 0.1 : 0}
                    title={item.category_name}
                    isActive={catId == item.id ? true : false}
                    onPress={() => {
                      //console.log('idididididididi------------------', item.id);
                      // setCatId(item.id);
                      handleGenderPress(item.id);
                    }}
                  // style={{alignSelf:'center'}}
                  />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={(_, index) => index}
              />
            </LinearGradient>

            <View>
              {itembyservice === 1 && (
                <FlatList
                  data={planType0Data}
                  renderItem={({ item, index }) => (
                    <View style={styles.mainSubView}>
                      <View style={styles.rowView}>
                        <View style={styles.imgView}>
                          <Image
                            source={{
                              uri: item.plan_image
                              // uri: subsDetails?.existing_subscription_details
                              //   ?.sub_image,
                            }}
                            style={styles.img}
                          />
                        </View>
                        <View style={styles.textView}>
                          <Text style={styles.nameTxt}>
                            {item.plan_name}
                            {/* {subsDetails?.existing_subscription_details?.sub_name} */}
                          </Text>
                          {/* <Text style={styles.feeTxt}>
                            {
                              subsDetails?.existing_subscription_details
                                ?.sub_description
                            }
                          </Text> */}
                        </View>
                        <Text style={styles.feeTxt}>₹{item.price}/-</Text>
                      </View>
                      <View style={styles.subDetailsView}>
                        <View>
                          <Text style={styles.infoTxt}>Number of Booking</Text>
                          {/* <Text style={styles.infoTxtSm}>(Remaining)</Text> */}
                        </View>
                        <Text style={styles.infoTxtBold}>
                          {item.no_of_bookings}
                          {/* {
                            subsDetails?.existing_subscription_details
                              ?.available_no_of_bookings
                          } */}
                        </Text>
                      </View>
                      <View style={styles.horizLine} />
                      <View style={styles.subDetailsView}>
                        <Text style={styles.infoTxt}>Plan Validity</Text>
                        <Text style={styles.infoTxtBold}>
                          {item.validity_label}
                          {/* {formatDate(
                            subsDetails?.existing_subscription_details
                              ?.start_date,
                          )} */}
                        </Text>
                      </View>
                      <View style={styles.horizLine} />
                      <Button1
                        style={styles.activeSubBtn}
                        onPress={() => {

                          // //console.log('razorpay_data', item.id); 
                          // setSubid(item.id);
                          // navigation.navigate('PaymentOnline');
                          // Alert.alert(
                          //   'Subscription Alert!',
                          //   'Please purchase a subscription plan to continue order',
                          //   [
                          //     {
                          //       text: 'Buy Subscription',
                          //       onPress: () => navigation.navigate('subscription'),
                          //       // onPress: () => navigation.navigate('ActivePlan'),
                          //     },
                          //     {
                          //       text: 'OK',
                          //       onPress: () => {},
                          //     },
                          //   ],
                          // );
                          var options = {
                            description: 'EzyCleaneCustomer App',
                            image: 'https://i.imgur.com/3g7nmJC.png',
                            currency: 'INR',
                            key: 'rzp_test_pnG5OaLilqPgMb', // Your api key
                            amount: '100' * item.price,
                            name: 'EzyCleaneCustomer',
                            prefill: {
                              email: 'void@razorpay.com',
                              contact: '9191919191',
                              name: 'Razorpay Software',
                            },
                            theme: { color: '#1C1364' },
                          };
                          RazorpayCheckout.open(options)
                            .then(data => {
                              // handle success
                              if (data.razorpay_payment_id) {
                                BuySubscription(item.id, data.razorpay_payment_id);
                                // Alert.alert(`Success: ${data.razorpay_payment_id}`);
                                setPaymentid(data.razorpay_payment_id);
                              }
                              //console.log('razorpay_data', data);
                              if (data.status_code === 200) {
                                setTimeout(() => {
                                  navigation.navigate('Home', {
                                    package: true,
                                  });
                                }, 3000);
                                RNToasty.Success({
                                  title: 'Subscription Purchase Successfully',
                                  duration: 3,
                                });
                              }
                            })
                            .catch(error => {
                              // handle failure
                              // Alert.alert(
                              //   `Error: ${error.code} | ${error.description}`,
                              // );
                            });
                        }}>
                        Buy Subscription
                      </Button1>
                    </View>
                  )}
                  // horizontal={true}
                  // showsHorizontalScrollIndicator={false}
                  key={(_, index) => index}
                />
              )}
            </View>
            <View>
              {itembyservice === 2 && (
                <FlatList
                  data={planType1Data}
                  renderItem={({ item, index }) => (
                    <View style={styles.mainSubView}>
                      <View style={styles.rowView}>
                        <View style={styles.imgView}>
                          <Image
                            source={{
                              uri: item.plan_image
                              // uri: subsDetails?.existing_subscription_details
                              //   ?.plan_image,
                            }}
                            style={styles.img}
                          />
                        </View>
                        <View style={styles.textView}>
                          <Text style={styles.nameTxt}>
                            {item.plan_name}
                            {/* {subsDetails?.existing_subscription_details?.sub_name} */}
                          </Text>
                          {/* <Text style={styles.feeTxt}>
                            {
                              subsDetails?.existing_subscription_details
                                ?.sub_description
                            }
                          </Text> */}
                        </View>
                        <Text style={styles.feeTxt}>₹{item.price}/-</Text>
                      </View>
                      <View style={styles.subDetailsView}>
                        <View>
                          <Text style={styles.infoTxt}>Number of Booking</Text>
                          {/* <Text style={styles.infoTxtSm}>(Remaining)</Text> */}
                        </View>
                        <Text style={styles.infoTxtBold}>
                          {item.no_of_bookings}
                          {/* {
                            subsDetails?.existing_subscription_details
                              ?.available_no_of_bookings
                          } */}
                        </Text>
                      </View>
                      <View style={styles.horizLine} />
                      <View style={styles.subDetailsView}>
                        <Text style={styles.infoTxt}>Plan Validity</Text>
                        <Text style={styles.infoTxtBold}>
                          {item.validity_label}
                          {/* {formatDate(
                            subsDetails?.existing_subscription_details
                              ?.start_date,
                          )} */}
                        </Text>
                      </View>
                      <View style={styles.horizLine} />
                      <Button1
                        style={styles.activeSubBtn}
                        onPress={() => {
                          // setSubid(item.id);
                          // navigation.navigate('PaymentOnline');
                          // Alert.alert(
                          //   'Subscription Alert!',
                          //   'Please purchase a subscription plan to continue order',
                          //   [
                          //     {
                          //       text: 'Buy Subscription',
                          //       onPress: () => navigation.navigate('subscription'),
                          //       // onPress: () => navigation.navigate('ActivePlan'),
                          //     },
                          //     {
                          //       text: 'OK',
                          //       onPress: () => {},
                          //     },
                          //   ],
                          // );
                          var options = {
                            description: 'EzyCleaneCustomer App',
                            image: 'https://i.imgur.com/3g7nmJC.png',
                            currency: 'INR',
                            key: 'rzp_test_pnG5OaLilqPgMb', // Your api key
                            amount: '100' * item.price,
                            name: 'EzyCleaneCustomer',
                            prefill: {
                              email: 'void@razorpay.com',
                              contact: '9191919191',
                              name: 'Razorpay Software',
                            },
                            theme: { color: '#1C1364' },
                          };
                          RazorpayCheckout.open(options)
                            .then(data => {
                              // handle success
                              if (data.razorpay_payment_id) {
                                BuySubscription(item.id, data.razorpay_payment_id);
                                // Alert.alert(`Success: ${data.razorpay_payment_id}`);
                                setPaymentid(data.razorpay_payment_id);
                              }
                              // //console.log('data', data);
                              if (data.status_code === 200) {
                                setTimeout(() => {
                                  navigation.navigate('Home', {
                                    package: true,
                                  });
                                }, 3000);
                                RNToasty.Success({
                                  title: 'Subscription Purchase Successfully',
                                  duration: 3,
                                });
                              }
                            })
                            .catch(error => {
                              // handle failure
                              //console.log('data_error', error);
                              // Alert.alert(
                              //   `Error: ${error.code} | ${error.description}`,
                              // );
                           
                            });
                        }}>
                        Buy Subscription
                      </Button1>
                    </View>
                  )}
                  // horizontal={true}
                  // showsHorizontalScrollIndicator={false}
                  key={(_, index) => index}
                />
              )}
            </View>

            {/* {subsDetails ? (
                <View style={styles.mainSubView}>
                  <View style={styles.rowView}>
                    <View style={styles.imgView}>
                      <Image
                        source={{
                          uri: subsDetails?.existing_subscription_details
                            ?.sub_image,
                        }}
                        style={styles.img}
                      />
                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.nameTxt}>
                        {subsDetails?.existing_subscription_details?.sub_name}
                      </Text>
                      <Text style={styles.feeTxt}>
                        {
                          subsDetails?.existing_subscription_details
                            ?.sub_description
                        }
                      </Text>
                    </View>
                  </View>
                  <View style={styles.subDetailsView}>
                    <View>
                      <Text style={styles.infoTxt}>Number of Product</Text>
                      <Text style={styles.infoTxtSm}>(Remaining)</Text>
                    </View>
                    <Text style={styles.infoTxtBold}>
                      {
                        subsDetails?.existing_subscription_details
                          ?.available_no_of_bookings
                      }
                    </Text>
                  </View>
                  <View style={styles.horizLine} />
                  <View style={styles.subDetailsView}>
                    <Text style={styles.infoTxt}>Starting Date</Text>
                    <Text style={styles.infoTxtBold}>
                      {formatDate(
                        subsDetails?.existing_subscription_details?.start_date,
                      )}
                    </Text>
                  </View>
                  <View style={styles.horizLine} />
                  <View style={styles.subDetailsView}>
                    <Text style={styles.infoTxt}>Expiry Date</Text>
                    <Text style={styles.infoTxtBold}>
                      {formatDate(
                        subsDetails?.existing_subscription_details?.end_date,
                      )}
                    </Text>
                  </View>
                </View>
              ) : (
                <Text
                  style={{ color: 'black', fontWeight: '600', textAlign: 'center' }}>
                  No Active Plan Found.
                </Text>
              )} */}
          </View>
        )}
        {/* <Button1
            style={styles.activeSubBtn}
            onPress={() => {
              navigation.navigate('Subscription');
            }}>
            Upgrade Subcription
          </Button1> */}
        {/* <View style={{paddingVertical:13}}>
           <Text style={{fontSize:15,color:'#ffffff',alignSelf:'center',backgroundColor:'green',paddingVertical:13,paddingHorizontal:80,borderRadius:10}}>Current Active Plan</Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  subsDetails: state.subscription.subsDetails,
  subsPackageDetails: state.subscription.subsPackageDetails,
  // buySubStatus: state.subscription.buySubStatus,
});

const mapDispatchToProps = {
  // GetActiveSubscription,
  GetSubsPackagesDetails,
  // BuySubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);

const categoryList = [
  {
    id: 1,
    category_name: 'Pieces',
  },
  {
    id: 2,
    category_name: 'Kg',
  },
];
