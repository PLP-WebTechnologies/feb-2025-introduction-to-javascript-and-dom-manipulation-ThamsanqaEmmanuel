// Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("description").textContent = "WE LOVE JAVASCRIPT!!!";
});

// Change CSS style & background
document.getElementById("changeStyleBtn").addEventListener("click", () => {
  const title = document.getElementById("title");
  const bg = document.getElementById("bg");
  const content = document.getElementById("content");

  title.style.cssText = `
    color: blue;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    background-color: lightgray;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `;

  bg.style.backgroundImage = "url('pexels-realtoughcandy-11035547.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundRepeat = "no-repeat";
  bg.style.minHeight = "100vh";

  content.style.color = "white";
  content.style.fontSize = "1.5rem";
  content.style.padding = "20px";
  footer.style.color = "white";
  footer.style.fontSize = "1.2rem";

  // Add nav bar
  if (!document.getElementById("navbar")) {
    const nav = document.createElement("nav");
    nav.id = "navbar";
    nav.innerHTML = `
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    `;
    document.body.insertBefore(nav, document.body.children[1]);
  }
});

// Add element
document.getElementById("addElementBtn").addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "This was a fun feature to learn in JavaScript!";
  newPara.id = "addedPara";
  newPara.style.color = "white";
  document.getElementById("container").appendChild(newPara);
  
});


// Remove element
document.getElementById("removeElementBtn").addEventListener("click", () => {
  const para = document.getElementById("addedPara");
  if (para) {
    para.remove();
  }
});
