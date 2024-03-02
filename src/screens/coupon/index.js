import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import Button1 from '../../component/button/Button1';
import { RadioButton } from 'react-native-paper';
import { GetCouponList } from '../../redux/actions/homeAction';
import globalStyles from '../../styles/globalStyles';

const Coupon = ({ navigation, couponList, GetCouponList, route }) => {
  const { items } = route.params;
  const [id, setId] = useState();
  const [discount, setDiscount] = useState(null);
  const [subtotal, setSubtotal] = useState(0);

  console.log('couponListcountList', couponList);

  useEffect(() => {
    GetCouponList();
  }, []);

  // useEffect(() => {
  //   if (route.params) {
  //     let dis_amt = 0;
  //     if (discount == 0) {
  //       dis_amt = Number(route.params?.sub_total);
  //     } else {
  //       dis_amt = Number(route.params?.sub_total) * (discount / 100);
  //     }
  //     setSubtotal(dis_amt);
  //   }
  // }, [route.params, discount]);

  const handleSubmit = () => {
    navigation.navigate('AddOn', {
      // discountObj: discount,
      items: items,
    });
    // navigation.navigate('AddOn', {
    //   discountObj: discount,
    //   items: items,
    // });
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="light-content"
        />
        <View>
          {couponList && (
            <FlatList
              data={couponList}
              renderItem={({ item, index }) => (
                <View >
                  <View>
                    {/* {discountList?.map((item, index) => {
                    return ( */}
                    <TouchableOpacity
                      // key={item.id}
                      activeOpacity={0.5}
                      onPress={() => {
                        setDiscount(item), setId(item.id);
                        // navigation.navigate('PickupSchedule');
                        // setDiscount(item), setId(item.id);
                      }}
                      style={[
                        styles.card,
                        { marginTop: 20 },
                        // index == 0 && {marginTop: SIZES.height * 0.025},
                      ]}>
                      <RadioButton
                        // value={userAddress}
                        color={COLORS.white}
                        status={id === item.id ? 'checked' : 'unchecked'}
                        onPress={() => {
                          // setDiscount(item), setId(item.id);
                        }}
                      />
                      <View style={styles.box}>
                        <View style={globalStyles.row}>
                          <Text style={styles.offer}>{item.promo_code}</Text>
                          {/* <Text style={styles.offer}>Extra 10% Off Upto 100/- Rs</Text> */}
                          {/* <Text style={styles.off_text}>off</Text> */}
                        </View>
                        {/* <Text style={styles.offer_text}>Expires in 5 days</Text> */}
                        <Text style={styles.offer_text}>{item.description}</Text>

                      </View>
                    </TouchableOpacity>
                    {/* );
                  })} */}
                  </View>
                  {/* {subtotal && */}
                  <View style={styles.bottom_container}>
                    {/* <View style={styles.total_amt_row}>
                                  <Text style={styles.amount_text}>SubTotal</Text>
                                  <Text style={styles.amount_text}>₹{subtotal}</Text>
                              </View> */}
                  </View>
                  {/* } */}
                </View>



              )}
              key={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>


        <View style={styles.bottom_btn_box}>
          <Button1 style={styles.btn} onPress={handleSubmit}>
            Apply Coupon
          </Button1>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  couponList: state.home.couponList,
});

const mapDispatchToProps = {
  GetCouponList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
// export default Coupon;



