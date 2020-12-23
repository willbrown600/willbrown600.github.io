const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todoList');
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const boxes = document.querySelector('.boxes');
const todosLeft = boxes.querySelector('.todosLeft');
const allTodos = boxes.querySelector('.allTodos');
const activeTodos = boxes.querySelector('.activeTodos');
const completedTodos = boxes.querySelector('.completedTodos');

const completed = todos.filter(todo => todo.completed === true);
//console.table(completed);

//const com = JSON.stringify(completed);
//console.log(com);

const actives = todos.filter(todo => todo.completed === false);

//const activ = JSON.stringify(actives);
//console.log(activ);

const completedTodoList = todos.filter(todo => todo.completed === true);
//const comp = JSON.stringify(completedTodoList);
//console.log(comp);

boxes.querySelector('.todosLeft').innerHTML = findNumber();
boxes.querySelector('.activeTodos').value = activeList();
boxes.querySelector('.completedTodos').value = completeList();
//boxes.querySelector('.allTodos').value = showList();


function addToDo(e) {
    e.preventDefault();
    const content = (this.querySelector('[name=todo]')).value;
    const todo = {
        timestamp: '#id',
        content,
        completed: false
    };

    todos.push(todo);
    showList(todos, todoList);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.reset();

}

function showList(todos = [], todoList) {
    //console.log(todos);
    todoList.innerHTML = todos.map((task, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="todo${i}" ${task.completed ? 'checked': ''}/>
                <label for="todo${i}">${task.content}</label><button id="button${i}">${"X"}</button>
            <li>
        `;
    }).join('');
}

function toggleDone(e) {
    //console.log(e.target)
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    showList(todos, todoList);

}

//const removeButton = document.querySelectorAll('label');


//console.table(actives);


/*const links = Array.from(document.querySelectorAll('.activeTodos'));
console.log(links);

   /* const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));*/



/*const completedList = [

    ...todos.slice(0, removeTodo),
    ...todos.slice(index = 1)


];
console.table(completedList);*/



/*function lists(e) {
    console.log(e.target);
    e.target.innerHTML;
    console.log(todos);

    if (e.target.innerHTML === allTodos)
    showList();

    if (e.target.innerHTML === activeTodos)
    activeList();

    if (e.target.innerHTML === completedTodos)
    completeList();


}*/
//const actives = todos.filter(todo => todo.completed === false);



function activeList(e) {
    console.table(actives);

    todoList.innerHTML = actives.map((complete, i) => {
        return `
                <li>
                    <input type="checkbox" data-index=${i} id="todo${i}" ${complete.completed ? 'checked': ''}/>
                    <label for="todo${i}">${complete.content}</label><button id="button${i}">${"X"}</button>
                <li>
                `;
    }).join('');
}



function completeList(e) {
    console.table(completed);
    todoList.innerHTML = completed.map((com, i) => {
        return `
                <li>
                    <input type="checkbox" data-index=${i} id="todo${i}" ${com.completed ? 'checked': ''}/>
                    <label for="todo${i}">${com.content}</label><button id="button${i}">${"X"}</button>
                <li>
                `;

    }).join('');
    //console.table(todoList);
    

}


function findNumber(n) {
    numb = 0;
    const ne = actives.map((obj, item) => {

        numb++;

    });
    //console.table(completedTodoList);
    //console.log(numb);

    return `${numb} tasks left`;


}






/*function removeToDo(r){
    r.preventDefault();
    const r = (this.querySelector('label')).value;
    const rl = r.target;
    const index = rl.dataset.index;
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    
    /*const completedList = todos.map(todo => (todo.completed === true))
    console.log(completedList);

    showList(todos,todoList);
    /*localStorage.setItem('todos', JSON.stringify(todos));
    

}

/*const completedList = todos.reduce((todos, todo[completed]){

    if (todo[completed] === true){
        return true;
    }
    else {
        return false;
    }
}, {});

console.table(completedList);*/



//todoList.addEventListener('click', removeToDo)
//todosLeft.addEventListener('click', number);
showList(todos, todoList);

allTodos.addEventListener('click', showList);

activeTodos.addEventListener('click', activeList);

//document.querySelector('.activeTodos').value = completeList(complete);

completedTodos.addEventListener('click', completeList);

addTodo.addEventListener('submit', addToDo);

todoList.addEventListener('click', toggleDone);



