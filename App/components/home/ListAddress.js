import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const infodata = [
  {
    id: '1',
    name: 'Đà Nẵng',
  },
  {
    id: '2',
    name: 'Hà Nội',
  },
];
const ListAdrress = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={25} color="red" />
        </TouchableOpacity>
        <Text style={{color:'red', marginLeft:40}}>Tỉnh/thành phố</Text>
      </View>
      <View>
        <FlatList
          data={infodata}
          numColumns={3}
          onPress={() => setSelectedId(item.id)}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', {location: item.name});
              }}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:50,
        justifyContent: 'center',
    }
})

export default ListAdrress;
