class Parent{
    constructor(parentAttribute){
        this.parentAttribute = parentAttribute;
    }
    methodThatIsOverride(){
        return `This is running from parent class.`;
    }
    methodInParent(){
        return `This method is only in parent.`;
    }
}
class Child extends Parent{
    constructor(childAttribute){
        super(childAttribute);
    }
    methodThatIsOverride(){
        return `This is running from child class.`
    }
}

let obj1 = new Parent('some thing');
let obj2 = new Child('some thing');

console.log(obj2.methodThatIsOverride());
console.log(obj2.methodInParent());
