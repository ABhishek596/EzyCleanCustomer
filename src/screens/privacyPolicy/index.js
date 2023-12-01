import { View, Text, ScrollView, StatusBar, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import { GetPrivacyPolicy } from '../../redux/actions/homeAction'
import Loading from '../../component/loading'
import { connect } from 'react-redux'
import { COLORS, FONTS, SIZES } from '../../constants'

const PrivacyPolicy = ({ loading, GetPrivacyPolicy, privacyPolicy }) => {
    // useEffect(() => {
    //     GetPrivacyPolicy()
    // }, [])
    // console.log("porkds f : ", privacyPolicy)
    return (
        <>
            {loading ?
                <Loading />
                :
                <View style={globalStyles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
                    <View style={globalStyles.center}>
                        <View style={styles.policy_container}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                            {/* {privacyPolicy &&
                                <FlatList
                                    data={privacyPolicy}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.box}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.text}>{item.description}</Text>
                                        </View>
                                    )}
                                    key={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                />
                            } */}
                            <View style={{ alignSelf: 'center', width: SIZES.width * .9, marginTop: SIZES.height * .03, }}>

                                <Text style={{ color: COLORS.secondary, fontWeight: 'bold', fontSize: SIZES.width * .058, marginVertical: SIZES.height * .02, }}>Policy Dryfi Laundry</Text>
                                <Text style={{ color: COLORS.secondary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                <Text style={{ color: COLORS.secondary, fontWeight: 'bold', fontSize: SIZES.width * .058, marginVertical: SIZES.height * .02, }}>Please read the Terms carefully
                                    and make sure that you
                                    understand them before placing
                                    an order.</Text>
                                    <Text style={{ color: COLORS.secondary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

                            </View>
                            </ScrollView>
                        </View>

                    </View>
                </View>
            }
        </>
    )
}

// const mapStateToProps = (state) => ({
//     loading: state.home.loading,
//     privacyPolicy: state.home.privacyPolicy,
// })

// const mapDispatchToProps = {
//     GetPrivacyPolicy
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)
export default PrivacyPolicy;