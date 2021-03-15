import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from '@pages/Homepage';
import Profile from '@pages/Profile';
import Bag from '@pages/Bag';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Shop from './pages/Shop';

const Stack = createStackNavigator();

const linking = {
	// prefixes: ['https://mychat.com', 'mychat://'],
	screens: {
		shop: 'shop',
		profile: 'profile',
		bag: 'bag',
		homepage: '',
	},
};

const SayHello = () => (
	<SafeAreaProvider>
		<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
			<Stack.Navigator>
				<Stack.Screen name="homepage" component={Homepage} options={Homepage.options} />
				<Stack.Screen name="profile" component={Profile} />
				<Stack.Screen name="bag" component={Bag} options={Bag.options} />
				<Stack.Screen name="shop" component={Shop} options={Shop.options} />
			</Stack.Navigator>
		</NavigationContainer>
	</SafeAreaProvider>
);

export default SayHello;