function takeANumber(katzDeliLine) {
  katzDeliLine.push(name);
  
  return `Welcome. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var arr = [];
  
  if(katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    
  for (var i = 0; i < katzDeliLine.length; i++) {
    var lineSpot = i + 1;
    arr.push(` ${lineSpot}. ${katzDeliLine[i]}`);
   }
   return `The line is currently:${arr}`;
  }
}