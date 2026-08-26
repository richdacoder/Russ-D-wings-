 export default function timeFormat(time){
 const actualTime = ConvertToEastern(time, true).split(':');
 return `${actualTime[0]}:${actualTime[1]} ${actualTime[2].split(' ')[1]}`;
};
