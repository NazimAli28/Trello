// Initialize SortableJS on lists
const lists = document.querySelectorAll('.list');
lists.forEach(list => {
    new Sortable(list, {
        group: 'shared',
        animation: 150,
        draggable: '.card'
    });
});
