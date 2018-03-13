// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  if (this instanceof MakeBlinkyDancer) {
    this.$node = $('<span class="dancer"><span class="BlinkyDancer"></span></span>');
  } else if (this instanceof MakeGrowingDancer) {
    this.$node = $('<span class="dancer"><span class="GrowingDancer"></span></span>');
  } else if (this instanceof MakeWalkingDancer) {
    this.$node = $('<span class="dancer"><span class="WalkingDancer"></span></span>');
  } else {
    this.$node = $('<span class="dancer"></span>');
  }
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // debugger;
  // MakeDancer.prototype.setPosition.call(this,top, left);
  this.setPosition(top, left, this.$node);

// debugger;
  // MakeDancer.prototype.step.call(this,timeBetweenSteps);
  this.step(timeBetweenSteps);

  // this.flip(this.$node);

};

  MakeDancer.prototype.step = function(timeBetweenSteps) {
  // console.log('Hey im gettin triggerred', ' and i am ', this, ' with this much time ',  timeBetweenSteps);
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // debugger;
    // setTimeout(function(blinkyFunction){
    //   if (blinkyFunction) {
    //     // debugger; 
    //     blinkyFunction();
    //   } else {
    //     MakeDancer.prototype.step(timeBetweenSteps)
    //   }
    // }, timeBetweenSteps);
    // setTimeout(function(){ MakeDancer.prototype.step(timeBetweenSteps) }
    //  , timeBetweenSteps);
    var context = this;
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  MakeDancer.prototype.setPosition = function(top, left, node) {
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

  MakeDancer.prototype.flip = function(node) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    console.log('flipping now');
    this.$node.css("transform","rotate(180deg)");
  };