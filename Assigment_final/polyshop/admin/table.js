// FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDb81ZRzykNquavgp0bw7Ltm-SuyEWNXgc",
    authDomain: "s2store-7c157.firebaseapp.com",
    databaseURL: "https://s2store-7c157-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "s2store-7c157",
    storageBucket: "s2store-7c157.appspot.com",
    messagingSenderId: "1026307867622",
    appId: "1:1026307867622:web:295a6ac1be07c8e96a8c27",
    measurementId: "G-YR9EQ8Y5FL"
}

firebase.initializeApp(firebaseConfig);

function renderTable() {
    var order = firebase.database().ref("order/");
    order.on("child_added",function(data){
        var orderValue = data.val();
        document.getElementById("table").innerHTML+=
        `<tr>
            <td> ${orderValue.id}</td>
            <td> ${orderValue.order}</td>
            <td> ${orderValue.total}</td>
        
        
        </tr>
        `;
    });
};