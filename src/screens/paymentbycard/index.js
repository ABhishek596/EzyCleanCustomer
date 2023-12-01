import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {COLORS, FONTS, SIZES} from '../../constants';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';

const PaymentByCard = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('PaymentSuccess');
    // if (postData.delivery_date && postData.delivery_time) {
    //   navigation.navigate('Address', {data: postData,valuestatus:valuestatus});
    // } else {
    //   alert('Please select valid delivery date and time.');
    // }
  };
  const handleChange = (name, value) => {
    // setPostData({
    //   ...postData,
    //   [name]: value,
    // });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/atncard.png')}
          resizeMode="contain"
        />
        <Text style={styles.heading}>Other Payment Methods</Text>
        <View style={{alignSelf: 'center'}}>
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
              Full Name
            </Text>
          </View>
          <InputWithIcon
            placeholder={'Enter Your Name'}
            // leftIcon={'smartphone'}
            //   value={postData.phone_number}
            keyboardType={'numeric'}
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
              Card Number
            </Text>
          </View>
          <InputWithIcon
            placeholder={'Enter Card Name'}
            // leftIcon={'smartphone'}
            //   value={postData.phone_number}
            keyboardType={'numeric'}
            onChangeText={text => handleChange('phone_number', text)}
          />
          <View
            style={{
              flexDirection: 'row',
              width: SIZES.width * 0.9,
              justifyContent: 'space-between',
            }}>
            <View>
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
                  CVV
                </Text>
              </View>
              <InputWithIcon
                placeholder={'Type Here'}
                // leftIcon={'smartphone'}
                //   value={postData.phone_number}
                keyboardType={'numeric'}
                onChangeText={text => handleChange('phone_number', text)}
                inputStyle={{width: SIZES.width * 0.42}}
              />
            </View>
            <View>
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
                  Valid
                </Text>
              </View>
              <InputWithIcon
                placeholder={'Type Here'}
                // leftIcon={'smartphone'}
                //   value={postData.phone_number}
                keyboardType={'numeric'}
                onChangeText={text => handleChange('phone_number', text)}
                inputStyle={{
                  width: SIZES.width * 0.42,
                  //borderWidth: 1,
                  // borderColor: COLORS.secondary
                }}
              />
            </View>
          </View>
        </View>
        <View style={{paddingBottom: 10}}>
          <Button1
            style={{alignSelf: 'center', borderRadius: 20}}
            onPress={handleNext}
            backgroundColor={COLORS.secondary}>
            Pay Now
          </Button1>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentByCard;

const cash = require('../../assets/images/atmcards.png');
const card = require('../../assets/images/googlepay.png');
const paytm = require('../../assets/images/paytm.png');
const phonepe = require('../../assets/images/phonepe.png');
const paymentMethods = [
  {
    Payment_Method: {
      id: 1,
      payment_mode: 'Debit/ Credit Card',
    },
    Icon: cash,
  },
  {
    Payment_Method: {
      id: 2,
      payment_mode: 'Google Pay',
    },
    Icon: card,
  },
  {
    Payment_Method: {
      id: 3,
      payment_mode: 'Paytm',
    },
    Icon: paytm,
  },
  {
    Payment_Method: {
      id: 4,
      payment_mode: 'PhonePe',
    },
    Icon: phonepe,
  },
  // Add more payment methods as needed
];
