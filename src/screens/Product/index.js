import {
  View,
  FlatList,
  StatusBar,
  Alert,
  RefreshControl,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import globalStyles from '../../styles/globalStyles';
import styles from './styles';
import Loading from '../../component/loading';
import {SIZES, COLORS} from '../../constants';
import {
  GetAllProduct,
  GetProductByCatId,
  GetProductByServiceId,
  GetProductFeatures,
} from '../../redux/actions/productAction';
import {GetActiveSubscription} from '../../redux/actions/subscriptionAction';
import NoDataBox from '../../component/noDataBox';
import ProductCard from '../../component/card/ProductCard';
import CategoryButton from '../../component/button/CategoryButton';
import Button1 from '../../component/button/Button1';
import {useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
const Product = ({
  navigation,
  route,
  loading,
  GetProductFeatures,
  productData,
  // categoryList,
  // serviceList,
  GetProductByServiceId,
  GetActiveSubscription,
  // subsDetails,
}) => {
  const [itemList, setItemList] = useState(alldata);
  const [refreshing, setRefreshing] = useState(false);
  const [alldata, setAlldata] = useState();
  // console.log('subsDetails=========>>>>>',subsDetails);
  console.log('completedata product from API', productData);

  const onRefresh = () => {
    setRefreshing(true);
    // refreshData().then(() => {
    //   setRefreshing(false);
    // });
  };

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/products',
      headers: {},
    };

    axios
      .request(config)
      .then(response => {
        // console.log(
        //   'completedata product',
        //   JSON.stringify(response.data.result),
        // );
        setAlldata(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const serviceId  = route.params.service_id;

  // Define your refreshData function to fetch the latest data
  // const refreshData = async () => {
  //   await GetProductByServiceId();
  //   await GetProductFeatures();
  // };

  // useEffect(() => {
  //   GetActiveSubscription();
  // }, []);

  // console.log('categoryList', categoryList);
  // console.log('serviceList', serviceList);

  // const [currentCatName, setcurrentCatName] = useState('');
  // const [currentServName, setCurrentServName] = useState('');

  const [catId, setCatId] = useState(
    route?.params?.catId ? route?.params?.catId : 1,
  );

  // console.log('catId', route?.params?.catId);
  // console.log('serviceId', route?.params?.serviceId);

  const [serviceId, setServiceId] = useState(
    route?.params?.serviceId ? route?.params?.serviceId : 1,
  );

  // const [catId, setCatId] = useState();

  // const [serviceId, setServiceId] = useState();

  const filteredProducts = alldata
    ? alldata.filter(product => {
        const matchGender = !catId || product.category_id === catId;
        const matchService = !serviceId || product.service_id === serviceId;
        return matchGender && matchService;
      })
    : [];
  // console.log('Selected filteredProducts :', filteredProducts);

  const handleGenderPress = gender => {
    setCatId(gender);
  };

  const handleServicePress = service => {
    setServiceId(service);
  };

  const handleItemPress = item => {
    // console.log('Selected flatlist data:', item);
    // Do other things with the selected item if needed
  };

  // useEffect(() => {
  //   categoryList.map(cat => {
  //     if (cat.id === catId) {
  //       setcurrentCatName(cat.category_name);
  //     }
  //   });
  //   serviceList.map(ser => {
  //     if (ser.service.id === serviceId) {
  //       setCurrentServName(ser.service.service_name);
  //     }
  //   });
  // }, [serviceId, catId]);

  // console.log('This is service name', currentServName);
  // console.log('This is cat name', currentCatName);

  function updateQuantity(productId, serveId, categoryId, action) {
    const updatedArray = filteredProducts.map(product => {
      if (
        product.id === productId &&
        product.service_id === serveId &&
        product.category_id === categoryId
      ) {
        if (action === 'increase') {
          product.qty = (product.qty || 0) + 1;
        } else if (action === 'decrease') {
          // Check if quantity is greater than 0 before decreasing
          product.qty = Math.max(0, (product.qty || 0) - 1);
        } else if (action === 'delete') {
          // Check if quantity is greater than 0 before decreasing
          product.qty = 0;
        }
        // product.service_name = currentServName;
        // product.category_name = currentCatName;
      }
      return product;
    });
    setItemList(updatedArray);
  }

  // useEffect(() => {
  //   setItemList(productData);
  // }, [productData]);

  useEffect(() => {
    GetAllProduct();
    GetProductByServiceId();
    GetProductFeatures();
    GetActiveSubscription();
  }, []);

  // console.log('itemList', itemList);

  const checkAvailibleOrder = () => {
    let totalQty = 0;
    filteredProducts.map(item => {
      if (item.qty > 0) {
        totalQty = totalQty + item.qty;
      }
    });
    navigation.navigate('AddOn', {
      // csIds: {...route?.params},
      items: filteredProducts,
    });

    // if (
    //   totalQty <=
    //   Number(
    //     subsDetails?.existing_subscription_details?.available_no_of_bookings,
    //   )
    // ) {
    //   navigation.navigate('AddOn', {
    //     csIds: {...route?.params},
    //     items: itemList,
    //   });
    // } else {
    //   Alert.alert(
    //     'Subscription Alert!',
    //     `Your available number of booking is ${subsDetails?.existing_subscription_details?.available_no_of_bookings} less than your order quantity ${totalQty}`,
    //   );
    // }
  };

  const continueFunc = () => {
    navigation.navigate('AddOn');
    // if (!subsDetails) {
    //   Alert.alert(
    //     'Subscription Alert!',
    //     'Please purchase a subscription plan to continue order',
    //     [
    //       {
    //         text: 'Buy Subscription',
    //         onPress: () => navigation.navigate('Subscription'),
    //       },
    //       {
    //         text: 'OK',
    //         onPress: () => {},
    //       },
    //     ],
    //   );
    // } else {
    //   checkAvailibleOrder();
    // }
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     if (subsDetails !== null) {
  //       checkAvailibleOrder();
  //       // Perform actions or updates when subsDetails is not null
  //       // For example, you can call a function here or set a state variable.
  //     }
  //   }, [subsDetails])
  // );

  return (
    <View style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={{marginLeft: SIZES.width * 0.02}}>
        <FlatList
          data={categoryList}
          renderItem={({item, index}) => (
            <CategoryButton
              marginLeft={index == 0 ? SIZES.width * 0.03 : 0}
              title={item.category_name}
              isActive={catId == item.id ? true : false}
              onPress={() => {
                // console.log('idididididididi------------------', item.id);
                // setCatId(item.id);
                handleGenderPress(item.id);
              }}
              style={{width: SIZES.width * 0.28}}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          key={(_, index) => index}
        />
      </View>

      <ScrollView
        style={{
          backgroundColor: COLORS.white,
          width: SIZES.width,
          alignSelf: 'center',
        }}>
        {loading ? (
          <Loading />
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              left: SIZES.width * 0.02,
              // marginHorizontal: SIZES.width * 0.03,
            }}>
            <LinearGradient
              // colors={['#E9C7FF', '#CFC0FF']}
              colors={['#FFFFFF', '#FFFFFF']}
              style={{
                backgroundColor: '#fff',
                width: SIZES.width * 0.22,
                borderRadius: SIZES.width * 0.03,
                alignItems: 'center',
                marginTop: SIZES.height * 0.023,
                // flexGrow: 1
              }} // Your styles for the LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <FlatList
                data={serviceList}
                renderItem={({item, index}) => (
                  <CategoryButton
                    // marginLeft={index == 0 ? SIZES.width * 0.03 : 0}
                    marginBottom={SIZES.height * 0.007}
                    title={item.service?.service_name}
                    isActive={serviceId == item.service?.id ? true : false}
                    onPress={() => {
                      // console.log('idid.service?di', item.id);
                      // setServiceId(item.id);
                      handleServicePress(item.id);
                    }}
                    titlestyl={{
                      // fontFamily: FONTS.semiBold,
                      fontSize: SIZES.width * 0.035,
                      // color: COLORS.secondary,
                      width: SIZES.width * 0.16,
                      alignSelf: 'center',
                      // marginBottom: -4,
                    }}
                    style={{
                      borderWidth: 0,
                      width: SIZES.width * 0.17,
                      height: SIZES.width * 0.13,
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: SIZES.width * 0.0,
                    }}
                  />
                )}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={(_, index) => index}
              />
            </LinearGradient>
            <View style={{flex: 1}}>
              {filteredProducts && (
                <FlatList
                  data={filteredProducts}
                  renderItem={
                    ({item, index}) => (
                      // if (item.service_id == serviceId && item.category_id == catId) {
                      //   return
                      <ProductCard
                        marginBottom={
                          filteredProducts[0] &&
                          index == filteredProducts.length - 1
                            ? SIZES.height * 0.28
                            : SIZES.height * 0.025
                        }
                        marginTop={index == 0 ? SIZES.height * 0.025 : 0}
                        // source={{uri: item.image}}
                        productName={item?.product_name}
                        quantity={item?.qty}
                        price={`₹ ${item.amount ? item.amount : 0}`}
                        service_name={item?.service_name}
                        source={{uri: item.image}}
                        onPlusPress={() => {
                          updateQuantity(
                            item.id,
                            item.service_id,
                            item.category_id,
                            'increase',
                          );
                        }}
                        onMinusPress={() => {
                          updateQuantity(
                            item.id,
                            item.service_id,
                            item.category_id,
                            'decrease',
                          );
                        }}
                        deletePress={() => {
                          updateQuantity(
                            item.id,
                            item.service_id,
                            item.category_id,
                            'delete',
                          );
                        }}
                      />
                    )
                    // }
                  }
                  keyExtractor={(item, index) => item + index}
                  showsVerticalScrollIndicator={false}
                  // refreshControl={
                  //   <RefreshControl
                  //     refreshing={refreshing}
                  //     onRefresh={onRefresh}
                  //     // You can customize the loading indicator style
                  //     // tintColor="yourColor"
                  //     // title="Pull to refresh..."
                  //     // titleColor="yourColor"
                  //   />
                  // }
                />
              )}
              {/* // : (
          //   <View style={{height: SIZES.height * 0.7}}>
          //     <NoDataBox title={'No Product'} />
          //   </View> */}
              {/* )} */}
            </View>
          </View>
        )}

        {/* <Text style={{alignSelf:'center', fontSize:20}}>In Progress</Text> */}
        <View style={{}}>
          {filteredProducts && (
            <View style={styles.bottom_container}>
              <LinearGradient
                colors={['#ffffff', '#ffffff']}
                style={{
                  // backgroundColor: COLORS.secondary,
                  height: SIZES.width * 0.22,
                  width: SIZES.width * 1.0,
                  borderTopLeftRadius: SIZES.width * 0.1,
                  borderTopRightRadius: SIZES.width * 0.1,
                }} // Your styles for the LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
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
              </LinearGradient>
            </View>
          )}
        </View>
      </ScrollView>
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
          paddingVertical: SIZES.height * 0.015,
          paddingHorizontal: 5,
          position: 'absolute',
          bottom: 0,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginHorizontal: SIZES.width * 0.08,
              // marginTop: SIZES.height * 0.04,
              width: SIZES.width * 0.5,
            }}>
            <Text style={{color: COLORS.secondary}}>Total Price (4 Items)</Text>
            <Text style={{color: COLORS.secondary}}>₹ 400</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginHorizontal: SIZES.width * 0.08,
              // marginTop: SIZES.height * 0.01,
              width: SIZES.width * 0.5,
            }}>
            <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
              Subtotal
            </Text>
            <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
              ₹ 400
            </Text>
          </View>
        </View>
        <View>
          <Button1
            // onPress={() => continueFunc()}
            onPress={() => checkAvailibleOrder()}
            style={{
              backgroundColor: COLORS.secondary,
              width: SIZES.width * 0.38,
            }}>
            Continue
          </Button1>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.product.loading,
  productData: state.product.productData,
  categoryList: state.home.categoryList,
  serviceList: state.home.serviceList,
  colorList: state.product.colorList,
  damageList: state.product.damageList,
  packingList: state.product.packingList,
  addonList: state.product.addonList,
  stainsList: state.product.stainsList,
  subsDetails: state.subscription.subsDetails,
});

const mapDispatchToProps = {
  GetAllProduct,
  GetProductByServiceId,
  GetProductByCatId,
  GetProductFeatures,
  GetActiveSubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
// export default Product;

const category = [
  {
    id: 1,
    category_name: 'Men',
    category_name_ar: null,
    category_image: 'categories/6b92e366d82c3c92deaed75974fd7545.png',
    service_id: ['1'],
    status: 1,
    created_at: '2023-10-09T06:30:49.000000Z',
    updated_at: '2023-10-09T06:30:49.000000Z',
    services: [{id: 1, service_name: 'Dry Cleaning'}],
    images:
      'https://dryfi.theprojecttest.xyz/public/uploads/categories/6b92e366d82c3c92deaed75974fd7545.png',
  },
  {
    id: 2,
    category_name: 'Women',
    category_name_ar: null,
    category_image: 'categories/2577ecdc7eb5f0141df74358eee429c0.png',
    service_id: ['2', '3'],
    status: 1,
    created_at: '2023-10-09T06:31:49.000000Z',
    updated_at: '2023-10-09T06:31:49.000000Z',
    services: [
      {id: 2, service_name: 'Ironing'},
      {id: 3, service_name: 'Wash & Clean'},
    ],
    images:
      'https://dryfi.theprojecttest.xyz/public/uploads/categories/2577ecdc7eb5f0141df74358eee429c0.png',
  },
  {
    id: 3,
    category_name: 'Kids',
    category_name_ar: null,
    category_image: 'categories/e2cff0705861f2e45251761b6d3cd44f.png',
    service_id: ['1', '3'],
    status: 1,
    created_at: '2023-10-09T06:32:06.000000Z',
    updated_at: '2023-10-09T06:32:06.000000Z',
    services: [
      {id: 1, service_name: 'Dry Cleaning'},
      {id: 3, service_name: 'Wash & Clean'},
    ],
    images:
      'https://dryfi.theprojecttest.xyz/public/uploads/categories/e2cff0705861f2e45251761b6d3cd44f.png',
  },
];

// const itemList1 = [
//   {
//     id: 1,
//     service_id: 101,
//     category_id: 201,
//     product_name: 'Blazer',
//     qty: 3,
//     amount: 150,
//     image: 'product1.jpg',
//     service_name: 'Premium Wash',
//   },
//   {
//     id: 2,
//     service_id: 101,
//     category_id: 201,
//     product_name: 'Pants',
//     qty: 2,
//     amount: 120,
//     image: 'product2.jpg',
//     service_name: 'Premium Wash',
//   },
//   {
//     id: 3,
//     service_id: 102,
//     category_id: 202,
//     product_name: 'Product 3',
//     qty: 1,
//     amount: 50,
//     image: 'product3.jpg',
//     service_name: 'Premium Wash',
//   },
// ];

const serviceList = [
  {
    id: 1,
    service: {
      id: 101,
      service_name: 'Premium Wash',
      description:
        'Premium laundry service employs enzyme presoak for tough dirt, uses optimum temperature... ',
      image: require('../../assets/icons/iron.png'),
      price: '$35',
    },
  },
  {
    id: 2,
    service: {
      id: 102,
      service_name: 'Dry Cleaning',
      description: 'Description for Service 2',
      image: 'service2.jpg',
      price: '$75',
    },
  },
  {
    id: 3,
    service: {
      id: 103,
      service_name: 'Steaming',
      description: 'Description for Service 3',
      image: 'service3.jpg',
      price: '$635',
    },
  },
];

const categoryList = [
  {
    id: 1,
    category_name: 'MEN',
  },
  {
    id: 2,
    category_name: 'WOMEN',
  },
  {
    id: 3,
    category_name: 'KIDS',
  },
];
