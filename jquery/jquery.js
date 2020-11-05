
/////////////////////jQuery-Exercises////////////////////////////

//////////////exercise 1 + 2
$("#theButton").on("click", function(){
    let val = $("#exercise1").val()
    $("ul").append(`<li>${val}</li>`)
    $("#exercise1").val("")
    
    $("li").on("click", function(){ 
    $(this).remove()
})
})

//////////////exercise 4

(function($) {
    $.fn.getAttributes = function() {
        var attributes = {}; 

        if( this.length ) {
            $.each( this[0].attributes, function( index, attr ) {
                attributes[ attr.name ] = attr.value;
            } ); 
        }

        return attributes;
    };
console.log($('.item').getAttributes())


})

// for (let i =0; i<3; i++){
//         console.log($(".item").getAttributes())

// }


// const items = $(".item") 
// console.log(items)
// for (let item of items) {
    // let attr = []
//     // attr.push(item)
//     console.log(item.data().instock)

// }


// for (let item of items){
    
//     if (item){
//         console.log(item)
//     }
    

// }

//console.log($(".item"))














        









/////////////////////jQuery-Material////////////////////////////
// const header = $("h1")
// console.log(header)

// console.log(jQuery)
// console.log($)

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//         }
//     }

/////// spot check 2//////////////
// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("div li").css("color", "green")
// // console.log(list)
// // list[0]
// // list[1].css("color", "pink")
// const list = $("li")
// console.log(list)
// $("li:first-child").css("color", "green")
// $("li:last-child").css("color", "pink")
// $("#brown-div").css("color", "brown")

/////// spot check 3//////////////

// $("#b1").addClass("box")
// $("#b2").addClass("box")

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

// $(".box").hover(function(){
//     $(this).css("background-color", "red")
// })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// //////////////////////////

// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// const text = "Banana"
// const item = $(`<p class=fruit>${text}ss</p>`)

// console.log(item) //the same
/////////////spot check 9

// $(".feedme").on("click", function(){
    
//     let divCopy = "<div class=feedme>${$(this).text()}</div>"//use template literals and $(this)
//     // let divCopy = `<div class=feedme> ${$(this).text()} </div>`

//     return $("body").append(divCopy)
//   })
/////////////////spot check 10
// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
//<div class='human'>FIRST_NAME - LAST_NAME</div>  

// for (let name of names){
//     $("body").append(`<div class="human">${name.first} - ${name.last}</div>`)
// }

// $("p").hover(function(){
//     $(this).remove()
// })
           
// // let elem = "<div class=`blog`>some text</div>"
// // let aDiv = $(elem)
// $("#blogs").append( "<div class='blog'>Cool blog</div>" )
// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })

// $("button").on("click", function(){
//     $(".blog").text("blargh")
// })
  
//   $("#blogs").on("click", ".blog", function(){
//     $(".blog").text("blargh") 
//   })
///////////////////////spot check 12

//   const addDiv = function() {
//     $("body").append("<div class=box></div>")
//   };
  
//   $("button").on("click", function() {
//     addDiv()
//   });
  
//   $("body").on("click", ".box", function() {
//     $(".box").text("new text")
//   });


//   $('#btn').alert('hi')
// let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

// for(let post of posts){
//    console.log( $("#posts").append('<div>${post.name}</div><input type="text" placeholder="say something nice" />'))
// }

// posts.splice(0, 1)