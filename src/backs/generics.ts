import { Hero, Villain } from '../interfaces';
import { genericFunctionArrow } from '../generics/generics';
// import powers from './data/powers';
// import { Hero } from './classes/Hero';

import { printObject, genericFunction } from "../generics/generics";

// const ironman = new Hero('Iroman', 3, 45);
// console.log(ironman);
// console.log(ironman.porwer);
// console.log( powers);

// printObject( 123 );
// printObject( new Date() );
// printObject( {a: 1, b: 2, c: 3} );
// printObject( [1, 2, 3, 4, 5, 6] );
// printObject( 'hola mundo' );

// console.log(genericFunctionArrow(12.1212).toFixed(2));
// console.log(genericFunctionArrow('hola mundo').toUpperCase());
// console.log(genericFunctionArrow( new Date() ).getDate() );


const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 120
}


console.log( genericFunction<Villain>(deadpool).dangerLevel);
console.log( genericFunction<Hero>(deadpool).name);
// console.log( genericFunction<Hero>(deadpool).);