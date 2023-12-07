// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
//   FlatList,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import React from 'react';
// import {connect} from 'react-redux';
// import styles from './styles';
// import globalStyles from '../../styles/globalStyles';
// import {COLORS, SIZES, images, FONTS} from '../../constants';
// import Loading from '../../component/loading';
// // import ServiceCard from '../../component/card/ServiceCard';
// import LinearGradient from 'react-native-linear-gradient';

// const MyOrders = ({navigation, loading, categoryList}) => {
//   // console.log("category data : ", categoryList)
//   // const order = [1, 2, 3, 4]

//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <View style={globalStyles.container}>
//           <StatusBar
//             backgroundColor="transparent"
//             translucent={true}
//             barStyle="light-content"
//           />
//           <View style={globalStyles.center}>
//             {/* category container */}
//             <View>
//               {/* {categoryList &&
//                 <FlatList
//                   data={categoryList}
//                   renderItem={({ item, index }) => ( */}
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <LinearGradient
//                   colors={['#F5E6FF', '#F3E1FF']}
//                   style={[styles.box, {marginTop: SIZES.height * 0.025}]} // Your styles for the LinearGradient
//                   start={{x: 0, y: 0}}
//                   end={{x: 1, y: 0}}>
//                   <View style={styles.box_header}>
//                     <Text style={styles.order_id}>Order #Dry0010C1</Text>
//                     <TouchableOpacity
//                       activeOpacity={0.5}
//                       style={styles.cancel_btn}>
//                       <Text style={styles.cancel}>Cancel</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Product Name</Text>
//                     <Text style={styles.order_text}>Blazer</Text>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Quantity</Text>
//                     <Text style={styles.order_text}>09 Items</Text>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Pickup Date</Text>
//                     <Text style={styles.order_text}>18/May/2023</Text>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Pickup Time</Text>
//                     <Text style={styles.order_text}>10:00 am</Text>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Delivery Date</Text>
//                     <Text style={styles.order_text}>20/Jun/2023</Text>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Delivery Time</Text>
//                     <Text style={styles.order_text}>02:00 Pm</Text>
//                   </View>
//                   <View style={styles.order_row}>
//                     <Text style={styles.order_title}>Payment Mode</Text>
//                     <Text style={styles.order_text}>cash</Text>
//                   </View>
//                   <View
//                     style={{
//                       alignSelf: 'flex-start',
//                       marginLeft: SIZES.width * 0.048,
//                       width: SIZES.width * 0.9,
//                     }}>
//                     <Text
//                       style={{
//                         fontFamily: FONTS.medium,
//                         fontSize: SIZES.width * 0.038,
//                         marginBottom: -4,
//                         color: '#3B319E',
//                         marginTop: SIZES.height * 0.013,
//                       }}>
//                       Delivery Address
//                     </Text>
//                     <Text
//                       style={{
//                         width: SIZES.width * 0.8,
//                         fontFamily: FONTS.regular,
//                         fontSize: SIZES.width * 0.036,
//                         marginBottom: -4,
//                         color: COLORS.secondary,
//                         marginTop: SIZES.height * 0.01,
//                       }}>
//                       Yashwant Kunj Lbs Marg Hariniwa Main Road, Nagpur 512505 ,
//                       M.H.
//                     </Text>
//                   </View>
//                   <View
//                     style={[
//                       styles.order_row,
//                       {marginTop: SIZES.height * 0.01},
//                     ]}>
//                     <Text style={[styles.order_title, {fontWeight: 'bold'}]}>
//                       Total
//                     </Text>
//                     <Text style={[styles.order_text, {fontWeight: 'bold'}]}>
//                       $ 87
//                     </Text>
//                   </View>
//                   <View style={{flexDirection: 'row'}}>
//                     <TouchableOpacity
//                       style={styles.btn}
//                       onPress={() => navigation.navigate('OrderDetails')}>
//                       <Text style={styles.btn_text}>Track Order</Text>
//                     </TouchableOpacity>
//                     <View style={{width: SIZES.width * 0.066}} />
//                     <TouchableOpacity
//                       style={[
//                         styles.btn,
//                         {
//                           borderWidth: 2,
//                           borderColor: COLORS.secondary,
//                           backgroundColor: COLORS.white,
//                           flexDirection: 'row',
//                           alignItems: 'center',
//                         },
//                       ]}
//                       onPress={() => navigation.navigate('Invoice')}>
//                       <Text
//                         style={[
//                           styles.btn_text,
//                           {color: COLORS.secondary, marginBottom: 0},
//                         ]}>
//                         Invoice
//                       </Text>
//                       <Image
//                         style={styles.tinyLogo}
//                         source={require('../../assets/images/Leftout.png')}
//                       />
//                     </TouchableOpacity>
//                   </View>
//                 </LinearGradient>
//               </ScrollView>
//               {/* )}
//                   key={item => item.id}
//                   showsVerticalScrollIndicator={false}
//                 />
//               } */}
//             </View>
//           </View>
//         </View>
//       )}
//     </>
//   );
// };

// // const mapStateToProps = (state) => ({
// //   loading: state.home.loading,
// //   categoryList: state.home.categoryList,
// // })

// // const mapDispatchToProps = {

// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
// export default MyOrders;




const products1 = [
  {
    id: 1,
    name: 'Product 1',
    gender: 'Male',
    service: 'Service A',
    image:
      'https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0',
  },
  {
    id: 2,
    name: 'Product 2',
    gender: 'Female',
    service: 'Service B',
    image:
      'https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs',
  },
  {
    id: 3,
    name: 'Product 3',
    gender: 'Male',
    service: 'Service B',
    image:
      'https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0',
  },
  {
    id: 4,
    name: 'Product 4',
    gender: 'Female',
    service: 'Service A',
    image:
      'https://unsplash.com/photos/a-woman-working-on-a-laptop-6uAssP0vuPs',
  },
  // ... more products
];

// import React, {useState} from 'react';
// import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';

// const MyOrders = ({data}) => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Separate products by gender and service
//   const separatedData = {};
//   products.forEach(product => {
//     const key = `${product.gender}_${product.service}`;
//     if (!separatedData[key]) {
//       separatedData[key] = [];
//     }
//     separatedData[key].push(product);
//   });

//   // Function to handle item press
//   const handleItemPress = product => {
//     // You can perform any action here based on the selected product
//     console.log('Selected Product:', product);
//     setSelectedProduct(product);
//   };

//   // Render item component for FlatList
//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => handleItemPress(item)}>
//       <View
//         style={{
//           padding: 16,
//           borderBottomWidth: 1,
//           borderBottomColor: '#ccc',
//           flexDirection: 'row',
//           alignItems: 'center',
//         }}>
//         <Image
//           source={{uri: item.image}}
//           style={{width: 50, height: 50, marginRight: 10}}
//         />
//         <Text>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Render FlatList
//   return (
//     <View>
//       <FlatList
//         data={Object.values(separatedData).flat()}
//         keyExtractor={item => item.id}
//         renderItem={renderItem}
//       />

//       {/* Additional UI for displaying selected product */}
//       {selectedProduct && (
//         <View style={{marginTop: 20}}>
//           <Text>Selected Product:</Text>
//           <Text>Name: {selectedProduct.name}</Text>
//           <Text>Gender: {selectedProduct.gender}</Text>
//           <Text>Service: {selectedProduct.service}</Text>
//           <Image
//             source={{uri: selectedProduct.image}}
//             style={{width: 100, height: 100, marginTop: 10}}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// export default MyOrders;

import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

const MyOrders = ({products}) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const filteredProducts = products1.filter(product => {
    const matchGender = !selectedGender || product.gender === selectedGender;
    const matchService =
      !selectedService || product.service === selectedService;
    return matchGender && matchService;
  });
  console.log('Selected filteredProducts :', filteredProducts);
  const handleGenderPress = gender => {
    setSelectedGender(gender);
  };

  const handleServicePress = service => {
    setSelectedService(service);
  };

  const handleItemPress = (item) => {
    console.log('Selected flatlist data:', item);
    // Do other things with the selected item if needed
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={{margin: 10}}>
        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
        <Text>{item.name}</Text>
        <Text>{item.service}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity onPress={() => handleGenderPress('Male')}>
          <Text style={{color: selectedGender === 'Male' ? 'blue' : 'black'}}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderPress('Female')}>
          <Text style={{color: selectedGender === 'Female' ? 'blue' : 'black'}}>
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleServicePress('Service A')}>
          <Text
            style={{color: selectedService === 'Service A' ? 'blue' : 'black'}}>
            Service A
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleServicePress('Service B')}>
          <Text
            style={{color: selectedService === 'Service B' ? 'blue' : 'black'}}>
            Service B
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderPress(null)}>
          <Text style={{color: selectedGender === null ? 'blue' : 'black'}}>
            All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MyOrders;

// export default function App() {
//   return <ProductList products={products} />;
// }
