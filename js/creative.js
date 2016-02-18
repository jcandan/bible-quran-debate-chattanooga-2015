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

    var myLatLng = {
        lat: 35.048127268401366,
        lng: -85.29716491699219
    };

    var mapOpt = {
        center:myLatLng,
        zoom:16,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("js-map-canvas"),mapOpt);

    // polygon around parking 5th St parking garage
    var myCoordinates = [
        new google.maps.LatLng(35.049757,-85.298935),
        new google.maps.LatLng(35.049563,-85.298426),
        new google.maps.LatLng(35.049023,-85.298737),
        new google.maps.LatLng(35.049203,-85.299241)
    ];
    var polyOptions = {
        path: myCoordinates,
        strokeWeight: 0,
        fillColor: "#00457C",
        fillOpacity: 1
    }
    var it = new google.maps.Polygon(polyOptions);
    it.setMap(map);

    // polygon around EMCS building
    var myCoordinates = [
        new google.maps.LatLng(35.047038,-85.295615),
        new google.maps.LatLng(35.046959,-85.295389),
        new google.maps.LatLng(35.046603,-85.295582),
        new google.maps.LatLng(35.046529,-85.295395),
        new google.maps.LatLng(35.046810,-85.295234),
        new google.maps.LatLng(35.046726,-85.294998),
        new google.maps.LatLng(35.046480,-85.295143),
        new google.maps.LatLng(35.046283,-85.294622),
        new google.maps.LatLng(35.046050,-85.294756),
        new google.maps.LatLng(35.046489,-85.295931)
    ];
    var polyOptions = {
        path: myCoordinates,
        strokeWeight: 0,
        fillColor: "#00457C",
        fillOpacity: 1
    }

    var it = new google.maps.Polygon(polyOptions);
    it.setMap(map);

    // polyline path from 5th St garage to EMCS building
    var myCoordinates = [
        new google.maps.LatLng(35.049076,-85.299203),
        new google.maps.LatLng(35.047530,-85.295266),
        new google.maps.LatLng(35.047479,-85.295285),
        new google.maps.LatLng(35.047451,-85.295317),
        new google.maps.LatLng(35.047440,-85.295362),
        new google.maps.LatLng(35.047444,-85.295440),
        new google.maps.LatLng(35.047422,-85.295475),
        new google.maps.LatLng(35.047396,-85.295475),
        new google.maps.LatLng(35.047291,-85.295352),
        new google.maps.LatLng(35.047256,-85.295344),
        new google.maps.LatLng(35.047227,-85.295365),
        new google.maps.LatLng(35.047225,-85.295416),
        new google.maps.LatLng(35.047256,-85.295518),
        new google.maps.LatLng(35.047256,-85.295553),
        new google.maps.LatLng(35.047234,-85.295582),
        new google.maps.LatLng(35.046999,-85.295706)
    ];
    var polyOptions = {
        path: myCoordinates,
        strokeColor: "#FF0000",
        strokeOpacity: 0.5,
        strokeWeight: 5
    }

    var it = new google.maps.Polyline(polyOptions);
    it.setMap(map);

    var marker_color = 'rgba(130, 18, 10, 0.8)';

    // Parking icon marker
    var marker = new MarkerWithLabel({
        position: {lat: 35.04909343402733, lng: -85.2992033958435},
        map: map, //global variable 'map' from opening function
        icon: ' ',
        labelContent: '<i class="fa fa-product-hunt fa-3x" style="color:' + marker_color + ';"></i>',
        labelAnchor: new google.maps.Point(30,25)
    });

    // Map icon marker
    var marker = new MarkerWithLabel({
        position: {lat: 35.04689758653045, lng: -85.29557704925537},
        map: map, //global variable 'map' from opening function
        icon: ' ',
        labelContent: '<i class="fa fa-map-marker fa-4x" style="color:' + marker_color + ';"></i>',
        labelAnchor: new google.maps.Point(25,35)
    });

})(jQuery); // End of use strict
