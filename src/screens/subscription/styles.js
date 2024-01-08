import {StyleSheet} from 'react-native';
import {COLORS, SIZES,FONTS} from '../../constants';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.white,
    // padding: SIZES.width * 0.05,
  },
  mainSubView: {
    backgroundColor: COLORS.lightPrimary,
    borderRadius: SIZES.width * 0.05,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.width * 0.04,
    paddingVertical: SIZES.width * 0.04,
    // borderTopLeftRadius: SIZES.width * 0.05,
    // borderTopRightRadius: SIZES.width * 0.05,
  },
  imgView: {
    backgroundColor: COLORS.white,
    padding: SIZES.width * 0.01,
    borderRadius: SIZES.width * 0.03,
    alignSelf: 'center',
  },
  img: {
    height: SIZES.height * 0.1,
    width: SIZES.width * 0.2,
    borderRadius: SIZES.width * 5,
    resizeMode: 'contain',
  },
  textView: {
    flex: 0.92,
  },
  nameTxt: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: 'bold',
  },
  feeTxt: {
    color: COLORS.white,
    fontWeight: '500',
  },
  subDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.width * 0.04,
    paddingHorizontal: SIZES.width * 0.04,
  },
  infoTxt: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
  infoTxtSm: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  infoTxtBold: {
    color: COLORS.secondary,
    fontWeight: '900',
    fontSize: SIZES.h3,
    textAlign: 'right',
  },
  horizLine: {
    borderBottomWidth: SIZES.width * 0.001,
    borderColor: COLORS.horizLine,
  },
  btn: {
    borderRadius: SIZES.width * 0.1,
    alignSelf: 'center',
    marginVertical: SIZES.width * 0.06,
    width: SIZES.width * 0.8,
  },
  activeSubBtn: {
    // position: 'absolute',
    alignSelf: 'center',
    // bottom: SIZES.width * 0.05,
    borderRadius: SIZES.width * 0.1,
    width: SIZES.width * 0.85,
    marginVertical:SIZES.height * 0.035
  },
  cat_touch: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: SIZES.width * 0.015,
    // backgroundColor: COLORS.white,
    // elevation: 5,
    paddingHorizontal: SIZES.width * 0.07,
    paddingVertical: SIZES.height * 0.01,
    marginRight: SIZES.width * 0.15,
    marginVertical: SIZES.height * 0.015,
    // borderWidth: 1,
    // borderColor: COLORS.secondary,
    alignSelf: 'center',
    // marginLeft:40
  },

  cat_text: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.width * 0.04,
    color: COLORS.white,
    alignSelf: 'center',
    
    // marginBottom: -4,
    // textAlign: 'center',
  },

  active_cat_text: {
    fontFamily: FONTS.medium,
    color: COLORS.secondary,
  },
});
