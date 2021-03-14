import * as React from 'react';
import { Text, View, FlatList, Pressable } from 'react-native';
import GlobalStyle from '@styles/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

const style =  {
	...GlobalStyle,
	appBar: {
		...GlobalStyle.row,
		
	},
	headerTitle: {
		marginRight: 17,
		minWidth: 125
	}
};

const menuData = [];
for (let i = 0; i < 9; i++) {
	menuData.push({
		id: `id_${i}`,
		title: `Menu ke ${i+1}`,
		link: `/menu-${i+1}`
	})
}

const AppBar = () => (
	<View style={style.row}>
		<Text style={style.headerTitle}>Title Here</Text>
		<HorizontalMenu />
	</View>
);

const HorizontalMenu = () => {
	const navigation = useNavigation();
	return (
		<FlatList
			data={menuData}
			renderItem={({item, index, separator})=>HorizontalMenuItem({item, navigation})}
			keyExtractor={item => item.id}
			horizontal={true}
		/>
	);
};

let navigation = null;
const onMenuItmePress = ({ item, navigation }) => {
	navigation.navigate('Bag');
}

const HorizontalMenuItem = ({item, navigation}) => {
	return (
		<Pressable onPress={() => onMenuItmePress({ item, navigation })}>
			<Text style={{ marginRight: 7 }}>{item.title}</Text>
		</Pressable>
	);
};

export default AppBar;