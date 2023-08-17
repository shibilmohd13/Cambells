
var toggle = function() {
    var elements = document.querySelectorAll('.css-disabled-items');
    var button = document.getElementById('css-show-button');

    elements.forEach(function(element) {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'flex';
        button.textContent = 'Show Less';
    } else {
        element.style.display = 'none';
        button.textContent = 'Show More';
    }
    });
}
