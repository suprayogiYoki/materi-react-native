import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from '@pages/Homepage';
import Profile from '@pages/Profile';
import Bag from '@pages/Bag';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const linking = {
  // prefixes: ['https://mychat.com', 'mychat://'],
	screens: {
    Profile: 'profile',
    Bag: 'bag',
    Homepage: '',
  },
};

const app = () => (
	<SafeAreaProvider>
		<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
			<Stack.Navigator>
				<Stack.Screen name="Homepage" component={Homepage} options={Homepage.options}/>
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Bag" component={Bag} options={Bag.options}/>
			</Stack.Navigator>
		</NavigationContainer>
	</SafeAreaProvider>
);

export default app;