import { Cliente } from "../Model/Cliente";
import { Animal } from "../Model/Animal";
import { Veterinario } from "../Model/Veterinario";
import { Servico } from "../Model/Servico";
import { Atendimento } from "../Model/Atendimento";

export class AtendimentoController {
    private cliente: Cliente | null = null;

    private animal: Animal | null = null;

    private veterinario: Veterinario | null = null;

    private servico: Servico | null = null;

    private atendimento: Atendimento | null = null;



    cadastrarCliente(
        id: number,
        nome: string,
        email: string,
        cpf: string,
        telefone: string): Cliente {
        this.cliente = new Cliente(id, nome, email, cpf, telefone)

        return this.cliente
    }

    cadastrarAnimal(
        id: number,
        nome: string,
        especie: string,
        raca: string,
        idade: number,
        peso: number,
        dono: Cliente): Animal | null {
        this.animal = new Animal(
            id, nome, especie, raca, idade, peso, dono)
        return this.animal
    }

    cadastrarVeterinario(
        id: number,
        nome: string,
        crmv: string,
        especialidade: string): Veterinario {
        this.veterinario = new Veterinario(id, nome, crmv, especialidade)
        return this.veterinario
    }

    cadastrarServico(
        id: number,
        descricao: string,
        valor: number,
        duracaoMinutos: number
    ): Servico | null {
        this.servico = new Servico(id, descricao, valor, duracaoMinutos)
        return this.servico
    }

    realizarAtendimento(
        id: number,
        dataAtendimento: string,
        observacoes: string): Atendimento | null {
        if (!this.cliente || !this.animal
            || !this.veterinario || !this.servico) {
            return null;
        }
        this.atendimento = new Atendimento(
            id, this.cliente, this.animal, this.veterinario,
            this.servico, dataAtendimento, observacoes)
        return null
    }

    finalizarAtendimento(): boolean {
        if (!this.atendimento) {
            return false;
        }
        return this.atendimento.finalizar();
    }

    cancelarAtendimento(): boolean {
        if (!this.atendimento) {
            return false;
        }
        return this.atendimento.cancelar();
    }


    //////////////         OBTER PRODUTOS                ///////////////////////////////////////////////////////////////////////
    obterCliente(): Cliente | null {
        return this.cliente;
    }

    obterAnimal(): Animal | null {
        return this.animal;
    }

    obterVeterinario(): Veterinario | null {
        return this.veterinario;
    }

    obterServico(): Servico | null {
        return this.servico;
    }

    obterAtendimento(): Atendimento | null {
        return this.atendimento;
    }

}

