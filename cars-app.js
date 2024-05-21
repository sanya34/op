document.addEventListener('DOMContentLoaded', function() {


    const equipmentItems = document.querySelectorAll(".equipment-item");
    const searchInput = document.getElementById("searchInput");

    // Функція для фільтрації предметів за назвою
    function filterItems(searchTerm) {
        equipmentItems.forEach(item => {
            const itemName = item.querySelector('h2').textContent.toLowerCase();
            if (itemName.includes(searchTerm.toLowerCase())) {
                item.style.display = "block"; // Показувати, якщо співпадіння
            } else {
                item.style.display = "none"; // Приховувати, якщо немає співпадіння
            }
        });
    }

    // Обробник події для введення тексту в поле пошуку
    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.trim(); // Отримати введений текст
        filterItems(searchTerm); // Застосувати фільтр до предметів
    });

    equipmentItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = item.getAttribute('data-image-src');

            // Access specific elements within the clicked equipment item
            const itemName = item.querySelector('h2').textContent;
            const itemDescription = item.querySelector('p:first-of-type').textContent;
            const itemPrice = item.querySelector('p:nth-of-type(2)').textContent;

            // Redirect to product page with all necessary information
            window.location.href = `product.html?id=${id}`;
        });
    });
});