import * as React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import AppBar from '@components/AppBar';
import style from '@styles/GlobalStyle';
import { Image } from 'react-native-elements';

const Homepage = ({ navigation }) => (
  <ScrollView>
    <View style={style.pageWrapper}>
      <Image
        source={require('@images/play-store.png')}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text> Welcome back master.</Text>
    </View>
  </ScrollView>
);

Homepage.options = {
  headerTitle: props => <AppBar {...props} />
};

export default Homepage