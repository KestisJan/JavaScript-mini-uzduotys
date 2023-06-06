/* 
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
        a. 0 … 0
        b. 0 … 4
        c. 0 … 100
        d. 574 … 815
        e. -50 … 50
        f. -70 … 30
*/
console.log(`Exercise-1`);
console.log(`-----------`);

for (let i = 0; i <= 0; i++) {
    console.log(`1-a:` + i);
}
console.log(`-----------`);

for (let i = 0; i <= 4; i++) {
    console.log(`1-b:` + i);
}
console.log(`-----------`);

for (let i = 0; i <= 100; i++) {
    console.log(`1-c:` + i);
}
console.log(`-----------`);

for (let i = 574; i <= 815; i++) {
    console.log(`1-d:` + i);
}
console.log(`-----------`);

for (let i = -50; i <= 50; i++) {
    console.log(`1-e:` + i);
}
console.log(`-----------`);

for (let i = -70; i <= 30; i++) {
    console.log(`1-f:` + i);
}
console.clear();
/* 
    2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
        a. pvz.: “abcdef” -> “fedcba”
*/

console.log(`/////////////`);

console.log(`Exercise-2`);

const text = "abcdef";

for (let i = text.length -1; i >= 0; i-- ) {
    console.log(`2-a: ` + text[i]);
}

console.clear();
/* 
    3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
        a. 0 - 11
        b. 8 - 31
        c. -18 - 18
        d. rezultatą pateikti tokiu formatu:
            i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
            ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
            iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

console.log(`/////////////`);

console.log(`Exercise-3`);

const a = [0, ]

for (let i = 0; i % 3; i++) {

}