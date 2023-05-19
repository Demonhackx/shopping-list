var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll('.item');
var deleteButtons = document.querySelectorAll('.delete');

//.length value input text
function inputLength() {
  return input.value.length;
}

//Make a list dinamically
function createListElement() {
  var li = document.createElement("li");
  li.textContent = input.value;

  //Add Delete Button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");

  li.appendChild(deleteButton);
  ul.appendChild(li);
  input.value = "";

  //Toggle after Add text dinamically
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  //Remove list item element (near button) after Add Delete Button dinamically
  deleteButton.addEventListener('click', (event) => {
    event.stopPropagation();
    li.remove();
  });

  //Add hr tag
  var hr = document.createElement('hr');
  li.appendChild(hr);
}

//Add list after click enter button
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

//Add list after Keypress enter
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//Toggle text if i click it
items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('done');
  });
});

//Remove list item element (near button)
deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const listItem = button.parentNode;
    listItem.remove();
  });
});