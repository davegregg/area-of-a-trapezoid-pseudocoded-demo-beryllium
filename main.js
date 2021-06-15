
/* Step 1: Get our necessary inputs: height, sideA, sideB */
let heightInput = "4" //window.prompt("What is the height of the trapezoid?", 4)
let sideAInput = "5" //window.prompt("What is the length of side A of the trapezoid?", 5)
let sideBInput = "7" //window.prompt("What is the length of side B of the trapezoid?", 7)

/* Step 1.5: Convert the strings into numbers. */
let height = parseFloat(heightInput)
let sideA = parseFloat(sideAInput)
let sideB = parseFloat(sideBInput)

/* Step 2: Sum the two sides */
let sum = sideA + sideB

/* Step 3: Average the sides */
let average = sum / 2

/* Step 4: Multiply the average by the height */6
let area = average * height
console.log(area);

console.log("If the height is 4, and the sides are 5 and 7, then the area should be 24:", area === 24)

/* Step 5: Display the area on the page */
/* Step 5.1: Check if any of the inputs are NaN and show an error to the user. */
if (Number.isNaN(height) || Number.isNaN(sideA) || Number.isNaN(sideB)) {
    document.write(`
        <h3>Error! Please input a number in digit form. For example, for the number "seven," enter the digit "7."</h3>
    `)
} else {
    document.write(`
        <details>
            <summary>For a trapezoid with a height of ${height}, where Side A is ${sideA} in length and Side B is ${sideB} in length...</summary>
            The area of this trapezoid is ${area}!
        </details>
    `)
}
