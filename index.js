var butt=document.getElementById("myButton")
var hiding=document.getElementById("hide")
var shoping=document.getElementById("fshop")
var yourButton=document.getElementById("urButton")
var rone=document.getElementById("r1")
$("#white").css({"text-transform":"uppercase","color":"purple"})
$("#blue").css({"text-transform":"uppercase" ,"color":"blue"})
$("#rede").css({"text-transform":"uppercase","color":"red"})
$("#ro").css({"color":"red"})
$("#whb").css({"color":"aqua"})

 hiding.onclick=function(){
    if(shoping.style.display==="none"){
        shoping.style.display="block"
    } else {
        shoping.style.display="none"
    }

}

yourButton.onclick=function(){
  if(rone.style.display==="none"){
      rone.style.display="block"
  } else {
      rone.style.display="none"
  }

}


function generateID(){
    var count=0
    return function(){
        return count++
    }
  }
  var id= generateID();
  function flowers(price,name,images){
    return {
        price:price,
        name:name,
        images:images,
        id:id(),
    }
  }
  var flow=makeSomthing(19,500,"rose",["https://pngimg.com/uploads/rose/rose_PNG658.png","https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZmw4MDk4MTY3NDczLWltYWdlLWpvYjYxMy1sMHJ2cXRqZy5wbmc.png?s=twQmi_nTk8BPr7r5U_0oieoPJBYtDJbvHjEZYFxy8go"])
  $("#shop").append(`<h3>name:${flow.name}</h3>
  <img src=${flow.images[0]} id="img1>"
  <p>price:${flow.price}</p>`)

  function changeimg(item){
    var counter=0
    function getNext(){
        counter++
        counter=counter%item.length
        return item[counter]
    }
    return getNext
  }
  var change=changeimg(flow.images);
  $("#img").on("click",function(){
var getnextindex=change()
this.src=getnextindex
  })
 