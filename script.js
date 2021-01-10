//event handler
$(document).ready(function() {
    var i;
    //array of friend's names  
    var friends = [
        'Sarah', 
        'Shelley', 
        'Amy', 
        'Crystal', 
        'Shannon',
    ];
    //arrary of locations
    var locations = [
        'living room',
        'kitchen',
        'bedroom',
        'bathroom',
        'study',
        'hall',
        'dining room',
        'office',
        'bonus room',
        'closet',
    ];
    //array of weapons
    var weapons = [
        'gun',
        'candlestick',
        'rope',
        'knife',
        'toothpick',
        'razor',
        'book',
        'bottle',
        'crowbar',
        'hammer',
        'icepick',
        'lamp',
        'screwdriver',
        'poison',
        'scarf',
        'wrench',
        'blanket',
        'magazine',
        'heater',
        'pillow',
    ];

var who = `I accuse `;
var what = `with  the `;
var where = `in the `;

for (var i = 0; i < 100; i++) {

    $('body').append(`<h3 class="accusation${i}">Accusation ${i + 1} </h3>`);

  };

  $(`h3`).on('click', function () {

    var randomFriend = Math.floor(Math.random() * Math.floor(5));
    var randomLocation = Math.floor(Math.random() * Math.floor(10));
    var randomWeapon = Math.floor(Math.random() * Math.floor(20));

    var content = who + `${friends[randomFriend]} ` + what + `${weapons[randomWeapon]} ` + where + `${locations[randomLocation]}!`
    $(this).append(content);

  });

});