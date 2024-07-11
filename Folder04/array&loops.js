let arr = [];

function addTodo() {
  let texted = document.getElementById("text1");

  let extractedValue = texted.value;
  arr.push(extractedValue);
  console.log(arr);

  texted.value = "";
}

//---------array2--------

//1.save the data;
//2.generate the html;
//3.make it interactive;

let arr2 = [];

//renderTodoList()

function addTodo2(){

  let texted = document.getElementById("text2");

  let extractedValue = texted.value;
  arr2.push(extractedValue);
  console.log(arr2);

  texted.value = "";

  renderTodoList()
}

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < arr2.length; i++) {
    const todo = arr2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  //console.log(todoListHTML);

  document.getElementById("parent-div").innerHTML = todoListHTML;
}