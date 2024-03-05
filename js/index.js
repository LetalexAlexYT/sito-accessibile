var contenuti, lingua;
let introduction = document.getElementById("introduction")
let braille = document.getElementById("braille")
let work = document.getElementById("work")
let laws = document.getElementById("laws")
let aquarium = document.getElementById("aquarium")
let institution = document.getElementById("institution")
let celebrity = document.getElementById("celebrity")


async function fetchContenuti() {
    try {
        const response = await fetch('../json/contenuto.json');
        contenuti = await response.json();
        console.log(contenuti); // Stampa il JSON una volta assegnato
        if(lingua === "it") {
            introduction.innerHTML = `<h1>${contenuti.it.introduction.title}</h1><p>${contenuti.it.introduction.paragraph}</p>`;
            braille.innerHTML = `<h1>${contenuti.it.braille.title}</h1><p>${contenuti.it.braille.paragraph}</p>`;
        }
        


    } catch (error) {
        console.error(error);
    }
}

function changeLanguage(a) {
    lingua = a
    console.log(lingua)
    fetchContenuti()
}
