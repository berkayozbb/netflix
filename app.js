$("login.html").ready(function () {
    alert("Anasayfaya dönmek için Netflix logosuna, Kim İzliyor ekranına geçiş yapmak için Kullanıcı adı: berkay Şifre: berkay  olacak şekilde formu doldurup Oturum Aç butonuna tıklayınız.")
});

$("#giris").click(function () { 
    if (username.value == "berkay" && password.value == "berkay"){
        parent.location='./who-watch.html'
    }
    else{
        alert("Kullanıcı adı: berkay Şifre: berkay  giriniz." )
    }
    ;
    
});
