import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {COLORS, Icons, SIZES, icons, images} from '../../constants';
import styles from './styles';
import EditProfile from '../../screens/editProfile';
import HeaderLeft from '../../component/Header/HeaderLeft';
// import Category from '../../screens/category';
import AllServices from '../../screens/allServices';
import BottomTab from '../bottomTab';
import Header from '../../component/Header/Header';
import Notification from '../../screens/notification';
import Payment from '../../screens/payment';
import PaymentSuccess from '../../screens/paymentSuccess';
import PaymentFailed from '../../screens/paymentFailed';
// import home from '../../screens/home';
import ContactUs from '../../screens/contactUs';
import PrivacyPolicy from '../../screens/privacyPolicy';
// import {Image, View} from 'react-native';
// import services from '../../screens/services';
import Product from '../../screens/Product';
// import editAddress from '../../screens/editAddress';
// import AddNewAddress from '../../screens/addNewAddress';
// import address from '../../screens/address';
// import schedule from '../../screens/schedule';
import PickupSchedule from '../../screens/pickupSchedule';
import DeliverySchedule from '../../screens/deliverySchedule';
import OrderDetails from '../../screens/orderDetails';
import discount from '../../screens/discount';
// import addCurrentAddress from '../../screens/addCurrentAddress';
// import Subscription from '../../screens/subscription';
// import SubscriptionDetails from '../../screens/subscriptionDetails';
import subscription from '../../screens/subscription';
import ActivePlan from '../../screens/activePlan';
// import CheckOut from '../../screens/checkout';
import AddOnScreen from '../../screens/addOnScreen';
// import QrScreen from '../../screens/qrscreen';
// import AppointmentCompleted from '../../screens/appointmentCompleted';
import AboutUs from '../../screens/aboutus';
import Faqs from '../../screens/faqs';
import Coupon from '../../screens/coupon';
import Address from '../../screens/address';
import PaymentOnline from '../../screens/paymentonline';
import PaymentByCard from '../../screens/paymentbycard';
import Invoice from '../../screens/invoice';
import History from '../../screens/history';
import CheckOut from '../../screens/checkout';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      // initialRouteName='ContactUs'
      screenOptions={() => ({
        // headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={() => ({
          headerShown: false,
        })}
      />

      <Stack.Screen
        name="AllServices"
        component={AllServices}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'All Services'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Payment Method'} />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentOnline"
        component={PaymentOnline}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Payment Method'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentByCard"
        component={PaymentByCard}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Payment Method'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={({navigation}) => ({
          // headerTitle: "Payment Success",
          // headerStyle: styles.headerStyle,
          // headerTitleStyle: styles.headerTitleStyle1,
          // headerTitleAlign: 'left',
          // headerTintColor: COLORS.white,
          // headerBackImage: () => (
          //    <Image source={icons.back} style={styles.back} resizeMode='contain' />
          // ),
          // headerBackground: () => (
          //   <View style={styles.header}>
          //     <Image source={images.bg} style={{ height: SIZES.height * .1 }} />
          //   </View>
          // ),

          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Payment Successful'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PaymentFailed"
        component={PaymentFailed}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Payment Failed'}
              showNotificationButton={true}
            />
          ),
        })}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Notification'} />
          ),
        })}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Contact Us'} />
          ),
        })}
      />
      <Stack.Screen
        name="Discount"
        component={discount}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Discount'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Privacy Policy'} />
          ),
        })}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'About Us'} />
          ),
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Product'} />
          ),
        })}
      />
      <Stack.Screen
        name="AddOn"
        component={AddOnScreen}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Product'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Invoice'} />
          ),
        })}
      />

      <Stack.Screen
        name="Address"
        component={Address}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Address'}
              showNotificationButton={true}
            />
          ),
        })}
      />

      <Stack.Screen
        name="PickupSchedule"
        component={PickupSchedule}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Pickup Schedule'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="DeliverySchedule"
        component={DeliverySchedule}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Delivery Schedule'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft navigation={navigation} title={'Order Details'} />
          ),
        })}
      />
      <Stack.Screen
        name="Faqs"
        component={Faqs}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'FAQs'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Coupon"
        component={Coupon}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Coupon'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ActivePlan"
        component={ActivePlan}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Active Subscription'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'History'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'CheckOut'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Stack.Screen
        name="subscription"
        component={subscription}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Subscription'}
              showNotificationButton={true}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
