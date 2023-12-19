import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import Icons from '../Icons';


const HeaderLeft = ({ showBack,showNotificationButton, title, navigation, }) => {

    return (
        <ImageBackground
            source={images.bg}
            style={styles.header}
            resizeMode='contain'
        >
            <View style={styles.header_row}>
                <View style={styles.row}>
                    {showBack &&
                        <TouchableOpacity style={styles.back_btn}
                            onPress={() =>  navigation?.goBack()}
                        >
                            <Icons name={"back"} size={22} color={COLORS.white} />
                        </TouchableOpacity>
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
                {showNotificationButton &&
                    <TouchableOpacity style={styles.notification_btn}
                    onPress={() => navigation.navigate("Notification")}
                    >
                        <Icons name={"notification"} size={16} color={COLORS.secondary} />
                    </TouchableOpacity>
                }
            </View>

        </ImageBackground>
    )
}

HeaderLeft.defaultProps = {
    onPress: null,
    title: null,
    showBack: true,
    showNotificationButton: false,

}

export default HeaderLeft;

const styles = StyleSheet.create({
    // ========== header =================
    header: {
        width: SIZES.width,
        height: SIZES.height * .1831,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        // overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.white
        // tintColor: COLORS.primary,
        // paddingVertical: SIZES.height * .03,
    },

    header_row: {
        width: SIZES.width * .9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: SIZES.height * -0.03,
        marginBottom: SIZES.height * .05,
        // borderWidth: 1,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    back_btn: {
        width: SIZES.width * .1,
        height: SIZES.height * .05,
        // borderWidth: 1,
        // alignItems: 'center',
        justifyContent: "center",
        marginRight: SIZES.width * .01,
    },

    notification_btn: {
        width: SIZES.width * .08,
        height: SIZES.width * .08,
        borderRadius: SIZES.width * .05,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: "center",
    },

    title: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .05,
        // marginBottom: -4,
        color: COLORS.white,
    },

})