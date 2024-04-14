const container = document.getElementById("container");
const para = document.createElement("p");
const textNod = document.createTextNode("Hello, I'm a div!");

// console.log(para);

para.appendChild(textNod);
container.append(para);
// console.log(container);

container.style.backgroundColor = "yellow";
container.style.margin = "20px";
container.style.padding = "10px";
container.style.fontSize = "18px";
container.style.fontWeight = "bold";
container.style.height = "200px";
container.style.width = "300px";

para.style.color = "blue";
para.style.margin = "0px";
