const container = document.querySelector(".container")
const food = [
  { name: "Cheese Cake", image: "static/images/im1.jpg" },
  { name: "Burger", image: "static/images/im2.jpg" },
  { name: "Eggs & Sausages", image: "static/images/im3.jpg" },
  { name: "Chicken Frechfries", image: "static/images/im4.jpg" },
  { name: " Chocolate Sundae", image: "static/images/im5.jpg" },
  { name: "Skull Milkshake", image: "static/images/im6.jpg" },
  { name: "Fruit Sundae", image: "static/images/im7.jpg" },
  { name: "Nachos", image: "static/images/im8.jpg" },
  { name: "Butter Chicken Rice", image: "static/images/im9.jpg" },
]

const showFood = () => {
    let output = ""
    food.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src="${image}" alt="Failed to load image"/>
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showFood);
  
  if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker
    .register("/sw.js",{scope:"."})
      .then(function(reg){
        console.log("Yes, it did.");
     }).catch(function(err) {
       console.log("No it didn't. This happened:", err)
        console.log("err.message:", err.message)
    });
 }

let deferredPrompt;
buttonInstall=document.getElementById('ooo');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  //showInstallPromotion();
  buttonInstall.style.display = 'block';
});

buttonInstall.addEventListener('click', (e) => {
  hideMyInstallPromotion();
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  })
});