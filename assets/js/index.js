const form = document.getElementById("root-form");
const list = document.getElementById("root-list");
form.addEventListener("submit", submitHandler);

const arr = [];

function submitHandler(event) {
  event.preventDefault();
  const {
    target,
    target: {
      elements: { email },
    },
  } = event;

  arr.push(email.value);
  list.append(createListItem(email.value));
  target.reset();
}

function btnDelet() {
  const btn = document.createElement("button");
  btn.classList.add("btnDelete");
  btn.innerText = "Delete";
  btn.addEventListener("click", (event) => {
    const {
      target: { parentNode },
    } = event;
    parentNode.remove();
    // console.dir(parentNode.childNodes[0].textContent);
    for (let i = 0; i < arr.length; i++) {
      if (parentNode.childNodes[0].textContent === arr[i]) {
        arr.splice(i, 1);
      }
    }
  });

  return btn;
}

function createListItem(value) {
  const listItem = document.createElement("li");
  listItem.innerText = value;
  listItem.append(btnDelet());
  return listItem;
}
