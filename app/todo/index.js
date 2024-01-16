import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import path from "path";


const port= 3000;

const app = express();










//Body parser 
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as templating engine 
app.set('view engine', 'ejs');

//public folder

app.use(express.static('public'));







//LISTA!

let list = [];


app.listen(port,() => {
    console.log(`a szerver fut a következő ${port}-on` )
})

app.get("/",(req,res) => {
    res.render("index.ejs",{list})
})

 app.post("/add",(req,res) => {
    let szoveg = req.body.szoveg;

    if (szoveg.length !== 0) {
        let ujElem = {
            szoveg: szoveg,
            id: list.length + 1
        };
        console.log(ujElem.id,ujElem.szoveg)
        list.push(ujElem)
    } else {
        
        console.log("üres megjegyzés")
    }
    
    
    res.redirect("/");
})



app.post("/delete", (req, res) => {
    let toroltelemID = parseInt(req.body.id);
    
    let toroltid = list.findIndex((toroltelem) => toroltelem.id === toroltelemID ) ;

        if (toroltid !== -1) {
         list.splice(toroltid, 1); // Remove 1 element at the found index
         console.log("Element removed:", toroltelemID);
    } else {
        console.log("Element not found:", toroltelemID);
    }


    res.redirect("/");

});



app.post("/modify", (req, res) => {

    let regiuzenetID = parseInt(req.body.regiuzenet);

    let atirtuzenet = req.body.atirtuzenet;
    

    // megkeresi a megfelelő elem ID-t a listában
    let uzenetID = list.findIndex((uzenet) => uzenet.id === regiuzenetID);
    


    // kivalasztjuk id-vel az erteket majd modosítjuk
    if (uzenetID !== -1) {
        list[uzenetID].szoveg = atirtuzenet;
        res.redirect("/");
        console.log(uzenetID)
    } else {
        res.status(404).send("Nem található a módosítandó elem");
    }
});