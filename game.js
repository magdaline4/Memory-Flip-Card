const cards = document.querySelectorAll(".card");

let matchcard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipcard(e) {
    let clickedcard = e.target;
    if (clickedcard !== cardOne && !disableDeck) {

        clickedcard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedcard;
        }
        cardTwo = clickedcard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
        matchcards(cardOneImg, cardTwoImg);
    }


}

function matchcards(img1, img2) {
    if (img1 === img2) {
        matchcard++;
        if (matchcard == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipcard);
        cardTwo.removeEventListener("click", flipcard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 600);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}


function shuffleCard() {
    matchcard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `images/img-${arr[index]}.png`;
        card.addEventListener("click", flipcard);
    });
}

shuffleCard();

cards.forEach(card => {

    card.addEventListener("click", flipcard);
});