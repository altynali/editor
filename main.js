const clickedElem = document.querySelector(".show");
const hiddenElem = document.querySelector(".wrapper-side");

  clickedElem.addEventListener("click", function() {

    if(hiddenElem.style.display != "block" ){

      hiddenElem.style.display = "block"
      clickedElem.innerText = "HIDE"

    }
    else{
      hiddenElem.style.display = "none"
      clickedElem.innerText = "SHOW"
      
    }

  });

const clickedElement = document.querySelector(".click-elem");
const hiddenElement = document.querySelector(".content");

  clickedElement.addEventListener("click", function() {

    if(hiddenElement.style.display != "flex" ){

      hiddenElement.style.display = "flex"
    }
    else{
      hiddenElement.style.display = "none"
    }

  });
 

const clickedElements = document.querySelectorAll(".el-text");
const hiddenElements = document.querySelectorAll(".hidden-element");

 for (let i = 0; i < clickedElements.length; i++) {
  clickedElements[i].addEventListener("click", function() {

    if(hiddenElements[i].style.display != "block" ){

      hiddenElements[i].style.display = "block"
    }
    else{
      hiddenElements[i].style.display = "none"
    }

  });
 }

 // var rotateEl = document.querySelector(".fas");

 const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'
  default: '#fff',
  position: 'bottom-middle',

  swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 0.95)',
      'rgba(156, 39, 176, 0.9)',
      'rgba(103, 58, 183, 0.85)',
      'rgba(63, 81, 181, 0.8)',
      'rgba(33, 150, 243, 0.75)',
      'rgba(3, 169, 244, 0.7)',
      'rgba(0, 188, 212, 0.7)',
      'rgba(0, 150, 136, 0.75)',
      'rgba(76, 175, 80, 0.8)',
      'rgba(139, 195, 74, 0.85)',
      'rgba(205, 220, 57, 0.9)',
      'rgba(255, 235, 59, 0.95)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          input: true,
          clear: true,
          save: true
      }
  }
});


function setCurrent(element){
  current = element;
}


var counter = 1;
var cont = document.querySelector(".main-content")
let current;

$(".content-block").on('click', (function(){

  var ele = document.createElement("div");
  ele.setAttribute("id","block"+counter);
  ele.setAttribute("class","blocks");
  ele.setAttribute("onclick", "setCurrent(this)")

  ele.style = "height: 30%;width: 30%;background: rgba(225, 225, 225, 0.8);color: black;border: 3px solid grey;position: absolute;top: 250px;left: 450px; "

  cont.append(ele)

  ResizeJs.apply("#block"+counter, document.body);


  counter++;

}
));

var rgbaColor;

  pickr.on('change', (color, idEl) => {
    
    rgbaColor = color.toRGBA().toString();  

    current.style.background = rgbaColor  
    
  })

  var j = 1;
  
$(".content-btn").on('click', (function(){

  var myBtnDiv = document.createElement("div");
  var myBtn = document.createElement("button");
  myBtn.innerText = "CLICK ME"
  myBtnDiv.setAttribute("id","block-btn"+j);
  myBtnDiv.setAttribute("class","blocks-btn");
  myBtnDiv.setAttribute("onclick", "setCurrent(this)")

  myBtnDiv.append(myBtn)

  myBtn.style = "height: 70%;width: 80%; color: #000 ;margin: auto;"
  myBtnDiv.style = "height: 15%;width: 10%; display:flex ; align-items: center; background: rgba(225, 225, 225, 0.8);color: black;border: 3px solid grey;position: absolute;top: 250px;left: 450px; "


  cont.append(myBtnDiv)

  ResizeJs.apply("#block-btn"+j, document.body);
  

  j++;

}
));


var k = 1;

$(".content-text").on('click', (function(){


  var myTextDiv = document.createElement("div");
  var myText = document.createElement("textarea");
  myText.placeholder = "Text area"
  myTextDiv.setAttribute("id","block-text"+k);
  myTextDiv.setAttribute("class","blocks-text");
  myTextDiv.setAttribute("onclick", "setCurrent(this)")

  myTextDiv.append(myText)

  myText.style = "max-height: 98%;max-width: 98%; height: 80%;width: 90%; color: #000 ; font-size: 24px; margin: auto;"

  myTextDiv.style = "height: 30%;width: 30%; display:flex ; align-items: center; background: rgba(225, 225, 225, 0.8);color: black;border: 3px solid grey;position: absolute;top: 250px;left: 450px; "

  cont.append(myTextDiv)

  ResizeJs.apply("#block-text"+k, document.body);

  k++;

}
));


var i = 1;

$(".content-img").on('click', (function(){

  var myImgBlock = document.createElement("div");
  myImgBlock.setAttribute("id","block-img"+i);
  myImgBlock.setAttribute("class","blocks-img");
  myImgBlock.setAttribute("onclick", "setCurrent(this)")


  myImgBlock.style = "height: 20%;width: 20%;background: rgba(225, 225, 225, 0.8);color: black;border: 3px solid grey;position: absolute;top: 250px;left: 450px; "


  cont.append(myImgBlock)

  ResizeJs.apply("#block-img"+i, document.body);

  i++;

}
));





const inp = document.getElementById("inpFile")

inp.addEventListener("change", function(){

  const file = this.files[0]

  if(file){

    const reader = new FileReader()

    reader.addEventListener('load', function(){

      
  console.log(this.result)
      
      current.style.backgroundImage = "url('" + this.result +"')"

    })

    reader.readAsDataURL(file)

  }
  

})

$(".remove-btn").on('click', function(){
  current.remove()
})