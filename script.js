$(document).ready(function () {
    var addItem = $('#addItem');
    var removeItem = $('#remove');
    
    addItem.click(function () {
        var toAdd = $('input#text').val();
       	var input = $('input#text');
        $('#shoppingList').append('<li><input type="checkbox"/>' + toAdd + '</li>');
        input.val(""); 
    });

    removeItem.click(function () {
        var toRemove = $(':checked'); 
        toRemove.parent().remove(); 
    });

});
	