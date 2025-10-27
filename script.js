let words = ["Python devloper", "UI devloper", "Data analytics"];
let i = 0;
setInterval(() => {
  document.getElementById("myrole").innerText = words[i];
  i = (i + 1) % words.length;
}, 3000);
// ----------------------model box resume section----------------------------------
function saveData() {
  let ctitle = document.getElementById("boxtitletype").value;
  let title = document.getElementById("boxTitle").value;
  let duration = document.getElementById("boxYear").value;
  let desc = document.getElementById("boxDescription").value;

  if (!ctitle || !title || !duration || !desc) {
    alert("please fill the details");
    return;
  }

  let project = {
    ctitle: ctitle,
    title: title,
    duration: duration,
    description: desc,
  };

  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  displayCard(project);
}

function displayCard(project) {
  let container = document.getElementById("card-container");
  let card = document.createElement("div");
  card.classList.add("col-md-6", "d-flex");
  card.innerHTML = `
  <div class="card flex-fill ">
   <h5>${project.ctitle}</h5>
   <h4>${project.title}</h4>
   <small>${project.duration}</small>
   <p style="color:#aaa">${project.description}</p>
  </div>
  `;
  container.appendChild(card);
}

window.onload = function () {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach((project) => {
    displayCard(project);
  });
};

// function getData() {
//   let projects = JSON.parse(localStorage.getItem("projects")) || [];
//   projects.forEach((project) => {
//     displayCard(project);
//   });
// }

// -------------------------model box resume section ends here-----------------------------

// --------------------------my skils start -------------------------------------
// const languagesUses = {
//   Python: 60,
//   Javascript: 50,
//   Html: 95,
//   css3: 80,
//   Bootsrap: 90,
//   Mysql: 60,
// };

// const container = document.getElementById("language-container");
// let count = 0;
// for (let lang in languagesUses) {
//   let percent = lang[languagesUses];
//   if (percent > 0) {
//     let col = document.createElement("div");
//     col.className("col-md-6 mb-4");
//     let title = document.createElement("h5");
//     title.innerHTML = lang + "(" + percent + "%)";
//     col.appendChild(title);
//     let progressDiv = document.createElement("div");
//     progressDiv.className = "progress";
//     progressDiv.style.height = "20px";

//     progressDiv.innerHTML = `
//      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:${percent}%;">
//             ${percent}%
//           </div>
//     `;
//     col.appendChild(progressDiv);
//     container.appendChild(col);
//     count++;
//   }
// }
const languageUsage = {
  HTML: 95,
  CSS: 85,
  JavaScript: 50,
  Python: 60,
  Bootstrap: 70,
  SQL: 55,
  Pandas : 40
};

const container = document.getElementById("languageContainer");
let count = 0;

for (let lang in languageUsage) {
  let percent = languageUsage[lang];
  if (percent > 0) {
    // col-6 म्हणजे एका row मध्ये 2 items (50% + 50%)
    let col = document.createElement("div");
    col.className = "col-md-6 mb-4";

    // title
    let title = document.createElement("h5");
    title.innerText = lang + " (" + percent + "%)";
    title.classList.add("title-style");
    col.appendChild(title);

    // progress bar
    let progressDiv = document.createElement("div");
    progressDiv.className = "progress";
    progressDiv.style.height = "15px";

    progressDiv.innerHTML = `
          <div class="progress-bar progress-bar bg-warning" role="progressbar" style="width:${percent}%;"></div>
        `;

    col.appendChild(progressDiv);
    container.appendChild(col);
    count++;
  }
}

// ----------------------------my skilss ends---------------------------------
// ---------------------------contact form section starts----------------------------------------
const inputs = document.querySelectorAll(".contact-section-form-row input");

inputs.forEach(input => {
    // Focus → red border
    input.addEventListener("focus", () => {
        input.style.borderColor = "red";
    });

    // Blur → back to grey
    input.addEventListener("blur", () => {
        input.style.borderColor = "grey";
    });
});





// ---------------------------contact form section ends---------------------------------------
