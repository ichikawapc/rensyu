const myImage = document.querySelector('img');
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/sassa.JPG') {
    myImage.setAttribute('src','images/sassa-2.JPG');
  } else {
    myImage.setAttribute('src','images/sassa.JPG');
  }
}