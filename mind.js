const cardFlip = document.querySelectorAll(".card");

let emoji = ["🍀", "🍀", "🌷", "🌷"];
let cardArr = [];

function flipCard() {
  this.classList.toggle("flip");
  cardArr.push(this);
  console.log(cardArr);
}
//this--> tuhain darsan element
//toggle--> elementees hoornd class nemj hasna

cardFlip.forEach((card) => {
  card.addEventListener("click", flipCard);
});
//forEach--> element neg negeer songon avch(click hiihed songono) addEventListener nemj bga

const shuffleEmoji = [...emoji].sort(() => 0.5 - Math.random());
console.log(shuffleEmoji);
