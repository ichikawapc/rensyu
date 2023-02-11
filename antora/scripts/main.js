const myImage = document.querySelector('img');
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/antora.JPG') {
    myImage.setAttribute('src','images/antora_blue.JPG');
  } else {
    myImage.setAttribute('src','images/antora.JPG');
  }
}