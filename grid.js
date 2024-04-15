// For the checkbox to display or make invisible the css grid columns/rows

const columns = document.getElementsByClassName("column")
const rows = document.getElementsByClassName("row")
const checkbox = document.getElementById("display-checkbox")

function displayGrid() {
    if(checkbox.checked == true){
        for(column of columns) {
            column.style["visibility"] = "visible"
        }
        for(row of rows) {
            row.style["visibility"] = "visible"
        }
    } else {
        for(column of columns) {
            column.style["visibility"] = "hidden"
        }
        for(row of rows) {
            row.style["visibility"] = "hidden"
        }
    }
}
