import moment from 'moment'

export default {
  projects: [
    {
      id: 1,
      name: "CodTime",
      type: "Web",
      describe: "Plataforma de gerencia de projetos e contabilização de horas trabalhadas. Com foco em desenvolvedores freelance na gestão de seus projetos, usando uma abordagem ágil e aproximando-o ao cliente com formas de prestação de conta dos serviços prestados. :)",
      thumbnail: null, 
      tasks: [
        //Retornar as tarefas ques tão dentro da sprint que acabe no período atual
        {
          id: 111,
          status: 0,
          difficulty: 8,
          name: "Criar componente de listagem de tarefas",
          describe: "Desenvolver componentes responsivos para ",
          commits: [],
          collaborator_id: 90,
        },
        {
          id: 112,
          status: 0,
          difficulty: 8,
          name: "Criar componente de listagem de tarefas",
          describe: "Desenvolver componentes responsivos para ",
          commits: [],
          collaborator_id: 90,
        },
        {
          id: 113,
          status: 1,
          difficulty: 114,
          collaborator_id: 90,
          name: "Modelar relações entre Epcs, Sprints e Tesks no BD",
          describe: "Definir quais são os relacionamentos cardinalidades e como essas estruturas serão avaliadas no sistema.",
          commits: [{id: 113001, message: "Perguntar para a professora!", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')}],
        },
        {
          id: 114,
          status: 1,
          difficulty: 114,
          collaborator_id: 90,
          name: "Filtro do Kamban",
          describe: "Criar filtro dropdown da tela de Kamban. Filtrando por projetos, colaboradores e sprint (período).",
          commits: [{id: 113001, message: "Criação do designe do filtro", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')}],
        }
      ],
      collaborators: [
        {
          id: 90,
          name: "DevMaster",
          is_admin: true,
          role: "Gerente",
          avatar_url: null
        },
        {
          id: 91,
          name: "Patricia Profa.",
          is_admin: true,
          role: "Gerente",
          avatar_url: null
        }
      ],
      statistics: {
        total_epcs: 12,
        total_tasks: 50,
        total_commits: 1000
      }
    },


    {
      id: 2,
      name: "Linhagua",
      type: "Web",
      describe: "ERP para gerenciamento de produção, venda, agendamento, licenciamentos da empresa Linhagua Mineração ",
      thumbnail: null, 
      tasks: [
        {
          id: 2001,
          status: 3,
          difficulty: 8,
          collaborator_id: 90,
          name: "Refatorar: incluir sucata no calculo do valor do pedido",
          describe: "Adicionar um novo condicionante para calculo do valor do produto (sucata). Na homologação decrementa do valor * qtd_quebra_com_lacre ",
          commits: [
              {id: 20001, message: "Add input para armazenar o valor da sucata", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
              {id: 20002, message: "Add campo no banco para armazenar valor da sucata", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
              {id: 20001, message: "Redefinir calculo a nota", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(2, 'hours').format('YYYY-MM-DD HH:mm')}
          ],
        },
        {
          id: 2002,
          status: 2,
          difficulty: 2,
          collaborator_id: 90,
          name: "Corrigir bug: (Contar sucata no agendamento por mês) ",
          describe: "Add sucata no agendamento por mês",
          commits: [
              {id: 20001, message: "Add input para armazenar o valor da sucata", date_init: moment().format('YYYY-MM-DD HH:mm'), date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm')},
          ],
        }
      ],
      collaborators: [
        {
          id: 90,
          name: "DevMaster",
          is_admin: true,
          role: "Gerente",
          avatar_url: null
        }
      ],
      statistics: {
        total_epcs: 12,
        total_tasks: 50,
        total_commits: 1000
      }
    },
  ],

  // Lista modelada no principio do projeto
  projects_oud: [
    {
      id: 1,
      user_id: 1,
      name: "CodTime",
      type: "Web",
      totla_minuts: "0.00",
      status: "progres",
      created_at: "2020-06-17 12:50:30",
      updated_at: "2020-06-17 12:50:30",
      commits: [
        {
          id: 2,
          mensage: "frist commit",
          project_id: 1,
          task: "Inicialização do projeto",
          task_id: 1,
          minuts: 12,
          time_start: "2020-06-17 07:05:30",
          time_end: "2020-06-17 10:52:30",
          created_at: "2020-06-17 13:10:26",
          updated_at: "2020-06-17 13:10:26",
        },
      ],
      tasks: [
        {
          id: 1,
          name: "Pagina de login",
          project_id: 1,
          status: "produce",
          created_at: "2020-06-17 13:12:12",
          updated_at: "2020-06-17 13:12:12",
        },
      ],
    },
    {
      id: 2,
      user_id: 1,
      name: "Linhagua",
      type: "Web",
      totla_minuts: "0.00",
      status: "progres",
      created_at: "2020-06-17 12:58:21",
      updated_at: "2020-06-17 12:58:21",
      commits: [
        {
          id: 3,
          mensage: "frist commit",
          project_id: 2,
          task: "Inicialização do projeto",
          task_id: 1,
          minuts: 12,
          time_start: "2020-06-17 07:05:30",
          time_end: "2020-06-17 10:52:30",
          created_at: "2020-06-18 10:43:32",
          updated_at: "2020-06-18 10:43:32",
        },
      ],
      tasks: [
        {
          id: 2,
          name: "Pagina de login",
          project_id: 2,
          status: "produce",
          created_at: "2020-06-18 10:43:21",
          updated_at: "2020-06-18 10:43:21",
        },
      ],
    },
  ],
};
