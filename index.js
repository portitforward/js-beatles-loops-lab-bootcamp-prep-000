// add solution here
function theBeatlesPlay (musicians, instruments) {
  var tempArray = []
  for (var i=0;i<musicians.length; i++){
    tempArray.push(musicians[i] + " plays " + instruments[i])
  }
  return tempArray
}

var i = 0;
function johnLennonFacts (facts) {
  while (i < facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts
}