var MakeWalkingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log(this);
  // debugger;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // debugger;
  // makeBlinkyDancer.prototype.step.(timeBetweenSteps)

};

MakeWalkingDancer.prototype = Object.create(MakeDancer.prototype);
MakeWalkingDancer.prototype.constructor = MakeWalkingDancer;
    
MakeWalkingDancer.prototype.step = function(timeBetweenSteps) {
    
    // call the old version of step at the beginning of any call to this new version of step


    // debugger;
    // var functionPassedIn = makeBlinkyDancer.prototype.step.bind(this, timeBetweenSteps);

    MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // debugger;
    var translateInput = Math.random() * 20 - 10;
    this.$node.css("transform","translate(" + translateInput.toString() + "px" + "," + "0" + "px" + ")");
};