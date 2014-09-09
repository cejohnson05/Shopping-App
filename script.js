$(document).ready(function () {
    var addItem = $('#addItem');
    var removeItem = $('#remove');
    
    addItem.click(function () {
        var toAdd = $('input#text').val();
        $('#shoppingList').append('<li><input type="checkbox"/>' + toAdd + '</li>');
    });

    removeItem.click(function () {
        var toRemove = $('<li>input type="checkbox"/></li>').checked();
        alert(toRemove);
        $('li:contains('+toRemove+')').remove();
    });

});
	