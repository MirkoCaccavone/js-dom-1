// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
// Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
// E così via...
// Per fare questo bonus potremmo aver bisogno  del metodo string.includes()
// Ho aggiunto una lampadina che si rompe dopo 5 volte che viene accesa


// selezione degli elementi
const bottone = document.querySelector('.bottone');
const lampOff = document.querySelector('.off');
const lampOn = document.querySelector('.on');
const lampBroken = document.querySelector('.broken');

// variabile per cotare i click
let contatore = 0;

// gestione dell'evento
bottone.addEventListener('click', function(){

    if (contatore < 5){

        // accendi ogni volta che è la lampOf è in active

        if (lampOff.classList.contains('active')) {
            lampOff.className = "hidden";
            lampOn.className = "active";
            bottone.textContent = 'Spegni';

        // incremento ogni volta che si accende
            contatore++;
            console.log(contatore);
         

        // spegni ogni volta che è la lampOn è in active
        }else{
            lampOff.className = "active";
            lampOn.className = "hidden";
            bottone.textContent = 'Accendi';
        }

    // mostra la lampBroken quando il contatore arriva a 5 click    
    }else{
        lampOff.className = "hidden";
        lampOn.className = "hidden";
        lampBroken.className = "active";
        bottone.textContent = "si è rotta";

    }   
});