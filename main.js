let inputField = document.getElementById('inputField');
let toDoButton = document.getElementById('todobutton');
let toDoList = document.getElementById('toDoList');

toDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('list');
    toDoList.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value =" ";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoList.removeChild(paragraph);
    })
})