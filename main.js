//Create variables for the field, button and list container IDs
let inputField = document.getElementById('inputField'); 
let toDoButton = document.getElementById('todobutton');
let toDoList = document.getElementById('toDoList');

//Make a click event listener
toDoButton.addEventListener('click', function(){
    // Make a variable to create a p element
    var paragraph = document.createElement('p'); 
    //Adds list class to the paragraph
    paragraph.classList.add('list');
    //Adds the actual variable to the list container
    toDoList.appendChild(paragraph);
    //Adds the text entered in the text box
    paragraph.innerText = inputField.value;
    //Resets the input field value
    inputField.value =" ";
    //Makes a line-through if clicked once
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    //Deletes it if clicked twice
    paragraph.addEventListener('dblclick', function(){
        toDoList.removeChild(paragraph);
    })
})