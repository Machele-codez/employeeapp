import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

import Home from './screens/Home';
import CreateEmployee from './screens/createEmployee';
import Profile from './screens/Profile'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const headerOptions = {
	headerTintColor: "white",
	headerStyle: {
		backgroundColor: "#006aff"
	}
};

// * main App component
function App() {
	return (

		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen 
					name="Home" 
					component={Home}
					options={{...headerOptions, title: "Home"}}
				/>
				<Stack.Screen 
					name="Create" 
					component={CreateEmployee} 
					options={{...headerOptions, title: "Add New Employee"}}
				/>
				<Stack.Screen 
					name="Profile" 
					component={Profile} 
					options={{...headerOptions, title: "Employee Profile"}}
				/>
			</Stack.Navigator>

			<StatusBar style="auto" />
		</View>
	);
}

// * wrapping App component in NavigationContainer
export default () => (
	<NavigationContainer>
		<App />
	</NavigationContainer>
);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e9e9e9',
		marginTop: Constants.statusBarHeight
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
