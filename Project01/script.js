// alert("Connected");
function addToDo(){
    let todo = document.querySelector("#input").value;
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
    document.querySelector("#input").value = "";
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
    let list = document.querySelector("#list");
    list.appendChild(liElement);
}

function removeDoneToDo(){
    let list = document.querySelector("#list");
    let toRemoveList = [];
    for (listElement of list.querySelectorAll("li")){
        if(listElement.childNodes[0].checked){
            list.removeChild(listElement);
        }
    }
}