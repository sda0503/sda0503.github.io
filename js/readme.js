var reader = new XMLHttpRequest();
reader.open('GET', './README.md', true);
reader.overrideMimeType('text/plain; charset=utf-8');
reader.onload = function() {
    if (reader.status == 200) {
        $('#readme pre').text(reader.responseText);
    };
};
reader.send(null);

if($('#readme_text').is(":checked")){
    $('#readme pre').fadeIn();
}
else{
    $('#readme pre').fadeOut();
}