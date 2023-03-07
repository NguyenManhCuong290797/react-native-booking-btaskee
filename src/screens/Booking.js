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
import { Text, Image, Input, TouchableOpacity } from '@momo-platform/component-kits';
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
import moment from 'moment';
import { Duration, KeyboardAware, PickerTime, PickerDate } from '../components';
import { COLOR, Spacing } from '../constants/index';
const { height: WINDOW_HEIGHT } = Dimensions.get('window');

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
            return <View style={viewRenderAddressStyleProps}>
                <Text style={textRenderAddressStyleProps}>{props?.address?.shortAddress}</Text>
                <Text>{props?.address?.address}</Text>
            </View>
        }
        return <View style={viewAddressStyleProps}>
            <Text style={textAddressStyleProps}>{textAddressOption}</Text>
        </View>
    }, [props.address])

    const shouldRenderFooter = useMemo(() => {
        if (!_.isEmpty(props?.price) && props?.address) {
            return (
                <View style={footerStyleProps}>
                    <TouchableOpacity
                        onPress={goConfirm}
                        style={priceButtonStyleProps}
                    >
                        <View>
                            {
                                (props?.promotion && props?.price?.finalCost !== props?.price?.cost) ?
                                    <Text.H4 style={[textPriceStyleProps, textPricePromotionStyleProps]}>{formatPrice(props?.price?.cost)} {textVND}</Text.H4> : null
                            }
                            <Text.H4 style={textPriceStyleProps}>{formatPrice(props.price?.finalCost)} {textVND}/{props.duration}h</Text.H4>
                        </View>
                        <Text.H4 style={textPriceStyleProps}>{textContinue}</Text.H4>
                    </TouchableOpacity>
                </View>
            )
        };
        return null;
    }, [props.price, props.date, props.duration, props.address, props.promotion]);

    return (
        <>
            <KeyboardAware
                style={containerProps}
                showsVerticalScrollIndicator={false}
                {...keyboardProps}
            >
                {/* Address */}
                <Text style={addressStyle} {...textProps}>{textAddress}</Text>
                <View style={containerAddress} {...viewContainerProps}>
                    <View style={contentAddress} {...viewContentProps}>
                        <Image
                            cached
                            style={imageAddressStyle}
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
                        <Text style={changeAddress} {...textTouchProps}>{textChangeAddress}</Text>
                    </TouchableOpacity>
                </View>

                {/* Duration */}
                <Text style={durationStyle} {...textProps}>{textDuration}</Text>
                <Duration
                    duration={valueDurationProps ? valueDurationProps : 3}
                    changeDuration={(value) => changeDuration(value)}
                    {...durationProps}
                />

                {/* Time */}
                <Text style={timeStyle} {...textProps}>{textTime}</Text>
                <PickerDate
                    date={dateProps ? dateProps : dateDefault}
                    onChange={(date) => changeDateTime(date)}
                    {...dateTimeProps}
                />

                <PickerTime
                    date={dateProps ? dateProps : dateDefault}
                    onChange={(date) => changeDateTime(date)}
                    navigator={navigatorProps ? navigatorProps : ''}
                    {...dateTimeProps}
                />

                {/* Note */}
                <Text style={noteStyle} {...textProps}>{textNote}</Text>
                <Input
                    onChangeText={(text) => handleChangeTaskNote(text)}
                    onBlur={handleSaveTaskNote}
                    defaultValue={noteProps ? noteProps : ''}
                    multiline={true}
                    numberOfLines={12}
                    placeholder={placeholder || 'Bạn có yêu cầu gì thêm, hãy nhập ở đây nhé!'}
                    style={inputNoteStyle}
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
