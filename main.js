var submit = document.getElementById("submit");
var siteUrl = document.getElementById("siteUrl");
var siteName = document.getElementById("siteName");
var tBody = document.getElementById("tBody");
var marksContainer = [];
function addMark() {
  var marks = {
    url: siteUrl.value,
    name: siteName.value,
  };
  marksContainer.push(marks);
}

var x = submit.addEventListener("click", function () {
  addMark();
  var cartona = "";
  for (var i = 0; i < marksContainer.length; i++) {
    cartona += ` <tr>
    <td>${i + 1}</td>
    <td>${marksContainer[i].name}</td>
    <td><button onclick="openNewPage()" class="btn btn-info ">
    <i class="fa-solid fa-eye pe-2"></i>
    visit
  </button></td>
    <td><button onclick="deleteSite(${i})"  class="btn btn-danger ">
    delete
    <i class="fa-solid fa-trash-can"></i>
  </button></td>
  </tr>`;
  }
  document.getElementById("tBody").innerHTML = cartona;
});

function deleteSite(i) {
  marksContainer.splice(i, 1);
  x();
}

function openNewPage() {
  var url = document.getElementById("siteUrl").value;
  window.open(url, "_blank");
}
// ======================================
// var siteName = document.getElementById("siteName");
// var siteUrl = document.getElementById("siteUrl");
// var submit = document.getElementById("submit");
// var tBody = document.getElementById("tBody");
// var siteContainer = [];

// function addData() {
//   var site = {
//     name: siteName.value,
//     url: siteUrl.value,
//   };
//   siteContainer.push(site);
// }
// var cartona = "";
// submit.addEventListener("click", function () {
//   addData();
//   for (var i = 0; i < siteContainer.length; i++) {
//     cartona += ` <tr>
//     <td>${i + 1}</td>
//     <td>${siteContainer[i].name}</td>
//     <td><button onclick="openNewPage()" class="btn btn-info ">
//     <i class="fa-solid fa-eye pe-2"></i>
//     visit
//   </button></td>
//     <td><button onclick="deleteSite(${i})"  class="btn btn-danger ">
//     delete
//     <i class="fa-solid fa-trash-can"></i>
//   </button></td>
//   </tr>`;
//   }
//   document.getElementById("tBody").innerHTML = cartona;
// });
