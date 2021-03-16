import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppBar from '@components/AppBar';
import globalStyle from '@styles/GlobalStyle';
import ProductPreview from '../components/ProductPreview';

const items = [];

for (let i = 0; i < 9; i++) {
	let data = {
		images: [
			require('@images/play-store.png')
		],
		name: `product ke-${i}`,
		currencry: 'IDR',
		price: (i + 1) * 1000,
		normalPrice: ((i + 1) * 1000) + 500
	}
	if (i % 2 === 0 || i % 3 === 0) {
		delete data.normalPrice;
	}
	items.push(data);
}

const Shop = ({ navigation }) => (
	<ScrollView>
		<View style={globalStyle.pageWrapper}>
			<Text> Here's our product </Text>
			{/* product list */}
			<View style={style.productWrapper}>
				{items.map(ProductPreview)}
			</View>
		</View>
	</ScrollView>
);
const style = {
	productWrapper: {
		...globalStyle.row,
		flexWrap: 'wrap',
	}
}

Shop.options = {
	headerTitle: props => <AppBar {...props} />
};

export default Shop;