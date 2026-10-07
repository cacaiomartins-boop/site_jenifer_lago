
export type PublicationBlock = {
  heading?: string;
  note?: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
};

export type Publication = {
  year: number;
  type: string;
  title: string;
  authors: readonly string[];
  highlight: string;
  venue: string;
  reference: string;
  summary: string;
  url: string;
  linkLabel: string;
  pdf?: string;
  readLabel: string;
  readMeta?: string;
  citation: string;
  // Artigos curtos: texto completo em parágrafos. Marcações como (1-4) viram números sobrescritos.
  body?: readonly string[];
  // Livros e capítulos: resumo e conteúdo em blocos.
  sections?: readonly PublicationBlock[];
  references?: readonly { text: string; url: string }[];
};

const publications: Publication[] = [
    {
      year: 2026,
      type: "Editorial",
      title: "Enfermeiros e o luto: uma análise sob a perspectiva da psicanálise",
      authors: ["Diane Maria Scherer Kuhn Lago", "Jennifer Patrícia Kuhn Lago", "Ana Claudia Afonso Valladares-Torres", "Dirce Bellezi Guilhem"],
      highlight: "Jennifer Patrícia Kuhn Lago",
      venue: "Revista Brasileira de Enfermagem",
      reference: "2026;79:e7904",
      summary: "Editorial que discute o luto na perspectiva da psicanálise: o processo singular de elaborar uma perda, os sinais de que é hora de buscar ajuda profissional e a importância de preparar enfermeiros e outros profissionais de saúde para acolher pessoas enlutadas.",
      url: "https://doi.org/10.1590/0034-7167.20267904pt",
      linkLabel: "Ver na revista",
      readLabel: "Ler artigo completo",
      pdf: "/publicacoes/enfermeiros-e-o-luto.pdf",
      citation: "Lago DMSK, Lago JPK, Valladares-Torres ACA, Guilhem DB. Nurses and grief: an analysis from the perspective of psychoanalysis. Rev Bras Enferm. 2026;79:e7904. https://doi.org/10.1590/0034-7167.20267904pt",
      // Texto completo do editorial. Marcações como (1-4) viram números sobrescritos de referência.
      body: [
        "A necessidade de compreender o luto no contexto atual do mundo, que enfrenta crises e desafios globais, como pandemias, guerras e violência social, evidencia a relevância deste estudo, pois a análise do luto, do processo de adaptação da pessoa enlutada, das formas de enfrentamento e do momento em que a ajuda profissional deve ser cogitada é importante para a saúde mental e o bem-estar subjetivo coletivo. Vários fatores influenciam a elaboração e vivência do luto, entre os quais se destacam as circunstâncias da perda sofrida pela pessoa. Conhecer os aspectos relacionados ao processo da perda ou da morte e do morrer é importante para o entendimento do luto(1-4).",
        "O luto pode ser definido como o sentimento desencadeado por perda significativa do elo entre uma pessoa e seu objeto. Representado por tristeza, foco na ausência e desmotivação, não se limita à morte, mas a perdas simbólicas ou reais ao longo do desenvolvimento da pessoa(2,3). Passar pela experiência de uma ruptura definitiva pode ser considerada traumática, principalmente pela circunstância da perda e pela importância da ausência do elo perdido(1,4). Lacan(2) descreve o luto como algo a ser superado de forma intersubjetiva, considerando que fatores externos, como os relacionamentos emocionais e o modo como a pessoa vive em sociedade, interferem na superação.",
        "Considerando que o luto representa a dor da perda, o processo que o sucede representa a transformação da pessoa enlutada ao ressignificar a sua vida. Esse período é compreendido como um processo de elaboração e adaptação. Freud(3) considera que o tempo supera a dor e que o luto, por ser um processo natural, não deve ter interferência. Porém, quando não evolui de forma natural, caracteriza-se como melancolia, um estado patológico de reação à perda.",
        "Para que haja a superação do luto, é importante a ressignificação do que foi perdido. Não basta que o objeto ou a pessoa desapareça para que este seja esquecido; é necessário um trabalho psíquico lento e, muitas vezes, doloroso(3). A perda pode causar dor, mas também crescimento e fortalecimento emocional. A resiliência e a capacidade de adaptação são fundamentais nesse processo(4).",
        "O luto, por ser um processo particular, envolve aspectos emocionais e psicológicos, como a capacidade de se reconectar com o mundo exterior, preencher o vazio da perda e ressignificar o presente e o futuro. Também envolve aspectos sociais de interação com o mundo exterior. Assim, quando ocorre a superação, o mundo interno da pessoa é modificado e a perda é ressignificada(2,4).",
        "Embora o processo seja singular, há momentos em que é possível perceber a necessidade de apoio profissional, especialmente da área da saúde mental, como o enfermeiro(1). Reações comportamentais, cognitivas e emocionais variam, incluindo tristeza, raiva, culpa, desesperança e, em alguns casos, alívio(1).",
        "Quando o luto não é finito e há a sensação de que o objeto perdido representa também a morte de parte da pessoa enlutada, procurar um especialista é fundamental. Profissionais de saúde precisam estar preparados para identificar os sintomas do luto, compreender o processo e oferecer apoio no enfrentamento e no alívio do sofrimento(3-4).",
        "Os enfermeiros têm a missão de cuidar de forma integral, oferecendo suporte emocional, social e físico, além de conforto e atenção. Vivenciam perdas no cotidiano e são responsáveis pelo acompanhamento de pacientes e pessoas enlutadas, sendo essenciais nesse processo(1). Portanto, há necessidade constante de qualificação para um cuidado eficaz, sem que o trabalho se torne fator de adoecimento. Pode-se concluir que a compreensão do luto na psicanálise e a discussão do processo de superação auxiliam esses profissionais de saúde a elaborar propostas de acompanhamento e apoio para pessoas enlutadas.",
        "Com esta discussão, há maior conscientização sobre os sintomas do luto e os processos de enfrentamento, desde os considerados normais até os que podem representar quadros patológicos. A psicanálise não compreende o luto apenas como evento, mas também como uma forma de subjetivar a dor da perda, que pode ser constante. Quanto mais aprofundada a discussão, maior a compreensão sobre o processo de sofrimento e adaptação.",
        "Enfim, reforça-se a importância de que enfermeiros e outros profissionais de saúde estejam atualizados e capacitados para esse atendimento, recebendo apoio social e psicológico para a oferta de acolhimento humanizado.",
      ],
      references: [
        { text: "Araújo LBP, Arrais RH. Morte e luto na vivência do profissional de saúde: uma revisão integrativa. Psicol Saúde Debate. 2025;11(1):719-43.", url: "https://doi.org/10.22289/2446-922X.V11A1A43" },
        { text: "Lacan J. O seminário, livro 6: o desejo e sua interpretação. Rio de Janeiro: Zahar; 2026. 562p.", url: "" },
        { text: "Freud S. Luto e melancolia: precedido por transitoriedade. Belo Horizonte: Autêntica; 2026. 64p.", url: "" },
        { text: "Valladares-Torres ACA, Lago DMSK. Saúde mental e estratégias de enfrentamento ao isolamento social na pandemia de COVID-19. In: Duarte AG, Avila CFD, orgs. A COVID-19 no Brasil: ciência, inovação tecnológica e políticas públicas. Vol. 1. Curitiba (PR): CRV; 2020. p. 237-56.", url: "https://doi.org/10.24824/978655578433.6" },
      ],
    },
    {
      year: 2022,
      type: "Livro",
      title: "Transtornos alimentares: exemplos de tratamentos psicológicos com suporte empírico",
      authors: ["Jennifer Patrícia Kuhn Lago", "Márcio Borges Moreira"],
      highlight: "Jennifer Patrícia Kuhn Lago",
      venue: "Instituto Walden4",
      reference: "1ª edição · ISBN 978-85-65721-32-5",
      summary: "Livro que apresenta práticas de tratamento psicológico da anorexia e da bulimia nervosas em quatro abordagens (Análise do Comportamento, Gestalt-terapia, Terapia Cognitivo-Comportamental e Psicanálise), com um estudo de caso de cada uma e estudos que servem de suporte empírico à eficácia dessas terapias.",
      url: "https://www.walden4.com.br/livros/",
      linkLabel: "Ver no Instituto Walden4",
      pdf: "/publicacoes/transtornos-alimentares-lago-moreira-2022.pdf",
      readLabel: "Ler resumo e conteúdo",
      readMeta: "Resumo e conteúdo da obra",
      citation: "Lago JPK, Moreira MB. Transtornos alimentares: exemplos de tratamentos psicológicos com suporte empírico. 1. ed. Instituto Walden4; 2022. ISBN 978-85-65721-32-5.",
      sections: [
        {
          heading: "Resumo",
          note: "Palavras-chave: transtornos alimentares, tratamento psicológico, Psicologia Baseada em Evidências.",
          paragraphs: [
            "Este trabalho teve o objetivo de apresentar práticas que demonstrem tratamentos psicológicos dos transtornos alimentares em quatro abordagens psicológicas, apresentadas em artigos científicos, e que sirvam de suporte empírico da eficácia destas terapias. Para isto, abordou-se a definição e etiologia dos transtornos alimentares e a concepção teórica destes transtornos para a Análise do Comportamento, Gestalt-Terapia, Terapia Cognitivo-Comportamental e Psicanálise, assim como a definição da Prática Baseada em Evidências no contexto da Psicologia.",
            "Foram apresentados o processo de intervenção destes transtornos para estas abordagens, um estudo de caso de cada uma delas e ensaios randomizados de tais tratamentos. O procedimento da pesquisa da monografia ocorreu a partir da seleção de meta-análises e revisões bibliográficas que abordam o processo terapêutico pelo qual os psicólogos das abordagens podem atuar no tratamento da Anorexia e/ou Bulimia Nervosas. Estes documentos foram encontrados na Língua Inglesa e traduzidos para o Português. Por fim, buscou-se sistematizar as técnicas, os resultados e as diferenças encontradas, além da discussão da PPBE nas quatro abordagens.",
          ],
        },
        {
          heading: "O que o livro aborda",
          list: [
            "Transtornos alimentares: definição, etiologia e relevância do tema",
            "A visão da Análise do Comportamento, da Gestalt-terapia, da Terapia Cognitivo-Comportamental e da Psicanálise, cada uma com a intervenção e um estudo de caso",
            "Prática Baseada em Evidências na Psicologia: suporte empírico versus prática baseada em evidências e as evidências de eficácia de cada abordagem",
            "Suporte empírico em cada uma das quatro abordagens, com artigos científicos traduzidos do inglês",
            "Discussão: comparações entre as abordagens e a pergunta “PPBE: ser ou não ser?”",
          ],
        },
      ],
    },
    {
      year: 2022,
      type: "Livro · coautoria",
      title: "Preconceito: doze experimentos e um paradigma",
      authors: ["Márcio Moreira", "Guilherme Rocha", "Jennifer Lago", "Ana Soares", "Bárbara dos Santos", "Camila Simões", "Gabriela Dias", "Jacqueline Nunes", "Kelly Alves", "Manuela Pires", "Maria Jardim", "Luana Chadud", "Olivia Alvarenga", "Wannessa Souza"],
      highlight: "Jennifer Lago",
      venue: "Instituto Walden4",
      reference: "1ª edição · ISBN 978-85-65721-17-2",
      summary: "Livro com doze experimentos sobre atitudes e preconceito na perspectiva da Análise do Comportamento, realizados por estudantes de Psicologia do UniCEUB sob orientação do professor Márcio Moreira. Jennifer conduziu o Experimento 12, sobre o estigma social da obesidade.",
      url: "https://www.walden4.com.br/livros/pdfs/moreira_etal_2022_12exp.pdf",
      linkLabel: "Abrir o livro no Instituto Walden4",
      readLabel: "Ler resumo e capítulo",
      readMeta: "Resumo da obra e do capítulo da Jennifer",
      citation: "Moreira M, Rocha G, Lago J, Soares A, Santos B, Simões C, Dias G, Nunes J, Alves K, Pires M, Jardim M, Chadud L, Alvarenga O, Souza W. Preconceito: doze experimentos e um paradigma. 1. ed. Instituto Walden4; 2022. ISBN 978-85-65721-17-2. Experimento 12 (Lago JPK), p. 633-725.",
      sections: [
        {
          heading: "Sobre o livro",
          paragraphs: [
            "O livro reúne pesquisas realizadas nas disciplinas Estágio Básico II, Produção de Artigo, Fórum de Debates III e Projeto de Monografia do curso de Psicologia do Centro Universitário de Brasília (UniCEUB), sob orientação do professor Márcio Moreira. O tema é o estudo das atitudes e do preconceito pelo escopo da Análise do Comportamento.",
            "O Experimento 1 trata do controle de estímulos e da avaliação do preconceito. Os experimentos 2 a 12 avaliam, com uma escala de diferencial semântico, o efeito de procedimentos de pareamento ao modelo sobre a formação de classes de equivalência e a transferência de função.",
          ],
        },
        {
          heading: "Capítulo da Jennifer: Experimento 12",
          note: "Efeito do treino de reorganização de classe de equivalência relacionado ao estigma social da obesidade · p. 633–725",
          paragraphs: [
            "A pesquisa investigou se atitudes negativas em relação a corpos gordos (gordofobia) podem ser modificadas. Participantes aprenderam, por pareamento ao modelo, a relacionar imagens de corpos obesos a símbolos abstratos e, em uma segunda etapa, a relacionar esses símbolos a imagens de corpos socialmente valorizados, para avaliar a transferência de função e a reorganização de classes de equivalência. As atitudes foram medidas com uma escala de diferencial semântico, aplicada antes, depois da primeira etapa e depois da segunda.",
            "Três das cinco participantes apresentaram a maior parte dos resultados esperados. Foi mais fácil transferir atitudes positivas para os símbolos neutros do que mudar as atitudes dos símbolos já associados a corpos obesos, e a etapa de reorganização de classes foi a que menos cumpriu seus objetivos, o que se alinha ao resultado de Rosendo e Melo (2018). O capítulo também discute limitações do procedimento, como as imagens usadas e a projeção de tela durante a coleta remota, e sugere caminhos para pesquisas futuras.",
          ],
        },
      ],
    },
];

export const site = {
  name: "Jennifer Patrícia Kuhn Lago",
  firstName: "Jennifer",
  profession: "Psicóloga · Psicanalista",
  registration: "CRP 01/26397",
  city: "Brasília",
  neighborhood: "Asa Sul",
  address: "SHN, Quadra 1, Bloco D, Sala 1107, Conjunto A, 11º andar, Edifício Fusion Work e Live, Asa Sul, Brasília — DF, 70701-040",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=-15.7898359,-47.8852539",
  profileUrl: "https://www.doctoralia.com.br/jennifer-lago/psicologo-psicanalista/brasilia",
  reviewUrl: "https://www.doctoralia.com.br/jennifer-lago/psicologo-psicanalista/brasilia#profile-reviews",
  bookingLabel: "Agendar consulta",
  appointmentDuration: "Atendimento individual",
  price: "R$ 180",
  rating: "5,0",
  reviewCount: 19,
  portrait: "/assets/jennifer-lago-retrato.jpg",
  office: "/assets/consultorio-jennifer-lago.jpg",
  reading: "/assets/jennifer-lago-freud.jpg",
  education: [
    "Graduação em Psicologia pelo UniCEUB (2022)",
    "Formação básica em Psicanálise pelo Corpo Freudiano de Brasília (2024)",
    "Master em Psicologia pela Arden University (concluído)",
    "Autora de livro e capítulo sobre transtornos alimentares e tratamentos psicológicos com suporte empírico",
  ],
  specialties: ["Psicanálise", "Ansiedade", "Transtornos alimentares", "Relacionamentos", "Depressão"],
  concerns: [
    { title: "Ansiedade e estresse", text: "Quando a inquietação ocupa mais espaço do que você gostaria." },
    { title: "Relações e conflitos", text: "Quando certos encontros parecem repetir os mesmos impasses." },
    { title: "Alimentação e corpo", text: "Quando a relação com a comida e com a própria imagem pesa no dia a dia." },
    { title: "Humor e depressão", text: "Quando os dias parecem pesados e é difícil nomear o que acontece." },
    { title: "Autoestima", text: "Quando a voz interna é dura demais e faltam palavras para si mesma(o)." },
    { title: "Trabalho e esgotamento", text: "Quando o cansaço, a insônia e a cobrança tomam conta da rotina." },
  ],
  services: [
    { name: "Psicoterapia presencial", description: "Atendimento psicológico individual para adultos no consultório em Brasília.", mode: "Presencial · Brasília", duration: "Atendimento individual", price: "R$ 180" },
    { name: "Psicoterapia online", description: "Teleconsulta para quem mora em Brasília, em outra cidade ou no exterior.", mode: "Online", duration: "Atendimento individual", price: "R$ 180" },
    { name: "Psicanálise e análise pessoal", description: "Processo de escuta psicanalítica, presencial ou online, no seu tempo.", mode: "Presencial ou online", duration: "Atendimento individual", price: "R$ 180" },
  ],
  reviews: [
    { quote: "Eu me senti muito bem acolhido(a) durante a terapia. As conversas aconteceram em um ambiente calmo e de confiança, e houve uma escuta atenta.", author: "Hendrik" },
    { quote: "A Dra. Jennifer é uma excelente profissional! Muito atenciosa e uma ótima ouvinte. Suas observações são sempre muito pertinentes e trazem reflexões muito interessantes e necessárias.", author: "Isabela Frances" },
    { quote: "Profissional incrível, atenciosa e muito competente. Sempre me acolhe com empatia e me ajuda a ver as situações de forma mais leve.", author: "Vanessa Alves" },
    { quote: "Eu realmente me sinto muito à vontade, eu amei o trabalho dela e ela me ajudou a entender bastante coisa sobre minha vida.", author: "SG" },
  ],
  // Link do site da Serenitah (provisório). O botão só aparece quando este campo estiver preenchido.
  serenitahUrl: "https://pixel-perfect-replication-beryl-delta.vercel.app/",
  emergency: [
    { number: "193", name: "Bombeiros", text: "Resgate em situações de risco à vida, como tentativas de suicídio, acidentes e incêndios." },
    { number: "190", name: "Polícia", text: "Quando alguém estiver violento, agressivo ou ameaçando outra pessoa." },
    { number: "192", name: "SAMU", text: "Urgências e emergências de saúde, incluindo as psiquiátricas." },
    { number: "188", name: "CVV", text: "Apoio emocional e prevenção do suicídio, 24 horas e gratuito." },
  ],
  podcast: {
    name: "vamos pro divã?",
    url: "https://open.spotify.com/show/6lV1VYO55jbOGj0DbMpDde",
    image: "/assets/podcast-vamos-pro-diva.jpg",
  },
  social: [
    { label: "Instagram", url: "https://www.instagram.com/jenniferlago.psi" },
    { label: "TikTok", url: "https://www.tiktok.com/@jenniferlago.psicologa" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jennifer-lago-629837200" },
    { label: "Podcast", url: "https://open.spotify.com/show/6lV1VYO55jbOGj0DbMpDde" },
  ],
  publications,
} as const;
