//Create array with value from 1 to 10
var array_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array_numbers);
//Create for loop
function multiplicateNumbers() {
    //Create loop for first array_numbers
    for (var i = 0; i < array_numbers.length; i++) {
        //Create loop for second array
        for (var j = 0; j < array_numbers.length; j++) {
            //Multiply each number from both arrays and output result in document
            var result = array_numbers[i] + "x" + array_numbers[j] + "=" + array_numbers[i] * array_numbers[j] + "<br>";
            document.write(result + "<br>");
        }
    }
}
multiplicateNumbers();
