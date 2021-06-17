let baslik  = document.getElementById('baslık_text');
let aciklama  = document.getElementById('acıklama_text');
let tarih  = document.getElementById('tarih');
let eklebtn  = document.getElementById('ekle_btn');
let temizlebtn  = document.getElementById('temizle_btn');
let bekleyen_is  = document.getElementById('liste');
let devameden_is  = document.getElementById('devameden_is');
let biten_is  = document.getElementById('biten_is');
let delete_dıv  = document.getElementById('delete_dıv');

eklebtn.addEventListener('click',function(){
    if(baslik.value==""){
        alert("başlık giriniz!!");
    }
    else
    {
        let div1 = document.createElement("div");
        div1.classList.add("div1_style");   
        bekleyen_is.appendChild(div1);

        div1.setAttribute('id', 'new_div');
        div1.setAttribute('draggable', 'true');
        div1.setAttribute('ondragstart', 'start(event)');
        div1.innerHTML = baslik.value.bold() + '<br>'+ aciklama.value +'<br>'+ tarih.value;


        temizlebtn.addEventListener('click', function(){
            div1.remove();

        });

        baslik.value="";
        aciklama.value="";
        tarih.value="";

    }

});


function start(event) {
	
    event.dataTransfer.setData("TasinanEleman",event.target.id);
	delete_dıv.style.display="inline";
}
function over(event) {
    event.preventDefault();
}

function drop(event) {
	
    event.preventDefault();
    var veri = event.dataTransfer.getData("TasinanEleman");
    event.target.appendChild(document.getElementById(veri));
	delete_dıv.style.display="none";
	delete_dıv.lastChild.remove();
}


