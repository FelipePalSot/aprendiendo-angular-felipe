import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: "cambiaLetras"
})

export class cambiaLetrasPipe implements PipeTransform {
    transform(value: string, mayus: boolean) {


        let resultado = value.replaceAll("e", "3")
                    .replaceAll("i","1");

        if(mayus) {
            resultado = resultado.toUpperCase();
        }  
        return resultado ;
    }
}