import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const black = 'rgba(0, 0, 0, 0.9)';
const white = 'rgba(10, 10, 10, 0.1)';
const containerwhite = 'rgba(0, 0, 0, 0.5)';
const containerblack = 'rgba(0, 0, 0, 0.1)';

export default StyleSheet.create({

    bgcolordark: {
      backgroundColor: black,
      paddingTop: Constants.statusBarHeight,
      flex: 1,
    },

    bgcolorlight: {
      backgroundColor: white,
      paddingTop: Constants.statusBarHeight,
      flex: 1,
  
    },

    switchColor: {
        marginRight: 30,
        flex: 1,
        alignItems: "flex-start",
    },

    alcoholmeter: {
        textAlign: 'center',
        marginTop:100,
        marginBottom: 50,
        fontSize: 40,
        fontFamily: 'Ubuntu-Light'
    },

    result: {
        textAlign: 'center',
        fontSize: 20,
    },

    lightcontainer: {
      backgroundColor: containerwhite,  
      maxWidth: 130,
    },
    
    darkcontainer: {
        backgroundColor: containerblack,
        maxWidth: 130,
      },
    darkfield:{
      fontFamily: 'Ubuntu-Light',
      color: 'rgba(255, 255, 255, 1.0)',
      marginLeft: 20,
      marginTop: 15,
    },
    lightfield:{
        fontFamily: 'Ubuntu-Light',
        color: 'rgba(0, 0, 0, 1.0)',
        marginLeft: 20,
        marginTop: 15,
      },
    button:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    radiobuttons: {
        marginLeft: 20,
        marginTop: 20,
    },
    numericinput: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20
    },
    field: {
      marginTop: 5,
      marginLeft: 20
    },
    drunkennesslevelgreen: {
      color: 'rgba(0, 255, 0, 1.0)',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {height: 1},
      textShadowRadius: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    drunkennesslevelyellow: {
      color: 'rgba(255, 255, 0, 1)',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {height: 1},
      textShadowRadius: 20,
      fontSize: 25,
    },
    drunkennesslevelred: {
      color: 'rgba(255, 0, 0, 1.0)',      
      textShadowColor: 'rgba(0, 0, 0, 0.45)',
      textShadowOffset: {height: 1},
      textShadowRadius: 20,
      fontSize: 25,
    },
    textToCenter: {
      textAlign: 'center'
    }
  });
