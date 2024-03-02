import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {COLORS, images} from '../../constants';
import formatAMPM from '../../services/time';
import formatDate from '../../services/date';
import Button1 from '../../component/button/Button1';
import axios from 'axios';

const PaymentSuccess = ({navigation, route}) => {
  const [text, setText] = useState();

  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/payment_successful/112',
      headers: {
        Authorization:
          'Bearer 160|LMkKJ9t0E4aTjRqXYRa5d10wByUbQ2wRkxJldtKj1f90965d',
        Cookie:
          'XSRF-TOKEN=eyJpdiI6ImFsNzZkNVpST3hCVnFHcVdTMXMrdHc9PSIsInZhbHVlIjoiNFMyUDdyVm9xRWw0cnJRMS9qcC9WTGxZcnI0WFVCVDEwcUQ0dGk3MFh0eFhJZjU0L3YzaFFwTVRTdjAwVG9HaVBXeUo0RWdLU2tYN2w1RWl5c3Y2aE0yWTlEbTZoa2JmK3laUllBNlNlTFdiSUVMVVcxdFMrMkpZNE5lUVowODciLCJtYWMiOiIxYWEwOTk5YmY1OTk1ZGEzNzNkM2M3OGNiYTAzMDdlZWMwOWY0M2Q2MTBlYzFiMmU0MDBiOWFjZmQ2MTg2MTFlIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ik9CZGJ4Q05IWi82cVpySnFpNmxTVEE9PSIsInZhbHVlIjoiSjBDUldmdFNLamQyYXA0TGFPWW9IYXdNUTErR2JyR1JpeXc3ZUd0UE54YXpocE9uVmZQS2xYMDFEZEw3ZlV3ZmNqbXh6WXVuQ2o1TmZia04yTHFUejZvRjR0VDBBS09sRkxmYUE1VnVtckRzNmNGbXhRNjY4bjBKWW1vQXppQWIiLCJtYWMiOiIxMTQxYzE0YjNmNzA1Mzg1OGJmMzQ0MDY2YTZhYTFmMjNlMGNkMjA4MTVhZDJkNmJlMjcyMDJkN2UyOGZjMWIwIiwidGFnIjoiIn0%3D',
      },
    };

    axios
      .request(config)
      .then(response => {
        console.log('payment Success data', JSON.stringify(response.data));
        setText(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // result = route.params && route.params.paymentResult
  const date = new Date();
  // console.log("route success : ",route.params && route.params.routeName)
  // useEffect(() => {
  //     const backAction = () => {
  //         return true;
  //     };
  //     const backHandler = BackHandler.addEventListener(
  //         'hardwareBackPress',
  //         backAction,
  //     );
  //     return () => backHandler.remove();
  // }, []);

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Product',{package:true});
      }, 1000);
    }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.imageBox}>
        <Image
          source={images.success}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.success_text}>Thank you!</Text>
        <Text style={styles.title}>{text}</Text>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('PaymentFailed')}>
          Now you can track your booking or{'\n'}
          go back to home screen
        </Text>
        {/* <View style={styles.line} /> */}
        {/* <Text style={styles.blueText}>{success ? `Transaction Number : ${route.data.transaction_id}` : "Your Payment wasn’t completed."}</Text> */}
      </View>
      {/* <Button1
                onPress={() => navigation.navigate("Order")}
            >
                Back to Orders
            </Button1> */}
    </View>
  );
};

export default PaymentSuccess;
