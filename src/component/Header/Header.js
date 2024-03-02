import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,

} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../Icons';
const Header = ({onPress, source, navigation}) => {
  // let userData = useSelector(state => state.auth.userData);

  // console.log("user data : ", userData)
  return (
    <View style={styles.box}>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0.5}}
        colors={[COLORS.primary, COLORS.primary1]}
        // colors={["#1C3FAA", "#2351DB"]}
        style={styles.container}> */}
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        resizeMode='stretch'
        style={styles.container}>
        <View style={{top:SIZES.height * -0.015}}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: SIZES.width * 0.45,
              top: SIZES.height * 0.025,
            }}
            onPress={()=>navigation.goBack()}
            >
            <Icons name={'back'} size={20} color={'#ffffff'} />
          </TouchableOpacity>
          {/* <Text style={styles.title}>Dryfi</Text> */}
          <View style={styles.imageBox}>
            <Image
              source={icons.dryfinewlogo}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

Header.defaultProps = {
  onPress: null,
};

export default Header;

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.white,
    // marginTop:SIZES.height * -0.025,
  },
  container: {
    width: SIZES.width,
    height: SIZES.height * 0.1831,
    // backgroundColor: COLORS.primary,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  imageBox: {
    // width: SIZES.width * .2,
    // height: SIZES.height * .1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // // borderWidth: 1,
    // marginTop: SIZES.height * 0.03,
  },

  image: {
    width: SIZES.width * 0.14,
    height: SIZES.width * 0.14,
    tintColor: COLORS.white,
  },

  title: {
    fontFamily: FONTS.bold,
    // fontSize: 22,
    fontSize: SIZES.width * 0.056,
    color: COLORS.white,
    marginTop: -3,
  },
});
