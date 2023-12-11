import { View, Text, ScrollView, TouchableOpacity, StatusBar, FlatList, ImageBackground, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images } from '../../constants';
import Loading from '../../component/loading';
import ServiceCard2 from '../../component/card/ServiceCard2';
import { http2 } from '../../services/api';
import axios from 'axios';

const AllServices = ({ navigation, loading,  }) => {

    useEffect(() => {
        let data = '';
    
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://ezyclean.theprojecttest.xyz/api/services',
          headers: {
            Authorization:
              'Bearer 160|LMkKJ9t0E4aTjRqXYRa5d10wByUbQ2wRkxJldtKj1f90965d',
          },
          data: data,
        };
    
        axios
          .request(config)
          .then(response => {
            // console.log(JSON.stringify(response.data));
            setServiceList(response.data.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
      const [serviceList, setServiceList] = useState();

    // console.log("category data : ", serviceList)

    return (
        <>
            {loading ?
                <Loading />
                :
                <View style={globalStyles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
                    <View style={globalStyles.center}>
                        {/* category container */}
                        <View>
                            {/* <View style={{ ...globalStyles.row1, marginVertical: SIZES.height * .02, }}>
                                <Text style={styles.title}>All Services</Text>
                            </View> */}
                            {serviceList &&
                                <FlatList
                                    data={serviceList}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.box}>
                                            <ServiceCard2
                                                marginTop={index == 0 ? SIZES.height * .03 : null}
                                                // subTitle={"standard dummy text ever since"}
                                                price={item.service?.price}
                                                source={{uri:item?.image}}
                                                service={item?.service_name}
                                                // subTitle={item.service?.description}
                                                // subTitle={'Premium laundry service employs enzyme presoak for tough dirt, uses optimum temperature...'}
                                                subTitle={item?.description}
                                                onPress={() => navigation.navigate("Discount", { serviceId: item.service?.id })}
                                            />
                                        </View>
                                    )}
                                    key={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                />
                            }
                            {/* <Text>........................</Text> */}
                        </View>
                    </View>
                </View>
            }
        </>

    )
}

const mapStateToProps = (state) => ({
    loading: state.home.loading,
    serviceList: state.home.serviceList,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)
// export default AllServices;


// const  serviceList = [
//       {
//         "id": 1,
//         "service": {
//           "id": 101,
//           "service_name": "Premium Wash",
//           "description": "Premium laundry service employs enzyme presoak for tough dirt, uses optimum temperature... ",
//           "image": require('../../assets/icons/iron.png'),
//           "price": "$35"
//         }
//       },
//       {
//         "id": 2,
//         "service": {
//           "id": 102,
//           "service_name": "Dry Cleaning",
//           "description": "Description for Service 2",
//           "image": "service2.jpg",
//           "price": "$75"
//         }
//       },
//       {
//         "id": 3,
//         "service": {
//           "id": 103,
//           "service_name": "Steaming",
//           "description": "Description for Service 3",
//           "image": "service3.jpg",
//           "price": "$635"
//         }
//       }
//     ]
  
  