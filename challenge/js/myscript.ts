const restaurant_items: [string, string][]= [
["Burger", "img/burger.jpg"], ["Pasta", "img/pasta.jpg"], ["Noodles", "img/noodles.jpg"], ["Toast", "img/toast.jpg"]
];

//Function to output html structure
function outputItems(item, i) {
	return `<div>
			<div>
			<img src="${item[i][1]}">
			</div>
			<div>
			${item[i][0]}
			</div
			</div>`
	}

//Function to draw the html content
function drawContent(items, i) {
	for(let i = 0; i < items.length; i++) {

	
		//Store the items I loop through in the parameter items from the outpitItems function
		var item = items[i];
		//Store html content in a variable
		var html_content = outputItems(item,i);
		// console.log(html_content)
		//Append the html content to the div container
		document.getElementById("container").append(html_content);

	}
}

//Call the function with the item (in our case restaurant_items)
drawContent(restaurant_items);