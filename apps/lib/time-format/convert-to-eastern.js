export default function ConvertToEastern(date){
const convertedDate = new Date(date);

return date.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York'
});
}
//move this function to schedule page
