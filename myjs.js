let boxes = document.querySelectorAll(".box"); 
let winner = document.querySelector(".winning"); 
let resetbutton = document.querySelector(".reset"); 
const winningpattern = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] 
]; 
let turn = "true"; 
 
boxes.forEach( 
    (box) => { 
        box.addEventListener("click", () => { 
            if (turn === "true") { 
                box.innerText = "X"; 
                turn = "false"; 
            } 
            else { 
                box.innerText = "0"; 
                turn = "true"; 
            } 
            box.disabled = true; 
            checktie(); 
            checkwinningpattern(); 
        }); 
    } 
); 
const disable = () => { 
    for (box of boxes) { 
        box.disabled = true; 
    } 
}; 
 

const checktie = () => { 
  for (box of boxes) { 
    if (box.disabled === false) { 
      return; 
    } 
    console.log("inside checktie"); 
  } 
  console.log("gamea is tie"); 
  winner.innerText = `oops game is tie!!`; 
  winner.classList.remove("hide"); 
  // winner.innerText="Game is Tie!"; 
  enable(); 
  turn = "true"; 
}; 
const checkwinningpattern = () => { 
  // console.dir (winningpattern); 
  for (pattern of winningpattern) { 
    let one = boxes[pattern[0]].innerText; 
    let two = boxes[pattern[1]].innerText; 
    let three = boxes[pattern[2]].innerText; 
    // console.log(one, two, three); 
    if ( 
      (one === "X" && two === "X" && three === "X") || 
      (one === "0" && two === "0" && three === "0") 
    ) {
      // console.log("player winnn!", one); 
    //to show winning in top 
    winner.innerText = `Winner is ${one}!!`; 
    //unhide the previous content 
    winner.classList.remove("hide"); 
    //desable all buttons after winning the game 
    disable(); 
    }
  } 
}; 
 

const enable = () => { 
  for (box of boxes) { 
    box.disabled = false; 
    box.innerText = ""; 
  } 
}; 
 
//now form reset button 
const resetgame = () => { 
  //enable all button again and remove all text also add hide class 
  enable(); 
  winner.classList.add("hide"); 
  //also turn turn again of x 
  turn = "true"; 
}; 
resetbutton.addEventListener("click", resetgame); 
