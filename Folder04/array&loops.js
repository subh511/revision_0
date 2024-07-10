let arr = [];

function addTodo(){

let texted = document.getElementById('text1');

let extractedValue = texted.value;
arr.push(extractedValue)
console.log(arr);

texted.value = '';
}

let arr2 = ['make Dinner', 'wash Dishes'];

let todoListHTML = '';

for(let i=0; i<arr2.length; i++){
  const todo = arr2[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}

 console.log(todoListHTML)

document.getElementById('parent-div').innerHTML = `${todoListHTML}`

// function addTodo2(){
//   let text = document.getElementById('text2');
//   let addList = text.value;

//   arr2.push(addList);

//   // let displayResult = document.getElementById('displayText').innerHTML = `${arr2.push(textValue.value)}`;
//   // console.log(arr2);
//   // console.log(displayResult)
//   console.log(arr2)

//   text.value = '';


// }