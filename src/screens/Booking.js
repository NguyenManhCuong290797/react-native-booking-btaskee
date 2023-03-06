import React, {
    useCallback,
    useState,
    useRef,
    useEffect,
    useMemo,
    memo,
    Fragment,
} from 'react';

import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    Modal,
    ActivityIndicator,
    BackHandler,
    Platform,
    StyleSheet,
} from 'react-native';
import { Duration, KeyboardAware, PickerTime, PickerDate } from '../components';
import { COLOR, Spacing } from '../constants/index';
const { height: WINDOW_HEIGHT } = Dimensions.get('window');

function Booking({
    containerAddress = {},
    addressStyle = {},
    textAddress = null,
    contentAddress = {},
    imageAddressStyle = {},
    locationImageProps = null,
    shouldRenderAddress = () => { },
    goChooseAddress = () => { },
    changeAddress = {},
    textChangeAddress = null,
    durationStyle = {},
    textDuration = null,
    durationProps = null,
    changeDuration = (duration) => { },
    timeStyle = {},
    textTime = null,
    dateProps = null,
    changeDateTime = (date) => { },
    navigatorProps = null,
    noteStyle = {},
    textNote = null,
    handleChangeTaskNote = (note) => { },
    handleSaveTaskNote = () => { },
    noteProps = null,
    inputNoteStyle = {},
    shouldRenderFooter = () => { },

}) {

    return (
        <>
            <KeyboardAware
                {...containerProps}
                showsVerticalScrollIndicator={false}
            >
                {/* Address */}
                <Text {...addressStyle}>{textAddress}</Text>
                <View {...containerAddress}>
                    <View {...contentAddress}>
                        <Image
                            cached
                            {...imageAddressStyle}
                            source={locationImageProps ? {...locationImageProps} : ''}
                        />
                        {
                            shouldRenderAddress
                        }
                    </View>
                    <TouchableOpacity
                        onPress={goChooseAddress}
                    >
                        <Text {...changeAddress}>{textChangeAddress}</Text>
                    </TouchableOpacity>
                </View>

                {/* Duration */}
                <Text {...durationStyle}>{textDuration}</Text>
                <Duration
                    duration={...durationProps}
                    changeDuration={(value) => changeDuration(value)}
                />

                {/* Time */}
                <Text {...timeStyle}>{textTime}</Text>
                <PickerDate
                    date={...dateProps}
                    onChange={(date) => changeDateTime(date)}
                />

                <PickerTime
                    date={...dateProps}
                    onChange={(date) => changeDateTime(date)}
                    navigator={...navigatorProps}
                />

                {/* Note */}
                <Text {...noteStyle}>{textNote}</Text>
                <TextInput
                    onChangeText={(text) => handleChangeTaskNote(text)}
                    onBlur={handleSaveTaskNote}
                    defaultValue={...noteProps}
                    multiline={true}
                    numberOfLines={12}
                    placeholder='Bạn có yêu cầu gì thêm, hãy nhập ở đây nhé!'
                    {...inputNoteStyle}
                />
            </KeyboardAware>

            {/* footer */}
            {
                shouldRenderFooter
            }
        </>
    );
}

export default memo(Booking);
