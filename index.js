console.log('Welcome to Magic Notes Website')
show();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',clickAddBtn)

function clickAddBtn(){
    
    let notesObj;
    let textArea = document.getElementById('textArea');
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textArea.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    console.log(notesObj);
    textArea.value = '';
    show();
}

function show(){
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
   notesObj.forEach(function(element , index){
       
       html += `<div class = "noteCards" style="width: 18rem;">
       <div class="card-body">
       <h5 class="card-title">Note: ${index+1}</h5>
       <p class="card-text" id= "para " >${element}</p>
       <a href="#" class="btn btn-primary" id = ${index} onclick = "delBtnHandler(this.id)">Delete</a>
       </div>
       </div>`
    });
    let cards = document.getElementById('cards');
 if(notesObj.length == 0 )
 {
cards.innerHTML = `Nothing to Show , Use 'Add a Note' Section to add above`
 }
 else{
     cards.innerHTML = html;
 }

}
 
function delBtnHandler(index){
    console.log('I am deleting');
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
show();
}

let searchText = document.getElementById('searchText');
searchText.addEventListener('input',searchInputHandler);
function searchInputHandler(){
    console.log('I am searching');
   let inputVal = searchText.value.toLowerCase();
   let noteCards = document.getElementsByClassName('noteCards');
   Array.from(noteCards).forEach(function(element){
       let para = element.getElementsByTagName('p')[0].innerText;
       let title = element.getElementsByTagName('h5')[0];
       console.log(title);
       if(para.includes(inputVal))
       {
           element.style.display = 'block';
       }
       else{
           element.style.display = "none";
       }
   })

}
