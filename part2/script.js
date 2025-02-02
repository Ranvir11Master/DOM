// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "Purple";

// div.style.fontSize = "20px";
// div.innerText = "Hello! Master"; 

// let newBtn = document.createElement("button");

// newBtn.innerText = "Click me!";

// let div = document.querySelector("div");
// div.after(newBtn);


 let newHeading = document.createElement("h1");

 newHeading.innerHTML = "<i>Master Ranvir</i>";

 document.querySelector("body").prepend(newHeading);

 let p = document.querySelector("p");
 p.remove();
