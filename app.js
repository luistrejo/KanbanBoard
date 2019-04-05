angular.module('kanbanApp', [])
    .controller('kanbanListController', function () {
        var todoList = this;
        //Se accede a travez de la instancia porque tiene alcance local
        todoList.kanbanList = [
            //{ titulo: 'terminar todo list', done: false, paso: '1' },
            //{ titulo: 'deploy todo list', done: false, paso: '2' }
        ];

        //Metodo con el cual se agregan nuevos elementos al arreglo
        todoList.addTodo = function () {
            //Añadimos el nuevo elemento al arreglo
            todoList.kanbanList.push({ titulo: todoList.newTodo, desc: todoList.newTodoDesc, paso: 1 });

            //Limpiamos los inputs para en caso de que el usuario desee agregar una tarea nueva
            todoList.newTodo = "";
            todoList.newTodoDesc = "";
        };
    
        //Metodo que se encarga de mover un elemento hacia adelante o hacia atras
        todoList.mover = function (todoElement, pasoDestino) {
                todoElement.paso = pasoDestino;
        }

    });