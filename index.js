// let todolist=[{item:'buy milk',duedate:'2024/10/4'}];
// showtodo();

// function addtodo()
// {
//   let documentelement = document.querySelector('#display').value;
//   let dateelement = document.querySelector('#date').value;
//   // console.log(documentelement);
//   todolist.push({item:documentelement,duedate:dateelement});
//   document.querySelector('#display').value='';
//   document.querySelector('#date').value='';
//   storeitem(todolist);
//   showtodo();

// }

// function showtodo()
// {
//   let displayelement = document.querySelector('.todo-container');


//   let newhtml='';
   
//   displayelement.innerText='';
//   for(let i=0;i<todolist.length;i++)
//   {
//     let todoitem=todolist[i].item;
//     let duedate=todolist[i].duedate;
//     newhtml+=`
    
//     <span>${todoitem}</span>
//     <span>${duedate}</span>
//     <button class="deletebut"onclick="todolist.splice(${i},1);showtodo()removeitem(tudoitem);">Delete</button>
    

//     `;   
//   }

//   displayelement.innerHTML=newhtml;


// }


// function storeitem(item)
// {
//   localStorage.setItem('todolist',JSON.stringify(item));
//   loadItems();



// }

// function removeitem(item)
// {
//   loadItems();
//   localStorage.removeItem('todolist');
  


// }

// function loadItems() {
//   let storedItems = localStorage.getItem('todolist');
//   return storedItems ? JSON.parse(storedItems) : [];  // If no items are stored, return an empty array
// }


let todolist = loadItems();  // Load items from localStorage when the page loads
showtodo();

function addtodo() {
  let documentelement = document.querySelector('#display').value;
  let dateelement = document.querySelector('#date').value;
  
  todolist.push({ item: documentelement, duedate: dateelement });
  
  document.querySelector('#display').value = '';
  document.querySelector('#date').value = '';
  
  storeitem(todolist);  // Save the updated list to localStorage
  showtodo();
}

function showtodo() {
  let displayelement = document.querySelector('.todo-container');
  let newhtml = '';
   
  displayelement.innerText = '';
  
  for (let i = 0; i < todolist.length; i++) {
    let todoitem = todolist[i].item;
    let duedate = todolist[i].duedate;
    newhtml +=
      `<span>${todoitem}</span>
      <span>${duedate}</span>
      <button class="deletebut" onclick="removeitem(${i});">Delete</button>`;
  }

  displayelement.innerHTML = newhtml;
}

function storeitem(item) {
  localStorage.setItem('todolist', JSON.stringify(item));
}

function removeitem(index) {
  todolist.splice(index, 1);
  storeitem(todolist);  // Update localStorage after deletion
  showtodo();
}

function loadItems() {
  let storedItems = localStorage.getItem('todolist');
  return storedItems ? JSON.parse(storedItems) : [];
}
