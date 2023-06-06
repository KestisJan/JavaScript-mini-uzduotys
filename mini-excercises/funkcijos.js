const { log } = require("console");

console.clear();
/* 
Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

Funkcija pavadinimu “tusciaFunkcija”:
    A - nepriima jokių kintamųjų
    B - neatlieka jokios vidinės logikos
    C - gražina boolean tipo reikšmę “false”
TESTAS:
    console.log( tusciaFunkcija() );
    rezultatas: false
*/
// 1
console.log(`Excercise - 1`);
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

console.log(`------------`);


console.log(`             `);
console.log(`             `);


/* 
Funkcija pavadinimu “daugyba”:
    priima du skaičiaus tipo kintamuosius
    atskirame kintamajame įsimena sandaugos reikšmę
    gražina saudaugos rezultatą
TESTAI:
    console.log( daugyba( skaicius1, skaicius2 ) );
    console.log( daugyba( skaicius3, skaicius2 ) );
    console.log( daugyba( skaicius1, skaicius3 ) );
    rezultatas: teisingos reikšmės;
*/
console.log(`Excercise - 2`);

function daugyba(int, int2) {
    return  (int * int2);
}
console.log(`(int - 2 * int2 = 10) result = ` + daugyba(2, 10));
console.log(`(int - 5 * int2 = 10) result = ` + daugyba(5, 10));
console.log(`(int - 2 * int2 = 5) result = ` + daugyba(2, 5));


console.log(`------------`);


console.log(`             `);


console.log(`Excercise - 3`);


/* 
    priima vieną kintamąjį
    jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
    priešingu atveju, funkcija tęsia darbą
    į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    gražina skaitmenų kiekį
TESTAI:
    console.log( skaitmenuKiekisSkaiciuje( 5 ) );
        rezultatas: 1
    console.log( skaitmenuKiekisSkaiciuje( 781 ) );
        rezultatas: 3
    console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
        rezultatas: 11
    console.log( skaitmenuKiekisSkaiciuje( true ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
    console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
    console.log( skaitmenuKiekisSkaiciuje( NaN ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

function skaitmenuKiekisSkaiciuje(skaicius) {
    if (Number.isInteger(skaicius)) {
        return skaicius.toString().length;
    }
    return `Pateikta netinkamo tipo reiksme`;
}



console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log(`------------`);
console.log(`             `);

// 4

/*
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
    console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
        rezultatas: 1
    console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
        rezultatas: 3
    console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
        rezultatas: 78
    console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
        rezultatas: 69
    console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
        rezultatas: -1
    console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
        rezultatas: “Pateikta netinkamo tipo reikšmė.”
    console.log( didziausiasSkaiciusSarase( [] ) );
        rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

console.log(`Excercise - 4`);



