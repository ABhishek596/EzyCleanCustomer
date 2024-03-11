import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  //  ================  order card =====================

  box: {
    width: SIZES.width * 0.9,
    alignItems: 'center',
    borderRadius: SIZES.width * 0.05,
    overflow: 'hidden',
    backgroundColor: COLORS.light1,
    marginBottom: SIZES.height * 0.025,
  },

  box_header: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.width * 0.05,
    // marginVertical: SIZES.height * .02,
    // borderRadius: SIZES.width * .05,
  },

  order_row: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
    paddingLeft: SIZES.width * 0.05,
    // marginVertical: SIZES.height * .02,
  },

  order_id: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.04,
    marginBottom: -5,
    color: COLORS.white,
  },

  cancel_btn: {
    // width: SIZES.width * .34,
    height: SIZES.height * 0.056,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.height * 0.02,
    paddingHorizontal: SIZES.width * 0.03,
    // borderWidth: 1,
  },

  cancel: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.036,
    marginBottom: -4,
    color: COLORS.white,
    textDecorationLine: 'underline',
  },

  order_title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.038,
    marginBottom: -4,
    // color: "#0A0909",
    color: COLORS.secondary,
  },

  order_text: {
    width: SIZES.width * 0.34,
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.036,
    marginBottom: -4,
    color: COLORS.secondary,
  },

  btn: {
    width: SIZES.width * 0.34,
    height: SIZES.height * 0.056,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.width * 0.074,
    marginVertical: SIZES.height * 0.02,
    // borderWidth:2,
    // borderColor:COLORS.secondary
  },

  btn_text: {
    fontFamily: FONTS.medium,
    color: COLORS.white,
    fontSize: SIZES.width * 0.04,
    // marginBottom: -4,
  },
  tinyLogo: {
    width: SIZES.width * 0.044,
    height: SIZES.width * 0.044,
    left: SIZES.width * 0.01,
    // top: SIZES.height * .005,
    borderRadius: 180 / 2,
  },
  header_txt:{
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
    fontSize: SIZES.width * 0.04,
    alignSelf:'flex-end',
    marginRight:SIZES.width * 0.055,
    marginTop:SIZES.height * 0.01,
    paddingBottom:SIZES.height * 0.005,
  }
});
