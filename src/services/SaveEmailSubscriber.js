import firebase from '../firebase';
export function SaveEmailSubscriber(email) {
    // const itemsRef = firebase.database().ref('emailSubscriber');
    // const item = {
    //     email: email
    // }
    // itemsRef.push(item);
    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    db.collection('emailSubscriber').add({
        email: email
    })
        .then(result => console.log(result))
        .catch(err => console.log(err));
}