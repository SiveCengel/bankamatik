// localStorage.setItem("borc",0);
let sifre=localStorage.getItem("sifre");
let bakiye=localStorage.getItem("bakiye");
let guncelborc=localStorage.getItem("borc");
$(".girisyap").click(function(){
    let girilensifre=$(".girilensifre").val();
    if(girilensifre==sifre){
        $(".login").css("display","none");
        $(".islem").css("display","block");
        $("guncelbakiye").html("Toplam Bakiyeniz : " + bakiye + " " + "$");
        $("guncelborc").html("Toplam Borcunuz : " + guncelborc + " " + "$");
        $(".islembtn").click(function(){
            let secilenislem=$(".secilenislem").val();
            let girilentutar=Number($(".girilentutar").val());
            if(secilenislem=="Para Çek"){
                if(girilentutar<=bakiye){
                    bakiye= bakiye-girilentutar;
                    localStorage.setItem("bakiye",bakiye);
                    $(".guncelbakiye").html("Kalan Bakiyeniz:"+ bakiye + " " + "$");
                }
                else{
                    $(".guncelbakiye").html("Yetersiz Bakiye! Toplam Bakiye : "+ bakiye  + " " + "$");
                }
                
            }
            else if(secilenislem=="Para Yatır"){
                bakiye=Number(bakiye);
                bakiye=bakiye+girilentutar;
                localStorage.setItem("bakiye",bakiye);
                $(".guncelbakiye").html("Kalan Bakiyeniz:" + bakiye  + " " + "$");
            }
            else if(secilenislem=="Kredi Çek"){
                console.log("Kredi seçim tamamlandı!");
                console.log(girilentutar);
                $(".islem").hide();
                $(".kredivade").show();


                $(".kredicek").click(function(){
                    let krediay=$(".krediay").val();
                    if(krediay=="3 Ay"){
                        bakiye=Number(bakiye);
                        bakiye=bakiye+girilentutar;
                        localStorage.setItem("bakiye",bakiye);
                        let toplamborc= girilentutar * 2;
                        let ayborc= Math.round(toplamborc/3);
                        guncelborc=Number(localStorage.getItem("borc"));
                        guncelborc=guncelborc+toplamborc;
                        localStorage.setItem("borc",guncelborc);             
                        $(".kredisonuc").html("Toplam Borcunuz : ${toplamborc} <br> Aylık Ödemeniz: ${ayborc}");
                    }
                    else if(krediay=="6 Ay"){
                        bakiye=Number(bakiye);
                        bakiye=bakiye+girilentutar;
                        localStorage.setItem("bakiye",bakiye);
                        let toplamborc= girilentutar * 2.5;
                        let ayborc= Math.round(toplamborc/6);
                        guncelborc=Number(localStorage.getItem("borc"));
                        guncelborc=guncelborc+toplamborc;
                        localStorage.setItem("borc",guncelborc);             
                        $(".kredisonuc").html("Toplam Borcunuz : ${toplamborc} <br> Aylık Ödemeniz: ${ayborc}"); 
                    }
                    else if(krediay=="12 Ay"){
                        bakiye=Number(bakiye);
                        bakiye=bakiye+girilentutar;
                        localStorage.setItem("bakiye",bakiye);
                        let toplamborc= girilentutar * 3;
                        let ayborc= Math.round(toplamborc/12);
                        guncelborc=Number(localStorage.getItem("borc"));
                        guncelborc=guncelborc+toplamborc;
                        localStorage.setItem("borc",guncelborc);             
                        $(".kredisonuc").html("Toplam Borcunuz : ${toplamborc} <br> Aylık Ödemeniz: ${ayborc}");  
                    }
                })
            }
        });
        
    }
    else{
        $(".alert-bg").css("display","block");
    }
});

$(".sifreunuttum").click(function(){
    $(".sifreunut").css("display","block");
    $(".login").css("display","none"); 
    $(".guvenlikbtn").click(function(){
        let guvenlikinput= $(".guvenlikinp").val();
         let guvenliksorusu= localStorage.getItem("guvenliksorusu");
        if(guvenlikinput==guvenliksorusu){
            let yenisifre= prompt("Lütfen Yeni Şifrenizi Giriniz!");
            localStorage.setItem("sifre",yenisifre);
            $("guvenlikp").html("Şifreniz Değişti!");
        }
        else{
            $(".guvenlikp").html("Güvenlik Sorusunu Yanlış Cevapladınız!");
        }
    });
});

