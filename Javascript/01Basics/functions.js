let months = ['jan','feb','mar','apr','may','jun','jul','aug','sept','oct','nov','dec'];

//Function with parameter
let firstFunction = function (param){
    console.log(`first function with this parameter ${param}`);
};
months.forEach(firstFunction);

//literals function
months.forEach((month,index)=>{
    console.log(`this is literal function ${month}`);
});

//Function constructor
let functionconstructor = new Function("month","index","console.log(`This is function constructor and month is ${month}`)");
months.forEach(functionconstructor);

