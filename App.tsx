import React, { FC, ReactNode } from 'react';

import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from '@react-navigation/native';

interface AppProps {
  children: ReactNode
}

const App: FC<AppProps> = ({children}) => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}


export default App;