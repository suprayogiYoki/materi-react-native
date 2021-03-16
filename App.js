import * as React from 'react';
import { NavigationContainer, Text } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Homepage from '@pages/Homepage';
import Profile from '@pages/Profile';
import Bag from '@pages/Bag';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Shop from './pages/Shop';

const Drawer = createDrawerNavigator();

//const linking = {
//	// prefixes: ['https://mychat.com', 'mychat://'],
//	screens: {
//		shop: 'shop',
//		profile: 'profile',
//		bag: 'bag',
//		homepage: '',
//	},
//};

const App = () => (
	<SafeAreaProvider>
		<NavigationContainer fallback={<Text>Loading...</Text>}>
			{/*<Drawer.Navigator initialRouteName="Feed">
				<Drawer.Screen
					name="Feed"
					component={Feed}
					options={{ drawerLabel: 'Home' }}
				/>
				<Drawer.Screen
					name="Notifications"
					component={Notifications}
					options={{ drawerLabel: 'Updates' }}
				/>
				<Drawer.Screen
					name="Profile"
					component={Profile}
					options={{ drawerLabel: 'Profile' }}
				/>
			</Drawer.Navigator>*/}
			<Drawer.Navigator>
				<Drawer.Screen name="homepage" component={Homepage} options={Homepage.options} />
				<Drawer.Screen name="profile" component={Profile} />
				<Drawer.Screen name="bag" component={Bag} options={Bag.options} />
				<Drawer.Screen name="shop" component={Shop} options={Shop.options} />
			</Drawer.Navigator>
		</NavigationContainer>
	</SafeAreaProvider>
);

export default App;