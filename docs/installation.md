# Installasi
Disini kita akan meenggunakan expo untuk memudahkan development dan memungkinkan pengetesan lebih ringan dengan melaui web browser. 

## Install Expo

Kita akan menginstall `expo` secara global sehingga perintah `expo` dapat kita gunakan secara umum tidak hanya dalam project ini.  
Jalankan perintah berikut untuk memulai installasi ([nodejs](https://nodejs.org/en/download/) harus sudah terinstall).
> `npm install --global expo-cli` 

## Membuat project
Dengan menginstall expo secara global kita dapat membuat project baru dengan menjalankan perintah berikut. Perintah tersebut akan membuat folder project dengan nama `my-project`

> `expo init my-project`

Akan ada folder `my-project` disana tempat kita mengerjakan project init. Sebaiknya untuk pertama kali kita masuk ke dalam folder itu kemudian menjalankan perintah berikut untuk meninstall library pendukung yang dibutuhkan
> `npm i`

Petunjuk installasi lengkap dapat di lihat [disini](https://docs.expo.io/)

## Menjalankan project

Untuk mejalankan project kita dapat menjalankan perintah berikut pada terminal di lokasi project kita(`my-project`).

> `expo start -w`

Project kita akan dijalankan melalui web, pada browser akan terbuka 2 tab. Tab pertama `Metro bundler` akan menampilkan informasi jalannya project kita. Pada bagian kiri terdapat menu yang memungkinkan kita menjalankan project di beragam device, pada bagian kanan terdapat log app kita.
karena kita enjalankan dengan opsi web (`-w`) tab kedua akan terbuka menampilkan project kita.

## Hello project

Pada project kita pintu masuk ada pada file `App.js` yang akan pertama kali dijalankan. Kita akan mencoba menampilkan pesan `Hello`, maka ubahlah isi file App.js sebagai berikut 
```
// mengunakan library react 
import * as React from 'react';
// mengunakan component tertentu (Text) di react native
import { Text } from 'react-native';

// membuat component SayHello
const SayHello = () => (
	<Text>Hello</Text>
);

// mengeluarkan component SayHello
export default SayHello;
```
Pada code di atas kita membuat sebuah component `SayHello` yang akan berisi `<Text>Hello</Text>` tag `Text` diambil dari import pada `react-native` merupakan salah satu component bawaan yang tugasnya menampilkan text. Didalam tag `Text` kita mengisi dengan `Hello`. Sehingga component ini akan merender tulisan `Hello` dengan memanfaatkan component bawaan `Text`.  

Karena project masuk melalui `App.js` yang disini component `SayHello` maka hasil component tersebut akan ditampilkan dimana merender pesan `Hello` pada app kita.

