document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchInput = document.getElementById('searchInput').value;
  // Here you would make a request to your backend API to fetch car listings based on the searchInput
  // For simplicity, let's assume you have a function called fetchCarsFromBackend that returns car data
  const carData = fetchCarsFromBackend(searchInput);
  displayCars(carData);
});

function displayCars(cars) {
  const carList = document.getElementById('carList');
  carList.innerHTML = ''; // Clear previous results
  cars.forEach(function(car) {
    const carElement = document.createElement('div');
    carElement.classList.add('car');
    carElement.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <h2>${car.make} ${car.model}</h2>
      <p>Year: ${car.year}</p>
      <p>Price: ${car.price}</p>
      <button onclick="rentCar(${car.id})">Rent Now</button>
    `;
    carList.appendChild(carElement);
  });
}

function rentCar(carId) {
  // Logic to rent the selected car
  
}

// This is a placeholder for fetching data from the backend
function fetchCarsFromBackend(searchQuery) {
  // Dummy data for demonstration
  return [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: '$50/day', image: 'https://static.pakwheels.com/2023/10/Screenshot-2023-10-28-142637.jpg' },
    { id: 2, make: 'Honda', model: 'Accord', year: 2019, price: '$60/day', image: 'https://cfx-wp-images.imgix.net/2022/05/Medium-9543-2022AudiA8FirmamentBlue.jpg?auto=compress%2Cformat&fit=scale&h=683&ixlib=php-3.3.0&w=1024&wpsize=large&s=73cd1dbf88d1dcb6a70c6a6490e18da4' },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2018, price: '$55/day', image: 'https://spn-sta.spinny.com/blog/20230522183642/BMW-X3-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6' },
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: '$50/day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpY0RyiZ655TLVzfWI4Fk7uPjXm8f9jdEvfgvH415-qsaBGaj32Chfn6YgSWdZDmBvWk&usqp=CAU' },
    { id: 2, make: 'Honda', model: 'Accord', year: 2019, price: '$60/day', image: 'https://st1.latestly.com/wp-content/uploads/2023/01/resize-16-2.jpg' },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2018, price: '$55/day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHq8yCoh3-A1-Z9DiFfJEcuo41f6kBAhpc7bk7KORky7h6hWaMaAqc94vzhzhIRhbsuA&usqp=CAU' },
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: '$50/day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtRaTGPYydrt7mX_EYrAGETrIKOWMox_jq83NTWZQG0-ouIPt0IT7agwsSfy_VZwG-JQ&usqp=CAU' },
    { id: 2, make: 'Honda', model: 'Accord', year: 2019, price: '$60/day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTiDT4UQnMgyLFTHYRlVekejpz_52U9Esj7xz_Zrv8HT13PReZqO5jk3Qda1wrjY9xK8&usqp=CAU' },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2018, price: '$55/day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRNx8WEQxcn4ahq8pgbyVCyn-C83nZd9RZNrclb_ejOwGfB8QAYns5jK2MLwg1Kj4S5M&usqp=CAU' },
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: '$50/day', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rkTCV46JV5C5oEbKuR4MqHhg2jU_imlR-4rpqk7-_mQTXSxN25AuYAAoOwE5fe8pnKc&usqp=CAU' },
    { id: 2, make: 'Honda', model: 'Accord', year: 2019, price: '$60/day', image: 'data:image/jpeg;base64,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' },
    { id: 3, make: 'Ford', model: 'Fusion', year: 2018, price: '$55/day', image: 'data:image/jpeg;base64,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' }
  ];
}