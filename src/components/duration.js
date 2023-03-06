import { TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react'
import { COLOR, LIST_DURATION, Spacing } from '../constants';
import styles from './styles';

export default Duration = (props) => {
  
  const [duration, setDuration] = useState(props?.duration || 3);

  // handle duration
  const handleDuration = (value) => {
    setDuration(value);
    props.changeDuration(value);
  }

  return LIST_DURATION.map((index, idx) => {
    return (
      <TouchableOpacity
        style={[styles.contentDuration, { borderColor: (duration === index.value) ? COLOR.PRIMARY_COLOR : COLOR.borderColor }]}
        onPress={() => handleDuration(index.value)}
        key={'duration' + idx}
      >
        <Text style={styles.textTime}>{index.value} giờ</Text>
        <Text>{index.room} m² / {index.value} phòng</Text>
        <Text style={styles.textNote}>Dịch vụ hỗ trợ tối đa tới {23 - index.value}:00 giờ</Text>
      </TouchableOpacity>
    );
  })
}