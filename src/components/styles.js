import { StyleSheet } from 'react-native';
import { COLOR, Spacing } from '../constants';

export default StyleSheet.create({
  // duration
  contentDuration: {
    marginVertical: Spacing.S,
    borderColor: COLOR.borderColor,
    borderWidth: 1.5,
    borderRadius: Spacing.S,
    padding: Spacing.M
  },
  textNote: {
    fontStyle: 'italic',
    fontSize: 13,
    marginTop: Spacing.S
  },
  // pickerDate
  listDate: {
    marginVertical: Spacing.M,
  },
  txtMonthYear: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  date: {
    borderColor: COLOR.borderColor,
    borderWidth: 1,
    borderRadius: Spacing.XS,
    width: 50,
    paddingVertical: Spacing.M,
    alignItems: 'center',
    marginRight: Spacing.M
  },
  // pickerDate
  containerPickerTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLOR.borderColor,
    borderWidth: 1,
    borderRadius: Spacing.XS,
    padding: Spacing.M,
    alignItems: 'center',
    marginTop: Spacing.S,
  },
  wrapperTime: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapperBtnTime: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.lightGrey,
    paddingHorizontal: Spacing.XL,
    paddingVertical: Spacing.S,
    borderRadius: Spacing.XS
  },
  textBold: {
    fontWeight: 'bold'
  },
  separate: {
    width: 1,
    height: '100%',
    backgroundColor: COLOR.black,
    marginHorizontal: Spacing.L
  },
  txtTime: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: Spacing.M
  },
  // promotion
  containerPromotion: {
    borderRadius: Spacing.M,
    flexDirection: 'row',
    padding: Spacing.M
  },
  // modal
  containerModal: {
    padding: Spacing.L,
    backgroundColor: COLOR.white,
    borderTopLeftRadius: Spacing.L,
    borderTopRightRadius: Spacing.L
  },
  headerModal: {
    alignItems: 'center',
    paddingBottom: Spacing.M,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.lightGrey,
    marginBottom: Spacing.L
  },
  title: {
    fontWeight: 'bold'
  },
  textGray: {
    color: COLOR.gray,
    marginTop: Spacing.S
  },
  buttonModal: {
    alignItems: 'center',
    paddingHorizontal: Spacing.XL,
    paddingVertical: Spacing.M,
    borderRadius: Spacing.XS
  },
  footerModal: {
    marginVertical: Spacing.M,
    paddingTop: Spacing.L,
    borderTopColor: COLOR.lightGrey,
    borderTopWidth: 0.5
  },
  itemTypeDefault: {
    borderColor: COLOR.borderColor,
    marginBottom: Spacing.L,
    borderRadius: Spacing.M,
    borderWidth: 1,
    paddingVertical: Spacing.L,
  },
  itemTypeSelected: {
    borderColor: COLOR.PRIMARY_COLOR,
    marginBottom: Spacing.L,
    borderRadius: Spacing.M,
    borderWidth: 1,
    paddingVertical: Spacing.L,
  },
  textTypeHouse: {
    marginHorizontal: Spacing.L
  },

});
