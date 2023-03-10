var year = document.getElementById("year");
var text = document.getElementById("text");

year.onchange = function() {
    var date = year.value;
    var arr = date.split("-");
    var animal = "Rat";

    switch (arr[0] % 12) {
        case 0:
            animal = "Monkey";
            break;
        case 1:
            animal = "Rooster";
            break;
        case 2:
            animal = "Dog";
            break;
        case 3:
            animal = "Pig";
            break;
        case 4:
            animal = "Rat";
            break;
        case 5:
            animal = "Ox";
            break;
        case 6:
            animal = "Tiger";
            break;
        case 7:
            animal = "Rabbit";
            break;
        case 8:
            animal = "Dragon";
            break;
        case 9:
            animal = "Snake";
            break;
        case 10:
            animal = "Horse";
            break;
        default:
            animal = "Goat";
    }

    text.innerHTML =
        "Depending on the year you provide, your zodiac animal is the Year of the (" +
        animal +
        ").";
};