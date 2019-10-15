/* EXERCISE 1
            Write a function to change the Title of the page in something else
            */

function changeText() {
  document.querySelector("#title").innerHTML = "Strive School Rox";
}

/* EXERCISE 2
            Write a function to change the class of the title of the page in "myHeading"
            */
function changeClass() {
  var elementClass = document.querySelector("#title");
  console.log(elementClass.className);
  elementClass.classList.add("myHeading");
}

/* EXERCISE 3
            Write a function to change the text of only the p which are child of a div
            */
function changeP() {
  document.querySelector("div p").innerHTML = "Chancing the p";
}

/* EXERCISE 4
            Write a function to change the destination of every link to https://www.google.com
            */

function changeLink() {
  document.querySelector("a").href = "https://www.google.com/";
}

/* EXERCISE 5
            Write a function to add a new item ONLY to the second list
            */

function addItem() {
  var node = document.createElement("LI");
  var textNode = document.createTextNode("Next");
  node.appendChild(textNode);
  document.querySelector("#secondList").appendChild(node);
}

/* EXERCISE 6
           Write a function to add a second paragraph to the div
            */

function addParagraph() {
  var node = document.createElement("p");
  var textNode = document.createTextNode("Secound Paragraph");
  node.appendChild(textNode);
  document.querySelector("div").appendChild(node);
}

/* EXERCISE 7
           Write a function to make the first UL disappear
            */

function removeUl() {
  var firstUl = document.querySelector("#firstList");
  firstUl.parentNode.removeChild(firstUl);
}

/* EXERCISE 8
            Write a function to make the background of every UL green
            */

function makeGreen() {
  var x = document.querySelectorAll("ul");
  for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "green";
  }
}
/* EXERCISE 9
            Make the heading of the page changing color every time the user clicks on it
            */

var h2 = document.querySelector("h2");
for (var i = 0; i < h2.length; i++) {
  h2[i].style.backgroundColor = "";
}

/* EXERCISE 10
          Create a new welcome alert message when the page successfully loads
            */
function successfully() {
  alert("Page is loaded");
}

/* EXERCISE 11
            Use HTML5 tags to divide sections, headers etc           */
