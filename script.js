// GOAL: replicare le funzioni della todo-list viste
//   a lezione con le seguenti caratteristiche
// - stampare in pagina un item per ogni elemento
//   contenuto in un array
// - ogni item ha una "x" associata: cliccando su di
//   essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item
//   alla lista: digitando il tasto invio oppure ciccando
//   su un pulsante, il testo digitato viene aggiunto
//   alla lista
function initVue(){
  new Vue({
    el:"#app",
    data:{
     "todoElem":[
       'elem1',
       'elem2',
       'elem3',
     ],
     'newTodo':'',
    },
    methods:{
     addTodo: function(){
       this.todoElem.push(this.newTodo);
       console.log("click");
      }
    },
  });
}
function init(){
  initVue();
}
$(init);
























function initVue() {
  new Vue({
    el: '#app',
    data: {
        "todos": [
        "elem1",
        "elem2",
        "elem3",
      ],
      "newTodo":"",
    },
    methods: {
      createNewTodo: function(){
        if(this.newTodo.length>0){
          this.todos.push(this.newTodo);
          this.newTodo="";
          console.log("click");
        }
      },
      clickDeleteTodo: function(index){
       this.todos.splice(index, 1);
      },
    }
  });
}

function init() {
  initVue();
}
$(init);
