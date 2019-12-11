import { usePhoto} from "./DailyPhotoProvider.js";
import dailyPhotoComponent from "./DailyPhoto.js";

console.log("Daily Photo List")

const contentElement = document.querySelector(".dailyPhotoList")

const DailyPhotoListComponent = () => {
  const DailyPhoto = usePhoto()

  contentElement.innerHTML += `
      ${dailyPhotoComponent(DailyPhoto)
      }
    `
}


export default DailyPhotoListComponent