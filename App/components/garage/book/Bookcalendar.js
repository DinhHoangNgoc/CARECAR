import React,{useState} from 'react';
import {TouchableOpacity,View,Text,SafeAreaView, StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../../controller/constan';
import {useNavigation} from '@react-navigation/native';
import Headers1 from './header';
import Headers2 from './header';
import Headers3 from './header3';


const Bookcalendar = () =>{

    const [count,setcount] =useState(1);

    const onclickcount = (count) =>{
            setcount(++count)
    }
    const onclickcount1 = count => {
      setcount(--count);
    };

    const navigation =useNavigation();
    selectedTab = (count) => {
      if (count == 1){
         return (
           <View>
             <View
               style={{
                 width: '100%',
                 height: 60,
                 borderBottomWidth: 1,
                 borderBottomColor: '#b5b5b5',
               }}>
               <Image
                 source={config.icons.Steps1}
                 style={{width: '100%', height: '100%'}}
                 resizeMode="center"
               />
             </View>
             <View
               style={{
                 width: '100%',
                 height: 0.7 * config.screen.height,
               }}>
               <Headers1/>
             </View>
           </View>
         );
      }
      if (count == 2){
        return (
          <View>
            <View
              style={{
                width: '100%',
                height: 60,
                borderBottomWidth: 1,
                borderBottomColor: '#b5b5b5',
              }}>
              <Image
                source={config.icons.Steps2}
                style={{width: '100%', height: '100%'}}
                resizeMode="center"
              />
            </View>
            <View
              style={{
                width: '100%',
                height: 0.7 * config.screen.height,
              }}>
              <Headers2 />
            </View>
          </View>
        );
      } 
      if (count == 3){
          return (
            <View>
              <View
                style={{
                  width: '100%',
                  height: 60,
                  borderBottomWidth: 1,
                  borderBottomColor: '#b5b5b5',
                }}>
                <Image
                  source={config.icons.Steps3}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="center"
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 0.7 * config.screen.height,
                }}>
                <Headers3 />
              </View>
            </View>
          );
      }
      if (count == 4) {
        return navigation.push(config.screenName.TabBar);
      }
    };
    return (
      <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back" size={35} color="red" />
          </TouchableOpacity>
          <Text style={styles.TEXTheader}>Đặt Lịch</Text>
        </View>
        <View>{selectedTab(count)}</View>
        <View style={{flexDirection:'row', display: 'flex',justifyContent: 'space-between'}}>
          <TouchableOpacity
            disabled={count == 1 ? true : false}
            style={count == 1 ?styles.BT2: styles.BT}
            onPress={() => {
              onclickcount1(count);
            }}>
            <Text style={{color : '#fff',fontWeight: 'bold'}}>back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onclickcount(count)
            }}
            style={styles.BT}>
            <Text style={{color : '#fff',fontWeight: 'bold'}}>Tiep</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e0e0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TEXTheader: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0.35 * config.screen.width,
  },
  BT: {
    backgroundColor: 'red',
    width:60,
    height:30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  },
  BT2: {
    backgroundColor: '#fff',
    width:60,
    height:30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  }
});


export default Bookcalendar;