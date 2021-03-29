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
  

// //Filter out sightings by date in button 

// Get a reference to the button 
var button = d3.select("#filter-btn")

button.on("click", runEnter);


// Complete the event handler function for the form
function runEnter() {

    //blank out previous input data
    tbody.html("")

    // Prevent the page from refreshing
    d3.event.preventDefault(); 
  
    // Select the input element 
    var inputElement = d3.select("#datetime");
  
   
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //console.log(inputValue)
  
    // Use the form input to filter the data by datetime
    var filterData = tableData.filter(sighting => sighting.datetime == inputValue)
  
    console.log(filterData)


    //append a row to the table for each sighting in the filterData
    filterData.forEach((sighting) => {

        //append a row for each sighting 
        var row = tbody.append("tr");
    
        //use object.entries to append a cell for each key value in each object 
        Object.entries(sighting).forEach(([key, value]) => {
      
          var cell = row.append("td");
          
          //append the key value to the table cell 
          cell.text(value);
        });
      });
    
};