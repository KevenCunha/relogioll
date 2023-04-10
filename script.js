function relogio() {


    var img = document.getElementById("imagem");





    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    //const formatoHora = horas.toString().padStart(2, "0");

    const formatoHora = 4;

    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase')

    dia = new Array ('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabádo');
    
    mes = new Array ('Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro');

    hoje = new Date()

   frase.innerHTML = `${dia[hoje.getDay()]},  ${hoje.getDate().toString().padStart(2,0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `

   if (formatoHora >= 00 && formatoHora < 12) {
    document.body.style.backgroundImage = 'url(https://a-static.besthdwallpaper.com/mountain-landscape-scenery-art-wallpaper-2560x1600-81090_7.jpg)'


    img.src = "https://a-static.besthdwallpaper.com/flat-mountain-landscape-wallpaper-1152x864-55996_19.jpg"
   }

   else if (formatoHora >= 12 && formatoHora < 18) {
    document.body.style.backgroundImage = 'url(https://static.vecteezy.com/ti/vecteur-libre/p3/7162596-beau-bleu-paysage-de-montagne-avec-lever-et-coucher-de-soleil-sur-fond-de-montagnes-nuit-sombre-plein-air-et-concept-de-randonnee-soleil-dans-le-ciel-vecteur-bon-pour-fond-d-ecran-site-banniere-couverture-affiche-gratuit-vectoriel.jpg)' 
    document.body.style.color = 'black';


    img.src = "https://www.10wallpaper.com/wallpaper/medium/1508/Simple_nature_landscape_HD_wallpaper_14_medium.jpg"
   }

   else {
    document.body.style.backgroundImage = 'url(https://p4.wallpaperbetter.com/wallpaper/31/587/666/landscape-digital-art-forest-water-hd-wallpaper-preview.jpg)'
   

    img.src = "https://image.winudf.com/v2/image1/Y29tLnRob3JhcHBzYW5kcm9pZC5sYW5kc2NhcGVzX3NjcmVlbl8zXzE1NjI4NjA3MjdfMDM3/screen-3.jpg?fakeurl=1&type=.jpg"
   }

}



setInterval(relogio, 1000);

