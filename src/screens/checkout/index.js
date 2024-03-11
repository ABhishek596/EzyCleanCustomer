import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from '../../constants';
import Button1 from '../../component/button/Button1';

const CheckOut = ({navigation, route}) => {
  const {data} = route.params;
  const lastdata = route?.params;
  const [totalPrice, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  console.log('data by addon', data);
  console.log('lastdata', lastdata);
  const getSingleTotal = item => {
    let total = 0;
    total = total + Number(item?.price);
    if (item?.packing_price) {
      total = total + Number(item?.packing_price);
    }
    if (item?.addon_price) {
      total = total + Number(item?.addon_price);
    }
    if (item?.shipping_price) {
      total = total + Number(item?.shipping_price);
    }
    return total;
  };

  const getTotalAmt = () => {
    let total = 0;
    data.forEach(item => {
      total = total + Number(item?.price);
      if (item?.packing_price) {
        total = total + Number(item?.packing_price);
      }
      if (item?.addon_price) {
        total = total + Number(item?.addon_price);
      }
      if (item?.shipping_price) {
        total = total + Number(item?.shipping_price);
      }
      setTotal(total);
    });
    // if (discountObj?.discount) {
    //   total = (total * Number(discountObj?.discount)) / 100;
    // }
    setSubtotal(total);
  };

  useEffect(() => {
    getTotalAmt();
  }, [data]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatViewMain}>
        <View style={styles.mainRow}>
          <View style={styles.rowView}>
            <View style={styles.iconView}>
              <Image source={{uri: item.image}} style={styles.icon} />
            </View>
            <Text style={styles.txtBold}>{item?.product_name}</Text>
          </View>
          <Text style={styles.txtBold}>₹ {item?.price}</Text>
        </View>

        {item?.color1_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>{item?.color1_name} (color)</Text>
          </View>
        ) : null}

        {/* {item?.dataAddon?.color2?.color_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.color2?.color_name} (color 2)
            </Text>
          </View>
        ) : null} */}

        {item?.damage_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>{item?.damage_name} (Damage)</Text>
          </View>
        ) : null}

        {item?.packing_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>{item?.packing_name} (Packing)</Text>
            <Text style={styles.txt}>₹ {item?.packing_price}</Text>
          </View>
        ) : null}

        {item?.dataAddon?.stain_id?.stains ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.dataAddon?.stain_id?.stains} (Stains)
            </Text>
          </View>
        ) : null}

        {item?.addon_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>{item?.addon_name} (Addon)</Text>
            <Text style={styles.txt}>₹ {item?.addon_price}</Text>
          </View>
        ) : null}

        {item?.shipping_name ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>{item?.shipping_name} (Delivery)</Text>
            <Text style={styles.txt}>₹ {item?.shipping_price}</Text>
          </View>
        ) : null}

        {item?.iron ? (
          <View style={styles.mainRow}>
            <Text style={styles.txt}>
              {item?.iron === 1 ? 'Yes' : item?.iron === null ? 'No' : null}
              (Ironing)
            </Text>
          </View>
        ) : null}

        <View style={styles.mainRow}>
          <Text style={styles.txtBold}>Total Amount</Text>
          <Text style={styles.txtBold}>₹ {getSingleTotal(item)}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      />
      <LinearGradient
        colors={['#651898', '#2C0D8F']}
        style={{
          backgroundColor: COLORS.secondary,
          width: SIZES.width * 1.0,
          borderTopLeftRadius: SIZES.width * 0.1,
          borderTopRightRadius: SIZES.width * 0.1,
        }} // Your styles for the LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: SIZES.width * 0.08,
            // marginTop: SIZES.height * 0.04,
            width: SIZES.width * 1.0,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            // margin:15,
            alignSelf: 'center',
            paddingVertical: SIZES.height * 0.005,
            paddingHorizontal: 5,
            // position: 'absolute',
            // bottom: 0,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal: SIZES.width * 0.08,
                width: SIZES.width * 0.5,
                // marginTop: SIZES.height * 0.04,
              }}>
              <Text style={{color: COLORS.secondary}}>
                Total Price ({data?.length} Items)
              </Text>
              <Text style={{color: COLORS.secondary}}>
                ₹ {totalPrice?.toFixed(1)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal: SIZES.width * 0.08,
                marginTop: SIZES.height * 0.01,
                width: SIZES.width * 0.5,
              }}>
              <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                Discount
              </Text>
              <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                {/* {discountObj?.discount ? discountObj?.discount + '%' : 0} */}
                {route?.params?.s_discount === undefined ?  0 : route?.params?.s_discount + '%' }
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal: SIZES.width * 0.08,
                marginTop: SIZES.height * 0.01,
                // paddingBottom: SIZES.height * 0.02,
                width: SIZES.width * 0.5,
              }}>
              <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                Subtotal
              </Text>
              <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                {'₹ ' + route?.params?.sub_total}
              </Text>
            </View>
          </View>
          <View>
            <Button1
              style={{
                // borderWidth: 2,
                // alignSelf: 'center',
                borderRadius: SIZES.width * 0.02,
                borderColor: COLORS.primary,
                // marginBottom: SIZES.width * 0.01,
                width: SIZES.width * 0.38,
              }}
              onPress={() => {
                navigation.navigate('PickupSchedule', {
                  ...lastdata,
                  pickupmylaundry: false,
                });
                // handleConfimOrder();
                // confirmColor1();
              }}
              // onPress={() => {
              //   if (visible === false) {
              //     setIsModalVisible(!isModalVisible);
              //   } else if (visible === true) {
              //     navigation.navigate('PickupSchedule', {
              //       item: JSON.stringify(addonsList),
              //       allprice: {
              //         total: totalAmount,
              //         sub_total:
              //           (totalAmount * Number(discountObj?.discount)) / 100,
              //         discount: discountObj?.discount,
              //         qty:shwitem.length
              //       },
              //     });
              //   }
              // }}
            >
              Confirm Order
            </Button1>
          </View>
        </View>
        {/* <View
            style={{
              height: SIZES.height * 0.01,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.white,
              borderTopColor: COLORS.white,
              marginTop: SIZES.height * 0.02,
            }}
          /> */}
        {/* <View style={{height: SIZES.height * 0.01}} /> */}
      </LinearGradient>
      {/* <View style={styles.totalView}>
        <View style={styles.mainRow}>
          <Text style={styles.totalTxt}>
            Total Price ({data?.length} Items)
          </Text>
          <Text style={styles.totalTxt}>₹ {totalPrice?.toFixed(1)}</Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.totalTxt}> */}
      {/* Discount ({discountObj?.discount}%) */}
      {/* Discount
          </Text>
          <Text style={styles.totalTxt}> */}
      {/* ₹ {(Number(totalPrice) - Number(subtotal))?.toFixed(1)} */}
      {/* {"₹ "+ route?.params?.s_discount} */}
      {/* </Text>
        </View>
        <View style={styles.mainRow}>
          <Text style={styles.totalTxtBold}>Subtotal</Text> */}
      {/* <Text style={styles.totalTxtBold}>₹ {subtotal?.toFixed(1)}</Text> */}
      {/* <Text style={styles.totalTxtBold}>{"₹ "+ route?.params?.sub_total}</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default CheckOut;
