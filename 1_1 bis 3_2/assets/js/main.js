// String-Methods-Level-1_1

const firstName = "Metin";
const lastName = "Karakaya";

console.log(firstName.length);
console.log(lastName.length);

const fullName = firstName + lastName;

console.log(fullName.length);

// String-Methods-Level-1_2

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

// String-Methods-Level-1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

// String-Methods-Level-1_4

const A = 'Susi is going to codingschool';

document.body.querySelector("main").innerHTML = `<p>${A.slice(0, 4)}</p>`;
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.slice(5, 7)}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.slice(5, 16)} ${A.slice(23, 29)} </p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.slice(23, 29)} </p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.slice(0, 7)} ${A.slice(23, 29)} </p>`,);

// String-Methods-Level-1_5

document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.substring(0, 4)} </p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.substring(5, 7)}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.substring(23, 29)} </p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.substring(0, 7)} ${A.substring(23, 29)} </p>`,);

// String-Methods-Level-1_7

const txt3 = "Sam is good at codingschool";

document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${txt3.replace("good at codingschool", "bad at school")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${txt3.replace("Sam is good at codingschool", "Susi is good at school")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${txt3.replace("codingschool", "tennis")}</p>`,);

// String-Methods-Level-1_8

document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.toUpperCase().replace("IS GOING TO", "is going to")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${A.toLowerCase().replace("is going to", "IS GOING TO")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>
${A.charAt(0).toUpperCase() + A.slice(1, 4)} 
${A.charAt(5).toUpperCase() + A.slice(6, 7)} 
${A.charAt(8).toUpperCase() + A.slice(9, 13)}
${A.charAt(14).toUpperCase() + A.slice(15, 17)}
${A.charAt(23).toUpperCase() + A.slice(24)}
</p>`,);

// String-Methods-Level-1_9

const string1 = "Sam is going to codingschool";
const string2 = "Susi";
const string3 = "and";

document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${string1.slice(0, 16).concat("school and to the movie theater")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${string1.slice(0, 16).concat("the movie theather")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${string2 + " " + string3 + " " + string1.slice(0, 4).concat("are going to school")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${string2 + " " + string3 + " " + string1.slice(0, 4).concat("are going to the movie theather")}</p>`,);
document.body.querySelector("main").insertAdjacentHTML("beforeend", `<p>${string2.concat(" is going to school and to the movie theather")}</p>`,);

// Projects-JS-Einführung-Level-3_2

function check(){
const zeichenkette = document.body.querySelector("#input1").value;
const welcher = document.body.querySelector("#input2").value;
const trennen = zeichenkette.indexOf(welcher);
const radioButton1 = document.body.querySelector("#radio1");
const radioButton2 = document.body.querySelector("#radio2");


if(radioButton1.checked){
    document.body.querySelector("form p:nth-of-type(1)").textContent = zeichenkette.slice(0, trennen);
    document.body.querySelector("form p:nth-of-type(2)").textContent = zeichenkette.slice(trennen);
}   else if(radioButton2.checked){
    document.body.querySelector("form p:nth-of-type(1)").textContent = zeichenkette.slice(0, (1 + trennen));
    document.body.querySelector("form p:nth-of-type(2)").textContent = zeichenkette.slice(1 + trennen);
} else {
    document.body.querySelector("form p:nth-of-type(1)").textContent = "Bitte treffe eine Auswahl ob davor oder danach"
}
}