import React, {useState, useEffect} from 'react';
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
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import Button1 from '../../component/button/Button1';
import {COLORS, SIZES} from '../../constants';
import {connect} from 'react-redux';
import {GetTime} from '../../redux/actions/productAction';
import Loading from '../../component/loading';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, {Circle, Line, Text as SvgText} from 'react-native-svg';
import CalendarPicker from 'react-native-calendar-picker';

const PickupSchedule = ({
  navigation,
  // GetTime,
  route,
  // timeList,
  loading,
}) => {
  // useEffect(async () => {
  //   const token = await AsyncStorage.getItem('@USER_TOKEN');
  //   // console.log('ContactUs token--------', token);
  //   setToken(token);
  // }, []);

  // const [token, setToken] = useState();
  // console.log('PickupSchedules token-------->>', token);

  // useEffect(() => {
  //   let data = JSON.stringify({
  //     date: '2023-12-27',
  //   });

  //   let config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: 'http://ezyclean.theprojecttest.xyz/api/get_time',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer 195|F8kaxG4Y4I8P0So08MjcHVJCl21szRnUFMg68m3Adb21c10c',
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then(response => {
  //       console.log(
  //         'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
  //         JSON.stringify(response.data),
  //       );
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = await AsyncStorage.getItem('@USER_TOKEN');

  //     try {
  //       const response = await axios.get(
  //         'http://ezyclean.theprojecttest.xyz/api/get_time',
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: `Bearer ${token}`,
  //           },
  //           params: {
  //             date: '2023-12-27',
  //           },
  //         },
  //       );

  //       console.log('Response========:', response.data.result);
  //       setTimeList(response.data.result);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const [timeList, setTimeList] = useState({});

  const [postData, setPostData] = useState({
    ...route.params,
    pickup_date: null,
    pickup_time: null,
  });

  console.log('databyparams', postData);

  // const pickupmylaundry = route.params?.pickupmylaundry;
  // console.log('pickupmylaundry', pickupmylaundry);

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

  // useEffect(() => {
  //   if (timeList && timeList[0]) {
  //     setActiveTime(timeList[0]);
  //     setPostData({
  //       ...postData,
  //       pickup_date: activeDate,
  //       pickup_time: timeList[0],
  //     });
  //   }
  // }, [timeList]);

  const handleNext = () => {
    // navigation.navigate('DeliverySchedule');

    if (postData.pickup_date && postData.pickup_time) {
      navigation.navigate('DeliverySchedule', {
        data: postData,
        // pickupmylaundry: pickupmylaundry,
      });
    } else {
      Alert.alert('Please select valid pickup date and time.');
    }
  };

  // console.log('timeList ; ', timeList);
  // console.log('pickup postData ; ', postData);

  // Get the current date to show on the top right
  var currentDate = new Date();

  // Get the current month and year
  var currentMonth = currentDate.toLocaleString('default', {month: 'short'});
  var currentYear = currentDate.getFullYear();

  // Combine the month and year in the desired format
  var monthtoday = currentMonth + ' ' + currentYear;

  console.log('monthString', monthtoday); // Output: "Jan 2024"

  // const [selectedStartDate, setSelectedStartDate] = useState(null);

  // const onDateChange = val => {
  //   // console.log('date...........................',date);
  //   var newdate = val;
  //   const date = new Date(newdate);
  //   const day = date.getUTCDate();
  //   const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
  //   const year = date.getUTCFullYear();

  //   const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  //   console.log('pickuppageDate------------- ; ', formattedDate1);

  //   setActiveDate(formattedDate1), handleChange('pickup_date', formattedDate1);

  //   // const valuedate = `"${formattedDate1}"`;

  //   // console.log('pickuppageDate------------- ; ', valuedate);
  //   // setSelectedStartDate(date);
  // };

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

  //time by Clock

  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);

  useEffect(() => {
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = (minutes % 60) * 6;

    setHourRotation(hourAngle);
    setMinuteRotation(minuteAngle);
  }, [hours, minutes]);

  const handleHourChange = () => {
    const newHour = (hours + 1) % 12 || 12;
    setHours(newHour);

    var nowIST = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: false,
    });
    console.log('time', nowIST);
    // Get the current hour in IST
    var currentHourIST = parseInt(nowIST.split(',')[1].split(':')[0]);

    console.log('Current hour in IST: ' + currentHourIST);

    // var currentHour = now.getHours();
    var currentHour = hours;
    console.log('Hours', currentHour);

    if (currentHourIST < 12) {
      console.log(currentHour + ':00 AM');
      handleChange('pickup_time', currentHour + ':00 AM');
    } else {
      console.log('It is currently ' + currentHour + ':00 PM');
      handleChange('pickup_time', currentHour + ':00 PM');
    }
  };

  const handleMinuteChange = () => {
    const newMinute = (minutes + 5) % 60;
    setMinutes(newMinute);
  };

  console.log('Time from Clock---- ', hours + ':00');

  //time ---------------------------------------------------------------------------------------------------
  // Create a new Date object for IST
  // var nowIST = new Date().toLocaleString('en-US', {
  //   timeZone: 'Asia/Kolkata',
  //   hour12: false,
  // });
  // console.log('time', nowIST);
  // // Get the current hour in IST
  // var currentHourIST = parseInt(nowIST.split(',')[1].split(':')[0]);

  // console.log('Current hour in IST: ' + currentHourIST);

  // // var currentHour = now.getHours();
  // var currentHour = hours;
  // console.log('Hours', currentHour);

  // if (currentHourIST < 12) {
  //   console.log(currentHour + ':00 AM');
  // } else {
  //   console.log('It is currently ' + currentHour + ':00 PM');
  // }
  //========================================================================================================

  //Calender------------------------------------------------------------------------------------------------
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

    // setActiveDate(formattedDate1), handleChange('pickup_date', formattedDate1);
    handleChange('pickup_date', formattedDate1);
    // const valuedate = `"${formattedDate1}"`;

    // console.log('pickuppageDate------------- ; ', valuedate);
    setSelectedStartDate(formattedDate1);
  };

  const [selectedStartDate, setSelectedStartDate] = useState(null);

  // const onDateChange = date => {
  //   setSelectedStartDate(date);
  // };

  // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  console.log('startDate Calender', selectedStartDate);
  //=======================================================================================================
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
                {/* <Text style={styles.date}>{monthtoday}</Text> */}

                {/* <FlatList
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
                /> */}

                <View style={{marginTop: SIZES.height * 0.01}}>
                  <CalendarPicker
                    onDateChange={onDateChange}
                    monthTitleStyle={{color: COLORS.secondary}}
                    yearTitleStyle={{color: COLORS.secondary}}
                  />
                </View>
              </View>

              {/* pickup time container */}
              <View>
                <View style={styles.title_box}>
                  <Text style={styles.title}>Pickup Time</Text>
                </View>
                {/* <View style={styles.time_container}>
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
                </View> */}
                <View style={{alignSelf: 'center', flex: 0.15}}>
                  <Svg height="300" width="300">
                    <Circle
                      cx="150"
                      cy="150"
                      r="120"
                      stroke={COLORS.secondary}
                      strokeWidth="2.5"
                      fill="white"
                    />

                    {/* Watch markers */}
                    {Array.from({length: 12}).map((_, index) => (
                      <React.Fragment key={index}>
                        <Line
                          x1="150"
                          y1="30"
                          x2="150"
                          y2="40"
                          strokeWidth="2"
                          stroke={COLORS.secondary}
                          transform={`rotate(${index * 30} 150 150)`}
                        />
                        <SvgText
                          x="150"
                          y="55"
                          fontSize="16"
                          textAnchor="middle"
                          fill={COLORS.secondary}
                          // transform={`rotate(${index * 30} 150 150)`}
                          color="red"
                          transform={`rotate(${
                            ((index + 0) % 12) * 30
                          } 150 150)`}>
                          {/* {index + 1} */}
                          {index === 0 ? 12 : index}
                        </SvgText>
                      </React.Fragment>
                    ))}

                    {/* Hour hand */}
                    <Line
                      x1="150"
                      y1="150"
                      x2="150"
                      y2="80"
                      strokeWidth="4"
                      stroke={COLORS.primary}
                      transform={`rotate(${hourRotation} 150 150)`}
                    />

                    {/* Minute hand */}
                    <Line
                      x1="150"
                      y1="150"
                      x2="150"
                      y2="65"
                      strokeWidth="2"
                      stroke={COLORS.secondary}
                      transform={`rotate(${minuteRotation} 150 150)`}
                    />

                    {/* Center dot */}
                    <Circle cx="150" cy="150" r="3" fill={COLORS.primary} />

                    {/* Display time */}
                    <SvgText
                      x="150"
                      y="220"
                      fontSize="20"
                      textAnchor="middle"
                      fill={COLORS.secondary}>
                      {`${String(hours).padStart(2, '0')}:${String(
                        minutes,
                      ).padStart(2, '0')}`}
                    </SvgText>
                  </Svg>

                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                      onPress={handleHourChange}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Change Hour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleMinuteChange}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Change Minute</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* <View style={{height: '4%'}} /> */}

            {/* <View style={{height: '4%'}} /> */}
          </View>
          <Button1
            style={styles.btn}
            backgroundColor={COLORS.secondary}
            onPress={handleNext}>
            Next
          </Button1>
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
