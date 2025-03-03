//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

const selectMovie = document.querySelector("#selectMovie");
const movieName = document.querySelector("#movieName");
const moviePrice = document.querySelector("#moviePrice");
const seats = document.querySelectorAll(".seat");
const selectedSeatsHolder = document.querySelector(".selectedSeatsHolder");
const noSelected = document.querySelector(".noSelected");
const numberOfSeat = document.querySelector("#numberOfSeat");
const totalPrice = document.querySelector("#totalPrice");
const proceedBtn = document.querySelector('#proceedBtn');
const cancelBtn = document.querySelector('#cancelBtn');

movieName.textContent = moviesList[0].movieName;
moviePrice.textContent = `$ ${moviesList[0].price}`;

moviesList.forEach((movie) => {
  const option = document.createElement("option");
  option.setAttribute("value", movie.movieName);
  option.textContent = movie.movieName;
  selectMovie.append(option);
});

selectMovie.addEventListener("change", (event) => {
  movieName.textContent = event.target.value;
  const selectedMovie = moviesList.find(
    (movie) => movie.movieName === event.target.value
  );

  moviePrice.textContent = `$ ${selectedMovie.price}`;
});

let totalSeat = 0;
let price = 0;
seats.forEach((seat, index) => {
  if (seat.classList.contains("occupied")) {
    seat.style.cursor = "not-allowed";
    return;
  }

  seat.addEventListener("click", () => {
    if (!seat.classList.contains("selected")) {
      seat.className = "seat selected";
      seat.setAttribute = ('seatId' , index)

      const div = document.createElement("div");
      div.className = "selectedSeat";
      div.innerHTML = parseInt(index) + 1;

      selectedSeatsHolder.append(div);

      if (noSelected) {
        noSelected.remove();
      }

      numberOfSeat.innerHTML = ++totalSeat;
      let currentMoviePrice = parseInt(moviePrice.innerHTML.slice(2));
      price += currentMoviePrice;
      totalPrice.innerHTML = `$ ${price}`;
    }

  });
});

proceedBtn.addEventListener('click' , () =>{
  seats.forEach((seat) =>{
    if(seat.classList.contains('selected')){
      seat.className = 'seat occupied'
    }

    selectedSeatsHolder.innerHTML = ''
    selectedSeatsHolder.append(noSelected);
    numberOfSeat.innerHTML = 0
    totalPrice.innerHTML = `$ 0`
  })
})

cancelBtn.addEventListener('click' , () =>{
  seats.forEach((seat) =>{
    if(seat.classList.contains('selected')){
      seat.className = 'seat'
    }

    selectedSeatsHolder.innerHTML = ''
    selectedSeatsHolder.append(noSelected);
    numberOfSeat.innerHTML = 0
    totalPrice.innerHTML = `$ 0`;
    // reseting the values 
    price = 0;  
    totalSeat = 0
  })
})
