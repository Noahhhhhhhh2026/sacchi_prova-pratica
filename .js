document.addEventListener("DOMContentLoaded", function () {

    // STUDIARE IL SISTEMA
    const studiare = document.querySelector(".studiare-sistema");
    const paragrafoStudiare = studiare.querySelector(".paragrafi-pagina");

    // COMPORRE UNA PAGINA
    const comporre = document.querySelector(".comporre-una-pagina-title");
    const paragrafoComporre = comporre.nextElementSibling;

    // VERIFICARE IL RISULTATO
    const verificare = document.querySelector(".codice-title");
    const paragrafoVerificare = verificare.querySelector(".paragrafi-pagina");

    // Funzione per aprire e chiudere un paragrafo
    function attivaAccordion(titolo, paragrafo) {

        paragrafo.style.display = "none";
        titolo.style.cursor = "pointer";

        titolo.addEventListener("click", function () {

            if (paragrafo.style.display === "none") {
                paragrafo.style.display = "block";
            } else {
                paragrafo.style.display = "none";
            }

        });
    }

    // Attiva i tre accordion
    attivaAccordion(
        studiare.querySelector(".studiare-sistema-title"),
        paragrafoStudiare
    );

    attivaAccordion(comporre, paragrafoComporre);

    attivaAccordion(verificare, paragrafoVerificare);

});