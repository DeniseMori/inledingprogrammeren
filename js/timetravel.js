/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Bronnen images:
Planeet1 https://pngimg.com/imgs/nature/mars_planet/
Planeet2 http://pluspng.com/planet-png-hd-7273.html
planeet3 http://www.stickpng.com/cat/nature/space/planets?page=1
aarde http://www.pngall.com/earth-png
galifrey http://www.jollybengali.net/tag/astronomy/
galaxy https://www.istockphoto.com/es/v%C3%ADdeos/particulas-polvo?page=6&sort=mostpopular&offlinecontent=include&phrase=particulas%20polvo
tardis http://www.sclance.com/pngs/tardis-transparent-png/view-page-3.htm

Beate van Garderen uit klas Raven heeft geholpen om te brainstormen voor een idee voor de for loopjes. Uiteindelijk ben ik toch zelf op iets gekomen wat ik ook in mijn eigen woorden kon uitleggen, toch wil ik haar bedanken dat ze mij wou helpen hiermee :)





Hier worden variablen aangemaakt voor de knoppen die ik later ga gebruiken. ik kon niet helemaal uitvogelen waarom de getElemenstByClassName de error 'addEventListener is not a function gaf' met deze site heb ik dat probleem op kunnen lossen https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur/32027957 */
var buttonToe = document.getElementsByClassName("toekomst")[0];
var buttonVer = document.getElementsByClassName("verleden")[0];
var buttonRan = document.getElementsByClassName("random")[0];
var buttonPla = document.getElementsByClassName("place")[0];

/* Hier worden twee arrays aangemaakt, 1 voor de plaatjes van de planeten en 1 voor de namen van de planeten. */
var imagesArray = ['img/earth.png', 'img/gallifrey.png', 'img/planeet1.png', 'img/planeet2.png', 'img/planeet3.png'];
var planeetArray = ['de aarde', 'Gallifrey', 'Mars', 'Skaro', 'de maan'];

/* Hier wordt een variable aangemaakt om onderaan de pagina te laten zien welke mogelijke bestemmingen er zijn. */
var bestemming = document.querySelectorAll('.bestemming');

/*Hier wordt een functie aangemaakt voor als je op de knop 'verleden' drukt. */
function verleden() {
    /*Hier wordt een variable aangemaakt om een random nummer te genereren voor een random planeet, daarna pakt hij een foto van de imagesArray en daarna pakt hij een naam uit de planeetArray. */
    var randomPlan = Math.floor((Math.random() * imagesArray.length) + 1);
    var planeten = imagesArray[randomPlan - 1];
    var planeetNaam = planeetArray[randomPlan - 1];
    console.log(planeten);

    /*Hier wordt er ID element uit de html gepakt en veranderd, de aarde veranderd in een random planeet.*/
    document.getElementById("earth").src = planeten;

    /*Hier wordt een random jaartal in het verleden gegenereerd*/
    var randomNum = Math.floor((Math.random() * 2018) + 1);
    var jaartal = [randomNum - 1];

    /*Hier wordt de h1 met het ID 'waar' gepakt uit de html en veranderd in de onderstaande tekst.*/
    var tekst = document.getElementById("waar");
    tekst.textContent = ('Je bent in het jaar ' + jaartal + ' op ' + planeetNaam + ' geland');

}

/*Hier gebeurd precies hetzelfde als in de functie verleden met een kleine aanpassing in de randomNum voor het jaartal. */
function toekomst() {
    var randomPlan = Math.floor((Math.random() * imagesArray.length) + 1);
    var planeten = imagesArray[randomPlan - 1];
    var planeetNaam = planeetArray[randomPlan - 1];
    console.log(planeten);

    document.getElementById("earth").src = planeten;
    /* De (2018-3000)) +2018 heb ik gevonden met behulp van https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
    var randomNum = Math.floor((Math.random() * (2018 - 3000)) + 2018);
    var jaartal = [randomNum + 2018];

    var tekst = document.getElementById("waar");
    tekst.textContent = ('Je bent in het jaar ' + jaartal + ' op ' + planeetNaam + ' geland');
}

/*Hier gebeurd ook hetzelfde als de functies verleden en toekomst maar er wordt hier voor de randomNum een if else statement uitgevoerd om een scheiding te kunnen maken tussen verleden en toekomst.*/
function random() {
    var randomPlan = Math.floor((Math.random() * imagesArray.length) + 1);
    var planeten = imagesArray[randomPlan - 1];
    var planeetNaam = planeetArray[randomPlan - 1];
    console.log(planeten);

    document.getElementById("earth").src = planeten;

    var randomNum = Math.floor((Math.random() * 3250) + 1);
    var jaartal = [randomNum - 1];

    /*Hier haal ik weer de h1 'waar' uit de html tekst. */
    var tekst = document.getElementById("waar");
    /*Als de variable randomNum boven de 2019 is dan ben je in de toekomst geland en geeft je tekst dat ook weer.*/
    if (randomNum > 2019) {

        tekst.textContent = ('Je bent in de toekomst op ' + planeetNaam + ' geland, in ' + jaartal);
    /*Als de variable randomNum onder de 2018 uitkomt dan ben je in het verleden geland en zie je dat ook weer terug in de tekst.*/
    } else if (randomNum < 2018) {

        tekst.textContent = ('Je bent in het verleden op ' + planeetNaam + ' geland, in ' + jaartal);
    /*De laatste optie is eigenlijk het jaar 2019 geland bent.*/
    } else {
        tekst.textContent = ('Je bent in het heden geland op ' + planeetNaam);
    }
}

/*Dit is een functie waar ik een loopje in heb gezet, onderaan de pagina zie je 3 planeten staan die mogelijke bestemmingen zijn.*/
function bestemmingen() {
    var i;
    /*Ik heb 3 images met de class bestemming staan in mijn html die ik random wil laten veranderen als ik op een knop klik. Door imagesArray.length te gebruiken hier (en ook verder in de code) hoef ik niet hier telkens de waarde te veranderen als ik foto's van andere planeten toevoeg aan de array. De loop wordt net zo lang uitgevoerd tot de images met de class bestemming 'op' zijn, in dit geval dus na 3 images. */
    for (i = 0; i < imagesArray.length; i++) {
        var randomPlanNum = Math.floor(imagesArray.length * Math.random());
        bestemming[i].src = imagesArray[randomPlanNum];
    }
}

/*Hier worden de buttons aangemaakt die de functies uitvoeren zodra je erop klikt.*/

buttonToe.addEventListener("click", toekomst, false);
buttonVer.addEventListener("click", verleden, false);
buttonRan.addEventListener("click", random, false);
buttonPla.addEventListener("click", bestemmingen, false);
