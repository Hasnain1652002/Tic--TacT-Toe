let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let msg_container = document.querySelector(".msg_container")

let turnO = true;

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msg_container.classList.add("hide");

}

const enableboxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1===pos2 && pos2===pos3){
                console.log("winner" ,pos1)
                showwinner(pos1);
            }
        }
    }
};

boxes.forEach(box => {
    box.addEventListener("click",() => {
        console.log("box was clicked")
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

newgame.addEventListener("click",resetgame);

reset.addEventListener("click",resetgame);