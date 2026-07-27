import { AtendimentoView } from "./src/View/AtendimentoView";
import { AtendimentoController} from "./src/Controller/AtendimentoController"
const controller =
    new AtendimentoController();

const view =
    new AtendimentoView();

view.exibirTitulo();

const cliente =
    controller.cadastrarCliente(
        1,
        "Mariana Souza",
        "123.456.789-00",
        "(51) 99999-9999",
        "mariana@email.com"
    );

const animal =
    controller.cadastrarAnimal(
        1,
        "Thor",
        "Cachorro",
        "Golden Retriever",
        4,
        32.5,
        cliente
        
    );

const veterinario =
    controller.cadastrarVeterinario(
        1,
        "Dra. Camila Martins",
        "CRMV-RS 12345",
        "Clínica Geral"
    );

const servico =
    controller.cadastrarServico(
        1,
        "Consulta veterinária",
        150,
        40



    );

    const atendimento =
    controller.realizarAtendimento(
        1,
        "2026-07-22",
        "Animal apresentou falta de apetite."
    );


    
view.exibirTitulo()
view.exibirCliente(cliente)
