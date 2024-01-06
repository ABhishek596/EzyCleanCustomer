import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
import Icons from '../Icons';

const ProductCard = ({
  productName,
  deletePress,
  onPlusPress,
  onMinusPress,
  source,
  marginTop,
  marginBottom,
  price,
  quantity,
  service_name,
}) => {
  return (
    <View
      style={[
        styles.card,
        {marginTop: marginTop},
        marginBottom && {marginBottom: marginBottom},
      ]}>
      <View style={[styles.image_box]}>
        <Image source={source} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.content_box}>
        <View style={{marginTop: SIZES.height * 0.0}}>
          <Text style={styles.product_name}>{productName.slice(0, 8)}...</Text>
          <View style={{height: 5}} />
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.service}>{service_name}</Text>
        </View>
        <View style={styles.quan_row}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPlusPress}
            style={{...styles.count_btn}}>
            <Icons name={'plus'} size={16} color={COLORS.white} />
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'red',
              alignSelf: 'center',
              width: SIZES.width * 0.05,
              height: SIZES.height * 0.03,
              alignItems:'center',
              justifyContent:'center',
              borderWidth:1,
              borderColor:COLORS.secondary
              // borderRadius:5
            }}>
            <Text style={styles.count_text}>{quantity}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onMinusPress}
            style={{...styles.count_btn}}>
            <Icons name={'minus'} size={16} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      {/* {quantity > 0 ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.delete_btn}
          onPress={deletePress}>
          <Icons name={'delete'} size={20} color={COLORS.danger} />
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
};

ProductCard.defaultProps = {
  productName: null,
  source: images.primWash,
  marginTop: null,
  price: 0,
  quantity: 0,
  setQuantity: null,
  deletePress: null,
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: SIZES.width * 0.65,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.025,
    padding: SIZES.width * 0.03,
    elevation: 4,
    borderColor: COLORS.gray30,
    borderRadius: SIZES.width * 0.03,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  image_box: {
    width: SIZES.width * 0.14,
    height: SIZES.width * 0.14,
    // backgroundColor: '#E9C7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.03,
    borderWidth: 0.7,
    borderColor: COLORS.gray30,
    borderRadius: SIZES.width * 0.03,
  },

  image: {
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    // backgroundColor: '#E9C7FF',
  },

  content_box: {
    width: SIZES.width * 0.45,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: SIZES.height * 0.01,
    // justifyContent: 'center',
    // borderWidth: 1,
  },

  product_name: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * 0.038,
    color: COLORS.secondary,
    // color: COLORS.white,
    marginBottom: -6,
  },

  price: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.038,
    color: COLORS.secondary,
    // color: COLORS.white,
    marginBottom: -4,
  },
  service: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.03,
    color: COLORS.secondary,
    // color: COLORS.white,
    marginBottom: -4,
  },

  // ============ count button ================
  quan_row: {
    width: SIZES.width * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderRadius: SIZES.width * 0.014,
    borderColor: COLORS.primary,
    overflow: 'hidden',
    marginTop: SIZES.height * 0.01,
  },
  count_btn: {
    width: SIZES.width * 0.045,
    height: SIZES.width * 0.045,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 180 / 2,
    // borderColor: COLORS.primary,
  },

  count_text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.03,
    color: COLORS.secondary,
    // marginBottom: -2,
    // borderWidth: 1.2,
    // paddingHorizontal: 5,
    // paddingVertical: 2,
    borderColor: COLORS.secondary,
    alignSelf: 'center',
    // padding:3
  },

  // ============ buttons ===========
  edit_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderBottomLeftRadius: SIZES.width * 0.03,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },

  delete_btn: {
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    borderTopLeftRadius: SIZES.width * 0.03,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
