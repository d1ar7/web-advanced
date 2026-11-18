var cars = ['mercedes', 'audi', 'bmw']
var i;
var text = "";

for (var i = 0; i < cars.length; i++) {
    text += cars[i] + " ";
}

console.log(text);


var j;
var text2 = "";

for (j = 1; j <= 6; j++) {
    text2 += j + " ";
}

console.log(text2);


// for in
var person = {
    firstName: "Tana",
    surname: "Zhushi",
    age: 12
};

var text3 = '';
var x;

for (x in person) {
    text3 += person[x];
}

console.log(text3);

var txt="gfdsagiufesglkhfwq"
var o;
for (o of txt){
    document.write=(txt + "<br>")
}

let n = 0;

do{
    n+=1;
    console.log(n)
}while (n<5)

let e = 0;
let r = 0;

while(e<3){
    e++
    r+=e
}

console.log(e)
console.log(r)

var molla=['kuqe','verdhe','gjelber'];
var q;
var text2 = "  ";
for(q=0;q<molla.length;q++){
    text2 += molla[q] + "  ";
} 
console.log(text2)

var students=['Fadil','Farati','Irbani']

var input=document.getElementById("name_input")
var btn=document.getElementById("btnAdd")



var btnShow=document.getElementById("btnShow")

btnAdd.onclick=function(){
    students.push(name_input.value)
}

btnShow.onclick=function(){
    for (var i=0;i<students.length;i++){
        document.write(students[i]+"<br>")
    }
} 