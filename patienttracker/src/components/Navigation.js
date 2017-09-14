import React, { Component } from "react";
import Addpatient from "./addpatient";
import Patientdetails from "./patientdetails";
import Patientlist from "./patientlist";
import { StackNavigator, TabNavigator } from 'react-navigation' ;


// const Navigation = TabNavigator({
//   Home: { screen : Patientlist  },
//   Addpatient: { screen : Addpatient  },
//   Patientdetails: { screen : Patientdetails  },
// },{  
//   tabBarOptions: {
//     // activeTintColor: 'white' ,
//     // inactiveTintColor: '#8a0707' ,
//     // swipeEnabled: true ,
//     // showLabel: false ,
//     // style:{
//     //   backgroundColor: 'black' ,
//     //   flex: 1 ,
//     // },
//   },
// });
const Navigation = TabNavigator({
  Home: {
    screen: Patientlist,
  },
  Notifications: {
    screen: Patientdetails,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
export default Navigation;
