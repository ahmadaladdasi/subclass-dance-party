var MakeOtherDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log(this);
  // debugger;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // debugger;
  // makeBlinkyDancer.prototype.step.(timeBetweenSteps)

};

MakeOtherDancer.prototype = Object.create(MakeDancer.prototype);
MakeOtherDancer.prototype.constructor = MakeOtherDancer;
    
MakeOtherDancer.prototype.step = function(timeBetweenSteps) {
    
    // call the old version of step at the beginning of any call to this new version of step


    // debugger;
    // var functionPassedIn = makeBlinkyDancer.prototype.step.bind(this, timeBetweenSteps);

    MakeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // debugger;
    this.$node.toggle();
};