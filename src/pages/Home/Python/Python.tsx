import { Flex, Box, Text } from "@chakra-ui/react";

export default function Python() {
  return (
    <Flex w="100%" h="auto" bg="#427D9D">
      <Box display="flex" flexDir="column" w="60%" p="5em" gap="1em" m="auto">
        <Text fontSize="sm">Descrição imagem</Text>
        <Text fontSize="xl" fontWeight="bold">
          Programação em Python para Análise de Dados
        </Text>
        <Text fontSize="xl">
          Python é uma linguagem de programação amplamente utilizada em diversas
          áreas, incluindo análise de dados, devido à sua simplicidade e
          versatilidade. Neste artigo, exploraremos como Python se destaca como
          uma escolha popular para profissionais de dados e como a biblioteca
          Pandas torna a análise de dados ainda mais eficaz.
        </Text>
        <Text fontSize="xl">
          Python é conhecido por sua legibilidade e facilidade de aprendizado,
          tornando-o acessível a iniciantes e especialistas. Ele oferece uma
          ampla variedade de bibliotecas, muitas delas especialmente projetadas
          para análise de dados. Além disso, Python é uma linguagem de código
          aberto e possui uma comunidade ativa que contribui com soluções e
          recursos constantemente.
        </Text>
        <Text></Text>
        <Text  fontSize="2xl" fontWeight="700">Aplicações na Análise de Dados:</Text>
        <Text fontSize="xl">
          Python é utilizado em diversas áreas da análise de dados, incluindo:
          <br />1 - Limpeza e Preparação de Dados: Python simplifica tarefas
          como remoção de dados duplicados, tratamento de valores ausentes e
          transformação de dados. <br />2 - Visualização de Dados: Bibliotecas
          como Matplotlib e Seaborn permitem a criação de gráficos e
          visualizações informativas. <br />3 - Análise Estatística: Com
          bibliotecas como SciPy e Statsmodels, você pode realizar análises
          estatísticas detalhadas. <br />4 - Machine Learning: Python é a
          escolha preferida para desenvolvimento de modelos de aprendizado de
          máquina, graças a bibliotecas como Scikit-Learn e TensorFlow.
        </Text>
        <Text  fontSize="2xl" fontWeight="700">Pandas e Matplotlib - Simplicando a análise de dados:</Text>
        <Text fontSize="xl">
          Pandas é uma biblioteca Python amplamente usada na análise de dados.
          Ela oferece estruturas de dados flexíveis, como DataFrames e Series,
          que permitem armazenar, manipular e analisar dados de maneira eficaz.
          Com Pandas, é fácil filtrar, agrupar, ordenar e resumir informações,
          tornando a análise de dados uma tarefa mais eficiente e acessível para
          profissionais de todas as áreas.
        </Text>
        <Text fontSize="xl">
          Matplotlib é uma biblioteca Python que oferece uma ampla gama de
          opções de gráficos e visualizações de dados. Sua versatilidade a torna
          valiosa para visualizar dados em relatórios, pesquisa científica,
          exploração de dados e desenvolvimento de aplicativos. Com Matplotlib,
          é possível criar gráficos personalizados para comunicar informações de
          forma eficaz.
        </Text>
        <Text>https://docs.python.org/3/</Text>
        <Text>https://www.w3schools.com/python/</Text>
        <Text>
          https://www.youtube.com/playlist?list=PLpdAy0tYrnKw37zTY7aOIOzkzPZaTMUNM
        </Text>
      </Box>
    </Flex>
  );
}
