import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export default StyleSheet.create({
// ========== header =================
    header_bg: {
        width: SIZES.width,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30, 
        overflow: 'hidden',
        alignItems: 'center',
        // paddingVertical: SIZES.height * .03,
        height:SIZES.height * .37,
        marginTop:SIZES.height * -0.005,
        // paddingTop:SIZES.height * -0.03
        // marginTop: SIZES.height * -0.03,
    },

    header_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.height * .04,
        marginBottom: SIZES.height * .01,
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
        fontSize: SIZES.width * .05,
        // marginBottom: -5,
        color: COLORS.white,
    },

    notification_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderRadius: SIZES.width * .05,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
        top:SIZES.height * .005,
    },


    // ============= profile ==================
    profile_box: {
        alignItems: 'center',
    },

    image_box: {
        width: SIZES.width * .25,
        height: SIZES.width * .25,
        // borderRadius: SIZES.width * .3,
        overflow: 'hidden',
        marginBottom: SIZES.height * .015,
        backgroundColor: COLORS.light,
        borderRadius:180/2
    },

    profile: {
        width: SIZES.width * .25,
        height: SIZES.width * .25,
        borderRadius:180/2
        // borderRadius: SIZES.width * .3,
        // overflow: 'hidden',
        // marginBottom: SIZES.height * .015,
    },

    user_name: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .044,
        // marginBottom: -5,
        color: COLORS.white,
    },

    text: {
        fontFamily: FONTS.regular,
        // fontSize: 12,
        fontSize: SIZES.width * .031,
        marginBottom: -5,
        color: COLORS.white,
    },

    // ================= screen navigation =============
    btn_container: {
        // marginTop: SIZES.height * .03,
    },

    screen_btn: {
        height: SIZES.height * .06,
        borderBottomWidth: 1.3,
        borderBottomColor: COLORS.gray30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.height * .02,
    },

    screen_title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .044,
        marginBottom: -5,
        color: COLORS.secondary,
    },

    icon_style: {
        marginHorizontal: SIZES.width * .05,
    },

    //modal
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: 300,
        borderRadius: 20,
        // backgroundColor: 'white',
        // padding: 60,
        alignItems: 'center',
        paddingHorizontal:20,
        paddingVertical:60
      },
      image: {
        width: 50,
        height: 50,
        // borderRadius: 25,
      },
      texta: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .044,
        // marginBottom: -5,
        color: COLORS.secondary,
        fontWeight:'bold'
      },
      buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
      },
      button: {
        flex: 1,
        padding: 10,
        margin: 5,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        alignItems: 'center',
      },
      button1: {
        flex: 1,
        padding: 10,
        margin: 5,
        // backgroundColor: 'lightblue',
        borderRadius: 20,
        alignItems: 'center',
        borderWidth:1.5,
        borderColor: COLORS.secondary,
      },
      cancle:{
        color:COLORS.white
      },
      yes:{
        color:COLORS.secondary
      }
})