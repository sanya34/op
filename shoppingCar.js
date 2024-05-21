document.addEventListener('DOMContentLoaded', () => {
    // Получаем ID байков из localStorage
    let boughtBikesStr = localStorage.getItem(`boughtBikesStr.${userData.email}`);
    let boughtBikes = boughtBikesStr ? JSON.parse(boughtBikesStr) : {};

    // Получаем список байков с сервера
    fetch('https://f276-31-128-76-81.ngrok-free.app/bikes', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(bikes => {
            let containerBikes = document.querySelector('.container-bikes');

            // Фильтруем байки по ID из localStorage
            let filteredBikes = bikes.filter(bike => boughtBikes.hasOwnProperty(bike.id));

            // Отображаем отфильтрованные байки на странице
            filteredBikes.forEach(bike => {
                let bikeDiv = document.createElement('div');
                bikeDiv.classList.add('bike');

                bikeDiv.innerHTML = `
                     <input id="bike-id" type="hidden" value="${bike.id}">
                     <h2>${bike.name}</h2>
                     <p><strong>Рік випуску:</strong> ${bike.year}</p>
                     <img src="${bike.imageURL}" alt="${bike.name}">
                     <button onclick="deleteBike(${bike.id})">Видалити з корзини</button>`;

                bikeDiv.addEventListener('click', () => {
                    window.location.href = `car.html?id=${bike.id}&isBought=true`;
                });

                containerBikes.appendChild(bikeDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching bikes:', error);
        });
});