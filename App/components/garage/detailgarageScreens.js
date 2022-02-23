import React ,{useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Slider from '../Load/Slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Evaluates from './EvaluateScreen';
import Information from './InfomationScreen';
import Schedule from './ScheduleScreen';
import Services from './ServiceScreen';
import config from '../../controller/constan';


const data = [
  'https://danviet.mediacdn.vn/upload/1-2016/images/2016-03-12/1457778024-gara5.jpg',
  'https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/He-thong-bai-do-xe-tu-dong-gia-dinh-8.jpg',
];

const DetailGarage = ({route}) => {
  const [view, setView] = useState('1');

  const datas = route?.params?.item;

  setTab = (tab) => {
    setView(tab);
  };

  selectedTab = () => {
    switch (view) {
      case '1':
        return <Information />;
      case '2':
        return <Services />;
      case '3':
        return <Schedule/>;
      case '4':
        return <Evaluates />;
      default:
        return; /* empty div maybe */
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            width: 30,
            height: '100%',
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" size={25} color="red" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'red',
            fontFamily: 'balihoscript',
            fontSize: 20,
          }}>
          {datas?.name}
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: '100%',
            marginHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="share-social" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container} stickyHeaderIndices={[3]}>
        <Slider listImage={data} />
        <View style={styles.adrress}>
          <View style={styles.information}>
            <View>
              <Text style={styles.NAME}>{datas?.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  alignItems: 'center',
                }}>
                <Icon name="location-outline" />
                <Text style={styles.ADDRESS}>
                  {datas?.address}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}>
                  <Text>5</Text>
                  <Icon name="star" color="yellow" size={20} />
                </View>
              </View>
              <View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}>
                  <Text>16</Text>
                  <Icon
                    name="chatbox-ellipses"
                    color="red"
                    size={20}
                    style={{marginTop: 2}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ggmap}>
          <Image
            source={{
              uri: 'https://inuvcuon.vn/images/2018/08/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg',
            }}
            style={{width: '100%', height: 150}}
          />
        </View>
        <>
          <View style={styles.Tabs}>
            <TouchableOpacity
              onPress={() => setTab('1')}
              style={view == '1' ? styles.BTtabs1 : styles.BTtabs}>
              <Text style={view == '1' ? {color: 'red'} : {color: '#000'}}>
                Thông Tin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab('2')}
              style={view == '2' ? styles.BTtabs1 : styles.BTtabs}>
              <Text style={view == '2' ? {color: 'red'} : {color: '#000'}}>
                Dịch Vụ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab('3')}
              style={view == '3' ? styles.BTtabs1 : styles.BTtabs}>
              <Text style={view == '3' ? {color: 'red'} : {color: '#000'}}>
                Lịch hẹn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view == '4' ? styles.BTtabs1 : styles.BTtabs}
              onPress={() => setTab('4')}>
              <Text style={view == '4' ? {color: 'red'} : {color: '#000'}}>
                Đánh giá
              </Text>
            </TouchableOpacity>
          </View>
        </>
        <View>{selectedTab()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailGarage;

const styles = StyleSheet.create({
  header: {
    width: config.screen.width,
    height: 0.05 * config.screen.height,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  adrress: {
    backgroundColor: '#fff',
    with: '100%',
    height: 0.07 * config.screen.height,
    flexDirection: 'row',
  },
  information: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ggmap: {
    width: '100%',
    height: 0.2 * config.screen.height,
  },
  Tabs: {
    flexDirection: 'row',
    backgroundColor:'#fff'
  },
  BTtabs: {
    width: '25%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BTtabs1: {
    width: '25%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor:'red'
  },
});
