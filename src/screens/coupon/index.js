import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import styles from './styles';
import Button1 from '../../component/button/Button1';
import {RadioButton} from 'react-native-paper';
import {GetDiscountList} from '../../redux/actions/homeAction';
import globalStyles from '../../styles/globalStyles';

const Coupon = ({navigation, discountList, GetDiscountList, route}) => {
  // const {items} = route.params;
  const [id, setId] = useState();
  const [discount, setDiscount] = useState(null);
  const [subtotal, setSubtotal] = useState(0);

  // useEffect(() => {
  //   GetDiscountList();
  // }, []);

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
    // navigation.navigate('AddOn', {
    //   discountObj: discount,
    //   items: items,
    // });
    navigation.goBack();
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="light-content"
        />

        <View style={[styles.address_box]}>
          <View>
            {/* {discountList?.map((item, index) => {
              return ( */}
            <TouchableOpacity
              // key={item.id}
              activeOpacity={0.5}
              onPress={() => {
                // navigation.navigate('PickupSchedule');
                // setDiscount(item), setId(item.id);
              }}
              style={[
                styles.card,
                {marginTop: 20},
                // index == 0 && {marginTop: SIZES.height * 0.025},
              ]}>
              <RadioButton
                // value={userAddress}
                color={COLORS.white}
                // status={id === item.id ? 'checked' : 'unchecked'}
                onPress={() => {
                  // setDiscount(item), setId(item.id);
                }}
              />
              <View style={styles.box}>
                <View style={globalStyles.row}>
                  <Text style={styles.offer}>Extra 10% Off Upto 100/- Rs</Text>
                  {/* <Text style={styles.off_text}>off</Text> */}
                </View>
                <Text style={styles.offer_text}>Expires in 5 days</Text>
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
      </ScrollView>
      <View style={styles.bottom_btn_box}>
        <Button1 style={styles.btn} onPress={handleSubmit}>
          Apply Coupon
        </Button1>
      </View>
    </>
  );
};

// const mapStateToProps = state => ({
//   loading: state.home.loading,
//   discountList: state.home.discountList,
// });

// const mapDispatchToProps = {
//   GetDiscountList,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
export default Coupon;
