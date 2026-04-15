// 1.
const sk1 = 10;
const sk2 = 5;

if (sk1 > sk2) {
    console.log(`${sk1} yra didesnins uz ${sk2}`);
} else if (sk1 === sk2) {
    console.log(`${sk1} ir ${sk2} yra lygus`);
} else {
    console.log(`${sk2} yra didesnis uz ${sk1}`);
}

// 2.
const amzius = 8;

if (amzius > 0 && amzius <= 12) {
    console.log(`vaikas`);
} else if (amzius >= 13 && amzius <= 17) {
    console.log(`paauglys`);
} else if (amzius >= 18 && amzius <= 64) {
    console.log(`suauges`);
} else if (amzius >= 65) {
    console.log(`senjoras`);
}

// 3.
const menuo_sk = 6;

switch (menuo_sk) {
    case 12 || 1 || 2:
        console.log(`Ziema`);
        break;
    case 3 || 4 || 5:
        console.log(`Pavasaris`);
        break;
    case 6 || 7 || 8:
        console.log(`Vasara`);
        break;
    case 9 || 10 || 11:
        console.log(`Ruduo`);
        break;
    default:
        console.log(`Nezinomas sezonas`);
}

// 4.
const rezultatas = 89;

if (rezultatas >= 90 && rezultatas < 100) {
    console.log(`A`);
} else if (rezultatas >= 80 && rezultatas < 90) {
    console.log(`B`);
} else if (rezultatas >= 70 && rezultatas < 80) {
    console.log(`C`);
} else if (rezultatas >= 60 && rezultatas < 70) {
    console.log(`D`);
} else if (rezultatas >= 50 && rezultatas < 60) {
    console.log(`E`);
} else if (rezultatas >= 0 && rezultatas < 50) {
    console.log(`Nepakankamas`);
}

// 5.
const valanda = 5;

if (valanda >= 5 && valanda <= 11) {
    console.log(`Rytas`);
} else if (valanda >= 12 && valanda <= 17) {
    console.log(`Popiete`);
} else if (valanda >= 18 && valanda <= 22) {
    console.log(`Vakaras`);
} else if (valanda >= 23 || valanda <= 4) {
    console.log(`Naktis`);
}

// 6.
const diena_sk = 3;

switch (diena_sk) {
    case 1:
        console.log(`Pirmadienis`);
        break;
    case 2:
        console.log(`Antradienis`);
        break;
    case 3:
        console.log(`Treciadienis`);
        break;
    case 4:
        console.log(`Ketvirtadienis`);
        break;
    case 5:
        console.log(`Penktadienis`);
        break;
    case 6:
        console.log(`Sestadienis`);
        break;
    case 7:
        console.log(`Sekmadienis`);
        break;
    default:
        console.log(`Ne savaites diena`);
}

// 7.
const sportas = "futbolas";

switch (sportas) {
    case "futbolas":
        console.log(`Reikes futbolo kamuolio`);
        break;
    case "krepsinis":
        console.log(`Reikes krepsinio kamuolio`);
        break;
    case "tinklinis":
        console.log(`Reikes tinklinio kamuolio`);
        break;
    default:
        console.log(`Atsinesk ka nori`);
}

// 8.
const skaicius = 4;

if (skaicius % 2 == 0) {
    console.log(`Skaicius yra lygus`);
} else {
    console.log(`Skaicius yra nelygus`);
}

// 9.
const ivertinimas = 99;

if (ivertinimas >= 50) {
    console.log(`Islaike`);
} else {
    console.log(`Neislaike`);
}

// 10.
const salis = "Lietuva";

switch (salis) {
    case "lietuva":
        console.log(`Sveiki!`);
        break;
    case "japonija":
        console.log(`こんにちは`);
        break;
    case "ispanija":
        console.log(`Hola`);
        break;
    case "vokietija":
        console.log(`Hallo`);
        break;
    default:
        console.log(`Kalbos nera`);
}
