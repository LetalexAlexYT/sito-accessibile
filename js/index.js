let contenuti;
let lingua;

let elementi = [
    document.getElementById("introduction"),
    document.getElementById("braille"),
    document.getElementById("work"),
    document.getElementById("laws"),
    document.getElementById("aquarium"),
    document.getElementById("institution"),
    document.getElementById("celebrity")
]

async function update() {
    try {
        const response = await fetch('../json/contenuto.json');
        contenuti = await response.json();
        //console.log(contenuti); // Stampa il JSON una volta assegnato
        elementi.forEach(elemento => {
            elemento.innerHTML = `<h1>${contenuti[lingua][elemento.id].title}</h1><p>${contenuti[lingua][elemento.id].paragraph}</p>`;
        });
    } catch (error) {
        console.error(error);
    }
}

function changeLanguage(a) {
    lingua = a;
    console.log("Cambiata la lingua a " + lingua);
    localStorage.setItem("Language", a)
    update();
}

changeLanguage("it")