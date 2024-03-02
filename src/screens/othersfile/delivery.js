import {
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
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import Svg, {Circle, Line, Text as SvgText} from 'react-native-svg';
  import CalendarPicker from 'react-native-calendar-picker';
  const DeliverySchedule = ({navigation, GetTime, route, loading}) => {
    useEffect(() => {
      const fetchData = async () => {
        const token = await AsyncStorage.getItem('@USER_TOKEN');
  
        try {
          const response = await axios.get(
            'http://ezyclean.theprojecttest.xyz/api/get_time',
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              params: {
                date: '2023-12-27',
              },
            },
          );
  
          console.log('Response========:', response.data.result);
          setTimeList(response.data.result);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const [timeList, setTimeList] = useState({});
  
    const [postData, setPostData] = useState({
      ...route.params?.data,
      delivery_date: null,
      delivery_time: null,
    });
  
    const valuestatus = route.params?.pickupmylaundry;
    console.log('valuestatus--------->>>>>>>', valuestatus);
  
    const handleChange = (name, value) => {
      setPostData({
        ...postData,
        [name]: value,
      });
    };
  
    // let tommorrow_date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  
    // let tommorrow_active_date =
    //   tommorrow_date.getDate() +
    //   '-' +
    //   (tommorrow_date.getMonth() + 1) +
    //   '-' +
    //   tommorrow_date.getFullYear();
  
    // var delivery_date = [];
  
    // const [activeDate, setActiveDate] = useState(tommorrow_active_date);
    // const [activeTime, setActiveTime] = useState();
  
    // for (let i = 1; i <= 30 + 1; i++) {
    //   let today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
    //   let date =
    //     today.getDate() +
    //     '-' +
    //     (today.getMonth() + 1) +
    //     '-' +
    //     today.getFullYear();
    //   delivery_date.push(date);
    // }
  
    //change
    let tommorrow_date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  
    let tommorrow_active_date = tommorrow_date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    });
  
    var delivery_date = [];
  
    const [activeDate, setActiveDate] = useState(tommorrow_active_date);
    const [activeTime, setActiveTime] = useState();
  
    for (let i = 1; i <= 30 + 1; i++) {
      let today = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
      let date = today.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      });
      delivery_date.push(date);
    }
  
    // useEffect(() => {
    //   if (activeDate) {
    //     GetTime({date: activeDate});
    //     setPostData({
    //       ...postData,
    //       delivery_date: activeDate,
    //     });
    //   }
    // }, [activeDate]);
  
    // useEffect(() => {
    //   if (timeList && timeList[0]) {
    //     setActiveTime(timeList[0]);
    //     setPostData({
    //       ...postData,
    //       delivery_date: activeDate,
    //       delivery_time: timeList[0],
    //     });
    //   }
    // }, [timeList]);
  
    const handleNext = () => {
      navigation.navigate('Address');
      // if (postData.delivery_date && postData.delivery_time) {
      //   navigation.navigate('Address', {data: postData,valuestatus:valuestatus});
      // } else {
      //   alert('Please select valid delivery date and time.');
      // }
    };
    console.log('delivery postdata ; ', postData);
  
    // const onDateChange = val => {
    //   // console.log('date...........................',date);
    //   var newdate = val;
    //   const date = new Date(newdate);
    //   const day = date.getUTCDate();
    //   const month = date.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    //   const year = date.getUTCFullYear();
  
    //   const formattedDate1 = `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    //   console.log('pickuppageDate------------- ; ', formattedDate1);
  
    //   setActiveDate(formattedDate1),
    //     handleChange('delivery_date', formattedDate1);
  
    //   // const valuedate = `"${formattedDate1}"`;
  
    //   // console.log('pickuppageDate------------- ; ', valuedate);
    //   // setSelectedStartDate(date);
    // };
  
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
    };
  
    const handleMinuteChange = () => {
      const newMinute = (minutes + 5) % 60;
      setMinutes(newMinute);
    };
  
    // Calander
    const [selectedStartDate, setSelectedStartDate] = useState(null);
  
    const onDateChange = date => {
      setSelectedStartDate(date);
    };
  
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    console.log('startDate Calender', startDate);
  
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
                    <Text style={styles.title}>Delivery Date</Text>
                  </View>
  
                  {/* <FlatList
                    data={delivery_date}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                          setActiveDate(item),
                            handleChange('delivery_date', item);
                        }}
                        // onPress={() => { setActiveDate(item), GetTime(item) }}
                        style={[
                          styles.date_btn,
                          index == 0 && {marginLeft: SIZES.width * 0.03},
                          index == delivery_date.length - 1 && {
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
                          {item.slice(9)}
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
                    <Text style={styles.title}>Delivery Time</Text>
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
                                  handleChange('delivery_time', item);
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
                        key={(_, index) => index}
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
              onPress={handleNext}
              backgroundColor={COLORS.secondary}>
              Next
            </Button1>
          </ScrollView>
        )}
      </View>
    );
  };
  
  // const mapStateToProps = state => ({
  //   loading: state.product.loading,
  //   timeList: state.product.timeList,
  // });
  
  // const mapDispatchToProps = {
  //   GetTime,
  // };
  
  // export default connect(mapStateToProps, mapDispatchToProps)(DeliverySchedule);
  export default DeliverySchedule;
  
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
  