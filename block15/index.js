
//make an empty array to store the answer


//prompt with a message to ask about which flasvor you want
//then assign it with a new variable to save the answer
//declare a flVOR VARIABLE with the answer from the prompt 
const flavor = prompt("We have Vanilla, Chocolate, Coffee Flavor. Please let me know which flavors you want. Use the comma(,) between the flavors.");
const flavorInputArray= flavor.toLowerCase().split(",");
//declare object variable

//console.log(flavorInputArray)

let numOrder ={
    vanilla:0,
    chocolate:0,
    coffee:0

}


function result(){

for(let i = 0; i<flavorInputArray.length; i++){
  if(flavorInputArray[i]=="vanilla"){
    numOrder.vanilla++;
  }else if(flavorInputArray[i]=="chocolate"){
    numOrder.chocolate++;
  }else if(flavorInputArray[i]=="coffee"){
    numOrder.coffee++;
  }else{
    console.log("You choose the flavor we don't have.Please order again!")
  }
}


console.log(numOrder)
}
result();
