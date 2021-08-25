import moment from 'moment'

export default {
    tasks: [
      {
        id: 111,
        status: 0,
        difficulty: 12,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Criação do component de input",
        commits: [],
        description: "Construir component responsivo de input compatível com todos navegadores",
        // Verificar com a professora como modelar a sprint
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
        collaborator: {//Alterar para "responsável" ou "dono da tarefa"?! 
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
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Criar componente de listagem de tarefas",
        description: "Desenvolver componentes responsivos para ",
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
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Modelar relações entre Epcs, Sprints e Tesks no BD",
        description: "Definir quais são os relacionamentos cardinalidades e como essas estruturas serão avaliadas no sistema.",
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
        id: 114,
        status: 1,
        difficulty: 114,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Filtro do Kamban",
        description: "Criar filtro dropdown da tela de Kamban. Filtrando por projetos, colaboradores e sprint (período).",
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

      {
        id: 2001,
        status: 3,
        difficulty: 8,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Refatorar: incluir sucata no calculo do valor do pedido",
        description: "Adicionar um novo condicionante para calculo do valor do produto (sucata). Na homologação decrementa do valor * qtd_quebra_com_lacre ",
        commits: [
            {id: 20001, message: "Add input para armazenar o valor da sucata", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
            {id: 20002, message: "Add campo no banco para armazenar valor da sucata", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
            {id: 20001, message: "Redefinir calculo a nota", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(2, 'hours').format('YYYY-MM-DD HH:mm')}
        ],
        sprint: {
            id: 2,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 2,
            name: 'Linhagua',
        },
        epc: {
            id: 1,
            name: "Refatoração",
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
        id: 202,
        status: 2,
        difficulty: 2,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Corrigir bug: (Contar sucata no agendamento por mês) ",
        description: "Add sucata no agendamento por mês",
        commits: [
            {id: 20010, message: "Add input para armazenar o valor da sucata", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
        ],
        sprint: {
            id: 2,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 2,
            name: 'Linhagua',
        },
        epc: {
            id: 1,
            name: "Refatoração",
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
        id: 301,
        status: 3,
        difficulty: 3,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Montar ambiente iOS",
        description: "Instalar ferramentas necessárias para testar app no iOS",
        commits: [
            {id: 20001, message: "Instalação das ferramentes e teste no emulador ok", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
        ],
        sprint: {
            id: 32,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 3,
            name: 'Stonebox',
        },
        epc: {
            id: 31,
            name: "Rodas app no iOS",
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
        id: 301,
        status: 0,
        difficulty: 8,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Testar app no iOS",
        description: "Testar as funcionalidades estão rodando certas na versão para iPhone",
        commits: [],
        sprint: {
            id: 32,
            date_stat: moment().add(-4, 'days').format('YYYY-MM-DD'),
            date_end: moment().add(10, 'days').format('YYYY-MM-DD')
        },
        
        project: {
            id: 3,
            name: 'Stonebox',
        },
        epc: {
            id: 31,
            name: "Rodas app no iOS",
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
        id: 3001,
        status: -1,
        difficulty: 32,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Vercionamento na API",
        description: "Criara estrutura de com rotas vercionadas para atualização",
        commits: [],
        
        project: {
            id: 3,
            name: 'Stonebox',
        },
        epc: {
            id: 31,
            name: "Rodas app no iOS",
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
        id: 3001,
        status: -1,
        difficulty: 32,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Vercionamento na API",
        description: "Criara estrutura de com rotas vercionadas para atualização",
        commits: [],
        
        project: {
            id: 1,
            name: 'CodTime',
        },
        epc: null,
        collaborator: {
            id: 90,
            name: "DevMaster",
            is_admin: true,
            role: "Gerente",
            avatar_url: null
        }
      },

      {
        id: 2001,
        status: -1,
        difficulty: 144,
        created_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),
        updated_at: moment().add(-(Math.floor(Math.random() * (10 - 1) + 1)), "days"),

        name: "Refatorar forma de colculo de saldo",
        description: "Corrigir bug no calculo do saldo do cliente",
        commits: [],
        
        project: {
            id: 2,
            name: 'Linhagua',
        },
        epc: null,
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
  