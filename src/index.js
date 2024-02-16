// index.js
let menu = document.getElementById("ramen-menu");
let rName = document.querySelector(".name");
let rRestaurant = document.querySelector(".restaurant");
let rImage = document.querySelector(".detail-image");
let rComment = document.getElementById("comment-display");
let rRating = document.getElementById("rating-display");
let newRamen = document.getElementById("new-ramen");
let ramenId = document.getElementById("");
// Callbacks


// ! ramens is an array of ramens built from the JSON file
const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {
      main(ramens);
    });
};
// ! renders all of the ramen images in the array
function displayRamenImage(ramens) {
  for (let ramen of ramens) {
    let ramenUrl = ramen.image;
    let image = document.createElement("img");
    image.src = ramenUrl;
    image.addEventListener("click", () => {
     handleClick(ramen);
    });
    menu.append(image);

    console.log(ramens);
  }
}
// ! Moves the selected picture to the larger picture
function handleClick(ramen) {
  rRestaurant.textContent = ramen.restaurant;
  rName.textContent = ramen.name
  rImage.src = ramen.image;
  rComment.textContent = ramen.comment;
  rRating.textContent =ramen.rating;
}

// ! adds a new Ramen element to the array 
newRamen.addEventListener("submit", (e) =>    {
e.preventDefault();
let addition = {
  name: e.target["name"].value,
  restaurant: e.target["restaurant"].value,
  image: e.target["image"].value,
  rating: e.target["rating"].value,
  comment: e.target["new-comment"].value
}
let additionArray = [addition];
displayRamenImage(additionArray);
});

const main = (ramens) => {
  displayRamenImage(ramens);
};

displayRamens();

// main()

// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };