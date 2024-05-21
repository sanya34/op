// Получаем данные из localStorage
let boughtBikesStr = localStorage.getItem('boughtBikesStr');
let boughtBikes = boughtBikesStr ? JSON.parse(boughtBikesStr) : {};

// Запрос к серверу для получения списка байков
fetch('https://f276-31-128-76-81.ngrok-free.app/bikes', {
    method: 'GET'
}).then(response => response.json())
    .then(bikes => {
        let containerBikes = document.querySelector('.container-bikes');
        bikes.forEach(bike => {
            let bikeDiv = document.createElement('div');
            bikeDiv.classList.add('bike');

            bikeDiv.innerHTML = `
                <input id="bike-id" type="hidden" value="${bike.id}">
                <h2>${bike.name}</h2>
                <p><strong>Рік випуску:</strong> ${bike.year}</p>
                <p><strong>Ціна:</strong> ${bike.price} $</p>
                <img src="${bike.imageURL}" alt="${bike.name}">`;

            bikeDiv.addEventListener('click', () => {
                let url = `car.html?id=${bike.id}`;
                if (boughtBikes[bike.id]) {
                    url += '&isBought=true';
                }
                window.location.href = url;
            });

            containerBikes.appendChild(bikeDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching bikes:', error);
    });