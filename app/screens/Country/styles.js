import { StyleSheet } from 'react-native';
import ThemeUtils from '../../config/ThemeUtils';
import AppStyles from '../../config/styles';

const HEADER_IMAGE_HEIGHT = ThemeUtils.relativeHeight(55);
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  /*header style*/
  headerLeftIcon: {
    position: 'absolute',
    left: ThemeUtils.relativeWidth(2),
  },
  headerRightIcon: {
    position: 'absolute',
    right: ThemeUtils.relativeWidth(2),
  },
  headerStyle: {
    height: ThemeUtils.APPBAR_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 200,
  },
  headerTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: AppStyles.color.COLOR_WHITE,
    fontSize: ThemeUtils.fontNormal,
    paddingLeft: 50,
  },
  /*Top Image Style*/
  headerImageStyle: {
    height: HEADER_IMAGE_HEIGHT,
    width: '100%',
    top: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  /*profile image style*/
  countryImage: {
    position: 'absolute',
    zIndex: 100,
  },
  /*profile title style*/
  countryTitle: {
    position: 'absolute',
    zIndex: 100,
    textAlign: 'center',
    // color: AppStyles.color.COLOR_BLACK,
    top: ThemeUtils.relativeHeight(35),
    left: 0,
    right: 0,
    fontSize: ThemeUtils.fontXLarge,
  },
  /*song count text style*/
  songCountStyle: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '400',
    top: ThemeUtils.relativeHeight(40),
    left: 0,
    right: 0,
    fontSize: ThemeUtils.fontNormal,
  },
  artistCardContainerStyle: {
    backgroundColor: AppStyles.color.COLOR_WHITE,
    elevation: 5,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    padding: 15,
    marginVertical: ThemeUtils.relativeWidth(1),
    marginHorizontal: ThemeUtils.relativeWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistImage: {
    height: ThemeUtils.relativeWidth(15),
    width: ThemeUtils.relativeWidth(15),
    borderRadius: ThemeUtils.relativeWidth(7.5),
  },
  songTitleStyle: {
    fontSize: ThemeUtils.fontNormal,
    // color: AppStyles.color.,
  },
  cardTextContainer: {
    flex: 1,
    margin: ThemeUtils.relativeWidth(3),
  },
});
