import { paths as appPaths } from '../../App';
import { paths as backofficePaths } from '../../Backoffice';

export function getPaymentItemData(item: any) {
  console.log('aaaa', item);
  let path, utcOffset, title, startDate, city;

  if (item) {
    const { trainingInstance, event, training } = item;
    if (trainingInstance) {
      path = `${appPaths.backoffice}${backofficePaths.training}/instances/${item.trainingInstanceId}`;
      utcOffset = trainingInstance.published.utcOffset;
      title = trainingInstance.title;
      startDate = trainingInstance.published.startDate;
      city = trainingInstance.published.city;
    } else if (event) {
      path = `${appPaths.backoffice}${backofficePaths.event}/${item.eventId}`;
      utcOffset = event.published.utcOffset;
      title = event.published.title;
      startDate = event.published.startDate;
      city = event.published.city;
    } else if (training) {
      path = `${appPaths.backoffice}${backofficePaths.training}/${item.trainingId}`;
      // utcOffset = event.utcOffset;
      title = training.published.title;
      // startDate = event.startDate;
      // city = event.city;
    }
  }

  return { path, utcOffset, title, startDate, city };
}
