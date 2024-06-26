import { Tabs, usePathname } from 'expo-router';
import React from 'react';
import { DrawerActions } from '@react-navigation/native';
// import { DrawerToggleButton } from '@react-navigation/drawer';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  return (
    <Tabs
      screenOptions={{
        headerLeft: pathname === '/settings' ? () => <DrawerToggleButton tintColor='#000' /> : undefined,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // tabBarStyle: {
        //   display: pathname === 'menu' ? 'flex' : 'none',
        // },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerTransparent: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          headerTransparent: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          href: null,
          headerTransparent: true,
          tabBarStyle: {
            display: 'none'
          }
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            navigation.dispatch(DrawerActions.openDrawer());

            e.preventDefault();
          }
        })}
      />
    </Tabs>
  );
}
