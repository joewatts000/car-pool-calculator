import html2canvas from "html2canvas";

const exportAsImage = async (element, imageFileName) => {
  const html = document.getElementsByTagName("html")[0];
  const body = document.getElementsByTagName("body")[0];
  let htmlWidth = html.clientWidth;
  let bodyWidth = body.clientWidth;

  const newWidth = element.scrollWidth - element.clientWidth;

  if (newWidth > element.clientWidth) {
    htmlWidth += newWidth;
    bodyWidth += newWidth;
  }

  html.style.width = htmlWidth + "px";
  body.style.width = bodyWidth + "px";

  const canvas = await html2canvas(element, {
    ignoreElements: (element) => {
      return element.classList.contains("ignore");
    }
  });
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
  html.style.width = null;
  body.style.width = null;
};

const downloadImage = (blob, fileName) => {
  const link = window.document.createElement("a");
  link.style = "display:none;";
  link.download = fileName;

  link.href = blob;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  link.remove();
};

export default exportAsImage;
