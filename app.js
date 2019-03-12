
//define var 

const form =document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const cleanBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');
//load evnt

loadEventLiseners();


function loadEventLiseners(){
  //Dom load event
  document.addEventListener('DomContentLoadad',getTasks);
  //add tasks
  form.addEventListener('submit',addTask);

  //remove tasks
  taskList.addEventListener('click',removeTask)

  //clear taskInput
  cleanBtn.addEventListener('click',clearTasks)
//filter tasks
  filter.addEventListener('keyup',filterTasks)
}

//get tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
//create li elemnt
const li=document.createElement('li');
//add a class
li.className='collection-item';
//
//create textnote
li.appendChild(document.createTextNode(task));

//creat new link
const link=document.createElement('a');
//add class 
link.className='delete-item secondary-content';
//add icon
link.innerHTML='<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link);

//appent li to ul becouse up we name ul to tasklist u can cheack up

taskList.appendChild(li);
  });
}

//add tasks
function addTask(e){
  if(taskInput.value===''){
    alert('hi ahmed');
  }

 //create li elemnt
 const li=document.createElement('li');
 //add a class
 li.className='collection-item';
 //
 //create textnote
 li.appendChild(document.createTextNode(taskInput.value));

 //creat new link
 const link=document.createElement('a');
 //add class 
 link.className='delete-item secondary-content';
 //add icon
 link.innerHTML='<i class="fa fa-remove"></i>';
 //append the link to li
 li.appendChild(link);

 //appent li to ul becouse up we name ul to tasklist u can cheack up

taskList.appendChild(li);
//Store in Ls
storeTaskInLocalStorage(taskInput.value);

//clear input
taskInput.value='';
  e.preventDefault();
}
// Store task

function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//remove tasks

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){

    if(confirm('Are You Sure !')){

      e.target.parentElement.parentElement.remove();

    }
   
  }
}
//clear tasks
function clearTasks(){
  taskList.innerHTML='';

}

//filter tasks
function filterTasks(e){
const text=e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach(function(task){
  const item=task.firstChild.textContent;
  if(item.toLowerCase().indexOf(text)!=-1){
task.style.display='block';
  }else{
    task.style.display='none';
  }
});
}

