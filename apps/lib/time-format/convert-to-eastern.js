export default function ConvertToEastern(date, hour){
const convertedDate = new Date(date);

return convertedDate.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York',
  hour12: false
});
}
//move this function to schedule page
