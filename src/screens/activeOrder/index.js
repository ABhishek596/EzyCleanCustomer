import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images, FONTS } from '../../constants';
import Loading from '../../component/loading';
// import ServiceCard from '../../component/card/ServiceCard';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const MyOrders = ({ navigation, loading, categoryList }) => {
  // console.log("category data : ", categoryList)
  // const order = [1, 2, 3, 4]
  const [paymentMethods, setPaymentMethods] = useState();
  const [isTokenSet, setIsTokenSet] = useState(false);
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();


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
  // console.log('Payment userId-------->>', userId);

  const [active, setActive] = useState();

  const fetchData = useCallback(async () => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://ezyclean.theprojectxyz.xyz/api/get_orders/${userId}`,
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axios.request(config);
      console.log("Active order data", JSON.stringify(response.data));
      setActive(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [userId, token, setActive]);

  useFocusEffect(fetchData);



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          <View style={globalStyles.center}>
            {/* category container */}
            <View>
              {active && active.length > 0 ? (

                <FlatList
                  data={active}
                  renderItem={({ item, index }) => (

                    <LinearGradient
                      colors={['#F5E6FF', '#F3E1FF']}
                      style={[styles.box, { marginTop: SIZES.height * 0.025 }]} // Your styles for the LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}>
                      <View style={styles.box_header}>
                        <Text style={styles.order_id}>Order {item.order_id}</Text>
                        {/* <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.cancel_btn}>
                          <Text style={styles.cancel}>Cancel</Text>
                        </TouchableOpacity> */}
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Product Name</Text>
                        <Text style={styles.order_text}>{item.label_name}</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Quantity</Text>
                        <Text style={styles.order_text}>09 Items</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Pickup Date</Text>
                        <Text style={styles.order_text}>{item.pickup_date.slice(0, 10)}</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Pickup Time</Text>
                        <Text style={styles.order_text}>{item.pickup_date.slice(11, 16)}</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Delivery Date</Text>
                        <Text style={styles.order_text}>{item.delivery_date.slice(0, 10)}</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Delivery Time</Text>
                        <Text style={styles.order_text}>{item.delivery_date.slice(11, 16)}</Text>
                      </View>
                      <View style={styles.order_row}>
                        <Text style={styles.order_title}>Payment Mode</Text>
                        <Text style={styles.order_text}>{item.payment_mode}</Text>
                      </View>
                      <View
                        style={{
                          alignSelf: 'flex-start',
                          marginLeft: SIZES.width * 0.048,
                          width: SIZES.width * 0.9,
                        }}>
                        <Text
                          style={{
                            fontFamily: FONTS.medium,
                            fontSize: SIZES.width * 0.038,
                            marginBottom: -4,
                            color: '#3B319E',
                            marginTop: SIZES.height * 0.013,
                          }}>
                          Delivery Address
                        </Text>
                        <Text
                          style={{
                            width: SIZES.width * 0.8,
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.width * 0.036,
                            marginBottom: -4,
                            color: COLORS.secondary,
                            marginTop: SIZES.height * 0.01,
                          }}>
                          Yashwant Kunj Lbs Marg Hariniwa Main Road, Nagpur 512505 ,
                          M.H.
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.order_row,
                          { marginTop: SIZES.height * 0.01 },
                        ]}>
                        <Text style={[styles.order_title, { fontWeight: 'bold' }]}>
                          Total
                        </Text>
                        <Text style={[styles.order_text, { fontWeight: 'bold' }]}>
                          $ {item.sub_total}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                          style={styles.btn}
                          onPress={() => navigation.navigate('OrderDetails',{data:item})}>
                          <Text style={styles.btn_text}>Track Order</Text>
                        </TouchableOpacity>
                        <View style={{ width: SIZES.width * 0.066 }} />
                        <TouchableOpacity
                          style={[
                            styles.btn,
                            {
                              borderWidth: 2,
                              borderColor: COLORS.secondary,
                              backgroundColor: COLORS.white,
                              flexDirection: 'row',
                              alignItems: 'center',
                            },
                          ]}
                          onPress={() => navigation.navigate('Invoice',{id:item.id})}>
                          <Text
                            style={[
                              styles.btn_text,
                              { color: COLORS.secondary, marginBottom: 0 },
                            ]}>
                            Invoice
                          </Text>
                          <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/images/Leftout.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>

                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />

              ) : (<Text style={{ alignSelf: 'center', top: 200, color: "#000000", fontSize: 16 }}>Order Not Found</Text>)
              }
            </View>
          </View>
        </View>
      )}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   loading: state.home.loading,
//   categoryList: state.home.categoryList,
// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
export default MyOrders;

// const products1 = [
//   {
//     id: 1,
//     name: 'Product 1',
//     gender: 'Male',
//     service: 'Service A',
//     image:
//       'https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     gender: 'Female',
//     service: 'Service B',
//     image:
//       'https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     gender: 'Male',
//     service: 'Service B',
//     image:
//       'https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0',
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     gender: 'Female',
//     service: 'Service A',
//     image:
//       'https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs',
//   },
//   // ... more products
// ];

//Next


