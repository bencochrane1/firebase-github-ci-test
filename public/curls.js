curl -X POST -H "Authorization: key=AAAAcyKAifo:APA91bFvvP6DMoL7msE5bdYB5VBbaYf8-4ZwN67Q1lhpCA9pVPlJc9VFVtKEEZC4Ou7Jy18_89l-gdpdrB6yuTcWJdLew8IdMg8mct07hfLTyMw0-4iFRPqX6JlkakM5EcQ8Pf2uDGg_" -H "Content-Type: application/json" -d '{
    "notification": {
    "title": "You have a new message",
    "body": "50% off for this week only",
    "icon": "firebase-logo.png",
    "click_action": "https://web-test-2f010.firebaseapp.com/"
  },
  "to": "cgM6S2r5vlE:APA91bERgYO3Lzu1Vc3CBu3kKgDPrhd_GngPGYtO5ImGAZ8qulUbfDuFMhBKBvpx4tYudeDLRf0OdvsYtxFYI6A97yVoESJEtbd5KEmgK_3CkPTAJ5b3Cho3CQ_PfQjV2gC2AwPrdHXm"
}' "https://fcm.googleapis.com/fcm/send"