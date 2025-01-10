// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// selezione degli elementi
const bottone = document.querySelector('.bottone');
const img = document.querySelector('.lamp');

// gestione dell'evento
bottone.addEventListener('click', function(){
    img.src = './img/yellow_lamp.png';
});









