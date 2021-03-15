# Component
Pada react-native semua tampilan berbasis component. Komponen dapat dibentuk berbasis class secara oop atau dengan basis function.  Reactnative sendiri telah menyediakan beberapa [component bawaan](https://reactnative.dev/docs/components-and-apis) yang dapat digunakan atau kamu dapat mengunakan library component lain.  
Kali ini kita akan membuat component dengan basis function, hasil function yang kita buat kemudian akan di render menjadi native ui oleh react native. Seperti pada contoh sebelumnya component fuction mengembalikan nilai yang dibungkus dengan kurung`()`, nilai yang dikembalikan hanya boleh satu root component, jika ingin memiliki banyak component lain maka dapat kita bungkus dengan component lain atau dengan empty component `<>`.

## Membuat component product
Berikut kita akan membuat sebuah compoent Product. Yang akan menampilkan gambar, nama, harga, quantity dan tombol beli.
Pertama kita buat komponen product.

```
import * as React from 'react';
// import component dasar yang akan di gunakan
import { View } from 'react-native';

const Product = () => (
	<View><View>
);
```

Tampilan diatas kita menggunakan component [View](https://reactnative.dev/docs/view) sebagai root component, dimana hanya berfungsi sebai container/tempat untuk component lain maka hanya akan menampilkan halaman kosong.

Berikutnya kita display data-data yang ingin di tampilkan mengunakan component text.

```
import * as React from 'react';
// import component dasar yang akan di gunakan
import { View, Text } from 'react-native';

const Product = () => (
	<>
		<View>
			<Text>Gambar</Text>
			<Text>Nama</Text>
			<Text>Harga</Text>
			<Text>Quantity</Text>
			<Text>Action</Text>
		</View>
	</>
);

export default Product;
```

Code di atas akan menampilkan tulisan Gambar, Nama, Harga, Quantity, dan Action dengan berbaris kebawah.

Kemudian kita tentukan ui yang cocot untuk data tersebut, dan kita cari apakah ada [component bawaan](https://reactnative.dev/docs/components-and-apis) yang sesuai :  
- Gambar-> image -> Image(https://reactnative.dev/docs/image)  
- Nama -> text -> [Text](https://reactnative.dev/docs/text)  
- Harga -> text -> [Text](https://reactnative.dev/docs/text)  
- Quantity -> input -> [TextInput](https://reactnative.dev/docs/textinput)  
- Action -> button -> [Button](https://reactnative.dev/docs/button)
Maka kita menambahkan import compnent yang sesuai dan menguah component `Text` untuk data dengan component yang sesuai

```
import { View, Text, Image, TextInput, Button } from 'react-native';

const Product = () => (
	<>
		<View>
			<Image
				style={{ width: 150, height: 150 }}
				source='https://reactnative.dev/img/header_logo.svg'
			/>
			<Text>Coffe</Text>
			<Text>Rp. 10.000</Text>
			<TextInput
				value={1}
			/>
			<Button
				title="Buy"
			/>
		</View>
	</>
);
```
Hasilnya gambar product akan di tampilkan dengan ukuran 75*75.  
Quantity berupa angka 1 dalam bentuk input yang bisa di rubah.  
Text action kita ganti ke Button buy yang dapat di click.

## Style
Component bawaan react native biasanya memiliki property style untuk modifikasi ampilan component. Style umumnya berjalan layaknya CSS pada web namun dengan mengunakan penulisan camelCase, property style umunya berisikan object literal javascript, namun kita juga bisa mengisinya dengan array, dalam contoh sebelumnya kita telah mengunakan style pada Image untuk menentukan ukuran image. Rujukan style bisa kamu lihat di masing masing component, atau kamu bisa buk halaman [component & api](https://reactnative.dev/docs/components-and-apis) lihat pada sisi kiri buka di bagian `props`

##