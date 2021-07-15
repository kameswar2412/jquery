// selecting dom using jQuery
                    //   it's short hand function
// we can call this function in this way also $(function(){   })

$(document).ready(function(){

// here we can use "insertBefore" ,"insertAfter"
// before means adds text before p tag
// after means  adds text after p tag
    console.log("script loaded...!")
    $("div").click(function() {
        // insertBefore
        $("<p>You should follow me</p>").insertBefore("p");
    });

    // to select element by jQuery we use $(selector).method()

    console.log($("p"));
    console.log($("p").first()); //selecting first eleent
    console.log($("p").last());  //selecting last element

    console.log($("p").eq(2)); //selecting element by position ed(position)

    console.log($(".para"))  //selecting through classname

    console.log($("#heading"))  //selecting through id name


    console.log($("#heading").text())  //to get text inside html elements
    console.log($("#heading").html("kamesh"))

    // the above both are same to change the txt inside we use text or html method inside it "our text"

// to mix javascript code and jQuery

var newPara= $("<div>").text("div creation").attr("id","dynamic-para")
$("body").append(newPara)

var newPara1= $("<div>").text("div 1creation").attr("class","dynamic-para")
var newPara2= $("<div>").text("div 2creation").attr("class","dynamic-para")
var newPara3= $("<div>").text("div 3creation").attr("class","dynamic-para")
var newPara4= $("<div>").text("div 4creation").attr("class","dynamic- para")
var newPara5= $("<div>").text("div 5creation").attr("class","dynamic para")
var newPara6= $("<div>").text("div 6creation").attr("class","dynamic para")
var newPara7= $("<div>").text("div 7creation").attr("class","dynamic para")

$(newPara).append(newPara1,newPara2,newPara3,newPara4,newPara5,newPara6)
$(newPara).prepend(newPara7)
// here we are appending lot of element to parent element

// here we create new element and giving attribute and it's values dynamicly
// we are adding to parent element


// console.log($(".para").eq(1).remove())   //removeing elements

// for css add update

var css=$(".para").first().css("color")

console.log(css)

$(".dynamic-para").css({
    "color":"red",
    "font-size":"20px"
})

$("#dynamic-para").css({
    "color":"blue",
    "font-size":"30px"
})

// adding class and removing class values

$("p").removeClass("para")
$("p").addClass("para")

// events

// inselector we give two or more values acts as acombinater

// $("#heading").click(function(){
//     alert("hello guy's")
// })

// $(".para").click(function(e){
// console.log(e.target)
// })
// we can get values when we give ein parameter here target prints  clicked element in console

$(".para").on({
    "click":function(e){
        console.log(e.target.innerHTML)
        },
        "dblclick":function(){
            console.log("dplclick")
        }
    
})
// here we can do any events like key up,down,press,click,mousedown,up,move,dbl,

})



