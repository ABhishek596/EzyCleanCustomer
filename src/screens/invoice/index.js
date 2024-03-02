import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images, FONTS } from '../../constants';
import Loading from '../../component/loading';
// import ServiceCard from '../../component/card/ServiceCard';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';



const Invoice = ({ navigation, loading, categoryList, route }) => {

  // console.log("category data : ", categoryList)
  // console.log("invoice  order_id : ", route?.params?.id);
  // const order = [1, 2, 3, 4]
  const id_od = route?.params?.id

  const [bill, setBill] = useState();
  // console.log("category data : ", bill);

  useEffect(() => {

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://ezyclean.theprojectxyz.xyz/api/app-invoice/${id_od}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        // console.log("///////////////", JSON.stringify(response.data));
        setBill(response.data.result.orderdata);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);




  return (
    <>
      {loading ?
        <Loading />
        :
        <View style={globalStyles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
          <View style={globalStyles.center}>

            {/* category container */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {bill && (
                <LinearGradient
                  colors={['#F4E3FF', '#E7DFFF']}
                  style={[styles.box, { marginTop: SIZES.height * .025 }]} // Your styles for the LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}>
                  <View style={styles.box_header}>
                    <Text style={styles.order_id}>Order {bill.order_id}</Text>
                    {/* <TouchableOpacity activeOpacity={0.5}
                      style={styles.cancel_btn}
                    >
                      <Text style={styles.cancel}>Download</Text>
                    </TouchableOpacity> */}
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>Phone No.</Text>
                    <Text style={styles.order_text}>98765 43210</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>Date & Time</Text>
                    <Text style={styles.order_text}>12/10/23  12:10 PM</Text>
                  </View>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/images/barcode.png')} />
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>Invoice No.</Text>
                    <Text style={styles.order_text}># 00151</Text>
                  </View>
                  <Text style={styles.order_title3}>LAUNDRY</Text>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>Pickup Date</Text>
                    <Text style={styles.order_text}>18/May/2023</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>Delivery</Text>
                    <Text style={styles.order_text}>20/Jun/2023</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>Bag No.</Text>
                    <Text style={styles.order_text}>1230</Text>
                  </View>
                  <View style={[styles.order_row, { borderColor: "#000000", }]}>
                    <Text style={styles.order_title}>Weight</Text>
                    <Text style={styles.order_text}>5 kg</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={styles.order_title}>2 Blazer</Text>
                    <Text style={styles.order_text}>₹ 880.00</Text>
                  </View>
                  <View style={[styles.order_row, { borderColor: "#000000", }]}>
                    <Text style={styles.order_title}>2 Pants</Text>
                    <Text style={styles.order_text}>₹ 880.00</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={[styles.order_title, { fontWeight: 'bold' }]}>SUB-TOTAL</Text>
                    <Text style={[styles.order_text, { fontWeight: 'bold' }]}>₹ 1760.00</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={[styles.order_title, { fontWeight: 'bold' }]}>DISCOUNT</Text>
                    <Text style={[styles.order_text, { fontWeight: 'bold' }]}>₹ 50.00</Text>
                  </View>
                  <View style={[styles.order_row, { borderBottomWidth: 0, }]}>
                    <Text style={[styles.order_title, { fontWeight: 'bold' }]}>TOTAL</Text>
                    <Text style={[styles.order_text, { fontWeight: 'bold' }]}>₹ 1710.00</Text>
                  </View>

                </LinearGradient>
              )}
            </ScrollView>
          </View>
        </View>
      }
    </>

  )
}

// const mapStateToProps = (state) => ({
//   loading: state.home.loading,
//   categoryList: state.home.categoryList,
// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
export default Invoice;