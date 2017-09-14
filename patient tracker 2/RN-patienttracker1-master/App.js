import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Signup from './src/signup' ;
import Login from './src/login' ;
import Navigation from './src/components/Navigation' ;
import firebase from 'firebase' ;

export default class App extends React.Component {
  constructor(){
    super() ;
    this.state = {
      userdetail: {} ,
      checking: false ,
    }
  }
 
  componentDidMount(){
    var config = {
      apiKey: "AIzaSyBxd-SzHHYlVL1Nwi6DhocPMs9b2ORfBKY",
      authDomain: "patient-tracker-8bfac.firebaseapp.com",
      databaseURL: "https://patient-tracker-8bfac.firebaseio.com",
      projectId: "patient-tracker-8bfac",
      storageBucket: "patient-tracker-8bfac.appspot.com",
      messagingSenderId: "1011939244962"
    };
    firebase.initializeApp(config);
   
    var refRoot = firebase.database().ref('/patient-tracker-8bfac/')
    refRoot.on("child_added", (snap) => {
   var userdetail = snap.val();
     console.log(userdetail)
     this.setState({
        userdetail
     })
     console.log(this.state.userdetail)
     var refRoot1 = firebase.database().ref('/patient-tracker-8bfac/checking/')
     refRoot1.on("child_added", (snap) => {
    var checking = snap.val();
      console.log(checking)
      this.setState({
         checking
      })
      console.log(this.state.checking)
    })
   
    // AsyncStorage.getItem('@Signupdetails:userslist', (err , data) =>{
    //     if (err){
    //       console.error('error loaing detail' , err)
    //     } else {
    //       const userdetail = JSON.parse(data) ;
    //       this.setState({
    //         userdetail
    //       })
    //       console.log(userdetail)
    //     }
    // })

  //   AsyncStorage.getItem('@loginchecking', (err , data) =>{
  //     if (err){
  //       console.error('error loaing detail' , err)
  //     } else {
  //       var checking= JSON.parse(data)
  //       console.log(checking)
  //       this.setState({
  //         checking
  //       })
  //       console.log(checking)
  //     }
  // })
  }

  rendercomponent(){
    if(this.state.userdetail === {}){
      return <Signup />
    } else {
      return <Login /> 
    }
    }

  render() {
    const { container, heading, input, image, container1 } = styles
    return (
      <View style={container}>
        {this.rendercomponent()}
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});