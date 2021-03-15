import * as React from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import AppBar from '@components/AppBar';
import style from '@styles/GlobalStyle';

const items = [];

for (let i = 0; i < 9; i++) {
	items.push({
		images: [
			'image one'
		],
		name: `product ke-${i}`,
		price: i * 1000,
		normalPrice: i * 1000 + 50
	});
}

const Shop = ({ navigation }) => (
	<ScrollView>
		<View style={style.pageWrapper}>
			<Text> Here's your Shop </Text>
			<View style={{ ...style.row, flexWrap: 'wrap' }}>
				{items.map(ItemPreview)}
			</View>
		</View>
	</ScrollView>
);

const ItemPreview = (item, i) => (
	<View
		style={{
			...style.column,
			minWidth: 150,
			maxWidth: '50%',
			height: 300
		}}
		key={`itempreview-ke-${i}`}
	>
		<Image
			source={require('@images/play-store.png')}
			style={{
				flex: 1,
				height: undefined,
				width: undefined,
				aspectRatio: 0.5
			}}
			resizeMode="contain"
		/>
		<Text>Nama</Text>
		<Text>Price</Text>
		<Text>Action</Text>
	</View>
);

Shop.options = {
	headerTitle: props => <AppBar {...props} />
};

export default Shop;