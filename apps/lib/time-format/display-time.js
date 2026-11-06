 import ConvertToEastern from "./convert-to-eastern";

 export default function TimeFormat(time){
  if(!time) return;

  let actualTime = "";
  const todaysDate = new Date().toISOString().split("T")[0];

  if(time.length === 8){
    actualTime = ConvertToEastern(`${todaysDate}T${time}.000`,true).split(':');
  } else {
    actualTime = ConvertToEastern(time, true).split(':');
  }

 return `${actualTime[0]}:${actualTime[1]} ${actualTime[2].split(' ')[1]}`;
};
