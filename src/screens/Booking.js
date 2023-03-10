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
import { location } from '../assets/images/index';
import {
    View,
    SafeAreaView,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    Modal,
    TouchableOpacity,
    ActivityIndicator,
    BackHandler,
    Platform,
    StyleSheet,
} from 'react-native';
import { formatPrice } from '../helper/index';
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
            <Text style={styles.bold}>{'Ch???n ?????a ch???'}</Text>
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
                                    <Text style={[styles.price, styles.pricePromotion, styles.textH4]}>{formatPrice(props?.price?.cost)} {textVND || 'VND'}</Text> : null
                            }
                            <Text style={[styles.price, styles.textH4]}>{formatPrice(props?.price?.finalCost)} {textVND || 'VND'}/{props?.duration}{'h'}</Text>
                        </View>
                        <Text style={[styles.price, styles.textH4]}>{textContinue || 'Ti???p theo'}</Text>
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
                <Text style={styles.title} {...textProps}>{textAddress || '?????a ch???'}</Text>
                <View style={styles.contentAddress} {...viewContainerProps}>
                    <View style={{ flexDirection: 'row', flex: 10 }} {...viewContentProps}>
                        <Image
                            cached
                            style={styles.icon}
                            source={location ? location : ''}
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
                        <Text style={styles.changeAddress} {...textTouchProps}>{textChangeAddress || 'Thay ?????i'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Duration */}
                <Text style={styles.title} {...textProps}>{textDuration || 'Th???i l?????ng'}</Text>
                <Duration
                    duration={props?.duration ? props?.duration : 3}
                    changeDuration={(value) => props?.changeDuration(value)}
                    {...durationProps}
                />

                {/* Time */}
                <Text style={styles.title} {...textProps}>{textTime || 'Ch???n th???i gian l??m vi???c'}</Text>
                <PickerDate
                    date={props?.date ? props?.date : dateDefault}
                    onChange={(date) => props?.changeDateTime(date)}
                    {...dateTimeProps}
                />

                <PickerTime
                    date={props?.date ? props?.date : dateDefault}
                    onChange={(date) => props?.changeDateTime(date)}
                    navigator={props?.navigator ? props?.navigator : ''}
                    {...dateTimeProps}
                />

                {/* Note */}
                <Text style={styles.title} {...textProps}>{textNote || 'Ghi ch?? cho ng?????i l??m'}</Text>
                <TextInput
                    onChangeText={(text) => handleChangeTaskNote(text)}
                    onBlur={handleSaveTaskNote}
                    defaultValue={props.note ? props.note : ''}
                    multiline={true}
                    numberOfLines={12}
                    placeholder={placeholder || 'B???n c?? y??u c???u g?? th??m, h??y nh???p ??? ????y nh??!'}
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
