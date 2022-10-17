const parser = require('csv-parse');
const fs = require('fs');

const habitablePlanet = [];

const isHabitablePlanet = (planet) => {
    return planet['koi_disposition'] === 'CONFIRMED' 
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
};


fs.createReadStream('kepler_data.csv')
    .pipe(parser({
        comment: '#',
        columns: true
    }))
    .on('data',(data) => {
        if(isHabitablePlanet(data)){
            habitablePlanet.push(data);
        }
    })
    .on('error',(err) => {
        console.log(err); 
    })
    .on('end',() => {
        console.log(habitablePlanet.map( (planet) => {
            return planet['kepler_name'];
        }));
        console.log('End !');
        console.log(habitablePlanet.length);
    });