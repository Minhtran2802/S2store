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

var d = new Date();
var t = d.getTime();
var counter=t;

//FORM
document.getElementById("form").addEventListener("submit",(e)=>{
    var order= document.getElementById("order").value;
    var total= document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});
//CREATE NEW ORDER
function createOrder(order,total) {
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder={
        id:counter,
        order:order,
        total:total
    }
    let db= firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();
}
function readOrder() {
    var order = firebase.database().ref("order/");
    order.on("child_added", function(data){
        var orderValue = data.val();
        document.getElementById("cardSection").innerHTML+=
        `<div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Order: ${orderValue.order}</h5>
                <p class="card-text">Giá: $${orderValue.total}.00</p>
                <button type="submit" style="color:white" class="btn btn-warning"
                onclick="updateOrder(${orderValue.id},'${orderValue.order}',
                '${orderValue.total}')"><i class="fa-regular fa-pen-to-square"></i> Sửa Order</button>

                <button type="submit" class="btn btn-danger" onclick="deleteOrder
                (${orderValue.id})"><i class="fa-solid fa-trash-can"></i> Xóa Order</button>
            </div>
        </div>
        `
    });
}

function reset() {
    document.getElementById("firstSection").innerHTML=
    `<form class="border p-4 mb-4" id="form">
        <div class="form-group">
            <label>Order</label>
            <input type="text" class="form-control" id="order" 
            placeholder="order">
        </div>
        <div class="form-group">
            <label>Giá</label>
            <input type="text" class="form-control" 
            id="total" placeholder="total">
        </div>
        <button type="submit" id="button1" class="btn btn-primary">
        <i class="fa-solid fa-plus"></i>Thêm Order</button>
        <button style="display:none;" id="button2"
        class="btn btn-success">Cập nhật Order</button>
        <button style="display:none;" id="button3"
        class="btn btn-danger">Hủy</button>
    </form>
    `;
    document.getElementById("form").addEventListener("submit",(e)=>{
        var order= document.getElementById("order").value;
        var total= document.getElementById("total").value;
        e.preventDefault();
        createOrder(order,total);
        form.reset();
    });
}
function updateOrder(id,order,total) {
    document.getElementById("firstSection").innerHTML=
    `<form class="border p-4 mb-4" id="form2">
        <div class="form-group">
            <label>Order</label>
            <input type="text" class="form-control" id="order" placeholder="order">
        </div>
        <div class="form-group">
            <label>Giá</label>
            <input type="text" class="form-control" id="total" placeholder="total">
        </div>
        <button style="display:none;" type="submit" id="button1" class="btn btn-primary">
        <i class="fa-solid fa-plus"></i>Thêm Order</button>
        <button id="button2" class="btn btn-success">Cập nhật Order</button>
        <button id="button3" class="btn btn-danger">Hủy</button>
    </form>
    `;
    document.getElementById("form2").addEventListener("submit",(e)=>{
        e.preventDefault();
    });
    document.getElementById("button3").addEventListener("click",(e)=>{
        reset();
    });
    document.getElementById("button2").addEventListener("click",(e)=>{
        updateOrder2(id,document.getElementById("order").value,
        document.getElementById("total").value);
    });
    document.getElementById("order").value=order;
    document.getElementById("total").value=total;
}
function updateOrder2(id,order,total){
    var orderUpdated={
        id:id,
        order:order,
        total:total
    }
    let db=firebase.database().ref("order/"+id);
    db.set(orderUpdated);
    document.getElementById("cardSection").innerHTML="";
    readOrder();
    reset();
}

function deleteOrder(id) {
    console.log(id);
    var order = firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readOrder();
}
