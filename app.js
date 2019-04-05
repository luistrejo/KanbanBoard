angular.module('kanbanApp', [])
    .controller('kanbanListController', function () {
        var kanbanCtrl = this;
        //Se accede a travez de la instancia porque tiene alcance local
        kanbanCtrl.kanbanList = [
            //{ titulo: 'terminar todo list', done: false, paso: '1' },
            //{ titulo: 'deploy todo list', done: false, paso: '2' }
        ];

        //Metodo con el cual se agregan nuevos elementos al arreglo
        kanbanCtrl.addTodo = function () {
            //Añadimos el nuevo elemento al arreglo
            kanbanCtrl.kanbanList.push({ titulo: kanbanCtrl.newTodo, desc: kanbanCtrl.newTodoDesc, paso: 1 });

            //Limpiamos los inputs para en caso de que el usuario desee agregar una tarea nueva
            kanbanCtrl.newTodo = "";
            kanbanCtrl.newTodoDesc = "";
        };
    
        //Metodo que se encarga de mover un elemento hacia adelante o hacia atras
        kanbanCtrl.mover = function (todoElement, pasoDestino) {
                todoElement.paso = pasoDestino;
        }

    });