export default {
  issue: {
    title: "Cadastro de Issues",
    description: "Uma breve descrição sobre o assunto",
    stages: ["Selecione o projeto a qual deseja cadastrar a issue",
             "Clique em 'Issue' no menu lateral do projeto",
             "Clique em 'New issue' no conto superior direito (caso não haja issues no projeto selecionado o botão estará centralizado)",
             "Preencha as informações desejada, clique em 'Create issues'"
            ],
    obs: null,
    image: "nome_da_image",
    redirect: "https://gitlab.com",
    url_doc: "https://docs.gitlab.com/ee/user/project/issues/"
  },
  project: {
    title: "Cadastro de Projetos",
    description: "Uma breve descrição sobre o  assunto",
    stages: ["Selecione o tipo de projeto desejado (usaremos o 'blank project como exemplo')",
             "Preencha as informações desejada, clique em 'Create project'"
            ],
    obs: null,
    image: "nome_da_image",
    redirect: "https://gitlab.com/projects/new",
    url_doc: "https://docs.gitlab.com/ee/user/project/"
  },
  hour: {
    title: "Cadastro de horas",
    description: "Uma breve descrição sobre o  assunto",
    stages: [
            "Selecione o projeto e a issue a desejada",
            "Na area de adicionar 'comentários' na issue, que está abaixo do histórico de ações da issue (se a issue tiver muitas ações sera necessário scrolar a pagina para baixo)",
             "Use o comando '/spend' seguido da quantidade de tempo que deseja adicionar seguido da unidade Ex.: /spend 1h dessa forma foi adicionado uma hora a issue designada",
             "Clique em 'comment' o período de descrito sera adicionado no tempo despendido da issue",
             "Para remover horas trabalhas e da mesma forma, informando a quantidade de tempo que deseja remover Ex.: /spend -1h, dessa forma será removida uma hora do tempo despendido dessa issue",
             "Dessa forma também e possível adicionar estimativa de tempo para issues. Basta usar o comando '/estimate' com o tempo estimado, Ex.: /estimate 8h, desse forma foi estimado que a issue designada tem duração de 8 horas"
            ],
    obs: [
        "As unidade de tempo podem ser: s (segundos), m (minutos), h (horas), d (dias = 8 horas), w (semana = 5 dias), m (mês = 4 semanas)",
        "E possível informar qual a data a qual o tempo foi adicionado no comando '/spend' basta inserir a data apos o tempo. Ex.: /spend 1h 2022-02-04",
        "Diferente do /sped o /estimate 8h não adiciona o tempo informado, se o comando for inserido novamente a estimativa se alterado para o novo valor",
        "Para remover estimativas deve-se usar o comando '/remove_estimate"    
        ], 
    image: "nome_da_image",
    redirect: "https://gitlab.com/",
    url_doc: "https://docs.gitlab.com/13.12/ee/user/project/time_tracking.html"
  },
  milestone: {
    title: "Cadastro de milestone",
    description: "Uma breve descrição sobre o  assunto",
    stages: ["Selecione o projeto a qual deseja cadastrar a issue",
             "Clique em 'Issue' no menu lateral do projeto",
             "Na sub-lista que que expandiu abaixo do botão 'Issues', clique em 'Milestone'",
             "Na parte superior esquerda clique em 'New Milestone'",
             "Preencha as informações desejada, clique em 'Create milestone'"
            ],
    obs: null,
    image: "nome_da_image",
    redirect: "https://gitlab.com",
    url_doc: "https://docs.gitlab.com/ee/user/project/issues/"
  },
};
