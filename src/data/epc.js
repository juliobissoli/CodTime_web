export default {

    epcs: [
        {
            id: 12,
            priority: 0,
            project_id: 1,
            name: "Componentes base do sistema",
            description: "Estrutuar os modelos e schemas das classes do banco de dados",
            tasks: [
                {
                    id: 111,
                    status: 0,
                    difficulty: 8,
                }
            ]
        },
        {
            id: 13,
            priority: 2,
            project_id: 1,
            name: "Modelagem/estruturação do BD",
            description: "Estrutuar os modelos e schemas das classes do banco de dados",
            tasks: [
                {
                    id: 113,
                    status: 1,
                    difficulty: 114,
                },
                {
                    id: 112,
                    status: 0,
                    difficulty: 8,
                },
                {
                    id: 113,
                    status: 1,
                    difficulty: 114,
                }
            ]
        },
        {
            id: 1,
            name: "Refatoração",
            project_id: 2,
            description: "Corigir essas que o cliente necessita",
            priority: 2,
            tasks: [
                {
                    id: 2001,
                    status: 3,
                    difficulty: 8,
                },
                {
                    id: 2002,
                    status: 2,
                    difficulty: 2,
                },
            ]

        }
    ]
}