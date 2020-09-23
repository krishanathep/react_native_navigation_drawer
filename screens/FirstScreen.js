import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the First Page under First Page Option
          </Text>
        </View>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          React Navigate Drawer
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default FirstScreen;