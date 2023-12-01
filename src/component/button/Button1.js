import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

// const Button1 = ({ backgroundColor, loading, disabled, style, children, textColor, onPress }) => {
//   return (
//     <TouchableOpacity activeOpacity={0.5}
//       style={{ ...styles.btn, ...style, backgroundColor: disabled ? COLORS.disableColor : backgroundColor }}
//       onPress={onPress}
//       disabled={disabled}
//     >
//       {loading &&
//         <ActivityIndicator color={COLORS.white} size={30} />
//       }
//       <Text style={{ ...styles.btn_text, color: disabled ? COLORS.disableTextColor : textColor }}>{children}</Text>
//     </TouchableOpacity>
//   )
// }
const Button1 = ({
  backgroundColor,
  loading,
  disabled,
  style,
  children,
  textColor,
  onPress,
  btnTextStyle,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} disabled={disabled} >
      <LinearGradient
        colors={['#651898', '#2C0D8F']}
        style={{...styles.btn, ...style, backgroundColor: backgroundColor}} // Your styles for the LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {loading && (
          <ActivityIndicator
            color={COLORS.white}
            size={25}
            style={{marginRight: SIZES.width * 0.03}}
          />
        )}
        <Text style={{...styles.btn_text, color: textColor, ...btnTextStyle}}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button1.defaultProps = {
  backgroundColor: COLORS.buttonColor,
  style: null,
  textColor: COLORS.white,
  children: null,
  onPress: null,
  disabled: false,
  loading: false,
};

export default Button1;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.width * 0.9,
    // height: SIZES.height * 0.065,
    paddingVertical: SIZES.height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.buttonColor,
    // borderWidth: 1,
    // borderRadius: 8,
    borderRadius: SIZES.width * 0.024,
    height: SIZES.height * 0.074,
    // borderColor: "#333333",
  },

  btn_text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    // fontSize: 15,
    fontSize: SIZES.width * 0.045,
    // marginBottom: -5,
    marginVertical: SIZES.height * 0.005,
  },
});
