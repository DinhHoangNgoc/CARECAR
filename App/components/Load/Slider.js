import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import config from '../../controller/constan';

const Slider = ({listImage}) => {
  return (
    <View style={styles.slider}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        showPagination
        paginationStyleItem={{
          width: 8,
          height: 8,
          marginLeft: 0,
          marginRight: 6,
        }}
        paginationStyle={{padding: 0, marginBottom: 4}}
        data={listImage}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={{width: config.screen.width, height: config.screen.height / 3.6}}
          />
        )}
      />
    </View>
  );
};

export default Slider;
const styles = StyleSheet.create({
  slider: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
