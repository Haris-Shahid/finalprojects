import React ,{ Component } from 'react' ;
import { View, Text , StyleSheet, Alert } from 'react-native' ;

export default class Patientlist extends Component {
    static navigationOptions = {
        // tabBarLabel: 'Patient details' ,
        // tabBarIcon: () => (
        //               <Image
        //               source={require('../img/home.png')}
        //               style={[styles.tabIcon, {tintColor: 'gray'}]}
        //               />
                    //   )
        
    }
  
    render(){
        return(
            <View style={styles.container}>
               <Text> patientlist</Text>
             {/* {  Alert.alert(
                    'Alert Title',
                    'My Alert Msg',
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                    )} */}
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    tabIcon: {
      width: 56,
      height: 56,
    },
    tabStyle: {
        height: 40
    }
  });