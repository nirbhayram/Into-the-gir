let list = document.querySelector("#list");
let inputText = document.querySelector("#input");
let message = document.querySelector("#message");

function addToDo(){
    let todo = inputText.value;
    if(todo==""){
        promptMessage('Please enter your to-do task.');
        return;
    }
    if (todo.length>50) {
        promptMessage('Total letters should be less than 50.');
        return;
    }
    let liElement = createListElement();
    liElement = addInputIntoLiElement(liElement);
    liElement = addLabelIntoLiElement(liElement,todo);
    addListElementIntoList(liElement);
    clearToDoText();
}

function promptMessage(displayMessage){
    message.textContent = displayMessage;
    setTimeout(() => {
        message.className= 'visual';
    }, 5);
}

function hideMessage(){
    setTimeout(() => {
        message.className= '';
    }, 5);
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
    list.insertBefore(liElement,list.childNodes[0]);
    setTimeout(() => {
        liElement.className='visual';
    }, 1);
    // list.appendChild(liElement);
}

function removeDoneToDo(){
    for (listElement of list.querySelectorAll("li")){
        if(listElement.childNodes[0].checked){
            list.removeChild(listElement);
        }
    }
}

function removeAllToDo(){
    let replyToRemoveAllTodo = confirm("Are you sure you want to remove all todo's?");
    if(replyToRemoveAllTodo){
        for (listElement of list.querySelectorAll("li")){
            list.removeChild(listElement);
        }
    }   
}