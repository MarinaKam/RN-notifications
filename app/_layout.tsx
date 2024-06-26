import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from '@/components/navigation/CustomDrawerContent';
import { Colors } from '@/constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerPosition: 'right',
            drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
          }}
        >
          <Drawer.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          <Drawer.Screen
            name="+not-found"
            options={{ headerShown: false }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
