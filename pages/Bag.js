import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppBar from '@components/AppBar';
import style from '@styles/GlobalStyle';

const items = [];

for (let i = 0; i < 9; i++) {
	items.push({
		images: [
			'image one'
		],
		name: `product ke-${i}`,
		price: i*1000,
		normalPrice: i*1000+50
	});
}

const Bag = ({ navigation }) => (
  <ScrollView>
    <View style={style.pageWrapper}>
      <Text> Here's your bag </Text>
			<View style={{...style.row, flexWrap: 'wrap'}}>
				{items.map(ItemPreview)}
			</View>
    </View>
  </ScrollView>
);

const ItemPreview = (item, i) => (
	<View style={style.column} key={`itempreview-ke-${i}`}>
		<Text>Gambar</Text>
		<Text>Nama</Text>
		<Text>Price</Text>
		<Text>Action</Text>
	</View>
);

Bag.options = {
  headerTitle: props => <AppBar {...props} />
};

export default Bag;