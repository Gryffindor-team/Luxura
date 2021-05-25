
function clicked() {
    // Here we select the html element with id name and
    // we read it's value.
    var name = document.getElementById('btn').value;

    // Then my simply concatenating the Hiya with the above value, name
    // we show to the confirm value the message we want.
    return confirm('Hiya,'+name);
}
clicked();