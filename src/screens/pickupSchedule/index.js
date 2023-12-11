import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import {useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {GetTime} from '../../redux/actions/productAction';
import Loading from '../../component/loading';
import {useEffect} from 'react';
import axios from 'axios';

const PickupSchedule = ({
  navigation,
  GetTime,
  route,
  // timeList,
  loading,
}) => {
  useEffect(() => {
    let data = JSON.stringify({
      date: '2023-12-08',
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://ezyclean.theprojecttest.xyz/api/get_time',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 160|LMkKJ9t0E4aTjRqXYRa5d10wByUbQ2wRkxJldtKj1f90965d',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        // console.log(JSON.stringify(response.data));
        setTimeList(response.data.result)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [timeList, setTimeList] = useState({});

  const [postData, setPostData] = useState({
    ...route.params,
    pickup_date: null,
    pickup_time: null,
  });

  const pickupmylaundry = route.params?.pickupmylaundry;
  console.log('pickupmylaundry', pickupmylaundry);

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  // let today_date = new Date();
  // let active_date =
  //   today_date.getDate() +
  //   '-' +
  //   (today_date.getMonth() + 1) +
  //   '-' +
  //   today_date.getFullYear();
  // var pickup_date = [];

  // const [activeDate, setActiveDate] = useState(active_date);
  // const [activeTime, setActiveTime] = useState('');

  // for (let i = 0; i <= 30; i++) {
  //   let today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
  //   let date =
  //     today.getDate() +
  //     '-' +
  //     (today.getMonth() + 1) +
  //     '-' +
  //     today.getFullYear();

  //   pickup_date.push(date);
  // }

  let today_date = new Date();
  let active_date =
    today_date.getDate() +
    '-' +
    (today_date.getMonth() + 1) +
    '-' +
    today_date.getFullYear();

  // Function to format the date as "Tue 07"
  function formatDate(date) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    return `${day} ${dayOfMonth}`;
  }

  var pickup_date = [];

  const [activeDate, setActiveDate] = useState(formatDate(today_date));
  const [activeTime, setActiveTime] = useState('');

  for (let i = 0; i <= 30; i++) {
    let today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
    let formattedDate = formatDate(today);

    pickup_date.push(formattedDate);
  }

  // useEffect(() => {
  //   if (activeDate) {
  //     setPostData({
  //       ...postData,
  //       pickup_date: activeDate,
  //     });
  //     GetTime({date: activeDate});
  //   }
  // }, [activeDate]);

  useEffect(() => {
    if (timeList && timeList[0]) {
      setActiveTime(timeList[0]);
      setPostData({
        ...postData,
        pickup_date: activeDate,
        pickup_time: timeList[0],
      });
    }
  }, [timeList]);

  const handleNext = () => {
    navigation.navigate('DeliverySchedule');

    // if (postData.pickup_date && postData.pickup_time) {
    //   navigation.navigate('DeliverySchedule', {data: postData, pickupmylaundry:pickupmylaundry});
    // } else {
    //   alert('Please select valid pickup date and time.');
    // }
  };

  console.log('timeList ; ', timeList);
  // console.log('pickup postData ; ', postData);

  // const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = val => {
    // console.log('date...........................',date);
    var newdate = val;
    const date = new Date(newdate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    const year = date.getUTCFullYear();

    const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    console.log('pickuppageDate------------- ; ', formattedDate1);

    setActiveDate(formattedDate1), handleChange('pickup_date', formattedDate1);

    // const valuedate = `"${formattedDate1}"`;

    // console.log('pickuppageDate------------- ; ', valuedate);
    // setSelectedStartDate(date);
  };

  // console.log('selectedStartDateDate-------------', selectedStartDate);

  // const selectedStartDate = "2024-10-19T06:30:00.000Z";
  // const date = new Date(selectedStartDate);
  // const day = date.getUTCDate();
  // const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
  // const year = date.getUTCFullYear();

  // const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  // console.log(formattedDate1);

  // const valuedate = `"${formattedDate1}"`;

  // console.log('pickuppageDate------------- ; ', valuedate);

  return (
    <View style={globalStyles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View>
              {/* pickup date container */}
              <View>
                <View style={styles.title_box}>
                  <Text style={styles.title}>Pickup Date</Text>
                </View>

                <FlatList
                  data={pickup_date}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      // onPress={() => handleChange("pickup_date", item) }
                      onPress={() => {
                        setActiveDate(item), handleChange('pickup_date', item);
                      }}
                      style={[
                        styles.date_btn,
                        index == 0 && {marginLeft: SIZES.width * 0.03},
                        index == pickup_date.length - 1 && {
                          marginRight: SIZES.width * 0.03,
                        },
                        activeDate == item && {
                          backgroundColor: COLORS.secondary,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.date_text,
                          activeDate == item && {color: COLORS.white},
                          {alignSelf: 'center'},
                        ]}>
                        {item.slice(0, 3)}
                      </Text>
                      <View style={{height: SIZES.height * 0.02}} />
                      <Text
                        style={[
                          styles.date_text,
                          activeDate == item && {color: COLORS.white},
                          {
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: SIZES.width * 0.04,
                          },
                        ]}>
                        {item.slice(3)}
                      </Text>
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  key={(_, index) => index}
                />
              </View>

              {/* pickup time container */}
              <View>
                <View style={styles.title_box}>
                  <Text style={styles.title}>Pickup Time</Text>
                </View>
                <View style={styles.time_container}>
                  {timeList && timeList[0] ? (
                    <FlatList
                      data={timeList}
                      renderItem={({item, index}) => (
                        <View style={styles.time_btn_box}>
                          <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                              setActiveTime(item),
                                handleChange('pickup_time', item);
                            }}
                            style={[
                              styles.time_btn,
                              activeTime == item && {
                                backgroundColor: COLORS.secondary,
                              },
                            ]}>
                            <Text
                              style={[
                                styles.time_text,
                                activeTime == item && {color: COLORS.white},
                              ]}>
                              {item}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                      numColumns={3}
                      showsVerticalScrollIndicator={false}
                      key={(_, item) => item.id}
                      // key={numColumns => numColumns.toString()}
                    />
                  ) : (
                    <Text style={styles.no_time_text}>
                      Sorry no time slots available in this date
                    </Text>
                  )}
                </View>
              </View>
            </View>
            {/* <View style={{height: '4%'}} /> */}
            <Button1
              style={styles.btn}
              backgroundColor={COLORS.secondary}
              onPress={handleNext}>
              Next
            </Button1>
            <View style={{height: '4%'}} />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.product.loading,
  // timeList: state.product.timeList,
});

const mapDispatchToProps = {
  GetTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(PickupSchedule);
// export default PickupSchedule;

// const timeList = [
//   "09:00 AM",
//   "09:30 AM",
//   "10:00 AM",
//   "10:30 AM",
//   "11:00 AM",
//   "11:30 AM",
//   "09:01 AM",
//   "09:32 AM",
//   "10:03 AM",
//   "10:34 AM",
//   "11:05 AM",
//   "11:3 AM",
//   // Add more time slots as needed
// ];
