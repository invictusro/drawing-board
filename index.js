// Create boxes
function createBoard(width) {
  var board = document.getElementById("board");

  var boardWidth = parseInt(width);
  if (isNaN(boardWidth)) {
    console.warn("String received");
  } else {
    board.style.width = `${boardWidth}px`;
    board.style.height = `${boardWidth}px`;
    var boxLength = Math.sqrt(boardWidth);
    console.log(`Board width ${boardWidth}`);
    console.log(`Box length ${boxLength}`);
    for (var i = 0; i < boxLength; i++) {
      for (var j = 0; j < boxLength; j++) {
        var box = document.createElement("div");
        box.className = "box";
        box.style.width = `${boxLength}px`;
        box.style.height = `${boxLength}px`;
        board.append(box);
      }
    }
    drawingListener();
  }
}

function drawingListener() {
  var boxes = document.getElementsByClassName("box");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener(
      "mouseover",
      function (event) {
        // highlight the mouseover target
        console.log(event.target);
        event.target.style.background = "orange";

        // reset the color after a short delay
        setTimeout(function () {
          event.target.style.background = "";
        }, 9500);
      },
      false
    );
  }
}

var promptButton = document.getElementById("prompt");

promptButton.addEventListener(
  "click",
  function (event) {
    // highlight the mouseover target
    deleteBoxes();
    let width = prompt("Please enter desired width");
    createBoard(width);
  },
  false
);

function deleteBoxes() {
  var e = document.querySelector("#board");
  //e.firstElementChild can be used.
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}
