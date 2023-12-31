import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
// ========== header =================
    header_bg: {
        width: SIZES.width,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        // overflow: 'hidden',
        alignItems: 'center',
        // paddingVertical: SIZES.height * 0.03,
        tintColor: COLORS.primary,
        height: SIZES.height * 0.1831,
        // marginTop:SIZES.height * -0.005,
        alignSelf:'center'
    },

    header_row: {
        width: SIZES.width * .9,
        // height: SIZES.height * .1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.height * .04,
        marginBottom: SIZES.height * .01,
        marginLeft: SIZES.width * -.04,
        // borderWidth: 1,
    },

    back_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: SIZES.width * .03,
    },

    page_title: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        // marginBottom: -5,
        color: COLORS.white,
    },


    // ============= profile ==================
    profile_box: {
        alignItems: 'center',
        alignSelf:'center',
        marginTop:SIZES.height * -.09,
        
    },

    image_box: {
        width: SIZES.width * .24,
        height: SIZES.width * .24,
        // borderRadius: SIZES.width * .3,
        overflow: 'hidden',
        // marginBottom: SIZES.height * .015,
        backgroundColor: COLORS.light,
        borderRadius:180/2
    },

    profile: {
        width: SIZES.width * .24,
        height: SIZES.width * .24,
        // borderRadius: SIZES.width * .3,
        // overflow: 'hidden',
        // marginBottom: SIZES.height * .015,
        borderRadius:180/2
    },


    title: {
        width: SIZES.width * .9,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.width * .065,
        // marginBottom: -5,
        color: COLORS.secondary,
        marginBottom: SIZES.height * .01,
    },

    box: {
        alignItems: 'center',
        // marginTop: SIZES.height * .03,
       
    },

    edit_btn: {
        width: SIZES.width * .08,
        height: SIZES.width * .08,
        borderRadius: SIZES.width * .06,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        right: SIZES.width * -.01,
        bottom: SIZES.height * .025,
    },

   
})