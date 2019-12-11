import MarsPhotoListComponent from "./marsPhotoList.js"

MarsPhotoListComponent()

let photos = []

export const usePhotos = () => {
  return photos
}

export const getPhotos = (date) => {
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=PpRFwYLrvcxkSaExRNTOWrxEJWUcy34dllEQldXn`)
      .then(response => response.json())
      .then(
          parsedPhotos => {
              console.table(parsedPhotos)
              photos = parsedPhotos.photos.slice()
          }
      )
}


/*
    Export a function that lets other components have
    access to the data
*/