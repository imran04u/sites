// Chart
  window.onload = function () {
    var chart = new CanvasJS.Chart("equityfund",
    {

      animationEnabled: true,
      axisX:{
           gridDashType: "dash",
        gridColor: "#fcfcfc",
        tickColor: "#fcfcfc",
        valueFormatString: "DD/MMM"

      },                        
                        toolTip:{
                          shared:true
                        },
      theme: "theme2",
      axisY: {
         gridDashType: "dash",
        gridColor: "#eee",
        tickColor: "#eee"
      },
      legend:{
        verticalAlign: "center",
        horizontalAlign: "right"
      },
      data: [
      {        
        type: "line",
        showInLegend: true,
        lineThickness: 2,
        name: "Fund",
        markerType: "square",
        color: "#F08080",
        dataPoints: [
        { x: new Date(2010,0,3), y:240 },
        { x: new Date(2010,0,5), y: 700 },
        { x: new Date(2010,0,7), y: 710 },
        { x: new Date(2010,0,9), y: 658 },
        { x: new Date(2010,0,11), y: 734 },
        { x: new Date(2010,0,13), y: 453 },
        { x: new Date(2010,0,15), y: 847 },
        { x: new Date(2010,0,17), y: 853 },
        { x: new Date(2010,0,19), y: 869 },
        { x: new Date(2010,0,21), y: 943 },
        { x: new Date(2010,0,23), y: 970 }
        ]
      },
      {        
        type: "line",
        showInLegend: true,
        name: "Tadawul",
        color: "#20B2AA",
        lineThickness: 2,

        dataPoints: [
        { x: new Date(2010,0,3), y: 420 },
        { x: new Date(2010,0,5), y: 560 },
        { x: new Date(2010,0,7), y: 540 },
        { x: new Date(2010,0,9), y: 558 },
        { x: new Date(2010,0,11), y: 544 },
        { x: new Date(2010,0,13), y: 693 },
        { x: new Date(2010,0,15), y: 657 },
        { x: new Date(2010,0,17), y: 503 },
        { x: new Date(2010,0,19), y: 639 },
        { x: new Date(2010,0,21), y: 673 },
        { x: new Date(2010,0,23), y: 660 }
        ]
      }

      
      ],
          legend:{
            cursor:"pointer",
            itemclick:function(e){
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else{
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
    });

chart.render();
}


// Owl Carousel
$(document).ready(function (){
  setTimeout(function(){ 
  // Declare Carousel jquery object
  var owl = $('#bmkhome');

  // Carousel initialization
  owl.owlCarousel({
      loop:true,
      margin:0,
      navSpeed:500,
      nav:false,
      dots:true,
      items:1,
      autoplay:true,
      autoplayTimeout:7000
  });


  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })
 }, 200);
});