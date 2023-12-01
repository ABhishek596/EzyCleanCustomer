import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COLORS, FONTS, SIZES } from '../../constants';
import Button1 from '../../component/button/Button1';


const PaymentOnline = ({navigation}) => {

    const handleNext = () => {
        navigation.navigate('PaymentByCard');
        // if (postData.delivery_date && postData.delivery_time) {
        //   navigation.navigate('Address', {data: postData,valuestatus:valuestatus});
        // } else {
        //   alert('Please select valid delivery date and time.');
        // }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/atncard.png')}
                    resizeMode='contain'
                />
                <Text style={styles.heading}>Other Payment Methods</Text>
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
                                        source={item.Icon}
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
                    )}
                    key={item => item.Payment_Method?.id}
                    showsVerticalScrollIndicator={false}
                />
                <Button1 style={{ alignSelf: 'center', borderRadius:20 }} onPress={handleNext} backgroundColor={COLORS.secondary}>
                    Pay Now
                </Button1>
                <View style={{height: '1%'}} />

            </ScrollView>
        </View>
    );
};

export default PaymentOnline;

const cash = require('../../assets/images/atmcards.png')
const card = require('../../assets/images/googlepay.png')
const paytm = require('../../assets/images/paytm.png')
const phonepe = require('../../assets/images/phonepe.png')
const paymentMethods = [
    {
        Payment_Method: {
            id: 1,
            payment_mode: "Debit/ Credit Card"
        },
        Icon: cash
    },
    {
        Payment_Method: {
            id: 2,
            payment_mode: "Google Pay"
        },
        Icon: card
    },
    {
        Payment_Method: {
            id: 3,
            payment_mode: "Paytm"
        },
        Icon: paytm
    },
    {
        Payment_Method: {
            id: 4,
            payment_mode: "PhonePe"
        },
        Icon: phonepe
    },
    // Add more payment methods as needed
];