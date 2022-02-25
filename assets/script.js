
var nineAmTaskDesc = document.getElementById("9amtext");
var tenAmTaskDesc = document.getElementById("10amtext");
var elevenAmTaskDesc = document.getElementById("11amtext");
var twelvePmTaskDesc = document.getElementById("12pmtext");
var onePmTaskDesc = document.getElementById("1pmtext");
var twoPmTaskDesc = document.getElementById("2pmtext");
var threePmTaskDesc = document.getElementById("3pmtext");
var fourPmTaskDesc = document.getElementById("4pmtext");
var fivePmTaskDesc = document.getElementById("5pmtext");

var currentDay = moment().format('dddd, MMMM Do');
var currentDayElement = document.getElementById("currentDay");
currentDayElement.innerText = currentDay;
console.log(currentDay);



document.getElementById("9am").addEventListener("click", function(event) {
    event.preventDefault();
    var nineAmInputText = nineAmTaskDesc.innerHTML;
    if (!nineAmTaskDesc == "")  {
      nineHourTask = {
            hour: "9 am",
            text: nineAmInputText,
        
        }
        localStorage.setItem("nineHourTask", JSON.stringify(nineHourTask));
    }
        
    

})

document.getElementById("10am").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var tenAmInputText = tenAmTaskDesc.innerHTML;
    if (!tenAmTaskDesc == "")  {
      tenHourTask = {
            hour: "10 am",
            text: tenAmInputText,
        
        }
        localStorage.setItem("tenHourTask", JSON.stringify(tenHourTask));
    }
        
    

})
document.getElementById("11am").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var elevenAmInputText = elevenAmTaskDesc.innerHTML;
    if (!elevenAmTaskDesc == "")  {
      elevenHourTask = {
            hour: "11 am",
            text: elevenAmInputText,
        
        }
        localStorage.setItem("elevenHourTask", JSON.stringify(elevenHourTask));
    }
        
    

})
document.getElementById("12pm").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var twelvePmInputText = tenAmTaskDesc.innerHTML;
    if (!tenAmTaskDesc == "")  {
      twelveHourTask = {
            hour: "12 pm",
            text: twelvePmInputText,
        
        }
        localStorage.setItem("twelveHourTask", JSON.stringify(twelveHourTask));
    }
        
    

})
document.getElementById("1pm").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var onePmInputText = onePmTaskDesc.innerHTML;
    if (!onePmTaskDesc == "")  {
      oneHourTask = {
            hour: "1 pm",
            text: onePmInputText,
        
        }
        localStorage.setItem("oneHourTask", JSON.stringify(oneHourTask));
    }
        
    

})
document.getElementById("2pm").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var twoPmInputText = twoPmTaskDesc.innerHTML;
    if (!twoPmTaskDesc == "")  {
      twoHourTask = {
            hour: "2 pm",
            text: twoPmInputText,
        
        }
        localStorage.setItem("twoHourTask", JSON.stringify(twoHourTask));
    }
        
    

})
document.getElementById("3pm").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var threePmInputText = threePmTaskDesc.innerHTML;
    if (!threePmTaskDesc == "")  {
      threeHourTask = {
            hour: "3 pm",
            text: threePmInputText,
        
        }
        localStorage.setItem("threeHourTask", JSON.stringify(threeHourTask));
    }
        
    

})
document.getElementById("4pm").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var fourPmInputText = fourPmTaskDesc.innerHTML;
    if (!fourPmTaskDesc == "")  {
      fourHourTask = {
            hour: "4 pm",
            text: fourPmInputText,
        
        }
        localStorage.setItem("fourHourTask", JSON.stringify(fourHourTask));
    }
        
    

})
document.getElementById("5pm").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var fivePmInputText = fivePmTaskDesc.innerHTML;
    if (!fivePmTaskDesc == "")  {
      fiveHourTask = {
            hour: "5 pm",
            text: fivePmInputText,
        
        }
        localStorage.setItem("fiveHourTask", JSON.stringify(fiveHourTask));
    }
        
    

})