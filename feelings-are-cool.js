var myExportableThing = function () {
  var myPrivateFunction = function() {
    console.log('THIS IS PRIVATE');
  };

  return {
    feeling: ':)',
    explain: function() {
      myPrivateFunction();
    }
  };
//   explain: function() {
//     console.log("I was very angry but now I am " + this.FEELING)
// }
};

module.exports = myExportableThing();