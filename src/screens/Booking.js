import React, {
    useCallback,
    useState,
    useRef,
    useEffect,
    useMemo,
    memo,
    Fragment,
} from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Spacing, Text, Image, Input, TouchableOpacity } from '@momo-platform/component-kits';
import {
    View,
    SafeAreaView,
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
import styles from './styles';

// hours, minutes default
const HOURS_INDEX = 14;
const MINUTES_INDEX = 30;

function Booking({
    containerProps = {},
    containerAddress = {},
    addressStyle = {},
    textAddress = null,
    contentAddress = {},
    imageAddressStyle = {},
    locationImageProps = null,
    goChooseAddress = () => { },
    changeAddress = {},
    textChangeAddress = null,
    durationStyle = {},
    textDuration = null,
    valueDurationProps = null,
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
    placeholder = '',
    inputNoteStyle = {},

    keyboardProps = {},
    textProps = {},
    viewContainerProps = {},
    viewContentProps = {},
    imageProps = {},
    touchableStyle = {},
    touchableProps = {},
    textTouchProps = {},
    durationProps = {},
    dateTimeProps = {},
    inputProps = {},
    footerStyleProps = {},
    goConfirm = () => { },
    priceButtonStyleProps = {},
    textPriceStyleProps = {},
    textPricePromotionStyleProps = {},
    textVND = '',
    textContinue = '',
    viewRenderAddressStyleProps = {},
    textRenderAddressStyleProps = {},
    viewAddressStyleProps = {},
    textAddressStyleProps = {},
    textAddressOption = '',

    props = {},
}) {
    let dateDefault = moment(moment().add(1, 'day').toDate())
        .hour(HOURS_INDEX)
        .minute(MINUTES_INDEX)
        .second(0)
        .millisecond(0)
        .toDate();

    const shouldRenderAddress = useMemo(() => {
        if (!_.isEmpty(props?.address)) {
            return <View style={{ marginLeft: Spacing.S  }}>
                <Text style={{ fontWeight: 'bold', marginBottom: Spacing.S }}>{props?.address?.shortAddress}</Text>
                <Text>{props?.address?.address}</Text>
            </View>
        }
        return <View style={{ marginLeft: Spacing.S, alignSelf: 'center' }}>
            <Text style={styles.bold}>{'Chọn địa chỉ'}</Text>
        </View>
    }, [props.address])

    const shouldRenderFooter = useMemo(() => {
        if (!_.isEmpty(props?.price) && props?.address) {
            return (
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={goConfirm}
                        style={styles.priceButton}
                    >
                        <View>
                            {
                                (props?.promotion && props?.price?.finalCost !== props?.price?.cost) ?
                                    <Text.H4 style={[styles.price, styles.pricePromotion]}>{formatPrice(props?.price?.cost)} {'VND'}</Text.H4> : null
                            }
                            <Text.H4 style={styles.price}>{formatPrice(props.price?.finalCost)} {'VND'}/{props.duration}h</Text.H4>
                        </View>
                        <Text.H4 style={styles.price}>{'Tiếp theo'}</Text.H4>
                    </TouchableOpacity>
                </View>
            )
        };
        return null;
    }, [props.price, props.date, props.duration, props.address, props.promotion]);

    return (
        <>
            <KeyboardAware
                style={styles.container}
                showsVerticalScrollIndicator={false}
                {...keyboardProps}
            >
                {/* Address */}
                <Text style={styles.title} {...textProps}>{textAddress || 'Địa chỉ'}</Text>
                <View style={styles.contentAddress} {...viewContainerProps}>
                    <View style={{ flexDirection: 'row', flex: 10 }} {...viewContentProps}>
                        <Image
                            cached
                            style={styles.icon}
                            source={locationImageProps ? locationImageProps : ''}
                            {...imageProps}
                        />
                        {
                            shouldRenderAddress
                        }
                    </View>
                    <TouchableOpacity
                        onPress={goChooseAddress}
                        style={touchableStyle}
                        {...touchableProps}
                    >
                        <Text style={styles.changeAddress} {...textTouchProps}>{textChangeAddress || 'Thay đổi'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Duration */}
                <Text style={styles.title} {...textProps}>{'Thời lượng'}</Text>
                <Duration
                    duration={valueDurationProps ? valueDurationProps : 3}
                    changeDuration={(value) => props?.changeDuration(value)}
                    {...durationProps}
                />

                {/* Time */}
                <Text style={styles.title} {...textProps}>{textTime || 'Chọn thời gian làm việc'}</Text>
                <PickerDate
                    date={dateProps ? dateProps : dateDefault}
                    onChange={(date) => props?.changeDateTime(date)}
                    {...dateTimeProps}
                />

                <PickerTime
                    date={dateProps ? dateProps : dateDefault}
                    onChange={(date) => props?.changeDateTime(date)}
                    navigator={navigatorProps ? navigatorProps : ''}
                    {...dateTimeProps}
                />

                {/* Note */}
                <Text style={styles.title} {...textProps}>{textNote || 'Ghi chú cho người làm'}</Text>
                <Input
                    onChangeText={(text) => handleChangeTaskNote(text)}
                    onBlur={handleSaveTaskNote}
                    defaultValue={noteProps ? noteProps : ''}
                    multiline={true}
                    numberOfLines={12}
                    placeholder={placeholder || 'Bạn có yêu cầu gì thêm, hãy nhập ở đây nhé!'}
                    style={styles.inputNote}
                    {...inputProps}
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
