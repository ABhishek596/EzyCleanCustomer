import {View, Text, ScrollView, StatusBar, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {GetFaqs} from '../../redux/actions/homeAction';
import Loading from '../../component/loading';
import {connect} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../../constants';

const Faqs = ({loading, GetFaqs, faqs}) => {
  useEffect(() => {
    GetFaqs();
  }, []);
  console.log('faqs faqs faqs : ', faqs);
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
                {privacyPolicy &&
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
                            }
              </ScrollView> */}
              {faqs && (
                <FlatList
                  data={faqs}
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
                        FAQs Dryfi Laundry
                      </Text>
                      <Text style={{color: COLORS.secondary}}>
                      {item.faq_title}
                      </Text>
                      {/* <Text style={{ color: COLORS.secondary, fontWeight: 'bold', fontSize: SIZES.width * .058, marginVertical: SIZES.height * .02, }}>{''}</Text> */}

                      <Text style={{color: COLORS.secondary, marginTop: 10}}>
                      {item.test_setting}
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
  faqs: state.home.faqs,
});

const mapDispatchToProps = {
  GetFaqs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Faqs);
