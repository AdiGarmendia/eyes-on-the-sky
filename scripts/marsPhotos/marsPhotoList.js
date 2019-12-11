import { usePhotos, getPhotos } from "./marsPhotoDataProvider.js";
import marsPhotoComponent from "./marsPhoto.js";

console.log("Rover Photo List");

const contentElement = document.querySelector(".marsPhotoList");

const MarsPhotoListComponent = () => {
  // listen for date slected custom event
  eventHub.addEventListener("dateSelected", event => {
    // when  event happens invoke function to query api (getPhotos)
    let date = event.detail.date;
    getPhotos(date);
    const MarsPhoto = usePhotos();

    // pass date selected to getPhotos as an arguement
    eventHub.dispatchEvent(MarsPhoto);
    render(MarsPhoto);
  });
  // render photos in the response
  const render = photoArray => {
    contentElement.innerHTML += `
      ${photoArray
        .map(currentMarsPhoto => {
          return marsPhotoComponent(currentMarsPhoto);
        })
        .join("")}
    `;
  };
};

export default MarsPhotoListComponent;
