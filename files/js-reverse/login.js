var oBtn = document.getElementById('btn');
oBtn.onclick = function(){
    var success = document.getElementsByName("username")[0].value=="admin" 
        && document.getElementsByName("password")[0].value=="admin";
    if(success)window.location = "./login.html";
    else alert("Incorrect username or password.")
};