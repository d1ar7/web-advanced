 var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var button = document.getElementById("button")
var text = document.getElementById("text")

button.onlick=function(){
    text.innerHTML = parseInt(input1.value) + parseInt(input2.value)
}