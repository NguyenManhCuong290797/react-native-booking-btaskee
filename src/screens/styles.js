import { StyleSheet } from 'react-native';
import { COLOR } from '../constants';
import { Spacing } from '@momo-platform/component-kits';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.L,
    flex: 1,
    backgroundColor: COLOR.backgroundWhite
  },
  title: {
    marginVertical: Spacing.L,
    fontWeight: 'bold',
    fontSize: 16
  },
  contentAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLOR.borderColor,
    borderRadius: Spacing.S,
    borderWidth: 1,
    paddingVertical: Spacing.M,
    paddingHorizontal: Spacing.S
  },
  bold: {
    fontWeight: 'bold'
  },
  changeAddress: {
    flex: 3,
    textAlign: 'center',
    color: COLOR.PRIMARY_COLOR
  },
  icon: {
    width: 20,
    height: 20
  },
  priceButton: {
    backgroundColor: COLOR.SECONDARY_COLOR,
    marginHorizontal: Spacing.L,
    marginBottom: Spacing.XL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.L,
    borderRadius: Spacing.S
  },
  price: {
    color: COLOR.white,
    fontWeight: 'bold',
  },
  pricePromotion: {
    fontWeight: '500',
    fontSize: 14,
    color: COLOR.white,
    textDecorationLine: 'line-through',
    marginBottom: Spacing.XS
  },
  footer: {
    backgroundColor: COLOR.white,
    paddingVertical: Spacing.M
  },
  inputNote: {
    height: 150,
    padding: Spacing.S
  },
});
