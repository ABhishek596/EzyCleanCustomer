import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons, images} from '../../constants';
import Stars from 'react-native-stars';

const ServiceCard = ({
  service,
  source,
  marginTop,
  onPress,
  rating,
  subTitle,
  price,
}) => {
  // console.log("source service card : ", source)
  return (
    <View>
      <TouchableOpacity
        style={[styles.card, {marginTop: marginTop}]}
        onPress={onPress}>
        <View style={[styles.image_box]}>
          <Image source={source} style={styles.image} resizeMode="contain" />
        </View>
        {/* <View style={styles.content_box}> */}
          {/* <Text style={styles.service}>{service}</Text> */}
          {/* <Text style={styles.sub_title}>{subTitle}</Text> */}
          {/* rating */}
          {/* <View` style={styles.rating_row}>
                    <Stars
                        display={rating}
                        spacing={3}
                        count={5}
                        starSize={15}
                        fullStar={icons.star_fill}
                        emptyStar={icons.star_unfill}
                        disabled={true}
                    />
                </View> */}
          {/* <Text style={styles.price}>{price}</Text> */}
        {/* </View> */}
      </TouchableOpacity>
      <Text style={styles.service}>{service}</Text>
    </View>
  );
};

ServiceCard.defaultProps = {
  category: null,
  source: images.primWash,
  marginTop: null,
  rating: 3,
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: SIZES.width * 0.28,
    height: SIZES.width * 0.28,
    borderRadius: SIZES.width * 0.03,
    backgroundColor: COLORS.white,
    // backgroundColor:'red',
    alignItems: 'center',
    marginLeft: SIZES.width * 0.03,
    elevation: 5,
    marginVertical: SIZES.height * 0.01,
    justifyContent:'center'
  },

  // image_box: {
  //     width: SIZES.width * .25,
  //     height: SIZES.width * .25,
  //     backgroundColor: COLORS.light7,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     marginRight: SIZES.width * .03,
  //     borderWidth: 0.7,
  //     borderColor: COLORS.gray30,
  //     borderRadius: SIZES.width * .03,
  //     alignSelf:'center'
  // },

  image: {
    width: SIZES.width * 0.2,
    height: SIZES.width * 0.2,
    alignSelf: 'center',
  },

  // content_box: {
  //     width: SIZES.width * .55,
  //     alignItems: 'flex-start',
  //     // borderWidth: 1,
  // },

  service: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.04,
    color: COLORS.secondary,
    // color: COLORS.white,
    // marginBottom: -6,
    alignSelf: 'center',
    marginLeft: SIZES.width * 0.03,
  },

  sub_title: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.031,
    color: COLORS.black2,
    // color: COLORS.white,
    marginBottom: -3,
    marginTop: SIZES.height * 0.01,
  },

  price: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * 0.046,
    color: COLORS.black,
    // color: COLORS.white,
    marginBottom: -4,
  },

  rating_row: {
    marginTop: SIZES.height * 0.004,
    marginBottom: SIZES.height * 0.01,
  },
});
