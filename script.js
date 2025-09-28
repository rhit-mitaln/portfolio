window.addEventListener("load", () => {
    loadNavBar();
    loadFooter();
})

function loadNavBar() {
    let nav = document.createElement("nav");
    nav.classList.add("nav-bar");

    let links = [ {text: "Home"}, {text: "Resume"}, {text: "Portfolio"}];

    for (let link of links) {
      let a = document.createElement("a");
      a.classList.add("nav-li");
      if (link.text === "Home") {
        a.href = "index.html";
        a.textContent = link.text;
      }
      else if (link.text === "Resume"){
        a.href = "resume.html";
        a.textContent = link.text;
      }
      else if (link.text === "Portfolio"){
        a.href = "portfolio.html";
        a.textContent = link.text;
      } 
      nav.appendChild(a);
    };

    document.getElementById("navbar-container").appendChild(nav);
    
}

//almost same apreoach as the navbar

function loadFooter() {
    let footer = document.createElement("footer");
    footer.classList.add("footer");

    let links = [
      {text: "LinkedIn"},
      {text: "GitHub"},
      {text: "Email"},
      {text: "Handshake"}
    ];

    for (let link of links) {
      let a = document.createElement("a");
      a.classList.add("nav-li");

      let img = document.createElement("img");
      img.classList.add("footer-img");


      if (link.text === "LinkedIn") {
        a.href = "https://www.linkedin.com/in/nakul-mital-291825296/";
        img.src = "linkedin.png";
        img.alt = "LinkedIn icon";
      } else if (link.text === "GitHub") {
        a.href = "https://github.com/";
        img.src = "github.png";
        img.alt = "GitHub icon";
      } else if (link.text === "Email") {
        a.href = "mailto:mitaln@rose-hulman.edu";
        img.src = "email.png";
        img.alt = "Email icon";
      } else if (link.text === "Handshake") {
        a.href = "https://rose-hulman.joinhandshake.com/profiles/nakul";
        img.src = "handsahke.jpg";
        img.alt = "Handshake icon";
      }
      a.appendChild(img);
      footer.appendChild(a);
    }

    document.getElementById("footer-container").appendChild(footer);
}