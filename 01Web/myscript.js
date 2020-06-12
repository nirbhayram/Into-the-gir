// alert(`file is attached`);
document.title = `Nirbhay it is changed.`
// document.getElementById(`idone`).textContent = `It is changed now from p>lorem10`;
// let paraIdone = document.querySelectorAll("#idone");
// console.log(paraIdone);
//console.log(para);


let allPElement = document.querySelectorAll("p");
allPElement.forEach((p)=>p.textContent="This is changed by for each loop in JS file");
