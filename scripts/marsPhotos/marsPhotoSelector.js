import { usePhotos } from "./marsPhotoDataProvider";


const eventHub = document.querySelector(".container");
const dateListContainer = document.querySelector(".mars__Search");

export const dateSelected = () => {
  const dates = usePhotos();

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("date")) {
      const selectedDate = changeEvent.target.value;

      const date = new CustomEvent("dateSelected", {
        detail: {
          date: selectedDate
        }
      });

      eventHub.dispatchEvent(date);
    }
  });

  const render = () => {
    dateListContainer.innerHTML = `
    <input class="date" type="date" />
    `;
  };

  render();
};

