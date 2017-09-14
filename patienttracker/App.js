// import React from 'react';
// import { StyleSheet, View, AsyncStorage, Text } from 'react-native';
// import Signup from './src/signup' ;
// import Login from './src/login' ;
// import Navigation from './src/components/Navigation' ;

// export default class App extends React.Component {
//   constructor(){
//     super() ;
//     this.state = {
//       userdetail: [] ,
//       checking: '' ,
//     }
//   }
 
//   componentDidMount(){
//     AsyncStorage.getItem('@Signupdetails:userslist', (err , data) =>{
//         if (err){
//           console.error('error loaing detail' , err)
//         } else {
//           const userdetail = JSON.parse(data) ;
//           this.setState({
//             userdetail
//           })
//           console.log(userdetail)
//         }
//     })

//     AsyncStorage.getItem('@loginchecking', (err , data) =>{
//       if (err){
//         console.error('error loaing detail' , err)
//       } else {
//         var checking= JSON.parse(data)
//         console.log(checking)
//         this.setState({
//           checking
//         })
//         console.log(checking)
//       }
//   })
//   }

//   rendercomponent(){
//     if(this.state.userdetail === []){
//       return <Signup />
//     } else if(!this.state.checking){
//         return <Login /> 
//       }else{
//         return <Navigation />
//       }
//     }

//   render() {
//     const { container, heading, input, image, container1 } = styles
//     return (
//       <View style={container}>
//         {this.rendercomponent()}
//         <Text>{ JSON.stringify(this.state.userdetail)  }
//         { String(!this.state.checking)  }</Text>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     marginTop: 20 ,
//   }
// });
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = StackNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello world</Text>
        <MainScreenNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
})