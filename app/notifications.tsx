import { View, Button } from 'react-native';
import { schedulePushNotification } from '@/hooks/useNotificationObserver';

export default function NotificationsPage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}
