import { Animal } from "./Animal";
import { Cliente } from "./Cliente";
import { Servico } from "./Servico";
import { Veterinario } from "./Veterinario";

export class Atendimento {
    constructor(
        public id: number,
        public cliente: Cliente,
        public animal: Animal,
        public veterinario: Veterinario,
        public servico: Servico,
        public dataAtendimento: string,
        public observacoes: string,
        public finalizado: boolean = false,
        public cancelado: boolean = false

    ) { }

        totalPedido(): number{
        return this.servico.valor
    }

        finalizar(): boolean{
        if (this.finalizado || this.cancelado){
            return false
        }
        this.finalizado = true
        return true
    }

}