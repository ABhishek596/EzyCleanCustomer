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
// import {connect} from 'react-redux';
// import {GetUserDataApi, LogoutApi} from '../../redux/actions/authActions';
import Loading from '../../component/loading';
// import {http2} from '../../services/api';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {RNToasty} from 'react-native-toasty';

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



  const handlesubmit=()=>{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/logout',
      headers: {
        Authorization:
          'Bearer 56|ZA9BYOLbhMwVRKdglT3LuRY9hgTwZ04k7sYUZEqx646e2a87',
        // 'Cookie': 'XSRF-TOKEN=eyJpdiI6ImxHaFZ3eU9NMnRBSGZvSlZra0ZiS2c9PSIsInZhbHVlIjoiWWc2dEJBaTlIdnFjM2lSU09YVTkwdDFPRUVUc3F1QUduSWNGRjVaUW95N3dRanlybUxuek9ocjh1N2pCYVcwdFNaR09zS0ttU3J5MmNQTmFjVS9PUVEyUm80SnJyWVR6eXpCMUxFSXhzeGswVXJzSU02cHllSXVwUVAzQ3B2TEwiLCJtYWMiOiJjMzViNjBkNTg4MDU2M2RlNjMwZjVmNmI3M2FmN2ZmZDY5N2U2ZmI0M2ExYmU4MTNjNDM5ZGNkMmNmYWQ4ZWYzIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Im1iRGZqVi9HdVZtVVF3VjdIZ1RZT1E9PSIsInZhbHVlIjoidXFsT1lrK2VjRUpweWpUemNvVW5oOEl6clVwbnhWU1dRc3pnV1pISXgzU3EzUWlCdCsrNnZBeUd5dmhjTmpzaGozaXpORmhEY2Z2WG5uNUtMbDV0WnE0N0xOSmF3YzdzWFZvWEJKMURPdXpreU9odEtNVTZxSXkydWdMbVRnd2siLCJtYWMiOiIyMzU1NDQxZjJmNTc0ZWY0ZDc4NmFlNzY1NzcwNjdiYjViMzQzYjdkYmM5NWY5YjNiNDg4OGVhNThhNzcxNDBkIiwidGFnIjoiIn0%3D'
      },
    };

    
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        navigation.navigate('OnBoardingScreen');
        RNToasty.Success({
          title: 'User logout successfully',
          duration: 2,
        }); 
        setIsModalVisible(!isModalVisible);
      })
      .catch(error => {
        console.log('logout Error...............',error);
      });
  }

  const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
  };
  // useEffect(() => {
  //   GetUserDataApi();
  // }, []);

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
              <Text
                style={
                  styles.user_name
                }>{`${userData?.customer_details?.customer_name}`}</Text>
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
                        onPress={() => {
                          // Handle 'Yes' button click here
                          handlesubmit();
                          // toggleModal();
                          // navigation.navigate('OnBoardingScreen');
                        }}>
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

// const mapStateToProps = state => ({
//   userData: state.auth.userData,
//   loading: state.auth.loading,
// });

// const mapDispatchToProps = {
//   LogoutApi,
//   GetUserDataApi,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Account);
export default Account;
