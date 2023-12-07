import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import {COLORS, images} from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import {connect} from 'react-redux';
import {GetUserDataApi, LogoutApi} from '../../redux/actions/authActions';
import Loading from '../../component/loading';
// import {http2} from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import axios from 'axios';
const ScreenNavigation = ({iconName, onPress, children}) => {
  return (
    <TouchableOpacity
      style={[
        styles.screen_btn,
        children == 'Logout' && {borderBottomWidth: 0},
      ]}
      onPress={onPress}>
      <Icons
        name={iconName}
        size={25}
        color={COLORS.secondary}
        style={styles.icon_style}
      />
      <Text style={styles.screen_title}>{children}</Text>
    </TouchableOpacity>
  );
};

const Account = ({
  navigation,
  LogoutApi,
  loading,
  userData,
  GetUserDataApi,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log('GetUserDataApi--------', GetUserDataApi);
  // console.log('userDataAccount/Profile--------', userData);
  // const user = useSelector(state => state.auth);
  // console.log('userDatassssssss--------', user);
  //   axios(config)
  //     .then(response => {
  //       console.log(JSON.stringify(response.data));
  //       navigation.navigate('OnBoardingScreen');
  //       RNToasty.Success({
  //         title: 'User logout successfully',
  //         duration: 2,
  //       });
  //       setIsModalVisible(!isModalVisible);
  //     })
  //     .catch(error => {
  //       console.log('logout Error...............',error);
  //     });
  // }

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    GetUserDataApi();
  }, []);

  // const ModalView = () => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  //   const toggleModal = () => {
  //     setIsModalVisible(!isModalVisible);
  //   };

  //   return (
  //     <View style={styles.container}>
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={toggleModal}
  //       >
  //         <Text>Open Modal</Text>
  //       </TouchableOpacity>

  //       <Modal
  //         transparent={true}
  //         visible={isModalVisible}
  //         animationType="slide"
  //       >
  //         <View style={styles.modalContainer}>
  //           <View style={styles.modalContent}>
  //             <Image
  //               source={require('./path/to/your/image.png')}
  //               style={styles.image}
  //             />
  //             <Text style={styles.text}>
  //               Are you sure you want to log out?
  //             </Text>
  //             <View style={styles.buttonRow}>
  //               <TouchableOpacity
  //                 style={styles.button}
  //                 onPress={toggleModal}
  //               >
  //                 <Text>Cancel</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity
  //                 style={styles.button}
  //                 onPress={() => {
  //                   // Handle 'Yes' button click here
  //                   toggleModal();
  //                 }}
  //               >
  //                 <Text>Yes</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          {/* header */}
          <ImageBackground
            source={images.bg}
            style={styles.header_bg}
            resizeMode="contain">
            <View style={styles.header_row}>
              <View style={globalStyles.row}>
                <TouchableOpacity
                  style={styles.back_btn}
                  onPress={() => navigation.goBack()}>
                  <Icons name={'back'} size={22} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.page_title}>Profile</Text>
              </View>
              <TouchableOpacity
                style={styles.notification_btn}
                onPress={() => navigation.navigate('Notification')}>
                <Icons name={'notification'} size={22} color={COLORS.black} />
              </TouchableOpacity>
            </View>

            <View style={styles.profile_box}>
              {/* <Image source={!userData?.profile_picture.slice(-10, -4)  == "avatar" ? {uri: userData.profile_picture} : images.profile1} style={styles.profile}
                                resizeMode='stretch'
                            />  */}
              <View style={styles.image_box}>
                <Image
                  source={
                    userData?.profile_picture
                      ? {uri: userData.profile_picture}
                      : images.profile1
                  }
                  style={styles.profile}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.user_name}>{`${userData?.name}`}</Text>
              <Text style={styles.text}>Welcome Back</Text>
            </View>
          </ImageBackground>
          {/* button container */}
          <View style={styles.btn_container}>
            <ScreenNavigation
              iconName={'profile_useric'}
              onPress={() => navigation.navigate('EditProfile')}>
              Edit Profile
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'call1'}
              onPress={() => navigation.navigate('ContactUs')}>
              Contact Us
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'shield'}
              onPress={() => navigation.navigate('PrivacyPolicy')}>
              Privacy Policy
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'info'}
              onPress={() => navigation.navigate('AboutUs')}>
              About Us
            </ScreenNavigation>
            <ScreenNavigation
              iconName={'faq'}
              onPress={() => navigation.navigate('Faqs')}>
              FAQs
            </ScreenNavigation>
            {/* <ScreenNavigation
                            iconName={"setting"}
                            onPress={() => navigation.navigate("PaymentSuccess")}  //ActivePlan Subscription
                        >Settings</ScreenNavigation> */}
            <ScreenNavigation
              iconName={'logout'}
              // onPress={LogoutApi}
              onPress={toggleModal}>
              Logout
            </ScreenNavigation>
            <View style={styles.container}>
              {/* <TouchableOpacity
          style={styles.button}
          onPress={toggleModal}
        >
          <Text>Open Modal</Text>
        </TouchableOpacity> */}

              <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="fade">
                <View style={styles.modalContainer}>
                  <LinearGradient
                    colors={['#EDD2FF', '#D9CCFF']}
                    style={[styles.modalContent]} // Your styles for the LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Image
                      source={require('../../assets/icons/logout2.png')}
                      style={styles.image}
                    />
                    <Text style={styles.texta}>
                      Are you sure you want to log out?
                    </Text>
                    <View style={styles.buttonRow}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={toggleModal}>
                        <Text style={styles.cancle}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button1}
                        // onPress={() => {
                        // Handle 'Yes' button click here
                        // handlesubmit
                        // toggleModal();

                        // navigation.navigate('OnBoardingScreen');
                        // }}
                        onPress={LogoutApi}>
                        <Text style={styles.yes}>Yes</Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  userData: state.auth.userData,
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  LogoutApi,
  GetUserDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
// export default Account;
