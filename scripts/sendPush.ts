import { OneSignal } from "../src/services/OneSignal";

function printHelp() {
	console.log(`
Usage: bun run sendnotif {title} {body} {external_id}

- title: The title of the notitication.
- body: The body of the notification.
- external_id: An ID that is external to OneSignal, can be used to send extra data.

NOTE: Remember to set the env variables ONESIGNAL_APP_ID and ONESIGNAL_REST_API_KEY
`);
}

try {

let argvIdx = 1;
const title = process.argv[++argvIdx];
if (!title) {
	throw new Error("title is a required parameter");
}

const body = process.argv[++argvIdx];
if (!body) {
	throw new Error("body is a required parameter");
}

const external_id = process.argv[++argvIdx];
if (!body) {
	throw new Error("external_id is a required parameter");
}

OneSignal.sendPushNotification({
	title,
	body,
	external_id: [external_id]
})

} catch (error) {
	console.error(error);
	printHelp();
}
