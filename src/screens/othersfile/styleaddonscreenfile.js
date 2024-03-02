import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottom_btn_box: {
    width: SIZES.width,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    // borderTopLeftRadius: SIZES.width * .09,
    // borderTopRightRadius: SIZES.width * .09,
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: SIZES.height * .1,
    paddingVertical: SIZES.height * 0.02,
    paddingHorizontal: SIZES.width * 0.05,
  },
  bottom_container: {
    // width: SIZES.width,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.width * 0.09,
    borderTopRightRadius: SIZES.width * 0.09,
    // alignItems: 'center',
    // marginHorizontal: 20,
    // position: 'absolute',
    // bottom: 0,
    // paddingTop: SIZES.height * .02,
  },

  // ============== filter bottom sheet =================

  bottomSheet: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
  },

  titleRow: {
    width: SIZES.width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.height * 0.02,
  },

  bottomTitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
  },

  radioBtnRow: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    elevation: 4,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.025,
    borderRadius: 8,
  },
  radioLabelTxt: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    lineHeight: 18,
    color: '#302F33',
    marginLeft: SIZES.width * 0.03,
  },

  bottomSheet1: {
    height: SIZES.height * 0.8,
    // height: SIZES.height * .5,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
  },

  //    ========== feature container ===========

  row2: {
    // width: SIZES.width,
    flexDirection: 'column',
    // marginTop: SIZES.height * .02,
  },
  sideBar: {
    // width: SIZES.width * 0.4,
    height: SIZES.height * 0.06,
    // borderRadius: 8,
    // elevation: 5,
    // overflow: 'hidden',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.02,
  },

  row1: {
    // maxWidth: SIZES.width * .54,
    // width: SIZES.width * 0.52,
    // maxHeight: SIZES.height * .3,
    // height: SIZES.height * .6,
    flexDirection: 'row',
    alignItems: 'center',
    // flexWrap: 'wrap',
    // marginTop: SIZES.height * .01,
    // borderWidth: 1,
    // backgroundColor: COLORS.black,
    marginHorizontal: 7
  },
  rightBox: {
    // marginTop: SIZES.height * .02,
    // height: SIZES.height * 0.65,
    width: SIZES.width * 0.85,
    // borderWidth: 1,
    // flexDirection:'row',
    // justifyContent:'space-between'
    // backgroundColor:'yellow'
  },
  label: {
    // width: SIZES.width * .45,
    maxWidth: SIZES.width * 0.45,
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    marginLeft: SIZES.width * 0.02,
    marginBottom: -5,
  },

  charge_row: {
    // width: SIZES.width * .45,
    maxWidth: SIZES.width * 0.45,
    // flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // marginBottom: SIZES.height * .01,
  },

  charges: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.03,
    color: COLORS.black,
    marginLeft: SIZES.width * 0.02,
  },

  color_box: {
    width: SIZES.width * 0.03,
    height: SIZES.width * 0.03,
    borderRadius: SIZES.width * 0.03,
    marginLeft: SIZES.width * 0.03,
    backgroundColor: COLORS.primary,
    // borderWidth: 1,
  },

  btn: {
    backgroundColor: COLORS.white,
    // height: SIZES.height * 0.06,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // marginTop: SIZES.height * 0.02,
    paddingHorizontal: SIZES.width * 0.06,
    // marginLeft: SIZES.width * 0.05,
    marginHorizontal: SIZES.width * 0.02,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.width * 0.02,
    overflow: 'hidden',
    height:40
    
  },
 
  gradientBackground: {
    flex: 1,
    borderRadius: SIZES.width * 0.01,
     // Make sure to match the borderRadius with the parent TouchableOpacity
  },
  btnTxt: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: COLORS.secondary,
  },
  checkBox: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  btnRow: {
    position: 'absolute',
    // marginTop: SIZES.height * .02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SIZES.width * 0.9,
    bottom: SIZES.height * 0.03,
    // marginLeft: SIZES.width * -.2,
  },
  bottomBtn: {
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.015,
    elevation: 5,
  },
  bottomBtnTxt: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.038,
    color: COLORS.white,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // height:SIZES.height * .5
  },
  modalContent: {
    width: SIZES.width * 0.9,
    borderRadius: 10,
    backgroundColor: 'white',
    // padding: 60,
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    // alignSelf:'flex-start'
  },
  image: {
    width: 50,
    height: 50,
    // borderRadius: 25,
  },
  texta: {
    marginTop: 10,
    // textAlign: 'center',
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * .044,
    // marginBottom: -5,
    color: COLORS.secondary,
    fontWeight: 'bold',
    // alignSelf:'center'
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    alignItems: 'center',
  },
  button1: {
    flex: 1,
    padding: 10,
    margin: 5,
    // backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.secondary,
  },
  cancle: {
    color: COLORS.white
  },
  yes: {
    color: COLORS.secondary
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  slider: {
    width: 120,
    height: 100,
    marginLeft: 10,
  },
  container1: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    top:20
  },
  btn_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * .04,
    marginBottom: -4,
},
});











//activeorderfile --------------------------------------------------


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

// import React, {useState} from 'react';
// import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

// const MyOrders = ({products}) => {
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedService, setSelectedService] = useState(null);

//   const filteredProducts = products1.filter(product => {
//     const matchGender = !selectedGender || product.gender === selectedGender;
//     const matchService =
//       !selectedService || product.service === selectedService;
//     return matchGender && matchService;
//   });
//   console.log('Selected filteredProducts :', filteredProducts);
//   const handleGenderPress = gender => {
//     setSelectedGender(gender);
//   };

//   const handleServicePress = service => {
//     setSelectedService(service);
//   };

//   const handleItemPress = (item) => {
//     console.log('Selected flatlist data:', item);
//     // Do other things with the selected item if needed
//   };

//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => handleItemPress(item)}>
//       <View style={{margin: 10}}>
//         <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
//         <Text>{item.name}</Text>
//         <Text>{item.service}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{flex:1}}>
//       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//         <TouchableOpacity onPress={() => handleGenderPress('Male')}>
//           <Text style={{color: selectedGender === 'Male' ? 'blue' : 'black'}}>
//             Male
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleGenderPress('Female')}>
//           <Text style={{color: selectedGender === 'Female' ? 'blue' : 'black'}}>
//             Female
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleServicePress('Service A')}>
//           <Text
//             style={{color: selectedService === 'Service A' ? 'blue' : 'black'}}>
//             Service A
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleServicePress('Service B')}>
//           <Text
//             style={{color: selectedService === 'Service B' ? 'blue' : 'black'}}>
//             Service B
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleGenderPress(null)}>
//           <Text style={{color: selectedGender === null ? 'blue' : 'black'}}>
//             All
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default MyOrders;

// export default function App() {
//   return <ProductList products={products} />;
// }

//dropdown

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';

// const genders = ['Male', 'Female', 'Other'];

// const CustomDropdown = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedGender, setSelectedGender] = useState(null);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleGenderSelect = (gender) => {
//     setSelectedGender(gender);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleDropdown} style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Select Gender"
//           editable={false}
//           value={selectedGender}
//         />
//       </TouchableOpacity>

//       {isDropdownOpen && (
//         <View style={styles.dropdownContainer}>
//           <FlatList
//             data={genders}
//             keyExtractor={(item) => item}
//             renderItem={({ item }) => (
//               <TouchableOpacity onPress={() => handleGenderSelect(item)}>
//                 <View style={styles.dropdownItem}>
//                   <Text>{item}</Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     // position: 'relative',
//     width: '80%',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//   },
//   dropdownContainer: {
//     // position: 'absolute',
//     // top: 60, // Adjust this value based on your design
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   dropdownItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default CustomDropdown;

// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

// const CustomDropdown = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         // onRequestClose={() => {
//         //   Alert.alert('Modal has been closed.');
//         //   setModalVisible(!modalVisible);
//         // }}

//         >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default CustomDropdown;

// import {ColorPicker} from 'react-native-color-picker';
// import { Alert } from 'react-native';
// const Picker = () => (
//   <ColorPicker
//     hideSliders
//     onColorSelected={color => {
//       // Alert.alert(`Color selected: ${color}`);
//       console.log('Color selected:',color);
//     }}
//     style={{flex: 1}}
//   />
// );

// export default Picker;

// clock

// Clock.js

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';

// const WatchPicker = () => {
//   const [hours, setHours] = useState(12);
//   const [minutes, setMinutes] = useState(0);
//   const [hourRotation, setHourRotation] = useState(0);
//   const [minuteRotation, setMinuteRotation] = useState(0);

//   useEffect(() => {
//     const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
//     const minuteAngle = (minutes % 60) * 6;

//     setHourRotation(hourAngle);
//     setMinuteRotation(minuteAngle);
//   }, [hours, minutes]);

//   const handleHourChange = () => {
//     const newHour = (hours + 1) % 12 || 12;
//     setHours(newHour);
//   };

//   const handleMinuteChange = () => {
//     const newMinute = (minutes + 5) % 60;
//     setMinutes(newMinute);
//   };

//   return (
//     <View style={styles.container}>
//       <Svg height="300" width="300">
//         <Circle cx="150" cy="150" r="140" stroke="black" strokeWidth="2.5" fill="white" />

//         {/* Watch markers */}
//         {Array.from({ length: 12 }).map((_, index) => (
//           <React.Fragment key={index}>
//             <Line
//               x1="150"
//               y1="10"
//               x2="150"
//               y2="20"
//               strokeWidth="2"
//               stroke="black"
//               transform={`rotate(${index * 30} 150 150)`}
//             />
//             <SvgText
//               x="150"
//               y="40"
//               fontSize="16"
//               textAnchor="middle"
//               // transform={`rotate(${index * 30} 150 150)`}
//               transform={`rotate(${(index + 0) % 12 * 30} 150 150)`}
//             >
//               {/* {index + 1} */}
//               {index === 0 ? 12 : index}
//             </SvgText>
//           </React.Fragment>
//         ))}

//         {/* Hour hand */}
//         <Line
//           x1="150"
//           y1="150"
//           x2="150"
//           y2="60"
//           strokeWidth="4"
//           stroke="black"
//           transform={`rotate(${hourRotation} 150 150)`}
//         />

//         {/* Minute hand */}
//         <Line
//           x1="150"
//           y1="150"
//           x2="150"
//           y2="40"
//           strokeWidth="2"
//           stroke="black"
//           transform={`rotate(${minuteRotation} 150 150)`}
//         />

//         {/* Center dot */}
//         <Circle cx="150" cy="150" r="3" fill="black" />

//         {/* Display time */}
//         <SvgText x="150" y="230" fontSize="20" textAnchor="middle">
//           {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`}
//         </SvgText>
//       </Svg>

//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity onPress={handleHourChange} style={styles.button}>
//           <Text style={styles.buttonText}>Change Hour</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleMinuteChange} style={styles.button}>
//           <Text style={styles.buttonText}>Change Minute</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   button: {
//     marginHorizontal: 10,
//     padding: 10,
//     backgroundColor: 'lightblue',
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default WatchPicker;







