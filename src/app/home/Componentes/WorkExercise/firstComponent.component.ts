import { NgClass } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { Objects } from "./objects.model";
import { dataServices } from "@app/home/data.services";
import { Array } from "./array.model";


@Component({
    selector: "FirstComponent",
    templateUrl: "./firstComponent.component.html",
    styleUrls: ["./firstComponent.component.css"]

})
export class FirstComponent {
    public title: string;
    public arr: Objects[] = []; //Este array almacenará los números de 1-numeroIngresadoPorUsuario de tipo Objects[] donde almacenará clases del tipo objects.model.ts con propiedades ya establecidas
    public request = 1;
    constructor(private myService: dataServices){

        this.title= "Bienvenidos soy Monje López Miguel Ernesto y este es mi ejercicio";

    }

    objectier(y:HTMLInputElement){
        //Primeramente el array que almacena a todos los objetos se limpia totalmente para que no haya errores
        this.arr = [];
        this.request = 0;
        let x = parseInt(y.value);
        //Aquí la función objectier recibe como parametro un input el cual lo transformamos a un número con su .value para después tomar ese valor y evaluarlo primeramente si i <1 entonces no se inciará ya que los números negativos no tienen multiplos y tampoco el 0
        if (x > 0){for(let i = 1; i <= x; i++){
            if((i%3 == 0)&&(i%5 == 0)&&(i%7 == 0)){
                let phrase = `${i} [3, 5 y 7]`; //Crea la frase que se pintará en pantalla
                let newOne = new Objects(i, phrase); //Crea una nuevla classe Objects() y le pasa los parametros del número y frase
                newOne.three = true; //Si es multiplo de 3, 5 o 7 entonces mandaremos un true a una propiedad de Objects
                this.arr.push(newOne) //Por cada iteración se creará un nuevo objeto anidado en el array
            } else if ((i%3 == 0)&&(i%5 == 0)){
                let phrase = `${i} [3 y 5]`;
                let newOne = new Objects(i, phrase);
                newOne.three = true;
                this.arr.push(newOne)
            } else if ((i%3 == 0)&&(i%7 == 0)){
                let phrase = `${i} [3 y 7]`;
                let newOne = new Objects(i, phrase);
                newOne.three = true;
                this.arr.push(newOne)
            }else if ((i%5 == 0)&&(i%7 == 0)){
                let phrase = `${i} [5 y 7]`;
                let newOne = new Objects(i, phrase);
                newOne.five = true;
                this.arr.push(newOne)
            }else if ((i%3 == 0)){
                let phrase = `${i}`;
                let newOne = new Objects(i, phrase);
                newOne.three = true;
                this.arr.push(newOne)
            }else if ((i%5 == 0)){
                let phrase = `${i}`;
                let newOne = new Objects(i, phrase);
                newOne.five = true;
                this.arr.push(newOne)
            }else if ((i%7 == 0)){
                let phrase = `${i}`;
                let newOne = new Objects(i, phrase);
                newOne.seven = true;
                this.arr.push(newOne)
            }else{
                let phrase = `${i}`;
                let newOne = new Objects(i, phrase);
                this.arr.push(newOne)
            }
        }
        this.request = x;
        let newArray = new Array(this.arr, this.request, this.myService) //Aquí se crea un array de otra clase donde se almancena el arr, el value que vendría siendo el número que indicó el usuario y el service
    }
    }
}