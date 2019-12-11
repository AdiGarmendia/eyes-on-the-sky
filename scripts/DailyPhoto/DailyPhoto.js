console.log("Daily photo module")

const dailyPhotoComponent = (photo) => {
  return `
      <div class="daily__photo">
              <img class="photoDaily" src=${photo.url}>
              
      </div>
  `
}

export default dailyPhotoComponent