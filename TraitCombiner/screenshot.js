const { default: html2canvas } = require("html2canvas");

const canvas = await html2canvas(document.getElementById("Canvas"));

const url = canvas.toDataURL("image/gif");

// html2canvas(document.querySelector("#Canvas")).then(canvas => {
//     document.body.appendChild(canvas)
// });

