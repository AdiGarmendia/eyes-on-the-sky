import { getPhotos } from "./marsPhotos/marsPhotoDataProvider.js";
import marsPhotoListComponent from "./marsPhotos/marsPhotoList.js";
import { getPhoto } from "./DailyPhoto/DailyPhotoProvider.js";
import DailyPhotoListComponent from "./DailyPhoto/DailyPhotoList.js";


getPhotos().then(
  () => marsPhotoListComponent()
)
getPhoto().then(
  () => DailyPhotoListComponent()
)
// getCriminals().then(
//   () => CriminalListComponent()
// )