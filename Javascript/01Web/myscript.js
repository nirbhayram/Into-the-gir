// alert(`file is attached`);
document.title = `Nirbhay it is changed.`
// document.getElementById(`idone`).textContent = `It is changed now from p>lorem10`;
// let paraIdone = document.querySelectorAll("#idone");
// console.log(paraIdone);
//console.log(para);


//Selecting element from HTML file using js file
let allPElement = document.querySelectorAll("p");
allPElement.forEach((p)=>p.textContent="This is changed by for each loop in JS file");


//Adding new element to the html using js file
let myNewPara = document.createElement("p");
myNewPara.textContent = 'I was added by JS';
document.querySelector("body").appendChild(myNewPara);


//All related to adding button and its event listner
let myNewButton = document.createElement("button");
myNewButton.textContent = "Click me!";
myNewButton.addEventListener('click',(event)=>{
    if(event.target.textContent=="Click me!"){
        event.target.textContent="Don't click me!"
    }else{
        event.target.textContent="Click me!"
    }
});
document.querySelector("body").appendChild(myNewButton);
