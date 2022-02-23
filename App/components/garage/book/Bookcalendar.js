import React from 'react';
import {TouchableOpacity,View,Text,SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import config from '../../../controller/constan';


const Bookcalendar = () =>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style = {styles.header}>
                <TouchableOpacity>
                    <Icon name="chevron-back" size={35} color="red" />
                </TouchableOpacity>
                <Text>Đặt Lịch</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#e2e0e0'
    }
})


export default Bookcalendar;