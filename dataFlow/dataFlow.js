

const posts = [
    {
        name: "Avi: ",
        text: "HBD dude"
    },

    {
        name: "Ahmad: ",
        text: "sana helwa"
    },

    {
        name: "Amy: ",
        text: "yo, happy birthday, time to party!!"
    }

]


// let empty = () =>  
// let empty = () =>{div.splice(0)}

const render = function () {
        $("#container2").empty()

    for (let post of posts) {
       
        let div = $(`<div class="posts">   
                    <p class="postName">${post.name}</p> <p class="postText">${post.text}</p>
                    </div>`)

        $("#container2").append(div)

    }
}
render()


$("button").on("click", function () {
    posts.push({ name: $(".name").val() + ": ", text: $(".text").val() + "." })
    $(".name").val("");
    $(".text").val("")

    render()
})


