// from data.js
var tableData = data;

//make sure date looks okay in console
console.log(tableData)


// Get a reference to the table body
var tbody = d3.select("tbody");

//loop through each sighting 
tableData.forEach((sighting) => {

    //append a row for each sighting 
    var row = tbody.append("tr");

    //use object.entries to append a cell for each key value in each object 
    Object.entries(sighting).forEach(([key, value]) => {
  
      var cell = row.append("td");
      
      //append the key value to the table cell 
      cell.text(value);
    });
  });
  
