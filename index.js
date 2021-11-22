
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            $("#header").css("top", "0");
            $(".header-bottom img").css({"width": "120px", "height": "100px"});
            $(".up-icon").css("display", "none")
          } else {
            $("#header").css("top", "-42px");
            $(".header-bottom img").css({"width": "60px", "height": "50px"});
            $(".up-icon").css("display", "inline-flex");
      
          
          }
          prevScrollpos = currentScrollPos;
        }

$(document).ready(function(){

  $(".menu-btn").click(function(){
    // $("#mobile-menu").css("max-width", "100%");
    // $("#mobile-menu").css("transform", "translateX(" + 0 + ")");
    $("#mobile-menu").animate({
        right: '150%',
        opacity: '1',
      });
    
    })

  $(".close-btn").click(function(){
    // $("#mobile-menu").css("max-width", "0");
    $("#mobile-menu").animate({
        right: '0',
        opacity: '0',
      });
  })

  $("#mobile-menu li.login-btn ").click(function(){
    $("#mobile-menu").animate({
        right: '0',
        opacity: '0',
    });

  })


  $(".login-btn").click(function(){
      $(".modal").css("display", "block")
  })


  $(".close").click(function(){
    $(".modal").css("display", "none")
})


})



// log in

const inputElements = document.getElementsByTagName("input");


const email = inputElements[2];
const password = inputElements[3];
const repeatPassword = inputElements[4];

const errorEmail = document.getElementById("err-email");
const errorPassword = document.getElementById("err-psw");
const errorRepeatPassword = document.getElementById("err-psw-repeat");
const errnamsinh = document.getElementById("err-namsinh");



function regist_Onclick() {
    const emailValue = email.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;

    const an_textbox = function hide() {
        document.getElementById("textbox").style.display = 'none';
    }
    
    if (kiemTraEmail(emailValue) && kiemTraMatKhau(passwordValue) && KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue) ) {
        document.getElementById("textbox").style.display = 'block';
        setTimeout (
            an_textbox, 3000
        )
        
        document.getElementById("reset_email").value = "";
        document.getElementById("reset_pass").value = "";
        document.getElementById('reset_repass').value = "";
    }

    if (!kiemTraEmail(emailValue)) {
    errorEmail.innerHTML = "Email không hợp lệ";
    }
    if (!kiemTraMatKhau(passwordValue)) {
    errorPassword.innerHTML = "Mật khẩu không hợp lệ";
    }
    if (!KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue)) {
    errorRepeatPassword.innerHTML = "Mật khẩu nhập lại không đúng"
        }
    
}


function resetValue() {
        document.getElementById("reset_email").value = "";
        document.getElementById("reset_pass").value = "";
        document.getElementById('reset_repass').value = "";
}




//email

function kiemTraEmail(emailValue) {
 let viTri = -1;
 for (let i in emailValue) {
    if (emailValue[i] === '@') {
 if (viTri !== -1) {
 return false;
 }
 viTri = i;
 
 }
 }

 if (viTri === -1 || viTri === 0 || viTri === emailValue.length - 1) {
 return false;
 }
 return true;
}

function onbluremail() {
    const emailValue = email.value
    if (!kiemTraEmail(emailValue)) {
        errorEmail.innerHTML = "Email không hợp lệ";    
    }else {
        errorEmail.innerHTML = "";
    }
}



//mat khau

function kiemTraMatKhau(passwordValue) {
 if (passwordValue.length < 6) {
 return false;
 }
 let coChuaKiTuDacBiet = false;
 let coChuaKiTuHoa = false;
 let coChuaKiTuSo = false;
 for (let kiTu of passwordValue) {
 if (kiTu >= 'A' && kiTu <= 'Z') {
 coChuaKiTuHoa = true;
 } else if (kiTu >= '0' && kiTu <= '9') {
 coChuaKiTuSo = true;
 } else if(!(kiTu >= 'a' && kiTu <= 'z')) {
 coChuaKiTuDacBiet = true;
 }
 }
 return coChuaKiTuDacBiet && coChuaKiTuHoa && coChuaKiTuSo;
}

function onlurmatkhau() {
    const passwordValue = password.value;
    if (!kiemTraMatKhau(passwordValue)) {
        errorPassword.innerHTML = "Mật khẩu không hợp lệ";
    }else {
        errorPassword.innerHTML = "";
    }
}



// nhap lai mat khau

function KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue) {
 return passwordValue === repeatPasswordValue;
}

function onblurnhaplaimatkhau() {
    const repeatPasswordValue = repeatPassword.value;
    const passwordValue = password.value
    if (!KiemTraNhapLaiMatKhau(passwordValue, repeatPasswordValue)) {
        errorRepeatPassword.innerHTML = "Mật khẩu nhập lại không đúng"
    }else {
        errorRepeatPassword.innerHTML = "";
    }
}

