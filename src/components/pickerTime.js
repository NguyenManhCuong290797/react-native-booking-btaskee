import { DatePickerInput } from '@momo-platform/component-kits';
import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { MINUTES_ARRAY } from '../constant';
import { iconPickerTime } from '../assets/images/index';
import styles from './styles';

let temp_time = null; // save time when onChange

export default PickerTime = (props) => {

  const onChangeTime = (time) => {
    let timeArr = time.split(":");
    // round 5min
    const newDate = moment(props.date);
    temp_time = newDate.hours(timeArr[0]).minutes(timeArr[1]).seconds(0).milliseconds(0);
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

      <DatePickerInput
        navigator={props.navigator}
        onSelected={(value) => onChangeTime(value)}
        defaultDate={"14:30"}
        format="hh:mm"
        textStyle={styles.textBold}
        showRightIcon={false}
        style={styles.wrapperBtnTime}
        minuteArray={MINUTES_ARRAY}
      />

    </View>
  )
}