import img1 from '../../img/images-2.jpg'
import img2 from '../../img/img_forest.jpg'
import img3 from '../../img/pexels-photo.jpg'

export default function asyncImageLoading() {

  const imageBox = document.querySelector('.image-box')

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      let image = new Image()

      imageBox.appendChild(image)
      image.src = url

      image.addEventListener('load', () => {
        resolve()
      })
      image.addEventListener('error', () => {
        reject()
      })
    })
  }

  let loadingImagePromise = loadImage(img1)

  loadingImagePromise
    .then(
      () => {
        return loadImage(img2)
      },
      () => {

      }
    )
    .then(
      () => {
        return loadImage(img3)
      },
      () => {

      }
    )
    .then(
      () => {
        console.log('Все загруженно!!!')
      },
      () => {

      }
    )
}