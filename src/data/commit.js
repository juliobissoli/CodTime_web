import moment from "moment"

export default {
    commits: [


        {
            id: 113001,
            collaborator: {
                id: 90,
                name: "DevMaster",
                is_admin: true,
                role: "Gerente",
                avatar_url: null
            },
            project_id: 1,
            minutes: 120,
            message: "Perguntar para a professora!",
            date_init: moment().format('YYYY-MM-DD HH:mm'),
            date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm'),
            task: {
                id: 114,
                status: 1,
                difficulty: 114,
                name: "Filtro do Kamban",
            }
        },
        {
            id: 113001,
            collaborator: {
                id: 90,
                name: "DevMaster",
                is_admin: true,
                role: "Gerente",
                avatar_url: null
            },
            project_id: 1,
            minutes: 120,
            message: "Criação do designe do filtro",
            date_init: moment().format('YYYY-MM-DD HH:mm'),
            date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm'),
            task: {
                id: 113,
                status: 1,
                difficulty: 114,
                name: "Modelar relações entre Epcs, Sprints e Tesks no BD",
            }
        },
        {
            id: 20001,
            collaborator: {
                id: 90,
                name: "DevMaster",
                is_admin: true,
                role: "Gerente",
                avatar_url: null
            },
            project_id: 1,
            minutes: 120,
            message: "Add input para armazenar o valor da sucata",
            date_init: moment().format('YYYY-MM-DD HH:mm'),
            date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm'),
            task: {
                id: 202,
                status: 2,
                difficulty: 2,
                name: "Corrigir bug: (Contar sucata no agendamento por mês) ",
            }
        },
        {
            id: 2002, 
            collaborator: {
                id: 90,
                name: "DevMaster",
                is_admin: true,
                role: "Gerente",
                avatar_url: null
            },
            project_id: 2,
            minutes: 120,
            message: "Add campo no banco para armazenar valor da sucata",
            date_init: moment().format('YYYY-MM-DD HH:mm'),
            date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm'),
            task: {
                id: 2002,
                status: 3,
                difficulty: 8,
                name: "Refatorar: incluir sucata no calculo do valor do pedido",
            }
        },
        {
            id: 20003,
            collaborator: {
                id: 90,
                name: "DevMaster",
                is_admin: true,
                role: "Gerente",
                avatar_url: null
            },
            project_id: 2,
            minutes: 120,
            message: "Redefinir calculo a nota",
            date_init: moment().format('YYYY-MM-DD HH:mm'),
            date_end: moment().add(2, 'hours').format('YYYY-MM-DD HH:mm'),
            task: {
                id: 2002,
                status: 3,
                difficulty: 8,
                name: "Refatorar: incluir sucata no calculo do valor do pedido",
            }
        },
        {
            id: 20001, 
            collaborator: {
                id: 90,
                name: "DevMaster",
                is_admin: true,
                role: "Gerente",
                avatar_url: null
            },
            project_id: 3,
            minutes: 120,
            message: "Instalação das ferramentes e teste no emulador ok",
            date_init: moment().format('YYYY-MM-DD HH:mm'),
            date_end: moment().add(3, 'hours').format('YYYY-MM-DD HH:mm'),
            task: {
                id: 301,
                status: 3,
                difficulty: 3,
                name: "Montar ambiente iOS",
            }
        },


    ]
}