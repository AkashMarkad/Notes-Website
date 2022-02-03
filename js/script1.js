const name = document.getElementById('Name');
const email = document.getElementById('email');
const msg = document.getElementById('addmsg');
const form = document.getElementById('form');
const btn = document.getElementById('btnS');

console.log("hello");

const db = firebase.firestore();

btn.addEventListener('click',(e)=>{
    console.log("Hi");
});

form.addEventListener('submit', (e)=>{
    console.log("clicked");
    e.preventDefault();

    db.collection('user').add({
        Name: name.value,
        Email: email.value,
        Msg: msg.value
    })
    .then(()=>{
        console.log("Submitted");
    })

    alert('Form submitted successfully!');

    name.value = "";
    email.value="";
    msg.value="";
});
