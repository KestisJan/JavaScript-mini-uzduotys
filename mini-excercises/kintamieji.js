const { log } = require("console");

console.clear();
// Excercise #1 - kintamieji.js
 /* 
 Kintamųjų inicijavimas

1.Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

2.Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

3.Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

*/ 
console.log(`Excercise-1`);
// 1
const a = 44;
const b = 2;
const c = 7;

console.log(a);
console.log(b);
console.log(c);

console.log(`------------`);

// 2
const d = `Masina`
const e = `Dviratis`
const f = `Motociklas`

console.log(d);
console.log(e);
console.log(f);

console.log(`------------`);

// 3
const listA = [4, 100, 798, 1239, 99999];
console.log(listA);

console.log(`------------`);

// 4
const listB = [`Sausis`, `Balandis`, `Kovas`, `Rugsejis`, `Liepa`]
console.log(listB);

console.log(`===============`);
console.log(`                 `)
console.log(`                 `)
console.log(`Excercise-2`);
/* 
Veiksmai su kintamaisiais

1.Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console

2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console

3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console

4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/
// 1
const sum = a + b + c;
console.log(`Suma: ` + sum);
console.log(`---------------`);

// 2
console.log(`Tekstas su tarpu - ` + d + ` ` + e + ` ` + f);
console.log(`---------------`);


// 3
const listC = [1, 2, 3, 4, 5]
console.log(listC[0] - listC[1] + listC[2] - listC[3] + listC[4]);
console.log(`---------------`);

// 4
console.log(`Saraso jungimas nuo galo - ` + listB[4] + `, ` + listB[3] + `, ` + listB[2] + `, ` + listB[1] + `, ` + listB[0]);



console.log(`===============`);

console.log(`                 `)
console.log(`                 `)

console.log(`Excercise-3`);
/* 
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1.Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
2.Išvesti teksto tipo kintamųjų ilgius
3.Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
4.Išvesti sąrašo tipo kintamųjų ilgius
5.Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    kuris didesnis
    kuris mažesnis
    ar jie lygūs
    ar jie nelygūs
    kuris didesnis arba lygus
    kuris mažesnis arba lygus
*/

// 1
console.log(`Kuris didesnis 44 > 7 ` + (a > c));
console.log(`Kuris mazesnis 2 < 7 ` + (b < c));
console.log(`Ar jie lygus 2 = 7 ` + (b == c));
console.log(`Ar jie nelygus 2 != 7 ` + (b != c));
console.log(`Kuris didesnis arba lygus 44 >= 2 ` + (a >= b));
console.log(`Kuris mazesnis arba lygus 44 <= 2 ` + (a <= b));

console.log(`---------------`);

// 2
console.log(`Tekso ilgis -  Masina = ` + (d.length));
console.log(`Tekso ilgis -  Dviratis = ` + (e.length));
console.log(`Tekso ilgis -  Motociklas = ` + (f.length));

console.log(`---------------`);

// 3
console.log(`Kuris didesnis 6 > 10 ` + (d.length > f.length));
console.log(`Kuris mazesnis 8 < 6 ` + (e.length < d.length));
console.log(`Ar jie lygus 10 = 10 ` + (f.length == f.length));
console.log(`Ar jie nelygus 6 != 8 ` + (d.length != e.length));
console.log(`Kuris didesnis arba lygus 6 >= 6 ` + (d.length >= d.length));
console.log(`Kuris mazesnis arba lygus 10 <= 2 ` + (f.length <= d.length));

console.log(`---------------`);

// 4

console.log(`Kuris didesnis 99999 > 4 ` + (listA[4]> listA[0]));
console.log(`Kuris mazesnis 1239 < 798 ` + (listA[3] < listA[2]));
console.log(`Ar jie lygus 100 = 99999 ` + (listA[1] == listA[4]));
console.log(`Ar jie nelygus 100 != 798 ` + (listA[1] != listA[2]));
console.log(`Kuris didesnis arba lygus 1239 >= 1239 ` + (listA[3] >= listA[3]));
console.log(`Kuris mazesnis arba lygus 100 <= 100 ` + (listA[1] <= listA[1]));