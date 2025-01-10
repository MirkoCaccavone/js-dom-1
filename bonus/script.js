// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
// Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
// E così via...
// Per fare questo bonus potremmo aver bisogno  del metodo string.includes()

// selezione degli elementi
const bottone = document.querySelector('.bottone');
const lampOff = document.querySelector('.off');
const lampOn = document.querySelector('.on');



// gestione dell'evento
bottone.addEventListener('click', function(){
    if (lampOff.classList.contains('active')) {
        lampOff.className = "hidden";
        lampOn.className = "active";
        bottone.textContent = 'Spegni';
    }else{
        lampOff.className = "active";
        lampOn.className = "hidden";
        bottone.textContent = 'Accendi';
    }
    
});