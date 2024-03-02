import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, SIZES } from '../../constants';
// import { CreditCardInput } from 'react-native-payment-card'
import styles from './styles';
import {
  CreateOrder,
  GetPaymentMethods,
  UpdateTransactionApi,
} from '../../redux/actions/orderAction';
import { connect } from 'react-redux';
import Loading from '../../component/loading';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';
import { RNToasty } from 'react-native-toasty';
const Payment = ({
  navigation,
  loading,
  // CreateOrder,
  // GetPaymentMethods,
  // UpdateTransactionApi,
  // // paymentMethods,
  // route,
}) => {
  // let postData = {
  //   // ...route.params?.data,
  //   // payment_mode: 0,
  // };

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
  console.log('Payment userId-------->>', userId);

  const ordercash = () => {

    let data = JSON.stringify({
      "customer_id": userId,
      "user_id": userId,
      "order_type": "Cash",
      "pay_status": "Unpaid",
      "bag_id": "16",
      "weight": "2.5",
      "address_id": 456,
      "pickup_date": "2023-12-15 10:00:00",
      "delivery_date": "2023-12-16 14:00:00",
      "note": "Special instructions",
      "images": [
        "image_url_1",
        "image_url_2"
      ],
      "total": 50,
      "discount": 5,
      "sub_total": 45,
      "tax_value": 2.25,
      "tax_percent": 5,
      "delivery_cost": 8,
      "promo_id": null,
      "delivered_by": null,
      "payment_mode": 1,
      "order_id": '#' + Math.floor(Math.random() * 100000),
      "status": 1,
      "items": [
        {
          "product_id": 101,
          "quantity": 2,
          "price": 20,
          "iron": "Yes"
        },
        {
          "product_id": 102,
          "quantity": 1,
          "price": 15,
          "iron": "Yes"
        }
      ],
      "s_discount": 2,
      "cus_sub_id": 789
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ezyclean.theprojectxyz.xyz/api/add-order',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log("Here create order", JSON.stringify(response.data));
        setTimeout(() => {
          navigation.navigate('Home');
        }, 500);
        RNToasty.Success({
          title: 'Order Placed Successfully',
          duration: 2,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }


  const orderOnline = (pid) => {

    let data = JSON.stringify({
      "customer_id": userId,
      "user_id": userId,
      "order_type": "Online",
      "pay_status": "paid",
      "payment_id": pid,
      "bag_id": "16",
      "weight": "2.5",
      "address_id": 456,
      "pickup_date": "2023-12-15 10:00:00",
      "delivery_date": "2023-12-16 14:00:00",
      "note": "Special instructions",
      "images": [
        "image_url_1",
        "image_url_2"
      ],
      "total": 50,
      "discount": 5,
      "sub_total": 4500,
      "tax_value": 2.25,
      "tax_percent": 5,
      "delivery_cost": 8,
      "promo_id": null,
      "delivered_by": null,
      "payment_mode": 2,
      "order_id": '#' + Math.floor(Math.random() * 100000),
      "status": 1,
      "items": [
        {
          "product_id": 101,
          "quantity": 2,
          "price": 20,
          "iron": "Yes"
        },
        {
          "product_id": 102,
          "quantity": 1,
          "price": 15,
          "iron": "Yes"
        }
      ],
      "s_discount": 2,
      "cus_sub_id": 789
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ezyclean.theprojectxyz.xyz/api/add-order',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log("Here create order", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    let data = '';

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://ezyclean.theprojectxyz.xyz/api/list_paymentmode',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 160|LMkKJ9t0E4aTjRqXYRa5d10wByUbQ2wRkxJldtKj1f90965d',
        Cookie:
          'XSRF-TOKEN=eyJpdiI6IjlOanlEM1lISU5vdk9SYTkxZ01CUlE9PSIsInZhbHVlIjoicFV2NGFQakJpd3ZuNTVlaE84bW55Y29jdXpRaGI0TG1vUFU1VFhZZ2U3bzM4QWM3aFN3djdZS1lQTFVTSnJZQU1wWVZJOWpvdnFrT0U2UkdkcnNxRUpSTmg5QmxvVDNJbnhaMnVPTWtXTlUzYzUxcldReUtHZERqQ3RwaDVWNnQiLCJtYWMiOiIyMzA3NzY2ODk1ZTNkOGZiMWYwMGNhNTk5NzFkYWRlNTVjNDQzNjZiYWY3ZDhhNjNkNzE0NWFhZWQ5NTg3NmFhIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InFUaWVJUnRZbUdNRlUxeWkzRFJYK0E9PSIsInZhbHVlIjoiZ0R6WExrOExoYVhKblJTNzZrd2h3SUQvNHRXUmhSZDZsNTJTR3JwOGZlMVdIVDY5c05wQ2Jua0N5RFFiS3Bja1pWQ21vZlh4ZFBBNXB5TDJYRkZEMDlGOVFxb00wR01mS3VSN1p4S1FsaE10Z0lLTWphWHlTakRnb0RhaXZ6cGEiLCJtYWMiOiJkNjkyZGEwODRkYmQyOWVkYTEyNWE4MzkwNjA3MzkwMjQ2NzRjM2U0NDY4ZjI1ZTNlYWM5MmNjMjM3MDlmMjA5IiwidGFnIjoiIn0%3D',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setPaymentMethods(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   GetPaymentMethods();
  // }, []);

  const handlePayment = id => {
    // let postData = {
    //     ...route.params.data,
    //     "payment_mode": id,
    // }
    // ordercash();
    if (id == 1) {
      ordercash();
      // CreateOrder(
      //   {
      //     ...postData,
      //     payment_mode: id,
      //   },
      //   navigation,
      // );
      // navigation.navigate("Order")
      // navigation.navigate('PaymentOnline');

    } else if (id == 2) {
      // navigation.navigate('PaymentFailed');
      // navigation.navigate('PaymentOnline');
      var options = {
        description: 'EzyCleaneCustomer App',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_pnG5OaLilqPgMb', // Your api key
        amount: '100' * 4500,
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
            orderOnline(data.razorpay_payment_id);
            // Alert.alert(`Success: ${data.razorpay_payment_id}`);
            // setPaymentid(data.razorpay_payment_id);
          }
          // //console.log('data', data);
          if (data.status_code === 200) {
            setTimeout(() => {
              navigation.navigate('Home');
            }, 500);
            RNToasty.Success({
              title: 'Order Placed Successfully',
              duration: 2,
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
    } else {
      // CreateOrder(
      //   {
      //     ...postData,
      //     payment_mode: id,
      //   },
      //   '',
      //   id => {
      //     if (id) {
      //       navigation.navigate('QrScreen');
      //       // var options = {
      //       //   description: 'Credits towards consultation',
      //       //   // image: 'https://i.imgur.com/3g7nmJC.png',
      //       //   // image: userData.picture,
      //       //   currency: 'INR',
      //       //   // key: "rzp_test_sHuXJaB9QnKnlO", // my razor pay api key
      //       //   key: 'rzp_test_APKjeA7r85HKW4',
      //       //   // amount: item.price * 100,
      //       //   amount: postData.sub_total * 100,
      //       //   // name: userData.name,
      //       //   // prefill: {
      //       //   //     email: userData.email,
      //       //   //     contact: userData.mobile,
      //       //   //     name: userData.name,
      //       //   // },
      //       //   theme: {color: COLORS.primary},
      //       // };
      //       // RazorpayCheckout.open(options)
      //       //   .then(data => {
      //       //     UpdateTransactionApi(data.razorpay_payment_id, navigation, id);
      //       //     // navigation.navigate("PaymentSuccess")
      //       //     console.log('transaction id : ', data.razorpay_payment_id);
      //       //   })
      //       //   .catch(error => {
      //       //     navigation.navigate('PaymentFailed');
      //       //     console.log(`Error: ${error.code} | ${error.description}`);
      //       //     // alert(`Error: ${error.code} | ${error.description}`);
      //       //   });
      //     }
      //   },
      // );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.box}>
          {paymentMethods?.[0] && (
            <FlatList
              data={paymentMethods}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.btn,
                    index == 0 && { marginTop: SIZES.height * 0.025 },
                  ]}
                  onPress={() => handlePayment(item.Payment_Method?.id)}>
                  <View style={styles.row}>
                    <View style={styles.iconBox}>
                      <Image
                        source={{ uri: item.Icon }}
                        style={{ ...styles.iconStyle }}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.btnText}>
                        {item.Payment_Method?.payment_mode}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                //   <ProductCard
                //     marginBottom={itemList[0] && (index == productData.length - 1) ? SIZES.height * .28 : SIZES.height * .025}
                //     marginTop={index == 0 ? SIZES.height * .025 : 0}
                //     source={{ uri: item.image }}
                //     productName={item.product?.product_name}
                //     quantity={itemList[itemList.findIndex(ele => ele?.product_id == item.product?.id)]?.qty}
                //     setQuantity={(quan) => addItem(item.product?.id, quan, item.price ? item.price : 0)}
                //     // price={"$300"}
                //     // totalPrice={itemList[itemList?.findIndex((ele) => ele.product_id == item.product?.id)]?.price}
                //     price={`₹${item.price ? item.price : 0}`}
                //     onPress={() => { setProduct(item), handleEditPress(item.product?.id) }}
                //   />
              )}
              key={item => item.Payment_Method?.id}
              showsVerticalScrollIndicator={false}
            />
          )}
          {/* <CreditCardInput /> */}
          {/* <CreditCardInput
                    autoFocus
                    requiresName
                    requiresCVC
                    requiresEmail
                    labelStyle={styles.labelStyle}
                    inputStyle={styles.inputStyle}
                    validColor={"black"}
                    invalidColor={"red"}
                    placeholderColor={"darkgray"}
                    onChange={(text) => console.log("onchange : ", text)}

                /> */}
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.order.loading,
  paymentMethods: state.order.paymentMethods,
});

const mapDispatchToProps = {
  GetPaymentMethods,
  CreateOrder,
  UpdateTransactionApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
// export default Payment;

// const cash = require('../../assets/images/imagecash.png');
// const card = require('../../assets/images/imagecard.png');

// const paymentMethods = [
//   {
//     Payment_Method: {
//       id: 1,
//       payment_mode: 'Cash On Delivery',
//     },
//     Icon: cash,
//   },
//   {
//     Payment_Method: {
//       id: 2,
//       payment_mode: 'online',
//     },
//     Icon: card,
//   },
//   // Add more payment methods as needed
// ];
