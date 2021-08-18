import moment from 'moment'

export default {
    tasks: [
      {
        id: 111,
        status: 0,
        difficulty: 12,
        name: "Criação do component de input",
        commits: [],
        describe: "Construir component responsivo de input compatível com todos navegadores",
        // Ferificar com a professora como modelar a sprint
        // Criara uma tabela so para armazenar esse dado??
        // Ou apenas armazenar date de inicio e fim??
        // Epcs tem sprints? ou tarefas tem sprints?
        sprint: {
            id: 123,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 1,
            name: 'CodTime',
        },
        epc: {
            id: 12,
            priority: 0,
        },
        collaborator: {
            id: 90,
            name: "DevMaster",
            is_admin: true,
            role: "Gerente",
            avatar_url: null
        }
      },


      {
        id: 112,
        status: 0,
        difficulty: 8,
        name: "Criar componente de listagem de tarefas",
        describe: "Desenvolver componentes responsivos para ",
        commits: [],
        sprint: {
            id: 123,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 1,
            name: 'CodTime',
        },
        epc: {
            id: 13,
            priority: 1,
        },
        collaborator: {
            id: 90,
            name: "DevMaster",
            is_admin: true,
            role: "Gerente",
            avatar_url: null
        }
      },
      {
        id: 113,
        status: 1,
        difficulty: 114,
        name: "Modelar relações entre Epcs, Sprints e Tesks no BD",
        describe: "Definir quais são os relacionamentos cardinalidades e como essas estruturas serão avaliadas no sistema.",
        commits: [
            {id: 113001, message: "Perguntar para a professora!", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')}
        ],
        sprint: {
            id: 123,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 1,
            name: 'CodTime',
        },
        epc: {
            id: 13,
            name: "Modelagem (preliminar) do sistema",
            priority: 2,
        },
        collaborator: {
            id: 90,
            name: "DevMaster",
            is_admin: true,
            role: "Gerente",
            avatar_url: null
        }
      },
      {
        id: 113,
        status: 1,
        difficulty: 114,
        name: "Filtro do Kamban",
        describe: "Criar filtro dropdown da tela de Kamban. Filtrando por projetos, colaboradores e sprint (período).",
        commits: [
            {id: 113001, message: "Criação do designe do filtro", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')}
        ],
        sprint: {
            id: 123,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 1,
            name: 'CodTime',
        },
        epc: {
            id: 12,
            name: "Tela de Tasks",
            priority: 1,
        },
        collaborator: {
            id: 90,
            name: "DevMaster",
            is_admin: true,
            role: "Gerente",
            avatar_url: null
        }
      },
    ],
  };
  