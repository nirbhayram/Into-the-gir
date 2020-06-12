const convertIntoRupees = (dollar)=>{
    if(typeof dollar == 'number'){
        return dollar*65;
    }
    throw Error("Expected number.");
}
try{
    console.log(convertIntoRupees(5));
    console.log(convertIntoRupees('five'));
}catch(error){
    console.error(error);
}