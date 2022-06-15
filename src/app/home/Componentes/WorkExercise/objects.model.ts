//Este model lo que hace es crear un objeto donde se almacenan cinco valores de los cuales solamente 3 serán usados siendo value un número de la lista del usuario, message el mensaje que el usuario tendrá y los otros tres valores serán true si son un multiplo de 3, 5 o 7 y esto será una condición que le añadirá una clase en css a la etiqueta
export class Objects{
    public value?: number;
    public message?: string;
    public three?: boolean = false;
    public five?: boolean = false;
    public seven?: boolean = false;
    
    constructor(x: number, y: string){
        this.value = x;
        this.message = y
    }
}