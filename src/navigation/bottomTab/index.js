import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES, icons, images} from '../../constants';
import Icons from '../../component/Icons';
import styles from './styles';
import {Image, Text} from 'react-native';
import Home from '../../screens/home';
// import MyBucket from "../../screens/myBucket";
// import ActiveOrder from "../../screens/activeOrder";
import RateList from '../../screens/rateList';
// import account from "../../screens/account";
import HeaderLeft from '../../component/Header/HeaderLeft';
import MyOrders from '../../screens/activeOrder';
// import myBookings from "../../screens/myBookings
import Account from '../../screens/account';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const tabOptions = {
  activeTintColor: COLORS.white,
  // tabBarInActiveTintColor: COLORS.white,
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.white,
        // tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
        // tabBarLabelStyle: styles.labelStyle,
        // headerShown: false,
        tabBarLabel: ({focused}) => {
          const tabBarLabelStyle = focused
            ? styles.activeLabelStyle
            : styles.inactiveLabelStyle;
          // console.log("tab label : ", tintColor, route.name)
          switch (route.name) {
            case 'Home':
              return <Text style={tabBarLabelStyle}>Home</Text>;
            // case "Schedule":
            //     return <Text style={tabBarLabelStyle}>Schedule</Text>
            case 'Order':
              return <Text style={tabBarLabelStyle}>Orders</Text>;
            // case "Booking":
            //     return <Text style={tabBarLabelStyle}>Bookings</Text>
            case 'Rate':
              return <Text style={tabBarLabelStyle}>Rate List</Text>;
            case 'Account':
              return <Text style={tabBarLabelStyle}>Profile</Text>;
          }
        },
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : null;
          switch (route.name) {
            case 'Home':
              return (
                <Icons
                  name={focused ? 'home' : 'home_outline'}
                  size={22}
                  color={tintColor}
                />
              );
            // case "Schedule":
            //     return <Icons name={focused ? "cloth" : "cloth_outline"} size={22} color={tintColor} />
            // case "Booking":
            //     return <Icons name={focused ? "appointment" : "appointment_outline"} size={22} color={tintColor} />
            case 'Rate':
              return (
                <Icons
                  name={focused ? 'rate' : 'rate_outline'}
                  size={22}
                  color={tintColor}
                />
              );
            case 'Order':
              return (
                <Icons
                  name={focused ? 'order' : 'order_outline'}
                  size={22}
                  color={tintColor}
                />
              );
            case 'Account':
              return (
                <Icons
                  name={focused ? 'profile' : 'profile_outline'}
                  size={22}
                  color={tintColor}
                />
              );
          }
        },
        tabBarBackground: () => (
          // Use LinearGradient as the background
          <LinearGradient
            colors={['#651898', '#2C0D8F']}
            style={styles.tabBarStyle} // Your styles for the LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      {/* <Tab.Screen name="Schedule" component={MyBucket} 

              options={({navigation}) => ({
                header: () => (
                    <HeaderLeft navigation={navigation} title={"My Bucket"} showNotificationButton={true} />
                  ),
            })}
            /> */}

      {/* <Tab.Screen name="Booking" component={myBookings}
                options={({ navigation }) => ({
                    header: () => (
                        <HeaderLeft navigation={navigation} title={"All Booking"}
                            //  showBack={false} 
                            showNotificationButton={false} />
                    ),
                })}
            /> */}
      <Tab.Screen
        name="Rate"
        component={RateList}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Rate List'}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Order"
        component={MyOrders}
        options={({navigation}) => ({
          header: () => (
            <HeaderLeft
              navigation={navigation}
              title={'Active order'}
              //  showBack={false}
              showNotificationButton={true}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={() => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
