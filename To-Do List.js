

var todoList = document.getElementById('todoList');
var additems = document.getElementById('addTodo');

additems.onclick = function(){
    var todo = document.getElementById("todo").value;
    
    if (todo !== ""){
        
        var li = document.createElement('li');
        li.innerHTML = todo;
        todoList.appendChild(li);
        document.getElementById("todo").value = "";
    }

}

