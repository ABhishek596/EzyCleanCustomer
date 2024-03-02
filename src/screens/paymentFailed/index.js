import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {COLORS, images} from '../../constants';
import Button1 from '../../component/button/Button1';
import axios from 'axios';

const PaymentFailed = ({navigation, route}) => {
  const [text, setText] = useState();
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/payment_failed/25',
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
        // console.log('XXXXXXXXXXX', JSON.stringify(response.data));
        setText(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
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
          source={images.failed}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.failed_text}>Failed</Text>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.text}>
          Oops! Something went{'\n'}
          terribly wrong here
        </Text>
        <View style={styles.line} />

        <Button1
          style={{borderRadius: 20}}
          onPress={() => navigation.navigate('Home')}>
          Please try again
        </Button1>
      </View>
    </View>
  );
};

export default PaymentFailed;
