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
console.log(`             `);


console.log(`Excercise - 3`);

