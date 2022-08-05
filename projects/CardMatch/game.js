const cards = [
  { type: '♠', typeName: 'spades', color: 'black', num: '2' },
  { type: '♠', typeName: 'spades', color: 'black', num: '3' },
  { type: '♠', typeName: 'spades', color: 'black', num: '4' },
  { type: '♠', typeName: 'spades', color: 'black', num: '5' },
  { type: '♠', typeName: 'spades', color: 'black', num: '6' },
  { type: '♠', typeName: 'spades', color: 'black', num: '7' },
  { type: '♠', typeName: 'spades', color: 'black', num: '8' },
  { type: '♠', typeName: 'spades', color: 'black', num: '9' },
  { type: '♠', typeName: 'spades', color: 'black', num: '10' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'J' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'Q' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'K' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'A' },

  { type: '♣', typeName: 'club', color: 'black', num: '2' },
  { type: '♣', typeName: 'club', color: 'black', num: '3' },
  { type: '♣', typeName: 'club', color: 'black', num: '4' },
  { type: '♣', typeName: 'club', color: 'black', num: '5' },
  { type: '♣', typeName: 'club', color: 'black', num: '6' },
  { type: '♣', typeName: 'club', color: 'black', num: '7' },
  { type: '♣', typeName: 'club', color: 'black', num: '8' },
  { type: '♣', typeName: 'club', color: 'black', num: '9' },
  { type: '♣', typeName: 'club', color: 'black', num: '10' },
  { type: '♣', typeName: 'club', color: 'black', num: 'J' },
  { type: '♣', typeName: 'club', color: 'black', num: 'Q' },
  { type: '♣', typeName: 'club', color: 'black', num: 'K' },
  { type: '♣', typeName: 'club', color: 'black', num: 'A' },

  { type: '♥', typeName: 'hearts', color: 'red', num: '2' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '3' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '4' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '5' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '6' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '7' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '8' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '9' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '10' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'J' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'Q' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'K' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'A' },

  { type: '♦', typeName: 'diamond', color: 'red', num: '2' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '3' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '4' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '5' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '6' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '7' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '8' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '9' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '10' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'J' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'Q' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'K' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'A' },
];


const cardContainerDiv = document.querySelector("#card-container");
const restartBtnDiv = document.querySelector("#restart-button");

let randomCardsArray = [...cards].sort((a, b) => {
  return 0.5 - Math.random();
})

for (let i = 0; i < 52; i++) {
  let cardDiv = document.createElement("div");
  console.log(document.createElement("div"));
  cardDiv.classList.add("card"); // <div class="card">   </div>

  //id for each cardDiv
  cardDiv.setAttribute("id", `id${i}`);

  let cardShapeDiv = document.createElement("div");
  let numberDiv = document.createElement("div");

  cardShapeDiv.innerText = randomCardsArray[i]["type"];
  cardShapeDiv.style.color = randomCardsArray[i]["color"];

  numberDiv.innerText = randomCardsArray[i]["num"];
  numberDiv.style.color = randomCardsArray[i]["color"];

  cardContainerDiv.appendChild(cardDiv);
  cardDiv.appendChild(numberDiv);
  cardDiv.appendChild(cardShapeDiv);


  cardShapeDiv.classList.add("hide-card");
  numberDiv.classList.add("hide-card");
  cardDiv.classList.add("color-blue");

}

for (let i = 0; i < 52; i++) {

  document.querySelector(`#id${i}`).onclick = () => {
    document.querySelector(`#id${i}`).classList.remove("color-blue");
    document.querySelector(`#id${i}  .hide-card`).classList.remove("hide-card");
    document.querySelector(`#id${i}  .hide-card`).classList.remove("hide-card")
  }

}


restartBtnDiv.onclick = () => {
  let randomCardsArray = [...cards].sort((a, b) => {
    return 0.5 - Math.random();
  })
  cardContainerDiv.innerHTML = "";

  for (let i = 0; i < 52; i++) {
    let cardDiv = document.createElement("div");
    console.log(document.createElement("div"));
    cardDiv.classList.add("card");

    //id for each cardDiv
    cardDiv.setAttribute("id", `id${i}`);

    let cardShapeDiv = document.createElement("div");
    let numberDiv = document.createElement("div");

    cardShapeDiv.innerText = randomCardsArray[i]["type"];
    cardShapeDiv.style.color = randomCardsArray[i]["color"];

    numberDiv.innerText = randomCardsArray[i]["num"];
    numberDiv.style.color = randomCardsArray[i]["color"];

    cardContainerDiv.appendChild(cardDiv);
    cardDiv.appendChild(numberDiv);
    cardDiv.appendChild(cardShapeDiv);

    cardShapeDiv.classList.add("hide-card");
    numberDiv.classList.add("hide-card");
    cardDiv.classList.add("color-blue");
  }

  for (let i = 0; i < 52; i++) {
    document.querySelector(`#id${i}`).onclick = () => {
      document.querySelector(`#id${i}`).classList.remove("color-blue");
      document.querySelector(`#id${i}  .hide-card`).classList.remove("hide-card");
      document.querySelector(`#id${i}  .hide-card`).classList.remove("hide-card")
    }
  }
}