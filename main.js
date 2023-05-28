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
const container = document.getElementById("scrollmenu");
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
    // https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
    // https://stackoverflow.com/questions/11700927/horizontal-scrolling-with-mouse-wheel-in-a-div