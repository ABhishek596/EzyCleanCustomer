import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, images} from '../../constants';
import InputWithIcon from '../../component/input/InputWithIcon';
import Button1 from '../../component/button/Button1';
import Icons from '../../component/Icons';
import axios from 'axios';
import {RNToasty} from 'react-native-toasty';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ContactButton = ({iconName, title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.contact_btn}
      onPress={onPress}>
      <View style={styles.icon_box}>
        <Icons name={iconName} size={18} color={COLORS.secondary} />
      </View>
      <Text style={styles.btn_title}>{title}</Text>
    </TouchableOpacity>
  );
};

const ContactUs = () => {
  useEffect(async () => {
    const token = await AsyncStorage.getItem('@USER_TOKEN');
    // console.log('ContactUs token--------', token);
    setToken(token);
  }, []);

  const [token, setToken] = useState();
  console.log('ContactUs token-------->>', token);

  // const [full_name, setFull_name] = useState('');
  // const [email_address, setEmail_address] = useState('');
  // const [phone_number, setPhone_number] = useState('');

  const [postData, setPostData] = useState({
    full_name: null,
    email_address: null,
    phone_number: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    
    setPostData({
      full_name: null,
      email_address: null,
      phone_number: null,
    });
    let data = JSON.stringify({
      full_name: postData.full_name,
      email_address: postData.email_address,
      phone_number: postData.phone_number,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/contact-us',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        RNToasty.Success({
          title: response.data.message,
          duration: 2,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={globalStyles.center}>
        {/* <Image source={images.contact} style={styles.image} resizeMode='stretch' /> */}

        <View style={styles.btn_row}>
          <ContactButton
            iconName={'call1'}
            title={'Call Us'}
            onPress={() => Linking.openURL(`tel:8463872922`)}
          />
          <ContactButton
            iconName={'email'}
            title={'Email Us'}
            onPress={() => {
              Linking.openURL(`mailto:laundry@gmail.com?subject=test&body=hi`);
            }}
          />
          <ContactButton
            iconName={'headphone'}
            title={'Chat'}
            onPress={() => {
              Linking.openURL(`whatsapp://send?phone=+91 9098194917&text=Hi`);
            }}
          />
        </View>
        {/* contact form */}
        <View style={styles.box}>
          <Text style={styles.title}>Quick Contact</Text>
          <InputWithIcon
            label={'Full Name'}
            leftIcon={'user'}
            placeholder={'Enter Name'}
            value={postData.full_name}
            // onChangeText={txt => setFull_name(txt)}
            onChangeText={text => handleChange('full_name', text)}
          />
          <InputWithIcon
            label={'Email Address'}
            leftIcon={'email'}
            placeholder={'Email'}
            value={postData.email_address}
            // onChangeText={txt => setEmail_address(txt)}
            onChangeText={text => handleChange('email_address', text)}
          />
          <InputWithIcon
            label={'Phone Number'}
            leftIcon={'call'}
            placeholder={'Phone Number'}
            value={postData.phone_number}
            keyboardType={'phone-pad'}
            maxLength={10}
            // onChangeText={txt => setPhone_number(txt)}
            onChangeText={text => handleChange('phone_number', text)}
          />
        </View>

        <Button1
          style={{
            marginBottom: SIZES.height * 0.01,
            borderRadius: SIZES.width * 0.06,
            marginTop: SIZES.height * 0.05,
          }}
          onPress={onSubmit}>
          Send
        </Button1>
      </View>
    </ScrollView>
  );
};

export default ContactUs;
