var count = 0;

var store = {
  0: "delph",
  1: "canda",
  2: "fdsd",
  3: ":D",
};

var currentIndex = 0;
var content = document.getElementById("content");

content.addEventListener("change", () => {
  var c2 = document.getElementById("content");
  console.log("<<", currentIndex, c2.value);

  //Setting current Index: c2.value in storage array
  localStorage.setItem(currentIndex, c2.value);
});

//Select note/element
function selectNote(index) {
  currentIndex = index;
  //   console.log("selecting" + index);
  var c2 = document.getElementById("content");

  c2.value = localStorage.getItem(index);
  console.log(">>", currentIndex, localStorage.getItem(index));
}

function addNote() {
  var list = document.getElementById("items");
  var entry = document.createElement("div"); //HTML element stores list.children
  var paragraph = document.createElement("p");
  var index = count++;
  var textInput = document.createElement("textarea");
  //paragraph.appendChild(document.createTextNode("item " + index)); //prompt()
  paragraph.appendChild(document.createTextNode(textInput)); //prompt()

  var trashcan = document.createElement("button");
  trashcan.appendChild(document.createTextNode("x"));
  trashcan.addEventListener("click", () => {
    // console.log("index " + index);
    deleteNoteElement(entry);
  });

  var check = document.createElement("button");
  check.appendChild(document.createTextNode("✔️"));
  check.addEventListener("click", () => {
    //console.log("index " + index);
    selectNote(index);
  });

  entry.appendChild(paragraph);
  entry.appendChild(trashcan);
  list.appendChild(entry);
  entry.appendChild(check);
  //console.log(list.children);
}
function deleteNote() {
  var list = document.getElementById("items");
  console.log(list);
  list.removeChild(list.lastElementChild);
  // list.childNodes.removeChild(0);
}

function deleteNoteElement(element) {
  var list = document.getElementById("items");
  list.removeChild(element);
}
