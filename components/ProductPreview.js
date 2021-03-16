import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import globalStyle from '@styles/GlobalStyle';

const ProductPreview = (item, i) => (
	<View
		style={style.wrapper}
		key={`itempreview-ke-${i}`}
	>
		<Image
			source={item.images[0]}
			style={style.productImage}
			resizeMode="contain"
		/>
		<View style={{ flex: 1 }}>
			<Text style={style.gap}>{item.name} </Text>
			<View style={[globalStyle.row, style.gap]}>
				<Text>{item.currencry}{item.price}</Text>
				<Text style={style.normalPrice}>{item.normalPrice}</Text>
			</View>
			<View style={[globalStyle.row, style.gap]}>
				<Pressable style={[
					style.gap,
					{
						cursor: 'pointer',
						backgroundColor: 'rgba(231, 231, 231, 1)',
						paddingTop: 5,
						paddingBottom: 5,
						paddingLeft: 15,
						paddingRight: 15,
					}
				]}>
					<Text style={{ fontWeight: '600' }}> Buy </Text>
				</Pressable>

			</View>
			<Text style={style.gap}>opsi: a, b, c </Text>
			<Text style={style.gap}>opsi: a, b, c </Text>
		</View>
	</View >
);

const style = {
	wrapper: {
		maxWidth: '50%',
		minWidth: 225,
		minHeight: 275,
		padding: 3.5
	},
	gap: {
		paddingTop: 3
	},
	normalPrice: {
		marginTop: -3,
		marginLeft: 3,
		fontSize: 12,
		color: 'rgba(215, 0, 0, 1)'
	},
	productImage: {
		width: '100%',
		paddingBottom: '100%',
		aspectRatio: 1,
		backgroundColor: 'rgba(225, 225, 225, 1)',
	}
}

export default ProductPreview;