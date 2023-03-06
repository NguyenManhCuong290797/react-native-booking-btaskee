import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
import 'moment/locale/vi';
import moment from 'moment';
import { COLOR, Spacing } from '../constants/index';
import styles from './styles';

const LIMIT_DATE = 7;
// get list date
const getRangeWeek = (startDate, limitDate) => {
  const rangeDate = [];
  for (let index = 0; index < limitDate; index++) {
    const temp = moment(startDate).add(index, 'days').toDate();
    rangeDate.push(temp);
  }
  return rangeDate;
}
export default PickerDate = (props) => {

  const [dateIndex, setDateIndex] = useState(1);
  const [selectedDate, setSelectedDate] = useState(moment().add(1, 'day').toDate());
  const [dates, setDates] = useState(getRangeWeek(moment().toDate(), LIMIT_DATE));

  // This func only runs the first time
  React.useEffect(() => {
    if (props.date) {
      // Set start date to array render date
      //Day now and time from props.date
      let newDefault = moment(moment().toDate())
        .hour(moment(props.date).hours())
        .minute(moment(props.date).minutes())
        .second(0)
        .millisecond(0)
        .toDate();
      setDates(getRangeWeek(newDefault, LIMIT_DATE));
    }
  }, [props.date]);

  const handlePicker = (date, idx) => {
    let newDate = moment(date).toDate();

    // update date
    setSelectedDate(newDate);
    setDateIndex(idx);

    // callback
    props.onChange(newDate);
  };

  // show date
  const shouldRenderWeekday = useMemo(() => {
    return (
      dates.map((date, idx) => {
        const active = Boolean(dateIndex === idx);
        return (
          <TouchableOpacity
            key={`weekdays_${idx}`}
            onPress={() => handlePicker(date, idx)}
            testID={`weekdays_${idx}`}
          >
            <View style={[styles.date, { backgroundColor: (active) ? COLOR.PRIMARY_COLOR : COLOR.backgroundWhite }]}>
              <Text style={{ fontWeight: 'bold', marginBottom: Spacing.M, color: (active) ? COLOR.white : COLOR.black }}>{moment(date).locale("vi").format('dd')}</Text>
              <Text style={{ color: (active) ? COLOR.white : COLOR.black }}>{moment(date).format("DD")}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    );
  }, [dates, dateIndex]);

  return (
    <>
      <Text style={styles.txtMonthYear}>Tháng {moment(selectedDate).format('MM')}/{moment(selectedDate).format('YYYY')}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.listDate}
      >
        {shouldRenderWeekday}
      </ScrollView>
    </>
  )
}