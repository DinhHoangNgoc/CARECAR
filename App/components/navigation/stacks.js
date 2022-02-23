import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../authentication/LoginScreens';
import Register from '../authentication/RegisterScreens';
import Confirm from '../authentication/ConfirmScreens';
import Profile from '../authentication/ProfileScreen';
import Detail from '../garage/detailgarageScreens';
import SearchGarage from '../garage/Searchgarage';
import WriteEvaluate from '../garage/WriteEvaluateScreen';
import ListAddress from '../home/ListAddress';
import UpdateAdress from '../authentication/update/UpdateAdress';
import Updatepassword from '../authentication/update/UpdatePassword';
import Updateprofile from '../authentication/update/Updateprofile';

import config from '../../controller/constan';


import Tabs from './tabbottom';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={config.screenName.TabBar} component={Tabs} />
      <Stack.Screen name={config.screenName.Profile} component={Profile} />
      <Stack.Screen name={config.screenName.Login} component={Login} />
      <Stack.Screen name={config.screenName.Register} component={Register} />
      <Stack.Screen name={config.screenName.Confirm} component={Confirm} />
      <Stack.Screen name={config.screenName.Detail} component={Detail} />
      <Stack.Screen
        name={config.screenName.SearchGarage}
        component={SearchGarage}
      />
      <Stack.Screen
        name={config.screenName.WriteEvaluate}
        component={WriteEvaluate}
      />
      <Stack.Screen
        name={config.screenName.ListAddress}
        component={ListAddress}
      />
      <Stack.Screen
        name={config.screenName.UpdateAdress}
        component={UpdateAdress}
      />
      <Stack.Screen
        name={config.screenName.UpdateProfile}
        component={Updateprofile}
      />
      <Stack.Screen
        name={config.screenName.UpdatePassword}
        component={Updatepassword}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
