let De2022 = 84000000;
let De2008 = 82100000;
let Eu2022 = 447700000;
let Eu2008 = 439940000;
let Fr2022 = 64600000;
let Fr2008 = 64370000;
let It2022 = 59000000;
let It2008 = 58830000;
let Sp2022 = 47600000;
let Sp2008 = 45950000;
let resultDE = percent(De2022, De2008);
let resultFr = percent(Fr2022, Fr2008);
let resultSp = percent(Sp2022, Sp2008);
let resultIt = percent(It2022, It2008);
let resultEU = percent(Eu2022, Eu2008);
let resultEU1 = percentEu(Eu2022, De2022);
let resultEU2 = percentEu(Eu2022, Fr2022);
let resultEU3 = percentEu(Eu2022, Sp2022);
let resultEU4 = percentEu(Eu2022, It2022);
let resultEU5 = percentEu(Eu2022, Eu2022);
let growDE = growth(De2022, De2008);
let growFR = growth(Fr2022, Fr2008);
let growIT = growth(It2022, It2008);
let growSP = growth(Sp2022, Sp2008);
let growEU = growth(Eu2022, Eu2008);
let yellow1 = percentEu(Eu2022, De2022);
let yellow2 = percentEu(Eu2022, Fr2022);
let yellow3 = percentEu(Eu2022, It2022);
let yellow4 = percentEu(Eu2022, Sp2022);
let yellow5 = percentEu(Eu2022, Eu2022);
function percent(var1, var2) {
    let zw = var1 - var2;
    return Math.round((zw / var1) * 100);
}
function percentEu(var1, var2) {
    return Math.round((var2 / var1) * 100);
}
function growth(var1, var2) {
    return Math.round((var1 - var2));
}
function Ausgabe(value1, value2, value3, value4, value5, value6) {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in " + value1;
    document.querySelector("#Gesamtzahl").innerHTML = value2;
    document.querySelector("#EU").innerHTML = value3 + "%";
    document.querySelector("#Wachstum").innerHTML = value4 + "%";
    document.querySelector("#Wachstum2").innerHTML = value5 + "";
    document.getElementsByClassName("chart");
    document.querySelector(".chart").setAttribute("style", "height:" + value6 + "%;");
}
document.querySelector("#DE").addEventListener('click', function () {
    Ausgabe("Deutschland", De2022, resultEU1, resultDE, growDE, yellow1);
});
document.querySelector("#FR").addEventListener('click', function () {
    Ausgabe("Frankreich", Fr2022, resultEU2, resultFr, growFR, yellow2);
});
document.querySelector("#IT").addEventListener('click', function () {
    Ausgabe("Italien", It2022, resultEU4, resultIt, growIT, yellow3);
});
document.querySelector("#SP").addEventListener('click', function () {
    Ausgabe("Spanien", Sp2022, resultEU3, resultSp, growSP, yellow4);
});
document.querySelector("#Star").addEventListener('click', function () {
    Ausgabe("der Europäischen Union", Eu2022, resultEU5, resultEU, growEU, yellow5);
});
//# sourceMappingURL=script.js.map