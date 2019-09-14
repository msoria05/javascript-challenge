/* JavaScript code that will listen for events and search through 
the date/time column to find rows that match user input*/

// from data.js
var tableData = data;
// Declare variables and create table
var button = d3.select("#filter-btn");
// Use a date form for searches
var dateInput = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

// Appends new rows of data for each UFO sighting based on input date filter
var populate = (Input) => {
    Input.forEach(ufo_sightings => {
      var row = tbody.append("tr");
      columns.forEach(column => row.append("td").text(ufo_sightings[column])
      )
    });
  }
  
  // Populate table
  populate(tableData);
  
  // Filter by date
  button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = dateInput.property("value").trim();
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate)

    tbody.html("");

    // Create function variable within the block: https://www.w3schools.com/js/js_let.asp
    let response = { 
      filterDate
    }
    
    if (response.filterDate.length !== 0) {
      populate(filterDate);
    }
      else {
        tbody.append("tr").append("td").text("No results found!"); 
      }
  })
