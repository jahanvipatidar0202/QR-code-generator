const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");
  if (img !== null) {
    let imgAttribute = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAttribute);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  // if (qrText.value.length > 0) {
  //   generateQRCode();
  // } else {
  //   alert("Enter your text or URL to generate QR Code");
  // }

  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter your text or URL to generate QR Code");
}
function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
