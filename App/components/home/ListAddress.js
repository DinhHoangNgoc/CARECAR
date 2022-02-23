import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
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
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Icon name="chevron-back" size={25} color="red" />
        </TouchableOpacity>
        <Text>Tỉnh/thành phố</Text>
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

export default ListAdrress;
