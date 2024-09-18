import * as OneSignalLib from '@onesignal/node-onesignal';

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID as string;
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY as string;
const ANDROID_URGENT_CHANNEL_ID = 'e474b256-1de6-4847-b6af-a6cb98cc25ad';

const app_key_provider = {
  getToken() {
    return ONESIGNAL_REST_API_KEY;
  },
};

const configuration = OneSignalLib.createConfiguration({
  authMethods: {
    rest_api_key: {
      tokenProvider: app_key_provider,
    },
  },
});
const client = new OneSignalLib.DefaultApi(configuration);

export type NotificationInfo = {
  title: string;
  body: string;
};

const sendPushNotification = async ({
  title,
  body,
}: NotificationInfo): Promise<OneSignalLib.NotificationWithMeta> => {
  const notification = new OneSignalLib.Notification();
  if (process.env.LUISAN === 'generate')
    return false as unknown as OneSignalLib.NotificationWithMeta;

  notification.app_id = ONESIGNAL_APP_ID;
  notification.included_segments = ['All'];
  notification.target_channel = 'push';
  notification.android_channel_id = ANDROID_URGENT_CHANNEL_ID;

  notification.headings = {
    en: title,
  };
  notification.contents = {
    en: body,
  };

  const { id } = await client.createNotification(notification);
  const response = await client.getNotification(ONESIGNAL_APP_ID, id as string);
  return response;
};

export const OneSignal = {
  sendPushNotification,
};
