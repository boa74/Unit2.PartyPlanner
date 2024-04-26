const wrapper = document.getElementById("wrapper");

let data="";
 //grabs initial promise
async function myFunction(){

  const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
  const data = await response.json();
  return data;
};
console.log(myFunction())

myFunction().then((response)=>{
   
    response.data.forEach((itm)=>{//becuase the result is stored in data. we should change the variable name 
   
    boxFunction(itm)//call the function inside of this function 
   
   });
 })

 
function boxFunction(info){
   
    const infoBox = document.createElement("div");
    infoBox.style.border="1px solid black";
    infoBox.style.margin="30px";
    infoBox.style.padding= "10px";
    infoBox.style.height="100px";
    infoBox.style.width="70%";
    infoBox.style.backgroundColor="beige";

   //JASON.stringify-> pull text content(null means no replacer) 
   infoBox.innerHTML= JSON.stringify(info,null,2);
   wrapper.appendChild(infoBox);
   

   const deleteButton = document.createElement("button");
   
   // Create a new delete button for each infoBox
    deleteButton.textContent = "Delete"; // Set button text
    
    deleteButton.onclick = function() { // Define what happens when you click the button
        infoBox.remove(); // This will remove the infoBox from the DOM
    };

    infoBox.appendChild(deleteButton); 
   
}

const box = document.createElement("div");
box.style.borderBlock="black";
infoBox.appendChild(box)












