importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
apiKey: "AIzaSyACritl5DFK7KuBzCYlE6WnskDKJmY6B9M",
authDomain: "web-test-2f010.firebaseapp.com",
databaseURL: "https://web-test-2f010.firebaseio.com",
projectId: "web-test-2f010",
storageBucket: "web-test-2f010.appspot.com",
messagingSenderId: "494500088314"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(snap => {

	const title = 'Hello World';
	const options = {
		body: payload.data.status
	}
	return self.registration.showNotification(title, options);
})

