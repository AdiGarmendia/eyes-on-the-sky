let photo = {}

export const usePhoto = () => {
  return photo
}

export const getPhoto = () => {
  return fetch("https://api.nasa.gov/planetary/apod?api_key=PpRFwYLrvcxkSaExRNTOWrxEJWUcy34dllEQldXn")
      .then(response => response.json())
      .then(
          parsedPhoto => {
              photo = parsedPhoto
          }
      )
}
