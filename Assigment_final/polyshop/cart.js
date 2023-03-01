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

var products=JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total=0;

//HTML
function tableHTML(i){
    return  `<tr>
            <th scope="row">${i+1}</th>
            <td><img style="width:90px;" src="${products[i].url}"></td>
            <td>${products[i].name}</td>
            <td>1</td>
            <td>${products[i].price}</td>
            </tr>
            `;
}

// MUA
function buy() {
    var d = new Date();
    var t = d.getTime();
    var counter=t;
    counter += 1;
    let db =firebase.database().ref("order/"+counter);
    let itemdb = {
        id:counter,
        order:counter-895,
        total:total
    }
    db.set(itemdb);
    swal({
        position:'center',
        type:'success',
        title:'Mua hàng được thực hiện thành công!',
        text:`Đơn đặt hàng của bạn là: ${itemdb.order}`,
        showConfirmButton:true,
        timer:50000
    });
    clean();
}

// CLEAN
function clean() {
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML += tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total = 0;
    table.innerHTML = 
       `<tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        `;
        cart_n.innerHTML='';
        document.getElementById("btnBuy").style.display="none";
        document.getElementById("btnClean").style.display="none";
}

//RENDER
function render() {
    for (let index = 0; index < products.length; index++) {
        table.innerHTML += tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=
    `<tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">Tổng: $${total}.00</th>
    </tr>
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
        <button id="btnClean" onclick="clean()" class="btn text-white
        btn-warning">Xóa tất cả sản phẩm trong giỏ hàng</button>
    </th>
    <th scope="col"><button id="btnBuy" onclick="buy()" class="btn
    btn-success">Mua</button></th>
    </tr>

    `;
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
}
