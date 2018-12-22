export default function asyncImageLoading() {
  const img1 = 'https://wallpaper-gallery.net/images/images/images-2.jpg';
  const img2 = 'https://www.w3schools.com/howto/img_forest.jpg';
  const img3 = 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350';

  const imageBox = document.querySelector('.image-box');
  const image = new Image()

  image.src = img1;

  imageBox.innerHTML = 'Loading...';

  setTimeout(() => {
    imageBox.appendChild(image);
  }, 2000)
}