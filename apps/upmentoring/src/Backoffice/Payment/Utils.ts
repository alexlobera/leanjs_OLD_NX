import { paths as appPaths } from '../../App';
import { paths as backofficePaths } from '../../Backoffice';

export function getPaymentItemData(item: any) {
  let path, utcOffset, title, startDate, city;

  if (item) {
    const { trainingInstance, event, training } = item;
    if (trainingInstance) {
      path = `${appPaths.backoffice}${backofficePaths.training}/instances/${item.trainingInstanceId}`;
      utcOffset = trainingInstance.utcOffset;
      title = trainingInstance.title;
      startDate = trainingInstance.startDate;
      city = trainingInstance.city;
    } else if (event) {
      path = `${appPaths.backoffice}${backofficePaths.event}/${item.eventId}`;
      utcOffset = event.utcOffset;
      title = event.title;
      startDate = event.startDate;
      city = event.city;
    } else if (training) {
      path = `${appPaths.backoffice}${backofficePaths.training}/${item.trainingId}`;
      // utcOffset = event.utcOffset;
      title = training.title;
      // startDate = event.startDate;
      // city = event.city;
    }
  }

  return { path, utcOffset, title, startDate, city };
}
