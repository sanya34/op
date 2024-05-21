function buy(id) {
    // Получаем строку из localStorage и парсим ее, если она существует
    let boughtBikes = localStorage.getItem(`boughtBikesStr.${userData.email}`);
    boughtBikes = boughtBikes ? JSON.parse(boughtBikes) : {};

    // Если байк уже куплен, увеличиваем количество, иначе добавляем новый байк с количеством 1
    if (boughtBikes[id]) {
        boughtBikes[id]++;
    } else {
        boughtBikes[id] = 1;
    }

    // Сохраняем обновленный объект обратно в localStorage
    localStorage.setItem(`boughtBikesStr.${userData.email}`, JSON.stringify(boughtBikes));

    // Обновляем отображение количества купленных байков
    updateBoughtCount();
}
function deleteBike(id) {
    // Получаем строку из localStorage и парсим ее в объект
    let boughtBikes = localStorage.getItem(`boughtBikesStr.${userData.email}`);
    boughtBikes = boughtBikes ? JSON.parse(boughtBikes) : {};

    // Проверяем, есть ли байк с таким ID в корзине
    if (boughtBikes[id]) {
        // Удаляем байк из корзины
        delete boughtBikes[id];
        // Сохраняем обновленный объект обратно в localStorage
        localStorage.setItem(`boughtBikesStr.${userData.email}`, JSON.stringify(boughtBikes));
        window.location = "shoppingCart.html";
    }
    // Остановка всплытия события
    event.stopPropagation();
}


// Функция для обновления отображения количества купленных байков
function updateBoughtCount() {
    let boughtBikes = localStorage.getItem(`boughtBikesStr.${userData.email}`);
    boughtBikes = boughtBikes ? JSON.parse(boughtBikes) : {};

    // Считаем общее количество купленных байков
    const totalBoughtCount = Object.values(boughtBikes).reduce((sum, count) => sum + count, 0);

    // Находим элементы для отображения количества купленных байков
    const cartCountElement = document.getElementById('cart-count');
    const cartCountElementMobile = document.getElementById('cart-count-mobile');

    // Обновляем текст в элементах
    cartCountElement.textContent = `${totalBoughtCount}`;
    cartCountElementMobile.textContent = `${totalBoughtCount}`;
}
