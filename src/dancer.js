// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // debugger;
  // makeDancer.prototype.setPosition.call(this,top, left);
  this.setPosition(top, left, this.$node);

// debugger;
  // makeDancer.prototype.step.call(this,timeBetweenSteps);
  this.step(timeBetweenSteps);

};

  makeDancer.prototype.step = function(timeBetweenSteps) {
  // console.log('Hey im gettin triggerred', ' and i am ', this, ' with this much time ',  timeBetweenSteps);
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // debugger;
    // setTimeout(function(blinkyFunction){
    //   if (blinkyFunction) {
    //     // debugger; 
    //     blinkyFunction();
    //   } else {
    //     makeDancer.prototype.step(timeBetweenSteps)
    //   }
    // }, timeBetweenSteps);
    // setTimeout(function(){ makeDancer.prototype.step(timeBetweenSteps) }
    //  , timeBetweenSteps);
    var context = this;
    setTimeout(this.step.bind(this), this.timeBetweenSteps);


    
  };

  makeDancer.prototype.setPosition = function(top, left, node) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    // debugger;
    node.css(styleSettings);
  };