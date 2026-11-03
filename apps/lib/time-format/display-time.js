 import ConvertToEastern from "./convert-to-eastern";

 export default function TimeFormat(time){
  if(!time) return;

 const actualTime = ConvertToEastern(time, true).split(':');
 return `${actualTime[0]}:${actualTime[1]} ${actualTime[2].split(' ')[1]}`;
};
