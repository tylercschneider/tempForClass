// CREATE ELEMENTS
let div = document.createElement("div");
let btn = document.createElement("button");
let link = document.createElement("a");
let para = document.createElement("p");
btn.setAttribute("id", "kilo");
btn.textContent = "Button";

link.setAttribute("id", "gram");
link.setAttribute("href", "https://www.instagram.com/tylercschneider");
link.textContent = "Link right here";
link.style.color = "#000";
link.style.textDecoration = "none";

para.setAttribute("id", "inch");
para.textContent = "pretend this is longer";

div.appendChild(btn);
div.appendChild(link);
div.appendChild(para);
document.body.appendChild(div);


// USER INTERACTIONS
let kilo = document.getElementById("kilo");
let gram = document.getElementById("gram");
let inch = document.getElementById("inch");

kilo.addEventListener("click", ()=> {
	const newElement = document.createElement("p");
	newElement.textContent = "Placeholder Text";
	div.appendChild(newElement);
});
gram.addEventListener("mouseover", ()=> {
	gram.style.color = "red";
});
gram.addEventListener("mouseout", ()=> {
	gram.style.color = "#000";
});
window.addEventListener("resize", ()=> {
	inch.style.fontSize = "50px";
});