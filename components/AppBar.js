import * as React from 'react';
import { Text, View, FlatList, Pressable, Linking } from 'react-native';
import GlobalStyle from '@styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

const style = {
	...GlobalStyle,
	appBar: {
		...GlobalStyle.row,
	},
	headerTitle: {
		marginRight: 17,
		minWidth: 125
	}
};

const menuData = [
	{
		id: 'shop',
		title: 'Shop',
		type: 'internal',
		link: 'shop'
	},
	{
		id: 'react-native',
		title: 'Documentation',
		type: 'link',
		link: 'https://reactnative.dev/docs/getting-started'
	}
];
//for (let i = 0; i < 9; i++) {
//	menuData.push({
//		id: `id_${i}`,
//		title: `Menu ke ${i+1}`,
//		link: `/menu-${i+1}`
//	})
//}

const AppBar = () => {
	const homeLink = {
		id: 'home',
		type: 'internal',
		link: 'homepage'
	}
	const navigation = useNavigation();
	return (
		<View style={style.row}>
			<Pressable style={{ cursor: 'pointer', marginRight: 7 }} onPress={() => onMenuItmePress({ item: homeLink, navigation })}>
				<Text style={style.headerTitle}>Title Here</Text>
			</Pressable>
			<HorizontalMenu />
		</View>
	);
};

const HorizontalMenu = () => {
	const navigation = useNavigation();
	return (
		<FlatList
			data={menuData}
			renderItem={({ item, index, separator }) => HorizontalMenuItem({ item, navigation })}
			keyExtractor={item => item.id}
			horizontal={true}
		/>
	);
};

const onMenuItmePress = ({ item, navigation }) => {
	if (item.type === 'internal') {
		navigation.navigate(item.link);
	}
	else {
		Linking.openURL(item.link).catch((err) => console.error('An error occurred', err));
	}
}

const HorizontalMenuItem = ({ item, navigation }) => {
	return (
		<Pressable style={{ cursor: 'pointer', marginRight: 7 }} onPress={() => onMenuItmePress({ item, navigation })}>
			<Text style={{ marginRight: 7 }}>{item.title}</Text>
		</Pressable>
	);
};

export default AppBar;