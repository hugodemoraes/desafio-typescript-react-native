import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <AppContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#e83f5b" />
      <Routes />
    </AppContainer>
  </View>
);

export default App;
