export default function ConvertToEastern(date){

return date.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York'
});
}
//move this function to schedule page
