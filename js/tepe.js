$(function () {
    $("#giris","#girisgit").click(function () {

     
            location.replace("tepe2.html");
    });
    // // $("#girisgit").click(function () {
    // //     location.replace("tepe2.html");
    // });
    $("#biletegit").click(function () {
        
        var uname = $("#uName").val();
        var pass = $("#pass").val();

        if (uname == "admin" && pass == "1234") {
            alert("Admin Sayfasına Yönlendiriliyorsunuz")
            location.replace("tepe4.html");

        }
        else{
        alert("Sisteme Giriş yapıldı ,Bilet Al Sayfasına Yönlendiriliyorsunuz");
            location.replace("tepe3bilet.html");}
    });

    $("#datepicker").datepicker();

    $("#koltukgoster").click(function () {
        $("#koltuksec").show()


    });
    var countChecked = function () {
        var n = $("input:checked").length;
        $("#say").text(n + " Koltuk Seçildi");

    };
    countChecked();

    $("input[type=checkbox]").on("click", countChecked);

    $("#seckoltuk").click(function () {

        var n = $('input:checkbox:checked').length;


        biletfiyat = 100;
        if ((n / 5) <= 1) {
            var total = n * biletfiyat;
        }
        else if (1 < (n / 5) && (n / 5) <= 2) {

            zamsiz = 5 * biletfiyat;

            zamli = (n - 5) * (biletfiyat + (biletfiyat * (10 / 100)));
            total = zamli + zamsiz;


        }
        else if (2 < (n / 5) && (n / 5) <= 3) {


            zamsiz = 5 * biletfiyat;
            zamli = 5 * (biletfiyat + (biletfiyat * (10 / 100)));
            zamli20 = (n % 10) * (biletfiyat + (biletfiyat * (20 / 100)));
            total = zamli + zamli20 + zamsiz;

        }
        else {
            zamsiz = 5 * biletfiyat;
            zamli = 5 * (biletfiyat + (biletfiyat * (10 / 100)));
            zamli20 = 5 * (biletfiyat + (biletfiyat * (20 / 100)));
            zamli30 = (n % 15) * (biletfiyat + (biletfiyat * (30 / 100)));
            total = zamli + zamli20 + zamli30 + zamsiz;


        }
alert("Toplam Ödenecek Tutar " +" "+total+("₺"));
    })

});

