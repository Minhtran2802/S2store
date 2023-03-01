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

var products=[];
var cartItems =[];
var cart_n = document.getElementById('cart_n');

// The div
var nikeDIV = document.getElementById("nikeDIV");
var adidasDIV = document.getElementById("adidasDIV");
var pumaDIV = document.getElementById("pumaDIV");

// Thong tin

var NIKE = [
    {name:'Nike 1' , price:1},
    {name:'Nike 2' , price:6},
    {name:'Nike 3' , price:7},
    {name:'Nike 4' , price:11},
    {name:'Nike 5' , price:13},
    {name:'Nike 6' , price:2},
];
var ADIDAS=[
    {name:'Adidas 1' , price:1},
    {name:'Adidas 2' , price:10},
    {name:'Adidas 3' , price:2},
    {name:'Adidas 4' , price:5},
    {name:'Adidas 5' , price:7},
    {name:'Adidas 6' , price:12}
];
var PUMA=[
    {name:'Puma 1' , price:5},
    {name:'Puma 2' , price:4},
    {name:'Puma 3' , price:8}
];

function HTMLnikeProduct(con) {
    let URL = `img/nike/nike${con}.jpg`;
    let btn = `btnNike${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" 
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${NIKE[con-1].name}</p>
                    <p class="card-text">Giá: ${NIKE[con-1].price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${NIKE[con-1]
                            .name}','${NIKE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-danger" ><a href="cart.html"
                            style="color:inherit;">Mua</a></button>
                            <button id="${btn}" type="button" onclick="cart('${NIKE[con-1]
                            .name}','${NIKE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-danger" >Thêm vào giỏ hàng</button> 
                        </div>
                        <small class="text-muted">Free shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
};
function HTMLadidasProduct(con) {
    let URL = `img/adidas/adidas${con}.jpg`;
    let btn = `btnAdidas${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" 
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${ADIDAS[con-1].name}</p>
                    <p class="card-text">Giá: ${ADIDAS[con-1].price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${ADIDAS[con-1]
                                .name}','${ADIDAS[con-1].price}','${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-success" ><a href="cart.html"
                                style="color:inherit;">Mua</a></button>
                            <button id="${btn}" type="button" onclick="cart('${ADIDAS[con-1]
                                .name}','${ADIDAS[con-1].price}','${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-success" >Thêm vào giỏ hàng</button> 
                        </div>
                        <small class="text-muted">Free shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
};
function HTMLpumaProduct(con) {
    let URL = `img/puma/puma${con}.jpg`;
    let btn = `btnPuma${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" 
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${PUMA[con-1].name}</p>
                    <p class="card-text">Giá: ${PUMA[con-1].price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${PUMA[con-1]
                                .name}','${PUMA[con-1].price}','${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-primary" ><a href="cart.html" 
                                style="color:inherit;">Mua</a></button>
                            <button id="${btn}" type="button" onclick="cart('${PUMA[con-1]
                                .name}','${PUMA[con-1].price}','${URL}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-primary" >Thêm vào giỏ hàng</button> 
                        </div>
                        <small class="text-muted">Free shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
};

//RENDER

function animation() {
    const toast =swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'Hoàn thành',
        title:'Sản phẩm đã được thêm vào giỏ hàng'
    });
}
// CART
function cart(name,price,url,con,btncart){
    var item = {
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

function cart2(name,price,url,con,btncart) {
    var item = {
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

//HIEN THI SP
function render(){
    for (let index = 1; index <= 6; index++) {
        nikeDIV.innerHTML+= `${HTMLnikeProduct(index)}`;
    }
    for (let index = 1; index <= 6; index++) {
        adidasDIV.innerHTML += `${HTMLadidasProduct(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        pumaDIV.innerHTML += `${HTMLpumaProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null) {

    }else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
}
