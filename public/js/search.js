function update(event) {
    event.preventDefault();
    var select = document.getElementById('select-specialty');
    var value = select.options[select.selectedIndex].value;

    console.log(value);
    
    document.location.replace(`/search/${value}`)

};


document.querySelector('#search-form').addEventListener('submit', update);

