let map = new Map();
let keyString = `key string`;
let keyInteger = 2;
let keyObject = {name:`name`}
map.set(keyString,`value of key string`);
map.set(keyInteger,`value of key integer`);
map.set(keyObject,`value of key object`);

console.log(map.get(`key string`));
console.log(map.get(2));
console.log(map.get(keyObject));

console.log(`for of loop`);
for (const [key,value] of map) {
    console.log(`this is key ${key} and this is value ${value}`);
}

console.log(`for each loop`);
map.forEach((value,key)=>{
    console.log(`this is key ${key} and this is value ${value}`);
});
