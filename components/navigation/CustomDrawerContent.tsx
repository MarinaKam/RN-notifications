import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import React from 'react';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { bottom } = useSafeAreaInsets();

  const closeDrawer = ()=>{
    props.navigation?.closeDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={() => (
            <Text>Home</Text>
          )}
          onPress={() => {
            closeDrawer();
            router.push("/(tabs)");
          }}
        />

        <DrawerItem
          label={() => (
            <Text>Settings</Text>
          )}
          onPress={() => {
            closeDrawer();
            router.push("/(tabs)/settings");
          }}
        />

        <DrawerItem
          label={() => (
            <Text>Notifications</Text>
          )}
          onPress={() => {
            closeDrawer();
            router.push("/notifications");
          }}
        />
      </DrawerContentScrollView>

      <Pressable onPress={closeDrawer} style={{ padding: 20, paddingBottom: bottom+10}}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};
