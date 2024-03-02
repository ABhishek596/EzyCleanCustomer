import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native'; 
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {COLORS, SIZES, data, images} from '../../constants';
import Collapsible from 'react-native-collapsible';
import Icons from '../../component/Icons';
import Loading from '../../component/loading';
import {connect} from 'react-redux';
import {GetPriceList} from '../../redux/actions/homeAction';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
const Accordion = ({onPress,data, title}) => {
  const [collapsed, setCollapsed] = useState(true);
  const borderRadius = collapsed ? SIZES.width * 0.03 : 0;
  const margin = collapsed ? SIZES.height * 0.02 : 0;

  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.accor_box,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
          marginBottom: margin,
          alignSelf: 'center',
        }}
        onPress={() => setCollapsed(!collapsed)}>
        <Text style={styles.accor_title}>{title}</Text>
        <Icons
          name={collapsed ? 'right' : 'down-outline'}
          size={25}
          color={COLORS.black}
        />
      </TouchableOpacity>
      <Collapsible style={{flex: 1}} collapsed={collapsed}>
        <View style={styles.product_box}>
          {data &&
            data?.map(item => (
              <View key={item.product_id} style={styles.product_row}>
                <Text numberOfLines={1} style={styles.product_name}>
                  {item?.product_name || 'Product Name'}
                </Text>
                <Text numberOfLines={1} style={styles.price}>
                  {item?.amount ? `₹ ${item?.amount}` : 'NA'}
                </Text>
              </View>
            ))}
        </View>
      </Collapsible>
    </View>
  );
};

// //console.log('datarrrrrrrrrrr', data);

const OfferItem = ({offer}) => {
  return (
    <LinearGradient
      colors={['#651898', '#2C0D8F']}
      style={[styles.offer_box]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View>
        <View style={[globalStyles.row, {alignItems: 'center'}]}>
          <Text style={styles.offer}>{offer.discount}% </Text>
          <Text style={styles.off_text}>off</Text>
        </View>
        <Text style={styles.offer_text}>{offer.description}</Text>

        <View style={styles.offer_btn}>
          <Text style={styles.offer_btn_text}>{offer.buttonText}</Text>
        </View>
      </View>

      <Image
        source={offer.imageSource}
        style={styles.offer_image}
        resizeMode="contain"
      />
    </LinearGradient>
  );
};

const RateList = ({navigation, GetPriceList, loading, priceList}) => {

  useEffect(() => {
    GetPriceList();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <View style={{marginVertical: 10}}>
          <Loading loading={loading} />
        </View>
      ) : (
        <View style={globalStyles.center}>
          {/* offer box */}
          <FlatList
            data={data1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <OfferItem offer={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          {/* service list container */}
          {/* <View style={{alignItems: 'center'}}> */}
          {/* Dry Cleaning Services */}

          <FlatList
            data={priceList}
            keyExtractor={item => item?.service_id}
            renderItem={({item}) => {
              return (
                <View
                  key={item?.service_id}
                  style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: '90%',
                  }}>
                  <Text style={styles.title}>
                    {item?.service_name || 'Service Name'}
                  </Text>
                  {item?.categories?.map(cat => {
                    //console.log('item',cat);
                    return (
                      <Accordion
                        key={cat?.category_id}
                        title={cat?.category_name || 'Category Name'}
                        data={cat?.products}
                      />
                    );
                  })}
                </View>
              );
            }}
          />

          {/* {data.rateListwholeData.map(item => {
            return (
              <View
                key={item.service_id}
                style={{alignSelf: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>
                  {item.service_name || 'Service Name'}
                </Text>
                {item.categories.map(cat => {
                  return (
                    <Accordion
                      key={cat.category_id}
                      title={cat.category_name || 'Category Name'}
                      data={cat.products}
                    />
                  );
                })}
              </View>
            );
          })} */}
          {/* </View> */}
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  priceList: state.home.priceList,
});

const mapDispatchToProps = {
  GetPriceList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RateList);

// const val = {
//   priceList: [
//     {
//       service_id: '1',
//       service_name: 'Service A',
//       categories: [
//         {
//           category_id: '101',
//           category_name: 'Category X',
//           products: ['Product 1', 'Product 2', 'Product 3'],
//         },
//         {
//           category_id: '102',
//           category_name: 'Category Y',
//           products: ['Product A', 'Product B'],
//         },
//       ],
//     },
//     {
//       service_id: '2',
//       service_name: 'Service B',
//       categories: [
//         {
//           category_id: '201',
//           category_name: 'Category Z',
//           products: ['Product X', 'Product Y'],
//         },
//         {
//           category_id: '202',
//           category_name: 'Category A',
//           products: ['Product A', 'Product B'],
//         },
//       ],
//     },
//   ],
// };

// const data = [
//   {
//     "product_id": 1,
//     "product_name": "Product 1",
//     "amount": 100
//   },
//   {
//     "product_id": 2,
//     "product_name": "Product 2",
//     "amount": 200
//   },
//   {
//     "product_id": 3,
//     "product_name": "Product 3",
//     "amount": 150
//   }
// ]

const data1 = [
  // Add your offer objects here
  {
    discount: 60,
    description: 'Only first order',
    buttonText: 'Special 90%',
    imageSource: images.offer,
  },
  {
    discount: 20,
    description: 'For all order',
    buttonText: 'Special 20%',
    imageSource: images.offer,
  },
  {
    discount: 67,
    description: 'Todays first order',
    buttonText: 'Special 50%',
    imageSource: images.offer,
  },
];
