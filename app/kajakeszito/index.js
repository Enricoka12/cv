
const szuksegesKaloriad = prompt("mennyi kalóriára van szükséged?")//megkerdezi a kaloria szuksegleted

const makroFeherje = szuksegesKaloriad * 0.35; //kaloriába számolja
const makroSzenhidrat = szuksegesKaloriad * 0.50; //kaloriába számolja 
const makroZsir = szuksegesKaloriad - makroFeherje - makroSzenhidrat; //kaloriába számolja

console.log("szükséges fehérje kaloriád: " + makroFeherje);
console.log("szükséges szénhidrát kaloriád: " + makroSzenhidrat);

/* teljesen felesleges!
const zsir = 9;
const feherje = 4;
const szenhidrat = 4;
*/



const makroFeherjeGramm = makroFeherje / 4; //a kaloriát átváltja grammba
const makroSzenhidratGramm = makroSzenhidrat / 4; //a kaloriát átváltja grammba
const makroZsirGramm = makroZsir * 9; //a kaloriát átváltja grammba


// console.log(makroFeherjeGramm);



const feherjek = [
    { nev: 'csirkemell', feherje: 25, zsir: 5, szenhidrat: 0, kaloria: 150 },
    { nev: 'csirkecombfile', feherje: 20, zsir: 10, szenhidrat: 2, kaloria: 180 },
    { nev: 'sertescombfile', feherje: 30, zsir: 15, szenhidrat: 5, kaloria: 250 }
];



/* ezt én irtam!
function feherjevalasztas() {
    const randomFeherje = Math.floor(Math.random() * feherjek.length) //kiválasztom a random fehérje számát
    const valasztottFeherjeForras = feherjek[randomFeherje]; //szám alapján kiválasztom a random fehérjét
    return randomFeherje;
    feherjevalasztas();
  
console.log(valasztottFeherjeForras);
}*/


//chatgpt
function feherjevalasztas() {
    const randomFeherje = Math.floor(Math.random() * feherjek.length); // kiválasztom a random fehérje sorszámát
    const valasztottFeherjeForras = feherjek[randomFeherje]; // sorszám alapján kiválasztja az adott fehérje forrást
    return valasztottFeherjeForras; // elmenti a választott fehérjét
}

let valasztottFeherjeForras = feherjevalasztas();
//console.log(valasztottFeherjeForras.nev);





const feherjeMakroGramm = makroFeherjeGramm / valasztottFeherjeForras.feherje * 100; //fehérjeszükséglet grammja alapján kiszámolja hogy hány gramm választott fehérjét kell ennem!--lenyegeben hány gramm hust kell ennem.

console.log(feherjeMakroGramm + " gramm " + (valasztottFeherjeForras.nev) + "-t kell enned!");


const feherjeMakroKal = (feherjeMakroGramm / 100) * valasztottFeherjeForras.kaloria; //kiszámolja hogy az adott válaszott fehérjeforrás hány kalória

let maradekKaloria = szuksegesKaloriad - feherjeMakroKal;

//console.log(maradekKaloria + "fogyaszthatsz még ha nem eszel szénhidrátot")


//Szenhidratok!!
const szenhidratok = [
    { nev: 'rizs', feherje: 2, zsir: 0.1, szenhidrat: 28, kaloria: 130 },
    { nev: 'bab', feherje: 7, zsir: 0.4, szenhidrat: 20, kaloria: 120 },
    { nev: 'teszta', feherje: 12, zsir: 1, szenhidrat: 71, kaloria: 350 },
    { nev: 'kenyer', feherje: 3, zsir: 1, szenhidrat: 15, kaloria: 80 }
];


function szenhidratvalasztas() {
    const randomSzenhidrat = Math.floor(Math.random() * szenhidratok.length); //kiválaszt egy random számot
    const valasztottSzenhidratForras = szenhidratok[randomSzenhidrat]; //szám alapján kiválasztja az adott szénhidrátforrást
    return valasztottSzenhidratForras;
}

let valasztottSzenhidratForras = szenhidratvalasztas();

//a maradek kaloriából a lehető legtöbb szénhidrátot kikell számolnia-->maradek kalória/4 igy átváltom a kaloriát szénhidrát grammra
// amit aztán leosztok a választott szénhidráttal
//


let szenhidratraMaradtGramm = maradekKaloria / (valasztottSzenhidratForras.kaloria)*100;
console.log(szenhidratraMaradtGramm + " gramm " + (valasztottSzenhidratForras.nev) + "-t ehetsz még");

//const szenhidratAmitEhetek = szenhidratraMaradtKal / valasztottSzenhidratForras.szenhidrat * 100;
//console.log((szenhidratAmitEhetek.nev) + "ehetek")

console.log("igy a napi kaloriafogyasztásod = " + ((valasztottSzenhidratForras.kaloria * szenhidratraMaradtGramm/100) + feherjeMakroKal) + " kalória");




/*
console.log(szenhidratMakroGramm + (valasztottSzenhidratForras.nev) + " kell fogyasztanod!")

console.log(feherjeMakroGramm + (valasztottFeherjeForras.nev) + " kell fogyasztanod!")
*/


//számítások elvileg helyesek!








    $(document).ready(function() {
        
        $("#elso").text(Math.floor(feherjeMakroGramm) + " gramm " + (valasztottFeherjeForras.nev) + "-t kell enned!");
        $("#masodik").text(Math.floor(szenhidratraMaradtGramm) + " gramm " + (valasztottSzenhidratForras.nev) + "-t ehetsz még");
        $("#harmadik").text("igy a napi kaloriafogyasztásod = " + ((valasztottSzenhidratForras.kaloria * szenhidratraMaradtGramm/100) + feherjeMakroKal) + " kalória");
        

        
        $("#katt").click(function kattintas() {
            console.log("grat ide kattintottál")
            
             valasztottFeherjeForras  = feherjevalasztas();
             valasztottSzenhidratForras = szenhidratvalasztas();
            szenhidratraMaradtGramm = maradekKaloria / (valasztottSzenhidratForras.kaloria)*100;

            $("#elso").text(Math.floor(feherjeMakroGramm) + " gramm " + (valasztottFeherjeForras.nev) + "-t kell enned!");
            $("#masodik").text(Math.floor(szenhidratraMaradtGramm) + " gramm " + (valasztottSzenhidratForras.nev) + "-t ehetsz még");
            $("#harmadik").text("igy a napi kaloriafogyasztásod = " + ((valasztottSzenhidratForras.kaloria * szenhidratraMaradtGramm/100) + feherjeMakroKal) + " kalória");

            console.log(feherjeMakroGramm+valasztottFeherjeForras.nev)
            console.log(szenhidratraMaradtGramm+valasztottSzenhidratForras.nev)


    })
})


