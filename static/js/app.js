//11.2.4
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//11.5.1 Write function to add data to table
function buildTable(data) {
    //first clear data in the table
    tbody.html("");

    //loop through elements in the array
    data.forEach((dataRow) => {
        //create a variable that will append a row to the table body ("tr" stands for table row in HTML)
        let row = tbody.append("tr");
        //loop through each field in the row ("td" stads for table data in HTML)
        Object.values(dataRow).forEach((val) => {
            //set up action of appending data into a table data tag, in order to put each value of the sighting into a cell
            let cell = row.append("td");
            //add the values to the cell
            cell.text(val);
            }
        );
    });
};


//11.5.3 Function to filter the table
function handleClick() {
    //create variables to hold filtered and unfiltered date data
    let date = d3.select("#datetime").property("value");
    //default filter will be original table data
    let filteredData = tableData;

    //if statement check as filter
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild the table using the filter date (nothing will happen if no filter)
    buildTable(filteredData);
};

//11.5.4 Listen for a click
//Selector string contains HTML tag
d3.selectAll("#filter-btn").on("click", handleClick);

//Build an initial table as soon as the webpage loads
buildTable(tableData);