export default function ConvertToEastern(date, hourType){
const convertedDate = new Date(date);


return convertedDate.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York',
  hour12: hourType
});
}
//move this function to schedule page
