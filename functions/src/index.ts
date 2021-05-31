import * as functions from "firebase-functions";
import * as admin from "firebase-admin";


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
admin.initializeApp();
const db =admin.firestore();
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  const docRef=db.collection("Boruto").doc("fhHER0lI0mVnoqCJ4IUt");
  docRef.get().then((doc)=> {
    if (!doc.exists) {
      console.log("document not found");
      return response.send("Not fount");
    }
    console.log(doc.data());
    return response.send(doc.data());
  });
});
