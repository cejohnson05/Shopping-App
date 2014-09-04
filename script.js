$(document).ready(function() {
	
		var addItem = $('#AddItem');
		var removeItem = $('#Remove');

	addItem.click = $(function() {
		var toAdd = $('input[name=submitText]').val();
		$('#shoppinglist').append('<li><input type="checkbox"/>' + toAdd + '</li>');
	});

	removeItem.click = $(function() {
		$('input:checked').hide();
	});
	
});