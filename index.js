// localStorage.clear();

let todolist=load();
showtodo();
function addtask()
{
  let documentelement=document.querySelector('#taskInput').value;
  let dateelement=document.querySelector('#taskDate').value;
  let timeelement=document.querySelector('#taskTime').value;
  
  todolist.push({item:documentelement,duedate:dateelement,duetime:timeelement});
  document.querySelector('#taskInput').value='';
  document.querySelector('#taskDate').value='';
  document.querySelector('#taskTime').value='';
  storeitem(todolist);
  showtodo();

}

function showtodo()
{
  let displayelement=document.querySelector('.task-container');
  let newhtml='';

  displayelement.innerHTML='';
  for(let i=0; i<todolist.length; i++)
  {
    let todoitem=todolist[i].item;
    let tododate=todolist[i].duedate;
    let todotime=todolist[i].duetime;

    newhtml+=`<span>${todoitem}</span>
    <span>${tododate}</span> 
    <span>${todotime}</span>
    <button class="deletebut" onclick="deleteitem(${i});">Delete</button>

    
    `
  }
  displayelement.innerHTML=newhtml;
}


function deleteitem(index)
{
  todolist.splice(index,1);
  storeitem(todolist);
  showtodo();

}

function storeitem(data)
{
  localStorage.setItem('todolist',JSON.stringify(data));
}

function load() {
  let storedItems = localStorage.getItem('todolist');
  return storedItems ? JSON.parse(storedItems) : [];
}

