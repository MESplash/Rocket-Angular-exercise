import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FirstComponent } from "./Componentes/WorkExercise/firstComponent.component";
import { Objects } from "./Componentes/WorkExercise/objects.model";
import { Array } from "./Componentes/WorkExercise/array.model";

//Aquí está el dataServices el cual es el encargado de mandar el valor escrito por el usuario y su el resultado del Array en array.model.ts

@Injectable()
export class dataServices {

    constructor(private httpClient:HttpClient){}

    uploadArr(arreglo: Objects[], value:number /*Recibe un objeto de tipo Objects[] el cual está del array a subir a la firebase*/){
        this.httpClient.post("https://angular-exercise-ebd1f-default-rtdb.firebaseio.com/datos.json", value).subscribe(
            (a)=>{console.log(`El valor ingresado por el usuario fue: ${a}`)}
        )
        this.httpClient.post("https://angular-exercise-ebd1f-default-rtdb.firebaseio.com/datos.json", arreglo).subscribe(
            (a)=>{console.log(`Se ha enviado el array: ${a}`)}
        );
    }
}
//Esto manda primero el valor ingresado por el usuario y de segundo, justo abajo manda todo el array y el valor que obtuvo siendo el .value el número de la iteración de la lista total del usuario y three/five/seven cual clase se la añade por ser un multiplo de esta junto el .message que es lo que al usuario se le muestra