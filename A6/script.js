let De2022 = 84000000;
let De2008 = 82100000;
let Eu2022 = 447700000;
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
let resultEU1 = percentEu(Eu2022, De2022);
let resultEU2 = percentEu(Eu2022, Fr2022);
let resultEU3 = percentEu(Eu2022, Sp2022);
let resultEU4 = percentEu(Eu2022, It2022);
function percent(var1, var2) {
    let zw = var1 - var2;
    return Math.round((zw / var1) * 100);
}
function percentEu(var1, var2) {
    return Math.round((var2 / var1) * 100);
}
console.log("Die Einwohner zahl in Deutschland beträgt in 2022 " + De2022 + ".");
console.log("Für Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + resultDE + "% verändert.");
console.log("Relativ zur Gesamtzahl der Einwohner in der EU ist die Einwohnerzahl in Deutschland im Jahr 2022:" + resultEU1 + "%");
console.log("Die Einwohner zahl in Frankreich beträgt in 2022 " + Fr2022 + ".");
console.log("Für Frankreich hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + resultFr + "% verändert.");
console.log("Relativ zur Gesamtzahl der Einwohner in der EU ist die Einwohnerzahl in Frankreich im Jahr 2022:" + resultEU2 + "%");
console.log("Die Einwohner zahl in Italien beträgt in 2022 " + It2022 + ".");
console.log("Für Italien hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + resultIt + "% verändert.");
console.log("Relativ zur Gesamtzahl der Einwohner in der EU ist die Einwohnerzahl inItalien im Jahr 2022:" + resultEU4 + "%");
console.log("Die Einwohner zahl in Spanien beträgt in 2022 " + Sp2022 + ".");
console.log("Für Spanien hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um " + resultSp + "% verändert.");
console.log("Relativ zur Gesamtzahl der Einwohner in der EU ist die Einwohnerzahl in Spanien im Jahr 2022:" + resultEU3 + "%");
//# sourceMappingURL=script.js.map