import { HttpClient } from "@angular/common/http";
import { dataServices } from "@app/home/data.services";
import { Objects } from "./objects.model";

//Esta clase almacena los arrays del firstComponent.arr para luego mandar estos datos al dataServices en donde serán enviados al firebase en dataServices.ts

export class Array{
    public arr: Objects[] = [];
    public usuarioValue = 0

    constructor(x: Objects[], y:number, private myService: dataServices){
        this.arr = x;
        this.usuarioValue = y;
        this.myService.uploadArr(this.arr, this.usuarioValue)
    }
}