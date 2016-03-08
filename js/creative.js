/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // disable and re-enable mouse scroll on map
    $('#map').click(function () {
        $('#map').css('pointer-event', 'auto');
    });

    $('#map').mouseleave(function() {
        $('#map').css('pointer-event', 'none');
    });

    var center = {
        lat: 35.046520992754715,
        lng: -85.29499769210815
    };

    var mapOpt = {
        center:center,
        zoom:17,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("js-map-canvas"),mapOpt);

    // polygon around parking 5th St parking garage
    var myCoordinates = [
        new google.maps.LatLng(35.047425,-85.296789),
        new google.maps.LatLng(35.046792,-85.297154),
        new google.maps.LatLng(35.046502,-85.296344),
        new google.maps.LatLng(35.047104,-85.295990),
        new google.maps.LatLng(35.047113,-85.295529),
        new google.maps.LatLng(35.046880,-85.294885),
        new google.maps.LatLng(35.046520,-85.294987),
        new google.maps.LatLng(35.046318,-85.294456),
        new google.maps.LatLng(35.046700,-85.294236),
        new google.maps.LatLng(35.047051,-85.294096),
        new google.maps.LatLng(35.047473,-85.295175),
        new google.maps.LatLng(35.047201,-85.295314),
        new google.maps.LatLng(35.047174,-85.295405),
        new google.maps.LatLng(35.047245,-85.295641),
        new google.maps.LatLng(35.047574,-85.295480),
        new google.maps.LatLng(35.047657,-85.295668),
        new google.maps.LatLng(35.047280,-85.295926),
        new google.maps.LatLng(35.047218,-85.296215),
        new google.maps.LatLng(35.047420,-85.296779)
    ];
    var polyOptions = {
        path: myCoordinates,
        strokeWeight: 0,
        fillColor: "#f05f40",
        fillOpacity: 0.3
    }
    var it = new google.maps.Polygon(polyOptions);
    it.setMap(map);

    // polygon around EMCS building
    var myCoordinates = [
        new google.maps.LatLng(35.046824,-85.295236),
        new google.maps.LatLng(35.046735,-85.294999),
        new google.maps.LatLng(35.046486,-85.295140),
        new google.maps.LatLng(35.046584,-85.295371)
    ];
    var polyOptions = {
        path: myCoordinates,
        strokeWeight: 0,
        fillColor: "#00457C",
        fillOpacity: 1
    }

    var it = new google.maps.Polygon(polyOptions);
    it.setMap(map);

    var marker_color = 'rgba(240, 95, 64, 1)';

    // Parking icon marker
    var marker = new MarkerWithLabel({
        position: {lat: 35.046923937050344, lng: -85.29460072517395},
        map: map, //global variable 'map' from opening function
        icon: ' ',
        labelContent: '<i class="fa fa-product-hunt fa-3x" style="color:' + marker_color + ';"></i>',
        labelAnchor: new google.maps.Point(20,25)
    });

    // Map icon marker
    var marker = new MarkerWithLabel({
        position: center,
        map: map, //global variable 'map' from opening function
        icon: ' ',
        labelContent: '<i class="fa fa-map-marker fa-4x" style="color:' + marker_color + ';"></i>',
        labelAnchor: new google.maps.Point(30,55)
    });

})(jQuery); // End of use strict
