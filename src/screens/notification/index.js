import React, {useEffect} from 'react';
import {
  View,
  // Button,
  // PermissionsAndroid,
  // Platform,
  StatusBar,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
// import Button1 from '../../component/button/Button1';
import {images} from '../../constants';
import Loading from '../../component/loading';
import {connect} from 'react-redux';
import styles from './styles';
import {GetAllNotification} from '../../redux/actions/notificationAction';
import NoDataBox from '../../component/noDataBox';
const Notification = ({loading, notification, GetAllNotification}) => {

  useEffect(() => {
    GetAllNotification();
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

const mapStateToProps = state => ({
  loading: state.notification.loading,
  notification: state.notification.notification,
});

const mapDispatchToProps = {
  GetAllNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
