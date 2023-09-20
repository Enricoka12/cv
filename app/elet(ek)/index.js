$(document).ready(function() {
    let szituacioSzama = 1;

    // Szituációk és választási lehetőségek objektumai
    const szituaciok = {
        1: {
            szoveg: "10 perc múlva beront a faterod: Mivan, elaludtál, vagy nem mész dolgozni?",
            valasztas1: "Úgy teszel, mintha elaludtál volna, majd felkelsz",
            valasztas2: "Megmondod, hogy hagyjon békén, és többet nem mész dolgozni!",
        },
        2: {
            szoveg: "Felkelsz, bemész a munkahelyedre! Reggel közlik veled, hogy bércsökkentés várható.",
            valasztas1: "Neked mindegy, úgyis a munka öröme miatt csinálod ezt az egészet!",
            valasztas2: "Azt mondod, oké! Majd odalépsz a főnöködhöz és lecsavarsz neki egyet",
        },

        3: {
            szoveg: "hazamész,lefekszel aludni",
            valasztas1: "jajj de jó nekem végre alszom",
            valasztas2: "kattogok az élet rejtelmein",
        },


        // További szituációk ide jöhetnek
    };

    // Függvény a szituáció frissítéséhez
    function frissitSzituacio(szituacioSzama) {
        $("#szituacio").text(szituaciok[szituacioSzama].szoveg);
        $("#valasztas1").text(szituaciok[szituacioSzama].valasztas1);
        $("#valasztas2").text(szituaciok[szituacioSzama].valasztas2);
    }

    // Eseménykezelők a választásokhoz
    $("#valasztas1").click(function() {
        if (szituacioSzama === 1) {
            // Első szituáció, választás 1
            szituacioSzama = 2;
        } else if (szituacioSzama === 2) {
            // Második szituáció (A), választás 1
            // Itt lehet további logikát hozzáadni
        }
        // Frissíti a szituációt
        frissitSzituacio(szituacioSzama);
    });

    $("#valasztas2").click(function() {
        if (szituacioSzama === 1) {
            // Első szituáció, választás 2
            szituacioSzama = 3;
        } else if (szituacioSzama === 2) {
            // Második szituáció (A), választás 2
            // Itt lehet további logikát hozzáadni
        } 
        // Frissíti a szituációt
        frissitSzituacio(szituacioSzama);
    });
});
