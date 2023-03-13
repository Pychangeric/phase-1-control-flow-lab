function scuberGreetingForFeet(){
  if(distance<= 400 ){
    return 'This is on me!'
  }else if (distance > 2000 && distance <=2499){
    return 'I will gladly take your thirty bucks.'
  }else if (distance >2500){
    return 'No can do.'
  }
} 

function ternaryCheckCity(){
  // Write your code here!
}
function ternaryCheckCity(city){
  return("NYS"===city ? "Ok,sounds good.":"No go.")
}

function switchOnCharmFromTip(){
  // Write your code here!
}
function switchOnCharmFromTip(tip){
  switch(tip){
    case"generous":
    return "thank you.";
    break;
    case "not as generous":
      return "thank You.";
      break;
      default:
        return "Bye.";
  }
}