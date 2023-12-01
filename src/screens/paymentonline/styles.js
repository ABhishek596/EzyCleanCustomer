import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';


export default StyleSheet.create({
    container: {
        // paddingTop: 50,
        flex: 1
    },
    tinyLogo: {
        width: SIZES.width * 0.8,
        height: SIZES.height * 0.296,
        alignSelf: 'center',
        marginTop: SIZES.height * 0.02,
        borderRadius: SIZES.width * 0.032,
    },
    logo: {
        width: 66,
        height: 58,
    },
    heading: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.width * .048,
        // marginBottom: -5,
        color: COLORS.secondary,
        padding: SIZES.width * .048,
        fontWeight: "bold"
    },
    btn: {
        width: SIZES.width * .9,
        height: SIZES.height * .07,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        // borderRadius: 8,
        // backgroundColor: COLORS.white,
        // borderWidth: 1,
        // elevation: 4,
        // borderColor: 'rgba(51, 51, 51, 0.8)',
        marginBottom: SIZES.height * .025,
        paddingHorizontal: SIZES.width * .03,
        borderBottomWidth:1,
        borderBottomColor:COLORS.secondary
    },
    btnText: {
        fontFamily: FONTS.medium,
        fontSize: 15,
        color: COLORS.secondary,
        marginLeft: SIZES.width * .03,
        // marginBottom: -4,
    },
    iconBox: {
        width: SIZES.width * .1,
        height: SIZES.height * .07,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .03,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

