var nineAmTaskDesc = document.getElementById("9amtext");
var tenAmTaskDesc = document.getElementById("10amtext");
var elevenAmTaskDesc = document.getElementById("11amtext");
var twelvePmTaskDesc = document.getElementById("12pmtext");
var onePmTaskDesc = document.getElementById("1pmtext");
var twoPmTaskDesc = document.getElementById("2pmtext");
var threePmTaskDesc = document.getElementById("3pmtext");
var fourPmTaskDesc = document.getElementById("4pmtext");
var fivePmTaskDesc = document.getElementById("5pmtext");
var tasks = [];



document.getElementById("9am").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var nineAmInputText = nineAmTaskDesc.innerHTML;
    if (nineAmTaskDesc = "")  {
     return nineHourTask = {
            hour: "9 am",
            text: nineAmInputText,
        
        }
        
    }
    localStorage.setItem("nineHourTask", JSON.stringify(tasks));

})


document.getElementById("10am").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var tenAmInputText = nineAmTaskDesc.innerHTML;
    if (!nineAmTaskDesc === "")  {
     return Task = {
            hour: "9 am",
            text: tenAmInputText,
        
        }
        
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));

})

// document.getElementById("10am").addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Button Clicked");
//     var hourNineText = tenAmTaskDesc.innerHTML;
   

//     {
//         var blockTenTask = {
//             hour: "9 am",
//             text: hourNineText,

//         }
//         saveTasks(blockTenTask);

//     }
// })
// tenAmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
// });
// elevenAmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
//  });
// twelvePmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
//  });
//  onePmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
// });
// twoPmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
//  });
// threePmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
// });
// fourPmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
// });
// fivePmBtn.addEventListener("click", function(event){
// console.log("button clicked")
// event.preventDefault();
// });

