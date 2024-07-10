const reproductor8 = {
    cancion: '',
    reproducir1: id => console.log(`El nombre de la cancion es: ${id}`),
    // Metodo de propiedad
    pausar: () =>console.log('Pausando'),
    // Lo llevamos al objeto
    borrar: id => console.log(`Borrar canciòn...${id}`),
    crearPlaylist: nombre => console.log(`El nombre de la playlis es: ${nombre}`),
// Añadir
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`);
    },
    // Obtener
    get obtenerCancion(){
        console.log(` ${this.cancion}`);
    }

}
reproductor8.nuevaCancion = 'Metalica';
reproductor8.obtenerCancion;
// reproductor("AVI"); funtion is no a function
reproductor8.reproducir1(1000);
reproductor8.reproducir1(2000);
// LLamamos al mètodo
reproductor8.pausar();
reproductor8.borrar('Se elimino...');
reproductor8.crearPlaylist('Blues harp');
reproductor8.crearPlaylist('Los beatles');
