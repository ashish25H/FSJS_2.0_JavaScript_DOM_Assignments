// const parentDiv = document.querySelector(".accordian-wrapper");
// const div = document.createElement("div");
// const h3 = document.createElement("h3");
// h3.innerText = "Skills";
// div.classList.add("accordian");
// const p = document.createElement("p");
// p.innerText = `I propese a very good command over the full stack developer tech like MERN which can be seen in my work over the GitHub`;
// div.appendChild(h3);
// div.appendChild(p);
// parentDiv.appendChild(div);
// console.log(div);





let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

