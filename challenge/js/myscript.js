var restaurant_items = [
    ["Burger", "img/burger.jpg"], ["Pasta", "img/pasta.jpg"], ["Noodles", "img/noodles.jpg"], ["Toast", "img/toast.jpg"]
];
//Function to output html structure
function outputItems(item, i) {
    return "<div>\n\t\t\t<div>\n\t\t\t<img src=\"" + item[i][1] + "\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t" + item[i][0] + "\n\t\t\t</div\n\t\t\t</div>";
}
//Function to draw the html content
function drawContent(items, i) {
    for (var i_1 = 0; i_1 < items.length; i_1++) {
        //Store the items I loop through in the parameter items from the outpitItems function
        var item = items[i_1];
        //Store html content in a variable
        var html_content = outputItems(item, i_1);
        // console.log(html_content)
        //Append the html content to the div container
        document.getElementById("container").append(html_content);
    }
}
//Call the function with the item (in our case restaurant_items)
drawContent(restaurant_items);
