import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, Platform } from 'react-native';

const isIOS = Boolean(Platform.OS.toLowerCase() === 'ios');

const KeyboardAware = isIOS ? KeyboardAwareScrollView : ScrollView;

export default KeyboardAware;
