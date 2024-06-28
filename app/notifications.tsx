import { View, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { schedulePushNotification, sendPushNotification } from '@/hooks/useNotificationObserver';

type ParamsType = {
  token?: string;
  titleText?: string;
}
export default function NotificationsPage() {
  const params = useLocalSearchParams<ParamsType>();

  console.log('params', params)
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        title="Schedule notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />

      <Button
        title="Send Push Notification"
        onPress={async () => {
          await sendPushNotification(params?.token as string);
        }}
      />
    </View>
  );
}
