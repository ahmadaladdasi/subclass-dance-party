$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunctionName == 'MakeBlinkyDancer') {
      var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      750
      );
    } else if (dancerMakerFunctionName == 'MakeWalkingDancer') {
      var dancer = new dancerMakerFunction(
      (0.8 * $("body").height()) + (0.15) * $("body").height() * Math.random(),
      (0.70) * $("body").width() * Math.random(),
      500
      );
    }
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].setPosition($("body").height() * 0.90, $("body").width() / window.dancers.length * i, window.dancers[i].$node);
      }
  });
  $('.interact').on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        var firstTop = window.dancers[i].top;
        var firstLeft = window.dancers[i].left;
        for (var j = i; j < window.dancers.length; j++) {
          var secondTop = window.dancers[j].top;
          var secondLeft = window.dancers[j].left;
          var distance = Math.sqrt(Math.pow(firstTop - secondTop, 2) + Math.pow(firstLeft - secondLeft, 2));
          if (distance < 10) {
            window.dancers[j].flip(window.dancers[j].$node);
          }
        }
      }
  });
  $(this).on('click', '.dancer', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].jump(window.dancers[i].$node);
      }
  });
});

