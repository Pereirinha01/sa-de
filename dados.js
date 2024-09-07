let dados = [
    {
        titulo : "Arroz Branco",
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
    },
    {
        titulo: "Amêndoas",
        descricao: "Grupo Alimentar: Oleaginosas <p>Nutrientes: Ricas em gorduras saudáveis (monoinsaturadas e poliinsaturadas), fibras, proteínas vegetais e uma variedade de vitaminas e minerais, como vitamina E, magnésio e fósforo.</p> <p>Benefícios: Auxiliam na redução do colesterol ruim, controlam a pressão arterial, promovem a saciedade, contribuem para a saúde do coração e do cérebro, e são uma excelente fonte de antioxidantes.</p> <p>Riscos: Devido ao alto teor calórico, o consumo excessivo pode levar ao ganho de peso. Pessoas com alergia a frutos secos devem evitar.</p> <p>Observações: Amêndoas são versáteis e podem ser consumidas in natura, em receitas, ou como parte de um lanche saudável. É importante escolher opções sem adição de sal ou açúcar.</p>",
        link: "https://www.tuasaude.com/5-beneficios-da-amendoa-para-a-saude/"
    },
    {
        titulo: "Morango",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rico em vitamina C, antioxidantes e fibras. Também contém vitaminas do complexo B e minerais como potássio e manganês.</p> <p>Benefícios: Fortalece o sistema imunológico, possui ação antioxidante, auxilia na digestão e contribui para a saúde da pele.</p> <p>Riscos: O consumo excessivo pode causar problemas estomacais em algumas pessoas. A presença de agrotóxicos é uma preocupação, por isso é importante escolher morangos orgânicos ou lavar bem antes de consumir.</p> <p>Observações: O morango é uma fruta versátil e pode ser consumido in natura, em saladas de frutas, iogurtes, sobremesas e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-do-morango/"
    },
    {
        titulo: "Framboesa",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rica em vitamina C, antioxidantes e fibras. Também contém vitaminas do complexo B e minerais como manganês.</p> <p>Benefícios: Fortalece o sistema imunológico, possui ação antioxidante, auxilia na digestão e contribui para a saúde da pele.</p> <p>Riscos: O consumo excessivo pode causar problemas estomacais em algumas pessoas. A presença de agrotóxicos é uma preocupação, por isso é importante escolher framboesas orgânicas ou lavar bem antes de consumir.</p> <p>Observações: A framboesa é uma fruta versátil e pode ser consumida in natura, em sobremesas, iogurtes e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-da-framboesa/"
    },
    {
        titulo: "Amora",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rica em vitamina C, antioxidantes e fibras. Também contém vitaminas do complexo B e minerais como manganês.</p> <p>Benefícios: Fortalece o sistema imunológico, possui ação antioxidante, auxilia na digestão e contribui para a saúde da pele.</p> <p>Riscos: O consumo excessivo pode causar problemas estomacais em algumas pessoas. A presença de agrotóxicos é uma preocupação, por isso é importante escolher amoras orgânicas ou lavar bem antes de consumir.</p> <p>Observações: A amora é uma fruta versátil e pode ser consumida in natura, em sobremesas, iogurtes e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-da-amora/"
    },
    {
        titulo: "Mirtilo",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rico em antioxidantes, vitamina C e fibras. Também contém vitaminas do complexo B e minerais como manganês.</p> <p>Benefícios: Melhora a memória e a função cognitiva, protege a visão, fortalece o sistema imunológico e possui ação anti-inflamatória.</p> <p>Riscos: O consumo excessivo pode causar problemas estomacais em algumas pessoas. A presença de agrotóxicos é uma preocupação, por isso é importante escolher mirtilos orgânicos ou lavar bem antes de consumir.</p> <p>Observações: O mirtilo é uma fruta versátil e pode ser consumido in natura, em sobremesas, iogurtes e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-do-mirtilo/"
    },
    {
        titulo: "Laranja",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rica em vitamina C, um poderoso antioxidante, e fibras. Também contém folato e potássio.</p> <p>Benefícios: Fortalece o sistema imunológico, auxilia na digestão, possui ação antioxidante e contribui para a saúde cardiovascular.</p> <p>Riscos: O consumo excessivo de suco de laranja pode causar cáries devido ao alto teor de açúcar natural. Pessoas com problemas estomacais devem consumir com moderação.</p> <p>Observações: A laranja é uma fruta versátil e pode ser consumida in natura, em sucos, saladas de frutas e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-da-laranja/"
    },
    {
        titulo: "Limão",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rico em vitamina C, um poderoso antioxidante, e fibras. Também contém potássio e flavonoides.</p> <p>Benefícios: Fortalece o sistema imunológico, auxilia na digestão, possui ação antioxidante e contribui para a saúde da pele e do cabelo. Além disso, o suco de limão é um excelente tempero natural.</p> <p>Riscos: O consumo excessivo do suco pode danificar o esmalte dos dentes e causar azia em algumas pessoas. Pessoas com problemas estomacais devem consumir com moderação.</p> <p>Observações: O limão é um ingrediente versátil e pode ser utilizado em diversas receitas, tanto em pratos salgados quanto doces.</p>",
        link: "https://www.tuasaude.com/beneficios-do-limao/"
    },
    {
        titulo: "Abacaxi",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rico em vitamina C, bromelina (enzima digestiva), manganês e fibras. Também contém vitaminas do complexo B.</p> <p>Benefícios: Fortalece o sistema imunológico, auxilia na digestão, possui ação anti-inflamatória e é um ótimo diurético. A bromelina contribui para a saúde do sistema cardiovascular.</p> <p>Riscos: O consumo excessivo pode causar irritação na boca e no esôfago em pessoas sensíveis. Indivíduos com problemas estomacais devem consumir com moderação.</p> <p>Observações: O abacaxi é uma fruta versátil e pode ser consumido in natura, em sucos, saladas de frutas e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-do-abacaxi/"
    },
    {
        titulo: "Manga",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rica em vitamina C, beta-caroteno (que o corpo converte em vitamina A), fibras e potássio.</p> <p>Benefícios: Fortalece o sistema imunológico, possui ação antioxidante, auxilia na digestão e contribui para a saúde da visão. É uma excelente fonte de energia e ajuda a manter a pele saudável.</p> <p>Riscos: O consumo excessivo pode causar problemas estomacais em algumas pessoas, especialmente se consumida com o estômago vazio. A presença de agrotóxicos é uma preocupação, por isso é importante escolher mangas orgânicas ou lavar bem antes de consumir.</p> <p>Observações: A manga é uma fruta versátil e pode ser consumida in natura, em sucos, saladas de frutas e até mesmo em pratos salgados.</p>",
        link: "https://www.tuasaude.com/beneficios-da-manga/"
    },
    {
        titulo: "Maracujá",
        descricao: "Grupo Alimentar: Frutas <p>Nutrientes: Rico em vitamina C, fibras e compostos fenólicos como a passiflora, com ação calmante.</p> <p>Benefícios: Fortalece o sistema imunológico, auxilia na digestão, possui ação antioxidante e calmante, promovendo o relaxamento e o sono. A polpa é rica em fibras, auxiliando no funcionamento intestinal.</p> <p>Riscos: O consumo excessivo da casca pode causar problemas gastrointestinais devido à presença de fibras insolúveis. Pessoas alérgicas ao látex podem apresentar reações alérgicas.</p> <p>Observações: O maracujá é uma fruta versátil e pode ser consumido in natura, em sucos, doces, geleias e até mesmo em pratos salgados. As sementes podem ser utilizadas para fazer óleos e extratos.</p>",
        link: "https://www.tuasaude.com/beneficios-do-maracuja/"
    },
    {
        titulo: "Espinafre",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rico em ferro, vitamina K, vitamina A e ácido fólico. Também contém cálcio, potássio e manganês.</p> <p>Benefícios: Fortalece os ossos, melhora a visão, auxilia na coagulação do sangue e contribui para a saúde do coração. É uma ótima fonte de ferro, essencial para prevenir a anemia.</p> <p>Riscos: O consumo em excesso de espinafre cru pode dificultar a absorção de ferro devido à presença de oxalatos. Pessoas com cálculos renais devem consumir com moderação.</p> <p>Observações: O espinafre é um vegetal versátil e pode ser consumido cru em saladas, cozido em sopas e refogados, ou ainda em sucos e smoothies.</p>",
        link: "https://www.tuasaude.com.br/benefícios-do-espinafre/"
    },
    {
        titulo: "Rúcula",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rica em vitamina K, vitamina C, cálcio e antioxidantes como a zeaxantina e a luteína.</p> <p>Benefícios: Fortalece os ossos, melhora a visão, possui ação antioxidante e anti-inflamatória. É um alimento de baixa caloria e rico em fibras, auxiliando na digestão.</p> <p>Riscos: O consumo em excesso pode causar inchaço e gases em algumas pessoas. Pessoas com hipotireoidismo devem consumir com moderação devido à presença de goitrogênios.</p> <p>Observações: A rúcula possui um sabor levemente amargo e é muito utilizada em saladas, sanduíches e massas.</p>",
        link: "https://www.tuasaude.com.br/beneficios-da-rucula/"
    },
    {
        titulo: "Couve",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rica em vitamina K, vitamina C, cálcio e fibras. Também contém carotenoides e flavonoides, que são poderosos antioxidantes.</p> <p>Benefícios: Fortalece os ossos, melhora o sistema imunológico, possui ação antioxidante e anti-inflamatória. É um alimento de baixa caloria e rico em fibras, auxiliando na digestão e no controle do peso.</p> <p>Riscos: O consumo em excesso de couve crua pode dificultar a absorção de ferro devido à presença de oxalatos. Pessoas com hipotireoidismo devem consumir com moderação devido à presença de goitrogênios.</p> <p>Observações: A couve é um vegetal versátil e pode ser consumida crua em saladas, cozida no vapor, refogada, em sucos e sopas. É um ingrediente comum em diversas culinárias, como a brasileira, portuguesa e italiana.</p>",
        link: "https://www.tuasaude.com.br/beneficios-da-couve/"
    },
    {
        titulo: "Beterraba",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rica em betacianinas (pigmento que confere a cor roxa), folato, potássio e fibras. Também contém vitamina C e antioxidantes.</p> <p>Benefícios: Ajuda a reduzir a pressão arterial, possui ação antioxidante e anti-inflamatória. É uma ótima fonte de fibras, auxiliando na digestão e no controle do peso. O folato é essencial para a formação de células sanguíneas.</p> <p>Riscos: O consumo em excesso pode causar a urina e as fezes ficarem avermelhadas devido às betacianinas. Pessoas com cálculos renais devem consumir com moderação.</p> <p>Observações: A beterraba pode ser consumida crua em saladas, cozida no vapor, assada, em sucos e sopas. É um ingrediente comum em diversas culinárias.</p>",
        link: "https://www.tuasaude.com.br/beneficios-da-beterraba/"
    },
    {
        titulo: "Beterraba",
        descricao: "Grupo Alimentar: Legumes <p>Nutrientes: Rica em betacianinas (pigmento que confere a cor roxa), folato, potássio e fibras. Também contém vitamina C e antioxidantes.</p> <p>Benefícios: Ajuda a reduzir a pressão arterial, possui ação antioxidante e anti-inflamatória. É uma ótima fonte de fibras, auxiliando na digestão e no controle do peso. O folato é essencial para a formação de células sanguíneas.</p> <p>Riscos: O consumo em excesso pode causar a urina e as fezes ficarem avermelhadas devido às betacianinas. Pessoas com cálculos renais devem consumir com moderação.</p> <p>Observações: A beterraba pode ser consumida crua em saladas, cozida no vapor, assada, em sucos e sopas. É um ingrediente comum em diversas culinárias.</p>",
        link: "https://www.tuasaude.com.br/beneficios-da-beterraba/"
    },
    {
        titulo: "Feijão",
        descricao: "Grupo Alimentar: Leguminosas <p>Nutrientes: Rico em proteínas vegetais, fibras, ferro e vitaminas do complexo B. Também contém potássio, fósforo e zinco.</p> <p>Benefícios: Auxilia no controle do colesterol e da pressão arterial, promove a saciedade, fortalece os músculos e ossos. É uma excelente fonte de ferro, essencial para prevenir a anemia.</p> <p>Riscos: O consumo excessivo de feijão pode causar gases e inchaço em algumas pessoas. Pessoas com problemas renais devem consumir com moderação.</p> <p>Observações: O feijão é um alimento versátil e pode ser consumido cozido, em sopas, saladas, acompanhamentos e diversos pratos típicos. É uma base importante da dieta em muitas culturas.</p>",
        link: "https://www.tuasaude.com.br/beneficios-do-feijao/"
    },
    {
        titulo: "Grão de Bico",
        descricao: "Grupo Alimentar: Leguminosas <p>Nutrientes: Rico em proteínas vegetais, fibras, ferro e vitaminas do complexo B. Também contém ácido fólico e minerais como magnésio e zinco.</p> <p>Benefícios: Auxilia no controle do colesterol e da pressão arterial, promove a saciedade, fortalece os músculos e ossos. É uma excelente fonte de ferro e ácido fólico, essenciais para prevenir a anemia e importantes para gestantes.</p> <p>Riscos: O consumo em excesso pode causar gases e inchaço em algumas pessoas. Pessoas com problemas renais devem consumir com moderação.</p> <p>Observações: O grão de bico é um alimento versátil e pode ser consumido cozido, em saladas, humus, sopas e diversos pratos típicos. É uma base importante da dieta vegetariana e vegana.</p>",
        link: "https://www.tuasaude.com.br/beneficios-do-grao-de-bico/"
    },
    {
        titulo: "Ovo",
        descricao: "Grupo Alimentar: Proteínas <p>Nutrientes: Rico em proteínas de alta qualidade, vitaminas do complexo B (especialmente B12), vitamina D e colina. Também contém minerais como selênio e fósforo.</p> <p>Benefícios: Fortalece os músculos e ossos, melhora a função cerebral, auxilia na saúde ocular e possui ação antioxidante. É uma excelente fonte de proteínas, essencial para o crescimento e reparo dos tecidos.</p> <p>Riscos: O consumo excessivo de gema pode aumentar o colesterol. Pessoas com alergia a ovos devem evitar o consumo.</p> <p>Observações: O ovo é um alimento versátil e pode ser consumido cozido, frito, mexido, em omeletes, bolos e diversas outras preparações. É um ingrediente fundamental em muitas receitas.</p>",
        link: "https://www.tuasaude.com.br/beneficios-do-ovo/"
    },
    {
        titulo: "Queijo",
        descricao: "Grupo Alimentar: Laticínios <p>Nutrientes: Rico em proteínas, cálcio, fósforo, vitaminas do complexo B e gordura saturada. O tipo de queijo influencia o perfil nutricional.</p> <p>Benefícios: Fortalece os ossos e dentes, auxilia na formação de músculos e tecidos, contribui para a saúde cardiovascular e é uma ótima fonte de proteína.</p> <p>Riscos: O consumo excessivo de queijo pode aumentar o risco de doenças cardiovasculares devido ao alto teor de gordura saturada. Pessoas com intolerância à lactose devem evitar ou consumir queijos sem lactose.</p> <p>Observações: Existem diversos tipos de queijo, cada um com características nutricionais e de sabor diferentes. É importante escolher queijos com baixo teor de gordura e sal.</p>",
        link: "https://www.tuasaude.com.br/beneficios-do-queijo/"
    }
];

