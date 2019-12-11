console.log("mars photo module")

const marsPhotoComponent = (photo) => {
  return `
      <div class="photo">
              <img class="photoMars" src=${photo.img_src}>
              <div>Probe: ${photo.rover.name}</div>
              <div>Earth Date: ${new Date(photo.earth_date).toLocaleDateString("en-US")}</div>
              <div>Camera: ${photo.camera.name}</div>
      </div>
  `
}

export default marsPhotoComponent