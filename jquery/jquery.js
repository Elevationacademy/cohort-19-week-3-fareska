
const header = $("h1")
console.log(header)

// console.log(jQuery)
// console.log($)

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//         }
//     }

/////// spot check 2//////////////
$("h1").css("color", "blue")
$(".red-div").css("color", "red")
$("div li").css("color", "green")
// console.log(list)
// list[0]
// list[1].css("color", "pink")
const list = $("li")
console.log(list)
$("li:first-child").css("color", "green")
$("li:last-child").css("color", "pink")
$("#brown-div").css("color", "brown")

/////// spot check 3//////////////

$("#b1").addClass("box")
$("#b2").addClass("box")

// $('#my-input').val("v")

// $("#div"[0]).data("barcod")

// const barcode = $("p").data().barcode
// const cc= $("p").data().expirationdate
// console.log(barcode)
// console.log(cc)
//////////////////////////
// $("#b1").hover( function (){
//     $("#b1").css("background-color","blue")
// } )


// $("#b1").hover(function () {
//     $("#b1").css("background-color", "blue")
// })


// $("button").on("click", function(){
//     alert($("#my-input").val())
//     $("#my-input").val("")
// })

// $("#b1").hover(function () {
//     console.log($(this))
// })

$(".box").hover(function(){
    $(this).css("background-color", "red")
})

const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
//////////////////////////

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

const text = "Banana"
const item = $(`<p class=fruit>${text}ss</p>`)

console.log(item) //the same
/////////////spot check 9

$(".feedme").on("click", function(){
    
    let divCopy = "<div class=feedme> ${$(this).text()} </div>"//use template literals and $(this)
    // let divCopy = `<div class=feedme> ${$(this).text()} </div>`

    return $("body").append(divCopy)
  })