import { MODE, LIST_MODE, DROPDOWN_DIRECTION, LANGUAGE } from './src/constants';
import Picker from './src/components/Picker';

Picker.MODE = MODE;
Picker.setMode = (mode) => {
    Picker.MODE.DEFAULT = mode;
}

Picker.LIST_MODE = LIST_MODE;
Picker.setListMode = (mode) => {
    Picker.LIST_MODE.DEFAULT = mode;
}

Picker.DROPDOWN_DIRECTION = DROPDOWN_DIRECTION;
Picker.setDropDownDirection = (direction) => {
    Picker.DROPDOWN_DIRECTION.DEFAULT = direction;
}

Picker.LANGUAGE = LANGUAGE;
Picker.setLanguage = (language) => {
    LANGUAGE.DEFAULT = language;
}


export default Picker;