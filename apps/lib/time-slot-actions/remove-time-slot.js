export default function RemoveTimeSlot(){
  timeSlot.forEach((value, index) =>{
  console.log('value time',value.id, 'index', index);
  if( index !== 0){
    // Delete('availability', value.id );
      console.log('use effect timslot working');
  };
});

 setTimeSlot(prev => prev.filter((value, index) => index === 0));

return;
}
