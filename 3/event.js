const Event = require('events');
const EventEmiate = new Event();


EventEmiate.on('won race',()=>{
    console.log('won the race');
});

EventEmiate.on('lost race',()=>{
    console.log('lost the race');
});

process.on('exit',() => {
    console.log('execute at exit the program');
});

EventEmiate.emit('lost race');
EventEmiate.emit('won race');


// With Argument
EventEmiate.on('races',(result, whom)=>{
    if(result === 'won'){
        console.log(`races won by ` + whom);
    }else{
        console.log(`races lost by ` + whom);
    }
});

EventEmiate.on('race',(result, whom)=>{
    if(result === 'won'){
        console.log(`race won by ` + whom);
    }else{
        console.log(`race lost by ` + whom);
    }
});


EventEmiate.emit('race','lost','me');
EventEmiate.emit('races','won','you');


