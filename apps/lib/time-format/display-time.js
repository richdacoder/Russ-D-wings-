 import ConvertToEastern from "./convert-to-eastern";

 export default function TimeFormat(time){
  if(!time) return;

  let actualTime = "";
  const todaysDate = new Date().toISOString().split("T")[0];
  console.log

  if(time.length === 8){
    actualTime = ConvertToEastern(`${todaysDate}T${time}.000Z`,true).split(':');
    console.log('displayPAGE ACTUALTIME', actualTime);
  } else {
    actualTime = ConvertToEastern(time, true).split(':');
  }

 return `${actualTime[0]}:${actualTime[1]} ${actualTime[2].split(' ')[1]}`;
};
