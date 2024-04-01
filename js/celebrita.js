let contenuti;
let lingua;

// Identificare gli elementi del DOM che verranno aggiornati con i contenuti del JSON
let elementi = [
    document.getElementById("introduction"),
    document.getElementById("braille"),
    document.getElementById("work"),
    document.getElementById("laws"),
    document.getElementById("aquarium"),
    document.getElementById("institution"),
    document.getElementById("celebrity")
];

// Funzione asincrona per caricare e aggiornare i contenuti dal file JSON
async function update() {
    try {
        // Caricare il file JSON
        const response = await fetch('../json/celebrita.json'); // Sostituire 'json1' con il percorso effettivo del file JSON
        contenuti = await response.json();
        
        // Aggiornare gli elementi del DOM con i contenuti del JSON
        elementi.forEach(elemento => {
            // Verificare se l'elemento corrisponde alla sezione "celebrities"
            if(elemento.id === "celebrity") {
                // Creare un contenuto HTML per la sezione "celebrities"
                let celebritiesContent = `<h1>${contenuti[lingua].title}</h1><p>${contenuti[lingua].paragraph}</p>`;
                contenuti[lingua].celebrities.forEach(celebrity => {
                    celebritiesContent += `<h2>${celebrity.name}</h2><p>${celebrity.description}</p>`;
                });
                elemento.innerHTML = celebritiesContent;
            } else {
                // Per le altre sezioni, aggiornare normalmente
                elemento.innerHTML = `<h1>${contenuti[lingua][elemento.id].title}</h1><p>${contenuti[lingua][elemento.id].paragraph}</p>`;
            }
        });
    } catch (error) {
        console.error(error);
    }
}

// Funzione per cambiare la lingua e aggiornare i contenuti
function changeLanguage(a) {
    lingua = a;
    console.log("Cambiata la lingua a " + lingua);
    localStorage.setItem("Language", a);
    update();
}

// Caricare la lingua salvata o impostare quella di default e aggiornare i contenuti
lingua = localStorage.getItem("Language");
if(lingua === null) {
    changeLanguage("it");
} else {
    changeLanguage(lingua);
}