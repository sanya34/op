document.addEventListener('DOMContentLoaded', () => {

    function getQueryParams() {
        const params = {};
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        for (const [key, value] of urlParams.entries()) {
            params[key] = value;
        }
        return params;
    }


    // Извлекаем ID байка из URL параметров
    const params = getQueryParams();
    const bikeId = params.id;
    const isBought = params.isBought;

    // Отправляем запрос на сервер для получения данных байка
    fetch(`http://localhost:8080/bikes/${bikeId}`,{
        method:"GET",
        headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
        })
    })
        .then(response => response.json())
        .then(bike => {
            // Находим контейнер для деталей продукта
            const productDetails = document.getElementById('product-details');

            // Заполняем контейнер деталями байка
            productDetails.innerHTML = `
                <h2>${bike.name}</h2>
                <p><strong>Рік випуску:</strong> ${bike.year}</p>
                <p><strong>Марка:</strong> ${bike.mark}</p>
                <p><strong>Модель:</strong> ${bike.modelName}</p>
                <p><strong>Об'єм двигуна:</strong> ${bike.engineCapacity} куб.см</p>
                <p><strong>Пробіг:</strong> ${bike.mileage} км</p>
                <p><strong>Ціна:</strong> ${bike.price} $</p>
                <img src="${bike.imageURL}" alt="${bike.name}" style="max-width: 100%;height: auto; flex: 1 1 auto;">`;
            if(!isBought){
                productDetails.innerHTML += `<button onclick="buy(${bike.id})">Придбати</button`;
            }

        })
        .catch(error => {
            console.error('Error fetching bike details:', error);
        });
});