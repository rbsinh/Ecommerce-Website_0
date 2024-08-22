// Initialize and add the map
function initMap() {
    // The location of Uluru
    var valeo = { lat: 12.8424113, lng: 80.2257052 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: valeo });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: valeo, map: map });
}


// toggle menu
var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
