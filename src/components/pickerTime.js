import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { MINUTES_ARRAY } from '../constants/index';
import { iconPickerTime } from '../assets/images/index';
import styles from './styles';
import DatePicker from 'react-native-datepicker';

let temp_time = null; // save time when onChange

export default PickerTime = (props) => {
  const [date, setDate] = useState(new Date());

  const onChangeTime = (time) => {
    let timeArr = time.split(":");
    // round 5min
    const newDate = moment(props.date);
    temp_time = newDate.hours(timeArr[0]).minutes(timeArr[1]).seconds(0).milliseconds(0);
    setDate(temp_time);
    props.onChange(temp_time);
  }

  return (
    <View style={styles.containerPickerTime} >
      <View style={styles.wrapperTime}>
        <Image
          cached
          resizeMode="contain"
          style={styles.icon}
          source={iconPickerTime}
        />
        <Text style={styles.textBold}>Chọn giờ làm</Text>
      </View>

      <DatePicker
        showIcon={false}
        mode="time"
        date={date}
        onDateChange={(value) => onChangeTime(value)}
        onConfirm={(date) => {
          onChangeTime(date);
        }}
        placeholder="14:30"
        confirmBtnText="Chọn"
        cancelBtnText="Hủy"
        androidMode="spinner"
        style={styles.containerDatePickerStyle}
        customStyles={{
          dateInput: styles.dateInputStyle,
          dateText: styles.dateTextStyle
        }}
      />

    </View>
  )
}