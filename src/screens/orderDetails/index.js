import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Moment from 'moment';
import StepIndicator from 'react-native-step-indicator';
import {COLORS, SIZES, icons, FONTS} from '../../constants';
import {useState} from 'react';
import styles from './styles';
import {useEffect} from 'react';
import {GetOrderStatusList} from '../../redux/actions/orderAction';
import {connect} from 'react-redux';
import ProgressCircle from 'react-native-progress-circle';
import LinearGradient from 'react-native-linear-gradient';

const labels = [
  'Order Placed',
  'Assigned',
  'On the way to pickup',
  'Processing',
  'Ready to dispatch',
  'On the way to deliver',
  'Completed',
];

const singleOrder = {
  order_id: '123456',
  created_at: '2023-11-09T12:30:00',
  label_name: 'Processing',
  pickup_date: '2023-11-10',
  pickup_time: '15:00 - 16:00',
  delivery_date: '2023-11-12',
  delivery_time: '10:00 - 11:00',
  address: '123 Main St, Cityville',
  payment_mode: 'Credit Card',
  items: [
    {
      qty: 2,
      product_name: 'T-Shirt',
      service_name: 'Standard',
      price: 25,
    },
    {
      qty: 1,
      product_name: 'Jeans',
      service_name: 'Express',
      price: 40,
    },
  ],
  total: 90,
  discount: 10,
  delivery_cost: 5,
};

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 35,
  currentStepStrokeWidth: 3,
  currentStepIndicatorLabelFontSize: 13,
  currentStepLabelColor: COLORS.primary,
  stepIndicatorCurrentColor: COLORS.white,
  stepStrokeCurrentColor: COLORS.primary,
  separatorStrokeWidth: 2,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: COLORS.primary,
  stepStrokeUnFinishedColor: COLORS.gray69,
  separatorFinishedColor: COLORS.primary,
  separatorUnFinishedColor: COLORS.gray69,
  stepIndicatorFinishedColor: COLORS.white,
  stepIndicatorUnFinishedColor: COLORS.gray69,
  stepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: COLORS.gray69,
  stepIndicatorLabelFinishedColor: COLORS.primary,
  stepIndicatorLabelUnFinishedColor: COLORS.white,
  labelColor: COLORS.gray69,
  backgroundColor: COLORS.primary,
  labelSize: 16,
  labelAlign: 'flex-start',
};

const Divider = () => {
  return <View style={styles.order_divider} />;
};

const OrderDetails = ({
  navigation,
  GetOrderStatusList,
  route,
  orderStatusList,
}) => {
  // console.log("order details : ", route.params?.data)

  // const singleOrder = route.params.data;

  // console.log('This is objjjjjj-->>>>', singleOrder);

  const [active, setActive] = useState(1);

  // useEffect(() => {
  //   GetOrderStatusList();
  // }, []);

  return (
    <View style={styles.container}>
      {singleOrder && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={['#F5E6FF', '#F3E1FF']}
            style={[styles.box, {marginTop: SIZES.height * 0.025}]} // Your styles for the LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.box_header}>
              <Text style={styles.order_id2}>Order #Dry0010C1</Text>
              <TouchableOpacity activeOpacity={0.5} style={styles.cancel_btn}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.order_row}>
              <Text style={styles.order_title}>Pickup Date</Text>
              <Text style={styles.order_text}>18/May/2023</Text>
            </View>
            <View style={styles.order_row}>
              <Text style={styles.order_title}>Pickup Time</Text>
              <Text style={styles.order_text}>10:00 am</Text>
            </View>
            <View style={styles.order_row}>
              <Text style={styles.order_title}>Quantity</Text>
              <Text style={styles.order_text}>09 Items</Text>
            </View>
            <View style={[styles.order_row, {marginTop: SIZES.height * 0.01}]}>
              <Text style={[styles.order_title, {fontWeight: 'bold'}]}>
                Total Amount
              </Text>
              <Text style={[styles.order_text, {fontWeight: 'bold'}]}>
                $ 87
              </Text>
            </View>
          </LinearGradient>

          <LinearGradient
            colors={['#F5E6FF', '#F3E1FF']}
            style={{
              height: 500,
              padding: 10,
              backgroundColor: 'red',
              // borderRadius: SIZES.width * 0.074,
              borderTopLeftRadius: SIZES.width * 0.074,
              borderTopRightRadius: SIZES.width * 0.074,
            }} // Your styles for the LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={Number(singleOrder?.status) - 1}
              labels={labels}
              // labels={orderStatusList.label_name}
              stepCount={7}
              direction="vertical"
            />
          </LinearGradient>
        </ScrollView>
      )}

      {/* {active == 2 &&
                <View style={{ height: 500, padding: 10 }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={2}
                        labels={labels}
                        stepCount={7}
                        direction="vertical"
                    />
                </View>
            } */}
    </View>
  );
};

// const mapStateToProps = state => ({
//   orderStatusList: state.order.orderStatusList,
// });

// const mapDispatchToProps = {
//   GetOrderStatusList,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
export default OrderDetails;
