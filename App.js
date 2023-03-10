import * as React from 'react';

import 'react-native-gesture-handler';
import {AuthProvider} from './src/context/AuthContext'
import AppNav from './src/navigation/AppNav';
/* function Home() {  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
} */

function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}



export default App;