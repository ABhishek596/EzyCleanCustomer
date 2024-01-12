import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  View,
  ScrollView,
  Modal,
  Image,
  Button,
  PanResponder,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import AddonCard from '../../component/card/AddonCard';
import {COLORS, SIZES} from '../../constants';
import Button1 from '../../component/button/Button1';
import {connect} from 'react-redux';
// import { BottomSheet } from 'react-native-btr';
// import Icons from '../../component/Icons';
import CheckBox from '@react-native-community/checkbox';
// import ColorPicker from 'react-native-wheel-color-picker';
import {ColorPicker} from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const FeatureRow = ({
  title,
  onValueChange,
  value,
  colorCode,
  price,
  row1,
  checkBox,
}) => {
  return (
    <View style={[styles.row1, row1]}>
      {/* {colorCode && (
        <View
          style={[styles.color_box, colorCode && {backgroundColor: colorCode}]}
        />
      )} */}
      <View style={styles.charge_row}>
        <Text style={styles.label}>{title}</Text>
        {price && <Text style={styles.charges}>(₹{price})</Text>}
      </View>
      <CheckBox
        value={value}
        onValueChange={onValueChange}
        tintColors={{true: COLORS.primary, false: COLORS.secondary}}
        style={[styles.checkBox, checkBox]}
      />
    </View>
  );
};

const AddOnScreen = ({
  navigation,
  route,
  userData,
  // deliveryTypeList,
  colorList,
  // damageList,
  // packingList,
  // addonList,
  // stainsList,
  subsDetails,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    !isModalVisible;
    // navigation.navigate('PickupSchedule');
  };

  console.log('addonList====', addonList);
  console.log('addonList====', addonList.length);
  // const {items} = route?.params;
  const {items, discountObj, csIds} = route?.params;
  const [filterBottom, setFilterBottom] = useState(false);
  console.log('Get items item from discount screen', items);
  console.log(
    'Get discountObj item from discount screen',
    discountObj?.discount,
  );
  // console.log('Get all item from product screen total', items.length);

  const [shwitem, setShwitem] = useState([]);
  console.log('Actual show item ', shwitem.length);
  const totalAmount = shwitem.reduce((total, item) => total + item.amount, 0);
  // const totalItems = addonList.length;

  console.log('totalAmountt====', totalAmount);
  // console.log('totalItemst====', totalItems);
  const [type, setType] = useState(1);
  const [addonsList, setAddonsList] = useState([]);
  // const [addonList, setAddonList] = useState([]);
  //wheel color
  const [currentColor, setCurrentColor] = useState('#ffffff');
  const [swatchesOnly, setSwatchesOnly] = useState(false);
  const [swatchesLast, setSwatchesLast] = useState(false);
  const [swatchesEnabled, setSwatchesEnabled] = useState([]);
  const [disc, setDisc] = useState(false);

  const pickerRef = useRef(null);

  const onColorChange = color => {
    // Handle color change
    setCurrentColor(color);
  };

  const onColorChangeComplete = color => {
    // Handle color change complete
  };
  console.log('Get addonsList ', JSON.stringify(addonsList));
  //For color picker
  // const [color, setColor] = useState('#FF5733'); // Initial color

  const [visible, setVisible] = useState(false);

  // const onColorChange = (selectedColor) => {
  //   setColor(selectedColor);
  // };

  const transformArray = () => {
    const outputArray = [];
    let uniqueId = 1;
    items?.forEach(item => {
      if (item.qty > 1) {
        for (let i = 1; i <= item.qty; i++) {
          const newItem = {...item};
          newItem.product_name += ` ${i}`;
          newItem.uid = uniqueId++;
          outputArray.push({...newItem, dataAddon: {...postData}});
        }
      } else if (item.qty == 1) {
        item.uid = uniqueId++;
        outputArray.push({...item, dataAddon: {...postData}});
      }
    });

    console.log('Get addonsList of items allallala', outputArray);
    setShwitem(outputArray);
    setAddonsList(outputArray);
  };

  // const transformArray = () => {
  //   const outputArray = addonsList.map(item => {
  //     const newItem = {...item};
  //     const existingItem = items.find(i => i.id === newItem.id);
  //     if (existingItem) {
  //       // Update the price for existing item
  //       newItem.amount = existingItem.amount;
  //     }
  //     return newItem;
  //   });

  //   setAddonsList(outputArray);
  // };

  useEffect(() => {
    transformArray();
  }, [items]);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/addons',
      headers: {
        Authorization:
          'Bearer 148|ioaeHFkU68imPMGx1SGi8VQs0vD4BDHCOdcT0oNv44264102',
      },
    };

    axios
      .request(config)
      .then(response => {
        // console.log('Adddddddddddd', JSON.stringify(response.data));
        // setAddonList(response.data.addons)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const featureType = [
    {id: 1, type: 'Color'},
    /* {id: 2, type: 'Color2'}, */
    {id: 3, type: 'Damage'},
    {id: 4, type: 'Stains'},
    {id: 5, type: 'Packing'},
    {id: 6, type: 'AddOn'},
    {id: 7, type: 'Iron'},
    {id: 8, type: 'Delivery'},
  ];

  const ironList = [
    {
      id: 1,
      iron: 'Yes',
    },
    {
      id: 0,
      iron: 'No',
    },
  ];

  const [itemsData, setItemsData] = useState({
    customer_id: 0,
    total: 0,
    payment_response: 'pending',
    payment_mode: 0,
    s_discount: 0,
    delivery_cost: 30,
    sub_total: 0,
  });

  const [postData, setPostData] = useState({
    product_id: 0,
    service_id: 0,
    iron: ironList[1],
    color1: ' ',
    color2: ' ',
    damage_id: 0,
    packing_id: 0,
    stain_id: 0,
    addon_id: 0,
    price: 0,
    qty: 0,
    delivery: deliveryTypeList?.[0] || 0,
  });
  const centeredText =
    '\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B';

  const [productId, setProductId] = useState();
  const [product, setProduct] = useState();
  const [packingCharge, setPackingCharge] = useState(0);
  const [addOnCharge, setAddonCharge] = useState(0);
  const [ironCharge, setIronCharge] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const reset = () => {
    setPostData({
      product_id: 0,
      service_id: 0,
      iron: ironList[1],
      color1: ' ',
      color2: ' ',
      damage_id: 0,
      packing_id: 0,
      stain_id: 0,
      addon_id: 0,
      price: 0,
      qty: 0,
      delivery: deliveryTypeList?.[0] || 0,
    });
  };

  const handleApplyChange = () => {
    setIsModalVisible(!isModalVisible);
    const temArr = [];
    addonsList.map(item => {
      if (item.uid === productId) {
        temArr.push({...item, dataAddon: {...postData}});
      } else {
        temArr.push(item);
      }
    });
    setAddonsList(temArr);
    // setFilterBottom(false);
    reset();
    setVisible(true);
  };

  // const getTotalAmt = itemArr => {
  //   let total = 0;
  //   let subTotal = 0;
  //   addonsList.forEach(item => {
  //     total = total + Number(item?.amount);
  //     if (item?.dataAddon?.packing_id?.price) {
  //       total = total + Number(item?.dataAddon?.packing_id?.price);
  //     }
  //     if (item?.dataAddon?.addon_id?.price) {
  //       total = total + Number(item?.dataAddon?.addon_id?.price);
  //     }
  //     if (item?.dataAddon?.delivery?.urgent_charge) {
  //       total = total + Number(item?.dataAddon?.delivery?.urgent_charge);
  //     }
  //   });
  //   if (discountObj?.discount) {
  //     subTotal = (total * Number(discountObj?.discount)) / 100;
  //   }

  //   const obj = {
  //     customer_id: userData?.customer_details?.id,
  //     total: total,
  //     payment_response: 'pending',
  //     payment_mode: 0,
  //     s_discount: discountObj?.discount,
  //     delivery_cost: 0,
  //     sub_total: subTotal,
  //   };

  //   console.log(
  //     'This is array of items ',
  //     itemArr,
  //     'and this is object of this',
  //     obj,
  //   );

  //   navigation.navigate('PickupSchedule', {
  //     ...obj,
  //     items: itemArr,
  //     pickupmylaundry:false
  //   });
  // };

  // const handleConfimOrder = () => {
  //   const temArr = [];
  //   let totalQty = 0;
  //   addonsList.map(item => {
  //     temArr.push({
  //       product_id: item?.product_id,
  //       shipping_price: item?.dataAddon?.delivery?.urgent_charge,
  //       shipping_name: item?.dataAddon?.delivery?.type,
  //       color1: item?.dataAddon?.color1?.id,
  //       color2: item?.dataAddon?.color2?.id,
  //       packing_id: item?.dataAddon?.packing_id?.id,
  //       addon_id: item?.dataAddon?.addon_id?.id,
  //       damage_id: item?.dataAddon?.damage_id?.id,
  //       stain_id: item?.dataAddon?.stain_id?.id,
  //       service_id: item?.service_id,
  //       category_id: item?.category_id,
  //       iron: item?.dataAddon?.iron?.id,
  //       qty: '1',
  //       price: item?.amount,
  //       product_name: item?.product_name,
  //       service_name: csIds?.serviceId?.service_name,
  //       color1_name: item?.dataAddon?.color1?.color_name,
  //       color2_name: item?.dataAddon?.color2?.color_name,
  //       packing_name: item?.dataAddon?.packing_id?.packing_style,
  //       addon_name: item?.dataAddon?.addon_id?.addon_name,
  //       damage_name: item?.dataAddon?.damage_id?.damage,
  //       stain_name: item?.dataAddon?.stain_id?.stains,
  //       iron_price: '0',
  //       packing_price: item?.dataAddon?.packing_id?.price,
  //       addon_price: item?.dataAddon?.addon_id?.price,
  //       barcode: '72614453',
  //     });
  //     totalQty += 1;
  //   });

  //   console.log('This is total quantity', totalQty);

  //   if (subsDetails == null) {
  //     Alert.alert(
  //       'Subscription Alert!',
  //       'Please purchase a subscription plan to continue order',
  //     );
  //   } else {
  //     if (
  //       totalQty <=
  //       Number(
  //         subsDetails?.existing_subscription_details?.available_no_of_bookings,
  //       )
  //     ) {
  //       getTotalAmt(temArr);
  //     } else {
  //       Alert.alert(
  //         'Subscription Alert!',
  //         `Your available number of booking is ${subsDetails?.existing_subscription_details?.available_no_of_bookings} less than your order quantity ${totalQty}`,
  //       );
  //     }
  //   }
  // };

  // const confirmColor1 = () => {
  //   for (let i = 0; i < addonsList.length; i++) {
  //     const object = addonsList[i];
  //     if (object?.dataAddon?.color1?.color_name == undefined) {
  //       alert('Please select color its a mandatory filed for all items!');
  //       return;
  //     }
  //   }
  //   handleConfimOrder();
  // };

  //ColorSlider
  const [color, setColor] = useState({r: 255, g: 0, b: 0}); // Initial color is red

  // PanResponder for the color indicator square
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      // Calculate new color based on gesture position
      const {moveX, moveY} = gestureState;
      const newColor = calculateColor(moveX, moveY);
      setColor(newColor);
    },
  });

  // Function to calculate color based on position
  const calculateColor = (x, y) => {
    // Assuming color square has dimensions 300x300
    const maxX = 300;
    const maxY = 300;

    // Calculate percentage of position
    const percentageX = x / maxX;
    const percentageY = y / maxY;

    // Calculate new color values
    const newColor = {
      r: Math.round(255 * percentageY),
      g: Math.round(255 * (1 - percentageX)),
      b: Math.round(255 * percentageX),
    };

    return newColor;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={addonsList}
            renderItem={({item, index}) => (
              <AddonCard
                marginTop={index == 0 ? SIZES.height * 0.025 : 0}
                dataAddonss={item}
                source={{uri: item.image}}
                productName={item?.product_name}
                setQuantity={quan =>
                  addItem(item?.id, quan, item.amount ? item.amount : 0)
                }
                price={`₹${item.amount ? item.amount : 0}`}
                onAddonPress={() => {
                  setProductId(item.uid);
                  setFilterBottom(true);
                  setIsModalVisible(!isModalVisible);
                }}
                serName={item.service_name}
                catName={item.category_name}
                // onAddonPress={()=>{toggleModal(true)}}
                // onAddonPress={() => {
                //   setIsModalVisible(!isModalVisible);
                // }}
              />
            )}
            keyExtractor={item => item.uid}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* <View style={{height: SIZES.height * 0.01}} />

      <View style={{height: SIZES.height * 0.015}} /> */}

        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.texta}>Edit Product</Text>
              <View style={styles.row2}>
                <View style={styles.sideBar}>
                  {featureType.slice(0, 3).map(item => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        styles.btn,
                        type == item.id && {backgroundColor: COLORS.secondary},
                      ]}
                      onPress={() => setType(item.id)}>
                      <Text
                        style={[
                          styles.btnTxt,
                          type == item.id && {color: COLORS.white},
                        ]}>
                        {item.type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {/* <Text>RRRRRRRRRRRRRRRRRRRRRRRRRRRRRR</Text> */}
                <View style={styles.sideBar}>
                  {featureType.slice(3, 6).map(item => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        styles.btn,
                        type == item.id && {backgroundColor: COLORS.secondary},
                      ]}
                      onPress={() => setType(item.id)}>
                      <Text
                        style={[
                          styles.btnTxt,
                          type == item.id && {color: COLORS.white},
                        ]}>
                        {item.type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.rightBox}>
                  {type == 1 && (
                    <View style={styles.container1}>
                      <ColorPicker
                        hideSliders
                        onColorSelected={color => {
                          handleChange('color1', color);
                          // Alert.alert(
                          //   `Color selected successfully`,
                          //   centeredText,
                          // );
                          console.log('Color selected:', color);
                        }}
                        style={{
                          width: SIZES.width * 0.4,
                          height: SIZES.height * 0.25,
                          alignSelf: 'center',
                        }}
                      />
                      <Text
                        style={{
                          fontSize: SIZES.width * 0.035,
                          alignSelf: 'center',
                          color: COLORS.secondary,
                        }}>
                        Chose the color and tap into center
                      </Text>
                    </View>
                  )}

                  {/* {colorList && type == 2 && (
                  <FlatList
                  data={colorList}
                  renderItem={({item, index}) => (
                    <FeatureRow
                      title={item.color_name}
                      colorCode={item?.color_code}
                      value={postData.color2 == item ? true : false}
                      onValueChange={() => handleChange('color2', item)}
                    />
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                  />
                  )} */}

                  <View style={{marginTop: SIZES.height * 0.02}}>
                    {damageList && type == 3 && (
                      <FlatList
                        data={damageList}
                        renderItem={({item, index}) => (
                          <FeatureRow
                            title={item.damage}
                            value={postData.damage_id == item ? true : false}
                            onValueChange={() =>
                              handleChange('damage_id', item)
                            }
                          />
                        )}
                        key={item => item.id}
                        showsVerticalScrollIndicator={false}
                        horizontal
                      />
                    )}
                  </View>

                  {stainsList && type == 4 && (
                    <FlatList
                      data={stainsList}
                      renderItem={({item, index}) => (
                        <FeatureRow
                          title={item.stains}
                          value={postData.stain_id == item ? true : false}
                          onValueChange={() => handleChange('stain_id', item)}
                        />
                      )}
                      key={item => item.id}
                      showsVerticalScrollIndicator={false}
                      horizontal
                    />
                  )}

                  {packingList && type == 5 && (
                    <FlatList
                      data={packingList}
                      renderItem={({item, index}) => (
                        <FeatureRow
                          title={item.packing_style}
                          checkBox={{
                            position: 'absolute',
                            right: SIZES.width * 0.12,
                            bottom: SIZES.height * -0.021,
                          }}
                          row1={{
                            width: SIZES.width * 0.68,
                            marginVertical: SIZES.height * 0.015,
                            alignItems: 'center',
                          }}
                          price={item.price}
                          value={postData.packing_id == item ? true : false}
                          onValueChange={() => {
                            handleChange('packing_id', item),
                              setPackingCharge(item.price);
                          }}
                        />
                      )}
                      key={item => item.id}
                      showsVerticalScrollIndicator={false}
                    />
                  )}

                  {addonList && type == 6 && (
                    <FlatList
                      data={addonList}
                      renderItem={({item, index}) => (
                        <FeatureRow
                          title={item.addon_name}
                          price={item.price}
                          value={postData.addon_id == item ? true : false}
                          onValueChange={() => {
                            handleChange('addon_id', item),
                              setAddonCharge(item.price);
                          }}
                        />
                      )}
                      horizontal
                      key={item => item.id}
                      showsVerticalScrollIndicator={false}
                    />
                  )}

                  {ironList && type == 7 && (
                    <FlatList
                      data={ironList}
                      renderItem={({item, index}) => (
                        <FeatureRow
                          title={item.iron}
                          value={postData.iron.id == item.id ? true : false}
                          onValueChange={() => {
                            handleChange('iron', item),
                              setIronCharge(
                                item.id
                                  ? product?.iron_price
                                    ? Number(product?.iron_price)
                                    : 0
                                  : 0,
                              );
                          }}
                        />
                      )}
                      key={item => item.id}
                      showsVerticalScrollIndicator={false}
                      horizontal
                    />
                  )}

                  {deliveryTypeList && type == 8 && (
                    <FlatList
                      data={deliveryTypeList}
                      renderItem={({item, index}) => (
                        <FeatureRow
                          title={item.type}
                          price={item.urgent_charge}
                          value={postData.delivery.id == item.id ? true : false}
                          onValueChange={() => {
                            handleChange('delivery', item),
                              setDeliveryCharge(
                                item.id
                                  ? product?.iron_price
                                    ? Number(product?.iron_price)
                                    : 0
                                  : 0,
                              );
                          }}
                        />
                      )}
                      key={item => item.id}
                      showsVerticalScrollIndicator={false}
                    />
                  )}
                </View>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    // handleItemsList('Reset')
                    reset();
                    // setIsModalVisible(isModalVisible)
                  }}
                  // onPress={toggleModal}
                >
                  <Text style={styles.yes}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    // Handle 'Yes' button click here
                    // toggleModal();
                    // setVisible(true);
                    // navigation.navigate('OnBoardingScreen');
                    handleApplyChange();
                  }}>
                  <Text style={styles.cancle}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={{}}>
        <View // Button Add Coupon Check Discount
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: 15,
          }}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                borderWidth: 2,
                borderColor: COLORS.secondary,
                backgroundColor: COLORS.white,
                width: SIZES.width * 0.4,
                alignItems: 'center',
              },
            ]}
            // onPress={() => navigation.navigate('Coupon',{
            //   items,
            // })}
          >
            <Text style={[styles.btn_text, {color: COLORS.secondary,marginBottom: 0}]}>
              Add Coupon
            </Text>
          </TouchableOpacity>
          <View style={{width: SIZES.width * 0.066}} />
          <TouchableOpacity
            style={[
              styles.btn,
              {
                borderWidth: 2,
                borderColor: COLORS.secondary,
                backgroundColor: COLORS.white,
                alignItems: 'center',
              },
            ]}
            onPress={() =>
              navigation.navigate('Discount', {
                items,
              })
            }>
            <Text
              style={[
                styles.btn_text,
                {color: COLORS.secondary, marginBottom: 0},
              ]}>
              Check Discount
            </Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#651898', '#2C0D8F']}
          style={{
            backgroundColor: COLORS.secondary,
            width: SIZES.width * 1.0,
            borderTopLeftRadius: SIZES.width * 0.1,
            borderTopRightRadius: SIZES.width * 0.1,
          }} // Your styles for the LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
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
              paddingVertical: SIZES.height * 0.005,
              paddingHorizontal: 5,
              // position: 'absolute',
              // bottom: 0,
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginHorizontal: SIZES.width * 0.08,
                  width: SIZES.width * 0.5,
                  // marginTop: SIZES.height * 0.04,
                }}>
                <Text style={{color: COLORS.secondary}}>
                  Total Price ({shwitem.length} Items)
                </Text>
                <Text style={{color: COLORS.secondary}}>₹ {totalAmount}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginHorizontal: SIZES.width * 0.08,
                  marginTop: SIZES.height * 0.01,
                  width: SIZES.width * 0.5,
                }}>
                <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                  Discount
                </Text>
                <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                  {discountObj?.discount ? discountObj?.discount + '%' : 0}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // marginHorizontal: SIZES.width * 0.08,
                  marginTop: SIZES.height * 0.01,
                  // paddingBottom: SIZES.height * 0.02,
                  width: SIZES.width * 0.5,
                }}>
                <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                  Subtotal
                </Text>
                <Text style={{color: COLORS.secondary, fontWeight: 'bold'}}>
                  ₹{' '}
                  {discountObj?.discount
                    ? totalAmount -
                      (totalAmount * Number(discountObj?.discount)) / 100
                    : totalAmount}
                </Text>
              </View>
            </View>
            <View>
              <Button1
                style={{
                  // borderWidth: 2,
                  // alignSelf: 'center',
                  borderRadius: SIZES.width * 0.02,
                  borderColor: COLORS.primary,
                  // marginBottom: SIZES.width * 0.01,
                  width: SIZES.width * 0.38,
                }}
                // onPress={() => {
                //   navigation.navigate('PickupSchedule', {
                //     ...itemsData,
                //     pickupmylaundry:false
                //   });
                //   // handleConfimOrder();
                //   // confirmColor1();
                // }}
                onPress={() => {
                  if (visible === false) {
                    setIsModalVisible(!isModalVisible);
                  } else if (visible === true) {
                    navigation.navigate('PickupSchedule');
                  }
                }}>
                Continue Order
              </Button1>
            </View>
          </View>
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
          {/* <View style={{height: SIZES.height * 0.01}} /> */}
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  loading: state.product.loading,
  // userData: state.auth.userData,
  // productData: state.product.productData,
  // categoryList: state.home.categoryList,
  // serviceList: state.home.serviceList,
  // colorList: state.product.colorList,
  // damageList: state.product.damageList,
  // packingList: state.product.packingList,
  // addonList: state.product.addonList,
  // stainsList: state.product.stainsList,
  // deliveryTypeList: state.product.deliveryTypeList,
  // subsDetails: state.subscription.subsDetails,
});

export default connect(mapStateToProps)(AddOnScreen);
// export default AddOnScreen;

//Json data

const damageList = [
  {id: 1, damage: 'Collar Dark'},
  {id: 2, damage: 'Bubble'},
  {id: 3, damage: 'Burn'},
];

const stainsList = [
  {id: 1, stains: 'off'},
  {id: 2, stains: 'Grease'},
  {id: 3, stains: 'Testing'},
];

const ironList = [
  {id: 1, iron: 'Yes'},
  {id: 2, iron: 'No'},
];

const addonList = [
  {id: 1, addon_name: 'Coloring', price: '50'},
  {id: 2, addon_name: 'Kalf', price: '40'},
  {id: 3, addon_name: 'Startch', price: '60'},
];

const packingList = [
  {id: 1, packing_style: 'Special Packing (₹ 100)'},
  {id: 2, packing_style: 'Normal Packing (₹ 30)'},
  {id: 3, packing_style: 'Hanger Packing (₹ 80)'},
  {id: 4, packing_style: 'Handled Bag... (₹ 70)'},
  {id: 5, packing_style: 'Plastic Bag P... (₹ 50)'},
  {id: 6, packing_style: 'Paper Bag Pac.. (₹ 50)'},
];

// const addonsList = [
//   {
//     uid: '1',
//     image: 'https://example.com/image1.jpg',
//     product_name: 'Product 1',
//     amount: 10.99,
//     service_name: 'Service 1',
//     category_name: 'Category 1',
//   },
//   {
//     uid: '2',
//     image: 'https://example.com/image2.jpg',
//     product_name: 'Product 2',
//     amount: 15.99,
//     service_name: 'Service 2',
//     category_name: 'Category 2',
//   },
//   // Add more items as needed
// ];

const deliveryTypeList = [
  {
    id: 1,
    type: 'Normal',
    type_ar: 'طبيعي',
    num_days: 5,
    urgent_charge: '0.00',
    added_by: 3,
    modify_by: null,
    modify_date: null,
    created_at: '2023-06-02 18:08:55',
    updated_at: '2023-10-14 17:08:39',
  },
  {
    id: 2,
    type: 'Fast',
    type_ar: 'سريع',
    num_days: 2,
    urgent_charge: '100.00',
    added_by: 3,
    modify_by: null,
    modify_date: null,
    created_at: '2023-06-02 18:17:48',
    updated_at: '2023-06-02 18:19:55',
  },
  {
    id: 3,
    type: 'Super Fast',
    type_ar: 'سريع جدا',
    num_days: 1,
    urgent_charge: '200.00',
    added_by: 3,
    modify_by: null,
    modify_date: null,
    created_at: '2023-06-02 18:19:40',
    updated_at: '2023-06-02 18:19:40',
  },
  {
    id: 6,
    type: 'Medium',
    type_ar: null,
    num_days: 3,
    urgent_charge: '50.00',
    added_by: 3,
    modify_by: null,
    modify_date: null,
    created_at: '2023-10-03 12:59:01',
    updated_at: '2023-10-03 12:59:01',
  },
];
