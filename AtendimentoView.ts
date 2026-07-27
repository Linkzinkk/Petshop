import { Cliente } from "../Model/Cliente"
import { Animal } from "../Model/Animal"
import { Veterinario } from "../Model/Veterinario"
import { Servico } from "../Model/Servico"
import { Atendimento } from "../Model/Atendimento"





export class AtendimentoView {

    exibirTitulo(): void {
        console.log("===========================================================")
        console.log("PetShop 4 Patas")
        console.log("===========================================================")
    }

    exibirCliente(cliente: Cliente): void {
        console.log("CLIENTE")
        console.log(`ID: ${cliente.id}`)
        console.log(`Nome: ${cliente.nome}`)
        console.log(`CPF: ${cliente.cpf}`)
        console.log(`Email: ${cliente.email}`)
        console.log(`Telefone: ${cliente.telefone}`)
        console.log(`===================================`)
    }

    exibirAnimal(animal: Animal): void {
        console.log(`ANIMAL`)
        console.log(`ID: ${animal.id}`)
        console.log(`Nome: ${animal.nome}`)
        console.log(`Especie: ${animal.especie}`)
        console.log(`Raca: ${animal.raca}`)
        console.log(`Idade: ${animal.idade}`)
        console.log(`Peso: ${animal.peso}`)
        console.log(`Dono: ${animal.dono}`)
        console.log(`====================================`)
    }

    exibirVeterinario(veterinario: Veterinario): void {
        console.log(`ESPECIALISTAS VETERINARIOS`)
        console.log(`ID: ${veterinario.id}`)
        console.log(`Nome: ${veterinario.nome}`)
        console.log(`CRMV: ${veterinario.crmv}`)
        console.log(`Especialidade: ${veterinario.especialidade}`)
    }

    exibirServico(servico: Servico): void {
        console.log(`SERVICOS`)
        console.log(`ID: ${servico.id}`)
        console.log(`Descricao: ${servico.descricao}`)
        console.log(`Valor: ${servico.valor}`)
        console.log(`Tempo de tabalho: ${servico.duracaoMinutos}`)
    }

    exibirAtendimento(atendimento: Atendimento): void {
        console.log(`ATENDIMENTOS`)
        console.log(`ID: ${atendimento.id}`)
        console.log(`Nome: ${atendimento.cliente}`)
        console.log(`ID: ${atendimento.animal}`)
        console.log(`ID: ${atendimento.servico}`)
        console.log(`ID: ${atendimento.veterinario}`)
        console.log(`ID: ${atendimento.observacoes}`)
        console.log(`ID: ${atendimento.cancelado}`)
        console.log(`ID: ${atendimento.finalizado}`)
        console.log(`ID: ${atendimento.dataAtendimento}`)
    }

    exibirMensagem(mensagem: string): void {
        console.log()
        console.log(mensagem)
    }
}