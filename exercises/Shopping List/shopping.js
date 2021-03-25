const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];

function displayItems() {
  const html = items
    // or {item.complete && 'checked'}
    .map(
      (item) => `<li class="shopping-item">
        <input 
        value="${item.id}" 
        type="checkbox"
        ${item.complete ? 'checked' : ''}>
        <span class ="itemName">${item.name}</span>
        <button 
        aria-label="Remove ${item.name}"
        value="${item.id}" 
        >&times;</button>
        </li>`
    )
    .join('');
  list.innerHTML = html;
}

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.currentTarget);
  const name = e.currentTarget.item.value;

  // if its empty, then dont submit it or add required attribute to input tag in html
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // Push the items into our state
  items.push(item);

  // clear the form
  e.target.reset();

  // very tightly coupled to handle event (if it is to run multiple times), so we will create custom events
  // displayItems();

  // fire off a custom event that will tell anyone else who cares that the items have been
  // updated!
  // dispatch method lives on all dom elements
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function mirrorToLocalStorage() {
  console.info('Saving items to local storage');

  // local storage is text only
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));

  if (lsItems.length) {
    items = lsItems;
    // lsitems.forEach(item => items.push(item));
    // items.push(...lsItems)
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // console.log('Deleting', id);
  // update our items array without this one
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
}

shoppingForm.addEventListener('submit', handleSubmit);

// listener to custom event
list.addEventListener('itemsUpdated', displayItems);

// can add multiple listeners
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();

// Event Delegation: We listen for the click on the list <ul> but then delegate the
// click over to the button if that is what was clicked
list.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    deleteItem(parseInt(event.target.value));
  }
  if (event.target.matches('input[type="checkbox')) {
    markAsComplete(parseInt(event.target.value));
  }
});
