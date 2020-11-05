
////////////////////exercise 1

const computerDataIds = []

$(".generator").on("click", function (){
    const getElementId = $(this).closest(".processor").attr("id")  
    const getBusNum = $(this).closest(".computer").find(".BUS").text()
    const getDataId = $(this).closest(".computer").data("id")
    computerIds.push(getDataId)
    console.log(getElementId)
    console.log(getBusNum)
    console.log(getDataId)    
})

$(".validator").on("click", function (){
    const generatorText = $(this).closest(".computer").find(".generator").text()  
    const getMB = $(this).closest(".computer").find(".MB").text()
    const firstQR =$(this).closest(".computer").find("span:first-child").text()   
    const secondQR = $(this).closest(".computer").find("span:first-child").next().text()
    console.log(generatorText)
    console.log(getMB)
    console.log(firstQR)
    console.log(secondQR)    
})

   