const table = document.getElementById("table");
const btnRemove = document.querySelector(".btn-remove");
const min = document.getElementById("min");
const max = document.getElementById("max");
const note = document.querySelector(".note");
const results = [];
// working = true;

//Display table opacity
function displayTableOpc() {
  table.style.opacity = 1;
}

// Hide tBody
function remove() {
  document.querySelector("tbody").remove();
  table.style.opacity = 0;
  btnRemove.style.opacity = 0;
}

let tableData = results;

// Render table data from results[], function onClick
const renderData = (dataTable) => {
  const min = document.getElementById("min").value;
  const max = document.getElementById("max").value;

  //Convert string to number
  const minNum = Number(min);
  const maxNum = Number(max);

  // console.log(typeof minNum, typeof maxNum);

  //Generator => results[]
  const gen = (a, b) => {
    //Check correct inputs
    if (a > b || (a == "" && b == "")) {
      note.style.fontSize = "12px";
      note.textContent = "* Enter correct inputs.";
      note.style.opacity = "1";
      table.style.opacity = "0";
      // alert("Max value must by higher than min.");
      // setTimeout(() => {
      //   refresh();
      //   // return false;
      // }, 2000);
      // function refresh() {
      //   location.reload();
      // }
    } else {
      for (let i = a; i <= b; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          results.push(`RobotICT`);
          // console.log("RobotICT");
        } else if (i % 3 == 0) {
          results.push(`Robot`);
          // console.log("Robot");
        } else if (i % 5 == 0) {
          results.push(`ICT`);
          // console.log("ICT");
        } else {
          results.push(i);
          // console.log(i);
        }
      }
      btnRemove.style.opacity = "1";
      note.style.opacity = "0";
      // note.textContent = "* Max value must be higher than Min value.";
    }
  };

  //Calling gen, render results => results[]
  gen(minNum, maxNum);

  //Display table opacity
  displayTableOpc();
  // const tableBody = document.getElementById("tableData");
  const tblbody = document.createElement("tbody");
  let dataHtml = "";

  //Going through results[]
  for (const [key, value, i] of tableData.entries()) {
    dataHtml += `<tr><td>${key + minNum}<td>${value}</td></td></tr>`;
  }
  // console.log(dataHtml);
  table.appendChild(tblbody);
  tblbody.innerHTML = dataHtml;
  //Clear
  results.length = null;
  btnRemove.style.opacity = "1";
};
