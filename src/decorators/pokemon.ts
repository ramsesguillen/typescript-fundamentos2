

function printToConsole( constructor: Function ) {
  // console.log( constructor );
}


const printToConsoleConditional = ( print: boolean = false ): Function => {

  if ( print ) {
    return printToConsole;
  } else {
    return () => {}
  }
}


const bloquearPrototipo = function( constructor: Function ) {
  Object.seal( constructor );
  Object.seal( constructor.prototype );
}


function ChecValidPoekmonId() {
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log( {target, propertyKey, descriptor} );

    const orinalMethod = descriptor.value;
    descriptor.value = ( id: number ) => {
      if ( id < 1 || id > 800 ) {
        return console.error('El id del pokemon no es valido');
      } else {
        return orinalMethod(id);
      }
    }
  }
}


// function readonly( isWritable: boolean = true ) {
//   return function( target: any, propertyKey: string) {

//   }
// }




@bloquearPrototipo
@printToConsoleConditional( true )
export class Pokemon {

  public publicApi: string = 'https://pokeapi.co'
  constructor(
    public name: string
  ){}


  @ChecValidPoekmonId()
  savePokemonToDB( id: number ) {
    console.log(`Pokemon guardado en ${ id }`)
  }


}