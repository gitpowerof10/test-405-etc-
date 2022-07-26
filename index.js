// Keepvid test Get to Post, json file mutating DOM

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUmiEka2jT4dqgGHTvtzQ_UxngJ3Csb54",
    authDomain: "fir-archive-err.firebaseapp.com",
    projectId: "fir-archive-err",
	storageBucket: "fir-archive-err.appspot.com",
    messagingSenderId: "1076743859945",
	appId: "1:1076743859945:web:dc3f86f78a8304af7a0a78",
    measurementId: "G-Y8P1G4S4NC"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const email = document.getElementById('email').value;

const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
}

class Display {
displayBasket('email') {
	let result = ""
	basket.forEach((item)=>{
	result += `
<li>
	id : ${email}
</li>
`})
email.innerHTML = result
}
}
document.addEventListener("DOMContentLoaded", ()=>{
const basket = new Basket()
const display = new Display()
basket.email().then(basket => display.displayBasket(basket))
})