document.querySelector("button").addEventListener("click", function () {
    var suly = parseFloat(document.getElementById("suly").value);
    var kaloriaszukseglet, fogyas, sulymegtartas, tomegeles;
    var feherje, szenhidrat, zsir;

    if (isNaN(suly) || suly <= 0) {
        alert("Kérlek, adj meg érvényes súlyt!");
        return;
    }

    kaloriaszukseglet = (suly * 15.3) + 679;
    fogyas = kaloriaszukseglet - 500;
    sulymegtartas = kaloriaszukseglet;
    tomegeles = kaloriaszukseglet + 500;

    // Makrók számítása 
    feherje = (fogyas * 0.55) / 4; // 1g fehérje = 4 kalória
    szenhidrat = (fogyas * 0.35) / 4; // 1g szénhidrát = 4 kalória
    zsir = (fogyas * 0.10) / 9; // 1g zsír = 9 kalória

    // Az eredményeket megjelenítjük a HTML-ben
    document.getElementById("fogyas-eredmeny").textContent = fogyas.toFixed(2);
    document.getElementById("feherje-eredmeny").textContent = feherje.toFixed(2);
    document.getElementById("szenhidrat-eredmeny").textContent = szenhidrat.toFixed(2);
    document.getElementById("zsir-eredmeny").textContent = zsir.toFixed(2);

    // Makrók számítása súlyfenntartásnál
    feherje = (sulymegtartas * 0.55) / 4;
    szenhidrat = (sulymegtartas * 0.35) / 4;
    zsir = (sulymegtartas * 0.10) / 9;

    // Az eredményeket megjelenítjük a HTML-ben
    document.getElementById("sulymegtartas-eredmeny").textContent = sulymegtartas.toFixed(2);
    document.getElementById("feherje-eredmeny-tartas").textContent = feherje.toFixed(2);
    document.getElementById("szenhidrat-eredmeny-tartas").textContent = szenhidrat.toFixed(2);
    document.getElementById("zsir-eredmeny-tartas").textContent = zsir.toFixed(2);

    // Makrók számítása tömegnövelésnél
    feherje = (tomegeles * 0.55) / 4;
    szenhidrat = (tomegeles * 0.35) / 4;
    zsir = (tomegeles * 0.10) / 9;

    // Az eredményeket megjelenítjük a HTML-ben
    document.getElementById("tomegeles-eredmeny").textContent = tomegeles.toFixed(2);
    document.getElementById("feherje-eredmeny-tomegeles").textContent = feherje.toFixed(2);
    document.getElementById("szenhidrat-eredmeny-tomegeles").textContent = szenhidrat.toFixed(2);
    document.getElementById("zsir-eredmeny-tomegeles").textContent = zsir.toFixed(2);
});


