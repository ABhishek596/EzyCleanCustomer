import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ImageBackground,
  Image,
  PermissionsAndroid,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, icons, images} from '../../constants';
import Loading from '../../component/loading';
// import {http2} from '../../services/api';
import Icons from '../../component/Icons';
import CategoryCard from '../../component/card/CategoryCard';
import ServiceCard from '../../component/card/ServiceCard';
// import messaging from '@react-native-firebase/messaging';
// import {GetActiveSubscription} from '../../redux/actions/subscriptionAction';
// import CustomButton from '../../component/custombutton';
import LinearGradient from 'react-native-linear-gradient';
import {GetDiscountList} from '../../redux/actions/homeAction';
import {GetUserDataApi} from '../../redux/actions/authActions';
import axios from 'axios';

const Home = ({
  navigation,
  userData,
  loading,
  categoryList,
  serviceList,
  GetActiveSubscription,
  route,
  discountList,
  GetDiscountList,
  GetUserDataApi,
}) => {
  const OfferItem = ({item}) => {
    return (
      <Pressable 
      // onPress={() => navigation.navigate('Discount')}
      >
        <LinearGradient
          colors={['#651898', '#2C0D8F']}
          style={[styles.offer_box]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View>
            <View style={globalStyles.row}>
              <Text style={styles.offer}>{item.promo_name}</Text>
              {/* <Text style={styles.off_text}>off</Text> */}
            </View>
            <Text style={styles.offer_text}>{`${item.description.slice(
              0,
              34,
            )}...`}</Text>

            <View style={styles.offer_btn}>
              <Text style={styles.offer_btn_text}>{item.promo_code}</Text>
            </View>
          </View>

          <Image
            source={require('../../assets/images/offer.png')}
            style={styles.offer_image}
            resizeMode="contain"
          />
        </LinearGradient>
      </Pressable>
    );
  };

  useEffect(() => {
    let data = '';

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/categories',
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then(response => {
         // console.log('catagoryathome',JSON.stringify(response.data.data));
        setCategory(response.data.data);
      })
      .catch(error => {
        // console.log(error);
      });
  }, []);

  useEffect(() => {
    let data = '';

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/services',
      headers: {
        Authorization:
          'Bearer 160|LMkKJ9t0E4aTjRqXYRa5d10wByUbQ2wRkxJldtKj1f90965d',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
         // console.log(JSON.stringify(response.data));
        setService(response.data.data);
      })
      .catch(error => {
        // console.log(error);
      });
  }, []);

  const [category, setCategory] = useState();
  const [service, setService] = useState();

  // // console.log('discountList at Home', discountList);
  // const  data  = route?.params?.data;
  // // console.log("userdatattthome", data);
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   // GetNotificationApi(navigation)
  //   // console.log('Message handled in the background!', remoteMessage);
  // });

  // messaging().getInitialNotification(async remoteMessage => {
  //   // console.log('Message handled in the background!', remoteMessage);
  // });

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   GetActiveSubscription();
  // }, []);

  // // console.log('category list : ====>>>>', JSON.stringify(categoryList));
  // // console.log('service list :===>>>>', serviceList);

  // // console.log("skldjf : ",  userData?.profile_picture?.slice(-10, -4))
  useEffect(() => {
    GetDiscountList();
  }, []);

  useEffect(() => {
    GetUserDataApi();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          {/* header */}
          <ImageBackground
            source={images.bg}
            style={styles.header_bg}
            resizeMode='stretch'>
            <View style={styles.header_row}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.logo_box}>
                  <Image
                    source={images.logo}
                    style={styles.logo}
                    resizeMode="center"
                  />
                </View>

                <View style={{marginLeft: SIZES.width * 0.04}}>
                  {/* <Text style={styles.user_name}>Hello {userData && (`${userData.name}`)}</Text> */}
                  <Text style={styles.user_name}>{userData?.customer_name}</Text>
                  <Text style={styles.text}>Welcome Back</Text>
                </View>
              </View>
              <View style={globalStyles.row}>
                <View style={styles.image_box}>
                  {/* <Image source={userData?.profile_picture?.slice(-10, -4) == "avatar" ? images.profile1 : { uri: userData.profile_picture }} style={styles.profile}
                  resizeMode='stretch' 
                /> */}
                  <Image
                    source={
                      userData?.profile_picture
                        ? {uri: userData.profile_picture}
                        : images.profile1
                    }
                    style={styles.profile}
                    resizeMode="stretch"
                  />
                </View>
                <TouchableOpacity
                  style={styles.notification_btn}
                  onPress={() => navigation.navigate('Notification')}>
                  <Icons
                    name={'notification'}
                    size={16}
                    color={COLORS.secondary}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* <TouchableOpacity style={styles.loc_btn}>
              <View style={styles.loc_box}>
                <Icons name={"location"} size={20} color={COLORS.white} />
              </View>
              <View style={styles.loc_row}>
                <View>
                  <Text style={styles.your_loc}>Your Location</Text>
                  <Text style={styles.loc_text}>643292 Weber Fork, Cruzcheater</Text>
                </View>
                <Icons name={"down-outline"} size={20} color={COLORS.black} />
              </View>
            </TouchableOpacity> */}
          </ImageBackground>

          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {/* <View style={globalStyles.center}> */}
            {/* service container */}
            <>
              <View style={globalStyles.center}>
                <View
                  style={{
                    ...globalStyles.row1,
                    marginVertical: SIZES.height * 0.02,
                  }}>
                  <Text style={styles.title}>Services</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AllServices')}>
                    <Text style={styles.see_all}>See All</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {service?.map(item => (
                    <ServiceCard
                      key={item?.id}
                      // source={images.primWash}
                      source={{uri: item?.image}}
                      service={item?.service_name}
                      // subTitle={item.service?.description}
                      onPress={() =>
                        navigation.navigate('Product', {
                          serviceId: item.id,
                        })
                      }
                    />
                  ))}
                </ScrollView>
              </View>
            </>

            {/* offer box */}
            {/* <Pressable onPress={() => navigation.navigate('Coupon')}>
              <View style={globalStyles.center}>
                <LinearGradient
                  colors={['#651898', '#2C0D8F']}
                  style={styles.offer_box} // Your styles for the LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <View>
                    <View style={globalStyles.row}>
                      <Text style={styles.offer}>50% </Text>
                      <Text style={styles.off_text}>off</Text>
                    </View>
                    <Text style={styles.offer_text}>Only first order</Text>

                    <View style={styles.offer_btn}>
                      <Text style={styles.offer_btn_text}>Special 20%</Text>
                    </View>
                  </View>

                  <Image
                    source={images.offer}
                    style={styles.offer_image}
                    resizeMode="contain"
                  />
                </LinearGradient>
              </View>
            </Pressable> */}
            <FlatList
              data={discountList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => <OfferItem item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            {/* category container */}
            <>
              <View style={globalStyles.center}>
                <View style={styles.row1}>
                  <Text style={styles.title}>Category</Text>
                  {/* <TouchableOpacity
                  // onPress={() => navigation.navigate("Category")}
                  >
                    <Text style={styles.see_all}>See All</Text>
                  </TouchableOpacity> */}
                </View>
                {category && (
                  <FlatList
                    data={category} //categoryList
                    renderItem={({item, index}) => 
                    {
                    // // console.log('categoryitem',item);

                    return(
                      <CategoryCard
                        marginLeft={SIZES.width * 0.03}
                        mr={
                          index == categoryList?.length - 1
                            ? SIZES.width * 0.05
                            : SIZES.width * 0.02
                        }
                        category={item.category_name}
                        source={{uri: item.category_image}}
                        // source={{uri: item.images}}
                        onPress={() =>{
                          // // console.log('categoryitemonclic',item.id);
                          navigation.navigate('Product', {
                            catId: item.id,
                           
                          });
                        }}
                      />
                    )}}
                    horizontal={true}
                    key={item => item?.id}
                    showsHorizontalScrollIndicator={false}
                  />
                )}
              </View>
            </>

            {/* </View> */}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
  loading: state.home.loading,
  categoryList: state.home.categoryList,
  serviceList: state.home.serviceList,
  discountList: state.home.discountList,
});

const mapDispatchToProps = {
  // GetActiveSubscription,
  GetDiscountList,
  GetUserDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// const category = [
//   {
//     id: 1,
//     category_name: 'Men',
//     category_name_ar: null,
//     category_image: 'categories/6b92e366d82c3c92deaed75974fd7545.png',
//     service_id: ['1'],
//     status: 1,
//     created_at: '2023-10-09T06:30:49.000000Z',
//     updated_at: '2023-10-09T06:30:49.000000Z',
//     services: [{id: 1, service_name: 'Dry Cleaning'}],
//     images:"http://ezyclean.theprojecttest.xyz/public/storage/categories/6b92e366d82c3c92deaed75974fd7545.png",
//       // 'https://dryfi.theprojecttest.xyz/public/uploads/categories/6b92e366d82c3c92deaed75974fd7545.png',
//   },
//   {
//     id: 2,
//     category_name: 'Women',
//     category_name_ar: null,
//     category_image: 'categories/2577ecdc7eb5f0141df74358eee429c0.png',
//     service_id: ['2', '3'],
//     status: 1,
//     created_at: '2023-10-09T06:31:49.000000Z',
//     updated_at: '2023-10-09T06:31:49.000000Z',
//     services: [
//       {id: 2, service_name: 'Ironing'},
//       {id: 3, service_name: 'Wash & Clean'},
//     ],
//     images: "http://ezyclean.theprojecttest.xyz/public/storage/categories/2577ecdc7eb5f0141df74358eee429c0.png",
//       // 'https://dryfi.theprojecttest.xyz/public/uploads/categories/2577ecdc7eb5f0141df74358eee429c0.png',
//   },
//   {
//     id: 3,
//     category_name: 'Kids',
//     category_name_ar: null,
//     category_image: 'categories/e2cff0705861f2e45251761b6d3cd44f.png',
//     service_id: ['1', '3'],
//     status: 1,
//     created_at: '2023-10-09T06:32:06.000000Z',
//     updated_at: '2023-10-09T06:32:06.000000Z',
//     services: [
//       {id: 1, service_name: 'Dry Cleaning'},
//       {id: 3, service_name: 'Wash & Clean'},
//     ],
//     images: "http://ezyclean.theprojecttest.xyz/public/storage/categories/e2cff0705861f2e45251761b6d3cd44f.png",
//       // 'https://dryfi.theprojecttest.xyz/public/uploads/categories/e2cff0705861f2e45251761b6d3cd44f.png',
//   },
// ];
//{ uri: require('../../assets/images/qrimg.jpg') },

// const service = [
//   {
//     image:
//       'https://dryfi.theprojecttest.xyz/public/uploads/services/f9b05ca89ba2e6899ad4a1b83175b61c.png',
//     service: {
//       created_at: '2023-10-09T06:27:36.000000Z',
//       description: 'Dry Cleaning',
//       description_ar: null,
//       id: 1,
//       image: 'services/f9b05ca89ba2e6899ad4a1b83175b61c.png',
//       service_name: 'Dry Cleaning',
//       service_name_ar: null,
//       status: 1,
//       updated_at: '2023-10-09T06:27:36.000000Z',
//     },
//   },
//   {
//     image:
//       'https://dryfi.theprojecttest.xyz/public/uploads/services/cff14d111f88e238d5314f6f3690aa3b.png',
//     service: {
//       created_at: '2023-10-09T06:28:48.000000Z',
//       description: 'ironing',
//       description_ar: null,
//       id: 2,
//       image: 'services/cff14d111f88e238d5314f6f3690aa3b.png',
//       service_name: 'Ironing',
//       service_name_ar: null,
//       status: 1,
//       updated_at: '2023-10-09T06:28:48.000000Z',
//     },
//   },
//   {
//     image:
//       'https://dryfi.theprojecttest.xyz/public/uploads/services/15c2441979364ee709d29474185ea199.png',
//     service: {
//       created_at: '2023-10-09T06:29:17.000000Z',
//       description: 'wash and clean',
//       description_ar: null,
//       id: 3,
//       image: 'services/15c2441979364ee709d29474185ea199.png',
//       service_name: 'Wash & Clean',
//       service_name_ar: null,
//       status: 1,
//       updated_at: '2023-10-09T06:29:17.000000Z',
//     },
//   },
// ];

// const data1 = [
//   // Add your offer objects here
//   {
//     discount: 60,
//     description: 'Only first order',
//     buttonText: 'Special 90%',
//     imageSource: images.offer,
//   },
//   {
//     discount: 20,
//     description: 'For all order',
//     buttonText: 'Special 20%',
//     imageSource: images.offer,
//   },
//   {
//     discount: 67,
//     description: 'Todays first order',
//     buttonText: 'Special 50%',
//     imageSource: images.offer,
//   },
// ];
