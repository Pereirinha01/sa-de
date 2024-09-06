let dados = [
    {
        titulo : "Arroz Baranco",
        descricao : "Grupo Alimentar: Cereais Nutrientes Principal fonte de carboidratos, fornece energia. Também contém pequenas quantidades de proteínas e minerais como manganês e selênio.Benefícios É um alimento de baixo custo e fácil preparo.Riscos O consumo excessivo de arroz branco orgânico pode aumentar os níveis de açúcar no sangue rapidamente e fornecer poucas fibras.Observações Existem diversas variedades de arroz, como integral, parboilizado e selvagem, com diferentes perfis nutricionais.",
        link : "https://pt.wikipedia.org/wiki/Arroz_branco"
    },
    {
        titulo : "Frango Grelhado",
        descricao : "Grupo Alimentar: Carnes <p>Nutrientes: Excelente fonte de proteína de alta qualidade, essencial para a construção e reparação dos tecidos. Também contém vitaminas do complexo B e minerais como zinco e ferro.</p> <p>Benefícios: É uma carne magra e versátil, podendo ser incluída em diversas preparações culinárias. </p>Riscos: O preparo com excesso de gordura ou sal pode aumentar o valor calórico e o teor de sódio. Observações: A parte do frango com mais proteína e menos gordura é o peito.",
        link : "https://www.minhavida.com.br/alimentacao/tudo-sobre/frango"
    },
    {
        titulo : "Alface",
        descricao : "Grupo Alimentar: LegumesNutrientes: Rica em vitaminas A, C e K, além de minerais como potássio e ácido fólico. É uma excelente fonte de fibras. Benefícios: Contribui para a saúde dos olhos, do sistema imunológico e do coração. Possui baixo valor calórico e é rica em água. Riscos: O consumo de alface crua pode transmitir algumas bactérias, como a E. coli. Observações: Existem diversos tipos de alface, com diferentes sabores e texturas.",
        link : "https://www.tuasaude.com/beneficios-da-alface/"
    },
    {
        titulo: "Lentilhas",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rica em fibras, proteínas vegetais e ferro. Auxilia no controle do colesterol e na saciedade. </p> <p>Benefícios: Ótima opção para vegetarianos e veganos. Fonte de energia de longa duração. </p> <p>Riscos: O consumo excessivo pode causar gases. </p> <p>Observações: Existem diversas variedades de lentilhas, com diferentes cores e sabores.</p>",
        link: "https://www.tuasaude.com/beneficios-das-lentilhas/"
    },
    {
        titulo: "Leite",
        descricao: "Grupo Alimentar: Laticínios <p>Nutrientes: Rica fonte de cálcio, essencial para a saúde dos ossos e dentes. Também contém proteínas de alta qualidade, vitaminas do complexo B (principalmente B12) e potássio.</p> <p>Benefícios: Fortalece os ossos e dentes, auxilia no funcionamento muscular e nervoso, contribui para a saúde do coração. </p> <p>Riscos: O consumo excessivo pode causar inchaço em algumas pessoas. Pessoas com intolerância à lactose devem evitar ou consumir leite sem lactose. </p> <p>Observações: Existem diferentes tipos de leite, como integral, semidesnatado, desnatado e vegetal (amêndoas, soja, coco). Cada tipo possui um perfil nutricional diferente.</p>",
        link: "https://www.minhavida.com.br/alimentacao/tudo-sobre/leite"
    },
    {
        titulo: "Maçã",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rica em fibras, vitamina C e antioxidantes como a quercetina. Também contém potássio e vitaminas do complexo B.</p> <p>Benefícios: Auxilia na digestão, fortalece o sistema imunológico, promove a saúde do coração e pode ajudar a prevenir algumas doenças crônicas.</p> <p>Riscos: O consumo excessivo de frutas pode causar problemas estomacais em algumas pessoas. </p> <p>Observações: Existem diversas variedades de maçã, cada uma com sabor e textura diferentes.</p>",
        link: "https://www.tuasaude.com/beneficios-da-maca-para-a-saude/"
    },
    {
        titulo: "Brócolis",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rico em fibras, vitaminas C e K, além de conter betacaroteno (que o corpo converte em vitamina A). É uma boa fonte de cálcio e ferro.</p> <p>Benefícios: Fortalece o sistema imunológico, possui ação antioxidante, auxilia na saúde dos ossos e pode ajudar na prevenção de alguns tipos de câncer.</p> <p>Riscos: O consumo cru pode causar gases em algumas pessoas.</p> <p>Observações: Pode ser consumido cozido no vapor, refogado ou cru em saladas. As folhas também são comestíveis e nutritivas.</p>",
        link: "https://www.tuasaude.com/7-boas-razoes-para-comer-brocolis/"
    },
    {
        titulo: "Feijão Carioca",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rico em fibras, proteínas vegetais, ferro e vitaminas do complexo B. É uma boa fonte de potássio e magnésio.</p> <p>Benefícios: Auxilia na digestão, controla os níveis de açúcar no sangue, fortalece os músculos e ossos, e promove a saciedade.</p> <p>Riscos: O consumo em excesso pode causar gases em algumas pessoas, especialmente se não for devidamente cozido.</p> <p>Observações: É um dos principais ingredientes da culinária brasileira, podendo ser consumido em diversos pratos, como feijoada, tropeiro e carioca.</p>",
        link: "https://www.tudosobre.com/feijao-carioca/"
    },
    {
        titulo: "Cenoura",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rica em betacaroteno (que o corpo converte em vitamina A), fibras e vitamina K. Também contém potássio e outras vitaminas do complexo B.</p> <p>Benefícios: Melhora a visão, fortalece o sistema imunológico, possui ação antioxidante e auxilia na saúde da pele.</p> <p>Riscos: O consumo excessivo de betacaroteno pode causar um leve amarelamento da pele em algumas pessoas.</p> <p>Observações: Pode ser consumida crua em saladas, cozida no vapor, refogada ou em sucos. As folhas da cenoura também são comestíveis e nutritivas.</p>",
        link: "https://www.tuasaude.com/beneficios-da-cenoura/"
    },
    {
        titulo: "Banana",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rica em potássio, fibras e carboidratos. Também contém vitaminas do complexo B e vitamina C.</p> <p>Benefícios: Fonte de energia rápida, auxilia na digestão, fortalece os músculos e ajuda a regular a pressão arterial.</p> <p>Riscos: O consumo excessivo pode causar ganho de peso, devido ao seu alto teor de açúcar natural.</p> <p>Observações: Existem diversas variedades de banana, como nanica, prata e banana da terra, cada uma com características e sabores diferentes.</p>",
        link: "https://www.tuasaude.com/beneficios-da-banana/"
    },
    {
        titulo: "Salmão",
        descricao: "Grupo Alimentar: Peixes <p>Nutrientes: Rico em ômega-3, um tipo de gordura saudável essencial para o coração. Também é uma excelente fonte de proteína de alta qualidade, vitaminas do complexo B e minerais como selênio.</p> <p>Benefícios: Ajuda a reduzir o risco de doenças cardíacas, controla a pressão arterial, melhora a saúde cerebral e possui propriedades anti-inflamatórias.</p> <p>Riscos: O consumo de salmão contaminado com mercúrio pode ser prejudicial à saúde, principalmente para gestantes e crianças. O preparo com excesso de sal pode aumentar o teor de sódio.</p> <p>Observações: O salmão selvagem geralmente possui mais ômega-3 do que o salmão de aquicultura.</p>",
        link: "https://www.tuasaude.com/beneficios-do-salmao/"
    },
    {
        titulo: "Carne Bovina Magra",
        descricao: "Grupo Alimentar: Carnes <p>Nutrientes: Excelente fonte de proteína de alta qualidade, ferro, zinco e vitaminas do complexo B. Contém também outros minerais importantes como fósforo e selênio.</p> <p>Benefícios: Fortalece os músculos, auxilia na formação de células sanguíneas, contribui para o bom funcionamento do sistema imunológico e é uma ótima opção para quem busca aumentar a ingestão de proteínas.</p> <p>Riscos: O consumo excessivo de carne vermelha está associado a um maior risco de doenças cardiovasculares e alguns tipos de câncer. O preparo com excesso de gordura ou sal pode aumentar o valor calórico e o teor de sódio. Cortes mais magros como patinho, filé mignon e maminha são as opções mais saudáveis.</p> <p>Observações: A carne bovina é uma importante fonte de creatina, um composto natural que auxilia na produção de energia muscular.</p>",
        link: "https://www.tuasaude.com/beneficios-da-carne-bovina/"
    },
    {
        titulo: "Iogurte Natural",
        descricao: "Grupo Alimentar: Laticínios <p>Nutrientes: Rico em cálcio, proteínas de alta qualidade e probióticos, que são bactérias benéficas para a flora intestinal. Também contém vitaminas do complexo B e fósforo.</p> <p>Benefícios: Fortalece os ossos e dentes, auxilia na digestão, fortalece o sistema imunológico e pode ajudar a prevenir doenças como a osteoporose.</p> <p>Riscos: Pessoas com intolerância à lactose devem evitar ou consumir iogurtes com baixo teor de lactose. O consumo excessivo de iogurtes com adição de açúcar pode contribuir para o ganho de peso.</p> <p>Observações: O iogurte grego é uma opção mais concentrada em proteínas e com menos lactose. É importante escolher iogurtes com adição mínima de açúcar e sem outros ingredientes artificiais.</p>",
        link: "https://www.tuasaude.com/beneficios-do-iogurte/"
    }
];

