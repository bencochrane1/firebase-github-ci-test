(function(){

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
  messaging.requestPermission()
  .then(snap => {
  	console.log('have permission', snap);
  	return messaging.getToken();
  })
  .then(token => {
  	console.log('token is: ', token);
  })
  .catch(err => {
  	console.error(err);
  })

  messaging.onMessage(snap => {
  	console.log('on message: ', snap);
  });




  const btnLogin = document.getElementById('btnLogin');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {
  	firebase.auth().signInAnonymously();
  });

  btnLogout.addEventListener('click', e => {
  	firebase.auth().signOut();
  });  

  firebase.auth().onAuthStateChanged(firebBaseUser => {
  	console.log(firebBaseUser);
  	if (firebBaseUser) {
  		btnLogout.classList.remove('hide');
  		btnLogin.classList.add('hide');
  	} else {
  		btnLogout.classList.add('hide');
  		btnLogin.classList.remove('hide');
  	}
  });



}());