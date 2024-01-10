import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useCallback, useState} from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import {GetActiveSubscription} from '../../redux/actions/subscriptionAction';
import Loading from '../../component/loading';
import {formatDate} from '../../services/date';
import Button1 from '../../component/button/Button1';
import {useFocusEffect} from '@react-navigation/native';
import {SIZES, COLORS} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import RazorpayCheckout from 'react-native-razorpay';

const Subscription = ({
  loading,
  GetActiveSubscription,
  subsDetails,
  navigation,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [catId, setCatId] = useState(1);
  console.log('subsDetails', subsDetails);
  const onRefresh = () => {
    // This function will be called when the user pulls down to refresh.
    // Put your data refresh logic here.
    GetActiveSubscription();
  };

  useFocusEffect(
    useCallback(() => {
      GetActiveSubscription();
    }, []),
  );

  // useEffect(() => {
  //   GetActiveSubscription();
  // }, []);

  const CategoryButton = ({
    onPress,
    title,
    isActive,
    marginLeft,
    marginBottom,
    style,
    titlestyl,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.cat_touch,
          backgroundColor: isActive ? COLORS.white : null,
          marginLeft: marginLeft,
          marginBottom: marginBottom,
          ...style,
        }}
        onPress={onPress}>
        <Text
          style={[
            styles.cat_text,
            isActive && styles.active_cat_text,
            titlestyl,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  CategoryButton.defaultProps = {
    onPress: null,
    title: null,
    isActive: false,
    marginLeft: null,
    marginBottom: null,
  };

  const handleGenderPress = gender => {
    setCatId(gender);
  };

  return (
    <View style={styles.mainView}>
      <ScrollView
        style={styles.mainView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <LinearGradient
              colors={['#651898', '#2C0D8F']}
              style={{
                marginVertical: SIZES.height * 0.03,
                alignItems: 'center',
              }} // Your styles for the LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <FlatList
                data={categoryList}
                renderItem={({item, index}) => (
                  <CategoryButton
                    marginLeft={index == 0 ? SIZES.width * 0.1 : 0}
                    title={item.category_name}
                    isActive={catId == item.id ? true : false}
                    onPress={() => {
                      // console.log('idididididididi------------------', item.id);
                      // setCatId(item.id);
                      handleGenderPress(item.id);
                    }}
                    // style={{alignSelf:'center'}}
                  />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={(_, index) => index}
              />
            </LinearGradient>
            <View style={styles.mainSubView}>
              <View style={styles.rowView}>
                <View style={styles.imgView}>
                  <Image
                    source={{
                      uri: subsDetails?.existing_subscription_details
                        ?.sub_image,
                    }}
                    style={styles.img}
                  />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.nameTxt}>
                    {subsDetails?.existing_subscription_details?.sub_name}
                  </Text>
                  <Text style={styles.feeTxt}>
                    {
                      subsDetails?.existing_subscription_details
                        ?.sub_description
                    }
                  </Text>
                </View>
              </View>
              <View style={styles.subDetailsView}>
                <View>
                  <Text style={styles.infoTxt}>Number of Booking</Text>
                  {/* <Text style={styles.infoTxtSm}>(Remaining)</Text> */}
                </View>
                <Text style={styles.infoTxtBold}>
                  {
                    subsDetails?.existing_subscription_details
                      ?.available_no_of_bookings
                  }
                </Text>
              </View>
              <View style={styles.horizLine} />
              <View style={styles.subDetailsView}>
                <Text style={styles.infoTxt}>Plan Validity</Text>
                <Text style={styles.infoTxtBold}>
                  {formatDate(
                    subsDetails?.existing_subscription_details?.start_date,
                  )}
                </Text>
              </View>
              <View style={styles.horizLine} />
              <Button1
                style={styles.activeSubBtn}
                onPress={() => {
                  // navigation.navigate('PaymentOnline');
                  // Alert.alert(
                  //   'Subscription Alert!',
                  //   'Please purchase a subscription plan to continue order',
                  //   [
                  //     {
                  //       text: 'Buy Subscription',
                  //       onPress: () => navigation.navigate('subscription'),
                  //       // onPress: () => navigation.navigate('ActivePlan'),
                  //     },
                  //     {
                  //       text: 'OK',
                  //       onPress: () => {},
                  //     },
                  //   ],
                  // );
                  var options = {
                    description: 'EzyCleaneCustomer App',
                    image: 'https://i.imgur.com/3g7nmJC.png',
                    currency: 'INR',
                    key: 'rzp_test_pnG5OaLilqPgMb', // Your api key
                    amount: '1000' * 100,
                    name: 'EzyCleaneCustomer',
                    prefill: {
                      email: 'void@razorpay.com',
                      contact: '9191919191',
                      name: 'Razorpay Software',
                    },
                    theme: {color: '#1C1364'},
                  };
                  RazorpayCheckout.open(options)
                    .then(data => {
                      // handle success
                      // Alert.alert(`Success: ${data.razorpay_payment_id}`);
                      console.log('data', data);
                      if (data.status_code === 200) {
                        setTimeout(() => {
                          navigation.navigate('Product', {package: true});
                        }, 2000);
                      }
                    })
                    .catch(error => {
                      // handle failure
                      Alert.alert(
                        `Error: ${error.code} | ${error.description}`,
                      );
                    });
                }}>
                Buy Subscription
              </Button1>
            </View>
            {/* {subsDetails ? (
                <View style={styles.mainSubView}>
                  <View style={styles.rowView}>
                    <View style={styles.imgView}>
                      <Image
                        source={{
                          uri: subsDetails?.existing_subscription_details
                            ?.sub_image,
                        }}
                        style={styles.img}
                      />
                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.nameTxt}>
                        {subsDetails?.existing_subscription_details?.sub_name}
                      </Text>
                      <Text style={styles.feeTxt}>
                        {
                          subsDetails?.existing_subscription_details
                            ?.sub_description
                        }
                      </Text>
                    </View>
                  </View>
                  <View style={styles.subDetailsView}>
                    <View>
                      <Text style={styles.infoTxt}>Number of Product</Text>
                      <Text style={styles.infoTxtSm}>(Remaining)</Text>
                    </View>
                    <Text style={styles.infoTxtBold}>
                      {
                        subsDetails?.existing_subscription_details
                          ?.available_no_of_bookings
                      }
                    </Text>
                  </View>
                  <View style={styles.horizLine} />
                  <View style={styles.subDetailsView}>
                    <Text style={styles.infoTxt}>Starting Date</Text>
                    <Text style={styles.infoTxtBold}>
                      {formatDate(
                        subsDetails?.existing_subscription_details?.start_date,
                      )}
                    </Text>
                  </View>
                  <View style={styles.horizLine} />
                  <View style={styles.subDetailsView}>
                    <Text style={styles.infoTxt}>Expiry Date</Text>
                    <Text style={styles.infoTxtBold}>
                      {formatDate(
                        subsDetails?.existing_subscription_details?.end_date,
                      )}
                    </Text>
                  </View>
                </View>
              ) : (
                <Text
                  style={{ color: 'black', fontWeight: '600', textAlign: 'center' }}>
                  No Active Plan Found.
                </Text>
              )} */}
          </View>
        )}
        {/* <Button1
            style={styles.activeSubBtn}
            onPress={() => {
              navigation.navigate('Subscription');
            }}>
            Upgrade Subcription
          </Button1> */}
        {/* <View style={{paddingVertical:13}}>
           <Text style={{fontSize:15,color:'#ffffff',alignSelf:'center',backgroundColor:'green',paddingVertical:13,paddingHorizontal:80,borderRadius:10}}>Current Active Plan</Text>
        </View> */}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  subsDetails: state.subscription.subsDetails,
});

const mapDispatchToProps = {
  GetActiveSubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);

const categoryList = [
  {
    id: 1,
    category_name: 'Pieces',
  },
  {
    id: 2,
    category_name: 'Kg',
  },
];
