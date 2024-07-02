const items = [
  {
        id: "9b24be2c-1f0a-11ee-be56-0242ac120002",
        imageUrl: "https://i.pinimg.com/originals/0e/b5/d4/0eb5d40de268f48c828dd5c00700ea80.jpg",
        imageProfileImage: "https://via.placeholder.com/150",
        profileName: "manuel",
        suggestedCategory: "fashion",
        title: "Stylish Outfit"
  },
  ];


function createItemElement(item) {
      const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    itemDiv.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.title}">
        <div class="item-info">
            <img src="${item.imageProfileImage}" alt="${item.profileName}" class="profile-image">
            <h3>${item.profileName}</h3>
            <p>${item.title}</p>
        </div>
    `;
    
    return itemDiv;
}

function displayItems(filteredItems) {
    const itemContainer = document.getElementById('item-container');
    itemContainer.innerHTML = '';
    filteredItems.forEach(item => {
        const itemElement = createItemElement(item);
        itemContainer.appendChild(itemElement);
    });
}

document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.profileName.toLowerCase().includes(query)
    );
    displayItems(filteredItems);
});

// Initial display of all items
displayItems(items);
