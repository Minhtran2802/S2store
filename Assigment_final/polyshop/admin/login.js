var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value=="admin@gmail.com" && p.value=="admin123") {
            swal({
                title: 'Welcome',
                html:'Bạn đã đăng nhập thành công',
                type: 'success'
            });
            setTimeout(() => {
                loadPage();
            }, 3000);
    }else {
        swal({
            title: 'LỖI',
            html:'Bạn đã đăng nhập sai, vui lòng nhập lại',
            type: 'error'
        });
    }
    function loadPage(){
        window.location.href="./admin.html";
    }
});