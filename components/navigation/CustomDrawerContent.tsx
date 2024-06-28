import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { bottom } = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const textColor = colorScheme ? Colors?.[colorScheme]?.text : '#11181C'; // получаем цвет текста в зависимости от темы

  const closeDrawer = ()=>{
    props.navigation?.closeDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label={() => (
            <Text style={{ color: textColor }}>Home</Text>
          )}
          onPress={() => {
            closeDrawer();
            router.push("/(tabs)");
          }}
        />

        <DrawerItem
          label={() => (
            <Text style={{ color: textColor }}>Settings</Text>
          )}
          onPress={() => {
            closeDrawer();
            router.push("/(tabs)/settings");
          }}
        />

        <DrawerItem
          label={() => (
            <Text style={{ color: textColor }}>Notifications</Text>
          )}
          onPress={() => {
            closeDrawer();
            router.push("/notifications");
          }}
        />
      </DrawerContentScrollView>

      <Pressable onPress={closeDrawer} style={{ padding: 20, paddingBottom: bottom+10}}>
        <Text style={{ color: textColor }}>Logout</Text>
      </Pressable>
    </View>
  );
};
