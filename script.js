$(document).ready(function() {
	
	var addItem = ('#addItem');
	var removeItem = ('#Remove');

		function addNewItem(itemText) {
			var listItem = document.createElement("li");
			listItem.innertext = itemText; 
	}
	
	addItem.click(function() {
		var submitText = document.getElementById("submitText");
		var itemText = submitText.value;
	}

	addNewItem(document.getElementById("shoppingList"), itemText);

}); 