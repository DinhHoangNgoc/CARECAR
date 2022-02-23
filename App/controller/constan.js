import { Dimensions } from "react-native";

export default {
  baseURL: '',

  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  screenName: {
    Login: 'Login',
    Register: 'Register',
    Home: 'Home',
    TabBar: 'TabBar',
    Profile: 'Profile',
    Confirm: 'Confirm',
    Detail: 'Detail',
    SearchGarage:'SearchGarage',
    WriteEvaluate: 'WriteEvaluate',
    ListAddress: 'ListAddress',
    UpdateProfile: 'UpdateProfile',
    UpdateAdress: 'UpdateAdress',
    UpdatePassword: 'UpdatePassword',
    Chatgarage: 'Chatgarage',
    Bookcalendar: 'Bookcalendar',
  },
  color: {},
  icons: {
      logo:require('../assets/images/img_logo.png'),
      facebook: require('../assets/images/ic_facebook.png'),
      google: require('../assets/images/ic_google.png'),
      load: require('../assets/images/img_loading.png'),
      giftbox: require('../assets/images/ic_gift-box.png'),
      maintenance: require('../assets/images/ic_maintenance.png'),
      carwash: require('../assets/images/ic_car-wash.png'),
      carcheck: require('../assets/images/ic_car-check.png'),
      home: require('../assets/images/ic_home.png'),
      chat: require('../assets/images/ic_chat.png'),
      qr_code: require('../assets/images/ic_qr-code.png'),
      list: require('../assets/images/ic_checklist.png'),
      user: require('../assets/images/ic_user.png'),
  },
  fonts: {
    poppinsBold: 'Poppins-Bold',
    poppinsMedium: 'Poppins-Medium',
    poppinsRegular: 'Poppins-Regular',
    poppinsThin: 'Poppins-Thin',
    poppinsLight: 'Poppins-Light',
    poppinsItalic: 'Poppins-Italic',
  },
};