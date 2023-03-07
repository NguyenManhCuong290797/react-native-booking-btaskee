declare module 'react-native-sdk-booking-v1' {
  import type { Dispatch, PropsWithoutRef } from 'react';
  import type {
    LayoutChangeEvent,
    StyleProp,
    TextInputProps,
    TextStyle,
    ViewProps,
    ViewStyle,
    ImageStyle,
    TouchableOpacityProps,
  } from 'react-native';

  export type ValueType = string | number | boolean;

  export interface RenderAddressPropsInterface<T> {
   
  }

  export interface RenderFooterPropsInterface<T> {
   
  }

  interface ScreenBookingBaseProps<T> {
    containerProps?: ViewProps;
    keyboardProps?: ViewProps;
    addressStyle?: StyleProp<TextStyle>;
    textAddress?: string;
    containerAddress?: StyleProp<ViewStyle>;
    contentAddress?: StyleProp<ViewStyle>;
    imageAddressStyle?: StyleProp<ImageStyle>;
    locationImageProps?: string;
    shouldRenderAddress?: (props: RenderAddressPropsInterface<T>) => JSX.Element;
    goChooseAddress?: () => void;
    changeAddress?: StyleProp<TextStyle>;
    textChangeAddress?: string;
    durationStyle?: StyleProp<TextStyle>;
    textDuration?: string;
    valueDurationProps?: string;
    changeDuration?: (e: LayoutChangeEvent) => void;
    timeStyle?: StyleProp<TextStyle>;
    textTime?: string;
    dateProps?: string;
    changeDateTime?: (e: LayoutChangeEvent) => void;
    navigatorProps?: string;
    noteStyle?: StyleProp<TextStyle>;
    textNote?: string;
    handleChangeTaskNote?: (e: LayoutChangeEvent) => void;
    handleSaveTaskNote?: () => void;
    noteProps?: string;
    inputNoteStyle?: StyleProp<TextInputProps>;
    shouldRenderFooter?: (props: RenderFooterPropsInterface<T>) => JSX.Element;
    textProps?: StyleProp<TextStyle>;
    viewContainerProps?: StyleProp<ViewStyle>;
    viewContentProps?: StyleProp<ViewStyle>;
    imageProps?: StyleProp<ImageStyle>;
    touchableStyle?: StyleProp<TouchableOpacityProps>;
    touchableProps?: StyleProp<TouchableOpacityProps>;
    textTouchProps?: StyleProp<TextStyle>;
    durationProps?: ViewProps;
    dateTimeProps?: ViewProps;
    inputProps?: StyleProp<TextInputProps>;
    footerStyleProps?: ViewProps;
    goConfirm?: () => void;
    priceButtonStyleProps?: StyleProp<TouchableOpacityProps>;
    textPriceStyleProps?: StyleProp<TextStyle>;
    textPricePromotionStyleProps?: StyleProp<TextStyle>;
    textVND?: string;
    textContinue?: string;
    viewRenderAddressStyleProps?: ViewProps;
    textRenderAddressStyleProps?: StyleProp<TextStyle>;
    viewAddressStyleProps?: ViewProps;
    textAddressStyleProps?: StyleProp<TextStyle>;
    textAddressOption?: string;
    
    props?: object;
  }

  interface ScreenBookingSingleProps<T> {

  }

  interface ScreenBookingMultipleProps<T> {
 
  }

  interface ScreenBookingInterface {
    
  }

  export type ScreenBookingProps<T> = (
    | ScreenBookingSingleProps<T>
    | ScreenBookingMultipleProps<T>
  ) &
  ScreenBookingBaseProps<T>;

  const ScreenBooking: (<T extends ValueType>(
    props: PropsWithoutRef<ScreenBookingProps<T>>,
  ) => React.ReactElement) &
  ScreenBookingInterface;

  export default ScreenBooking;
}
