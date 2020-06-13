let list = document.querySelector("#list");
let inputText = document.querySelector("#input");

function addToDo(){
    let todo = inputText.value;
    if(todo==""){
        alert("please enter some text")
        return;
    }
    let liElement = createListElement();
    liElement = addInputIntoLiElement(liElement);
    liElement = addLabelIntoLiElement(liElement,todo);
    addListElementIntoList(liElement);
    clearToDoText();
}

function clearToDoText(){
    inputText.value = "";
}

function createListElement(){
    let liElement = document.createElement("li");
    liElement.className = "check";
    return liElement;
}

function addInputIntoLiElement(liElement){
    let inputCheckbox = document.createElement("input");
    inputCheckbox.type="checkbox";
    inputCheckbox.id="check";
    liElement.appendChild(inputCheckbox);
    return liElement;
}

function addLabelIntoLiElement(liElement,todo){
    let labelText = document.createElement("label");
    labelText.textContent=todo;
    liElement.appendChild(labelText);
    return liElement;
}

function addListElementIntoList(liElement){
    list.appendChild(liElement);
}

function removeDoneToDo(){
    for (listElement of list.querySelectorAll("li")){
        if(listElement.childNodes[0].checked){
            list.removeChild(listElement);
        }
    }
}