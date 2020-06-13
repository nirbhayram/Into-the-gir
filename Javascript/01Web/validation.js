// alert("check validation")
function checkNumber(){
    let num = document.getElementById("numberText").value;
    console.log(num);
    if(isNaN(num) || num<0 || num>10){
        alert(`should be number between 0 to 10 found ${num}`)
    }
}