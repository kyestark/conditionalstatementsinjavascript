document.body.querySelector("#cool").innerHTML="Your answer is:"

var num1 = Number(prompt("What is the first number?"))
var operator = prompt("What is the operator?")
var num2 = Number(prompt("What is the second number?"))
if(operator=="+"){
  var answer = num1 + num2
}else if(operator=="-"){
  var answer = num1 - num2
}else if(operator=="/"){
  var answer = num1 / num2
}else if(operator=="*"){
  var answer = num1 * num2
}
if(isNaN(num1)==true){
  document.body.querySelector("#lesscool").innerHTML="The first number must be a number."
}else if(isNaN(num2)==true){
document.body.querySelector("#lesscool").innerHTML="The second number must be a number."
         }else if(operator!="+"&&operator!="-"&&operator!="/"&&operator!="*"){
             document.body.querySelector("#lesscool").innerHTML="The operator must be +, -, /, or *."
                  }else{
document.body.querySelector("#lesscool").innerHTML=answer
         }