import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  PermissionsAndroid,
  Platform,
  StatusBar,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import {SIZES, data, icons, images} from '../../constants';
import Loading from '../../component/loading';
import {connect} from 'react-redux';
import styles from './styles';
import {GetAllNotification} from '../../redux/actions/notificationAction';
import NoDataBox from '../../component/noDataBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Notification = ({navigation, loading, GetAllNotification}) => {
  const [notification, setNotification] = useState();

  useEffect(async () => {
    const token = await AsyncStorage.getItem('@USER_TOKEN');
    setToken(token);
  }, []);

  const [token, setToken] = useState();
  console.log('notification token-------->>', token);
  // useEffect(() => {
  //     GetAllNotification()
  // }, [])
  // console.log("notification : ", notification)
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/notifications/1',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then(response => {
        // console.log(JSON.stringify(response.data));
        setNotification(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : notification ? (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          <View style={globalStyles.center}>
            {/* <Text style={styles.title}>Today</Text> */}

            {/* notification container */}

            <View>
              <FlatList
                data={notification}
                renderItem={({item, index}) => (
                  // <View style={[styles.box, index == 0 && { marginTop: SIZES.height * .025 }]}>
                  // <TouchableOpacity style={styles.box}>
                  //     <Image source={item.image} style={styles.image} resizeMode='contain' />
                  //     <View style={styles.text_box}>
                  //         <Text style={styles.service_text}>{item.message}</Text>
                  //         <TouchableOpacity activeOpacity={0.5} style={styles.view_btn}>
                  //             <Text style={styles.view_text}>View Details</Text>
                  //         </TouchableOpacity>
                  //     </View>
                  // </TouchableOpacity>
                  <View style={styles.box}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.image}
                      resizeMode="contain"
                    />
                    <View style={styles.text_box}>
                      {/* <Text style={styles.service_text}>{item.message?.length > 10 ? item.message?.slice(10) + "..." : item.message}</Text> */}
                      <Text style={styles.service_text}>
                        {item.description?.length > 10
                          ? item.description?.slice(0) + '...'
                          : item.message}
                      </Text>

                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.view_btn}>
                        <Text style={styles.view_text}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      ) : (
        <NoDataBox title={'No Notification'} source={images.noNotification} />
      )}
    </>
  );
};

// const notification = [
//     {
//       id: 1,
//       message: `A convenient laundry solution that help protect the environment...`,
//       image: require('../../assets/images/user1.png'), // You need to provide the actual image path
//     },
//     {
//       id: 2,
//       message: "t has survived not only five centuries, but also the leap into...",
//       image: require('../../assets/images/user2.png'), // You need to provide the actual image path
//     },
//     {
//       id: 3,
//       message: "Many desktop publishing packages and web page editors now use",
//       image: require('../../assets/images/user3.png'), // You need to provide the actual image path
//     },
//     // Add more notifications as needed
//   ];

// const mapStateToProps = (state) => ({
//     loading: state.notification.loading,
//     notification: state.notification.notification,
// })

// const mapDispatchToProps = {
//     GetAllNotification,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Notification)
export default Notification;
