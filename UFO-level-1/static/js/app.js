// from data.js
var tableData = data;

// YOUR CODE HERE!

// Initialize variable tbody
var tbody = d3.select("tbody")

// Initialize function buildTable with data as its parameter
function buildTable(data) {

    // Clear existing data
    tbody.html("");

    // Loop through data using forEach
    data.forEach(function(dataRow) {

        // Append table row 'tr' to the table body 'tbody'
        let row = tbody.append("tr");

        // Loop through values using another forEach
        Object.values(dataRow).forEach(function(val) {

            // Append cell to the row for each value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// Initialize event buttonClick
function buttonClick() {

    // Page will NOT refresh
    d3.event.preventDefault();

    // Select HTML input element & retrieve its property value
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check whether date was entered & filter data using same date
    if (date) {

        // Apply data filter
        filterData = filterData.filter(function(row) {
            return row.datetime === date;
        });
    }

    // Call buildTable with filteredData as its parameter
    buildTable(filterData);
}

// Use 'on' to attach an event to buttonClick
d3.selectAll("#filter-btn").on("click", buttonClick);

// Call buildTable with tableData as its parameter 
buildTable(tableData);