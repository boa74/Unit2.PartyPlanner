const dropdown = document.getElementById("dropdown")
dropdown.innerHTML="Freelancer Forum";
dropdown.style.color ="green";

const averagePrice =document.getElementById("averagePrice");
averagePrice.innerHTML="The average starting price is $30.";
averagePrice.style.color="red";

const box = document.createElement("div")
box.style.display="flex";
box.style.justifyContent ="space-evenly";
document.body.appendChild(box);


const titleName = document.createElement("h3");
titleName.innerHTML="Name";
box.appendChild(titleName);

const titleJob = document.createElement("h3");
titleJob.innerHTML="Occupation";
box.appendChild(titleJob);


const titlePrice = document.createElement("h3");
titlePrice.innerHTML="Starting Price";
box.appendChild(titlePrice);


const data=[{name:"Alice",job:"Writer", price:"$30"},
            {name:"Bob",job:"Teacher", price:"$50"},
            {name:"Carol",job:"Programmer", price:"$70"}];

const container = document.createElement('div'); 
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "space-evenly";
document.body.appendChild(container);

data.forEach(item => {
    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.justifyContent = "space-evenly"; // Space columns evenly
    container.appendChild(row);

    // Create and append name column
    const nameColumn = document.createElement('h4');
    nameColumn.innerHTML = item.name;
    row.appendChild(nameColumn);

    // Create and append job column
    const jobColumn = document.createElement('h4');
    jobColumn.innerHTML = item.job;
    row.appendChild(jobColumn);

    // Create and append price column
    const priceColumn = document.createElement('h4');
    priceColumn.innerHTML = item.price;
    row.appendChild(priceColumn);
});

