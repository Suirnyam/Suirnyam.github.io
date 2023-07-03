// Automatické vytvoření položek menu na této podstránce
// #######################################################################
var plantNav = document.getElementById("plant-nav");
            
jsonPlants.forEach(function(plant) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = plant.url;
    a.textContent = plant.name;
    li.appendChild(a);
    plantNav.appendChild(li);
});

var codeNav = document.getElementById("code-nav");

jsonCodes.forEach(function(code) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = code.url;
    a.textContent = code.name;
    li.appendChild(a);
    codeNav.appendChild(li);
});

var statNav = document.getElementById("stat-nav");

jsonStats.forEach(function(stat) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = stat.url;
    a.textContent = stat.name;
    li.appendChild(a);
    statNav.appendChild(li);
});


// Zoom pro všechny obrázky s classou zoom
// #######################################################################
mediumZoom('.zoom', {
    background: '#000000C0',
    scrollOffset: 1
})


// Rozbalení menu na podstránce
// #######################################################################
function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}


// Kopírování kódů
// #######################################################################
document.addEventListener('DOMContentLoaded', () => {
  
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
  
    const copyTextHandler = () => {
      const text = codeBlock.innerText;
  
      navigator.clipboard.writeText(text).then(
        () => {
          copyButton.innerHTML = "Zkopírováno";
          setTimeout(() => {
            copyButton.innerHTML = "Kopírovat";
          }, 1000);

        },
        () => {
          console.log('Error');
        }
      );
    };
  
    copyButton.addEventListener('click', copyTextHandler);
  });



// Horizontální scroll u contejnrů s obrázky
elements = document.querySelectorAll('.scrollmenu');

elements.forEach((container) => {
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        container.scrollLeft += 100;
        e.preventDefault();
    }
    else {
        container.scrollLeft -= 100;
        e.preventDefault();
    }
    });
})


// Lupa na vsechny obrazky s klassou zoom v divu img-zoomer-box s mouseover efektem 




var glassDiv = document.createElement('div');
glassDiv.setAttribute("class", "img-2")

function magnify(elmnt){
  elmnt.appendChild(glassDiv)

  let original = elmnt.querySelector(".zoom"),
  magnified = elmnt.querySelector('.img-2');

  magnified.style.backgroundImage = "url('" + original.src + "')";
  
  
  elmnt.addEventListener('mousemove', function(e) {
      
    let style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = ((x/imgWidth) * 100),
        yperc = ((y/imgHeight) * 100);

    //lets user scroll past right edge of image
    if(x > (.01 * imgWidth)) {
      xperc += (.15 * xperc);
    };

    //lets user scroll past bottom edge of image
    if(y >= (.01 * imgHeight)) {
      yperc += (.15 * yperc);
    };
    style.backgroundPositionX = (xperc-4) + '%';
    style.backgroundPositionY = (yperc-4) + '%';


    style.left = (x - 180) + 'px';
    style.top = (y - 180) + 'px';



  }, false);

  if (!elmnt.parentNode.matches(":hover")) {
    magnified.style.opacity = 0;
    return 0;
};

};

function delDiv(){
  document.querySelectorAll(".img-2").style.opacity = 0.5;
};









// Testovací
      // v HTML: onmouseover="changeDef(this)"
      // function changeDef(event) {alert(event.id);}