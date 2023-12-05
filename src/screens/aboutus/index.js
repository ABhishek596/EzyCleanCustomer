import {View, Text, ScrollView, StatusBar, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {GetAboutUs} from '../../redux/actions/homeAction';
import Loading from '../../component/loading';
import {connect} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';

const AboutUs = ({loading, GetAboutUs, aboutUs}) => {
  useEffect(() => {
    GetAboutUs();
  }, []);
  console.log('porkds f : ', aboutUs);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View style={globalStyles.container}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          <View style={globalStyles.center}>
            <View style={styles.policy_container}>
              {/* <ScrollView showsVerticalScrollIndicator={false}>
                                {aboutUs &&
                                <FlatList
                                    data={aboutUs}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.box}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.text}>{item.description}</Text>
                                        </View>
                                    )}
                                    key={item => item.id}
                                    showsVerticalScrollIndicator={false}
                                />
                            }
                                <View style={{ alignSelf: 'center', width: SIZES.width * .9, marginTop: SIZES.height * .03, }}>

                                    <Text style={{ color: COLORS.secondary, fontWeight: 'bold', fontSize: SIZES.width * .058, marginVertical: SIZES.height * .02, }}>About Us Dryfi Laundry</Text>
                                    <Text style={{ color: COLORS.secondary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                    <Text style={{ color: COLORS.secondary, fontWeight: 'bold', fontSize: SIZES.width * .058, marginVertical: SIZES.height * .02, }}>Our Mission</Text>
                                    <Text style={{ color: COLORS.secondary }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

                                </View>
                            </ScrollView> */}
              {aboutUs && (
                <FlatList
                  data={aboutUs}
                  renderItem={({item, index}) => (
                    <View
                      style={{
                        alignSelf: 'center',
                        width: SIZES.width * 0.9,
                        marginTop: SIZES.height * 0.03,
                      }}>
                      <Text
                        style={{
                          color: COLORS.secondary,
                          fontWeight: 'bold',
                          fontSize: SIZES.width * 0.058,
                          marginVertical: SIZES.height * 0.02,
                        }}>
                        {item.title}
                      </Text>
                      <Text style={{color: COLORS.secondary}}>
                        {item.description}
                      </Text>
                    </View>
                  )}
                  key={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.home.loading,
  aboutUs: state.home.aboutUs,
});

const mapDispatchToProps = {
  GetAboutUs,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
