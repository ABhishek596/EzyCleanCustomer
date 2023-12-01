import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // alignItems: 'center',
    },

    tab_row: {
        width: SIZES.width * .94,
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginVertical: SIZES.height * .02,
    },

    tab_btn: {
        width: SIZES.width * .45,
        height: SIZES.height * .06,
        borderRadius: SIZES.width * .2,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 1,
        borderWidth: 1.3,
        borderColor: COLORS.primary,
    },

    tab_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .042,
        color: COLORS.primary,
        marginBottom: -4,
    },
    image_box: {
        // width: SIZES.width * .4,
        marginRight: SIZES.width * .05,
    },

    order_image: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        // tintColor: COLORS.primary
    },

    order_divider: {
        width: SIZES.width,
        borderBottomWidth: 1.3,
        borderColor: COLORS.gray30,
        alignSelf: 'center',
        marginVertical: SIZES.height * .015,
    },

    order_id: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },
    created_at: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },
    status: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.width * .045,
        color: COLORS.primary,
        marginBottom: -6,
    },

    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        color: COLORS.black,
        marginBottom: -4,
    },

    
    txt: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .036,
        color: COLORS.black,
        marginBottom: -4,
    },


    total: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .042,
        color: COLORS.black,
        marginBottom: -4,
    },
    
   

    row: {
        flexDirection: 'row',
         alignItems: 'center',
    },

    //uppaer container
    box: {
        width: SIZES.width * .9,
        alignItems: 'center',
        borderRadius: SIZES.width * .05,
        overflow: 'hidden',
        backgroundColor: COLORS.light1,
        marginBottom: SIZES.height * .025,
        alignSelf:'center'
    },

    box_header: {
        width: SIZES.width * .9,
        height: SIZES.height * .06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.width * .05,
        // marginVertical: SIZES.height * .02,
        // borderRadius: SIZES.width * .05,
    },

    order_row: {
        width: SIZES.width * .9,
        height: SIZES.height * .05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#E1E1E1",
        paddingLeft: SIZES.width * .05,
        // marginVertical: SIZES.height * .02,
    },

    order_id2: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .04,
        marginBottom: -5,
        color: COLORS.white,
    },

    cancel_btn: {
        // width: SIZES.width * .34,
        height: SIZES.height * .056,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.height * .02,
        paddingHorizontal: SIZES.width * .03,
        // borderWidth: 1,
    },

    cancel: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .036,
        marginBottom: -4,
        color: COLORS.white,
        textDecorationLine: 'underline',
    },

    order_title: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .038,
        marginBottom: -4,
        // color: "#0A0909",
        color:COLORS.secondary,
       
    },

    order_text: {
        width: SIZES.width * .34,
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .036,
        marginBottom: -4,
        color: COLORS.secondary,
    },

    btn: {
        width: SIZES.width * .34,
        height: SIZES.height * .056,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.width * .074,
        marginVertical: SIZES.height * .02,
        // borderWidth:2,
        // borderColor:COLORS.secondary
    },

    btn_text: {
        fontFamily: FONTS.medium,
        color: COLORS.white,
        fontSize: SIZES.width * .04,
        marginBottom: -4,
    },
    tinyLogo: {
        width: SIZES.width * .044,
        height: SIZES.width * .044,
        left:SIZES.width * .01,
        // top: SIZES.height * .005,
        borderRadius:180/2
      },
})