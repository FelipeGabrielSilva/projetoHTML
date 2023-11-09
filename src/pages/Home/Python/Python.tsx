import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TbBrandPython } from "react-icons/tb";
import { BsFillBadgeWcFill, BsYoutube } from "react-icons/bs";

export default function Python() {
  return (
    <Flex w="100%" h="auto" bg="#F1EFEF">
      <Box display="flex" flexDir="column" w="60%" p="5em" gap="1em" m="auto">
        <Text fontSize="sm">Descrição imagem</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Programação em Python para Análise de Dados
        </Text>
        <Text fontSize="xl" display="flex" flexDir="column" gap="1em">
          Python é uma linguagem de programação amplamente utilizada em diversas
          áreas, incluindo análise de dados, devido à sua simplicidade e
          versatilidade. Neste artigo, exploraremos como Python se destaca como
          uma escolha popular para profissionais de dados e como a biblioteca
          Pandas torna a análise de dados ainda mais eficaz.
          <Text>
            Python é conhecido por sua legibilidade e facilidade de aprendizado,
            tornando-o acessível a iniciantes e especialistas. Ele oferece uma
            ampla variedade de bibliotecas, muitas delas especialmente
            projetadas para análise de dados. Além disso, Python é uma linguagem
            de código aberto e possui uma comunidade ativa que contribui com
            soluções e recursos constantemente.
          </Text>
          <Text fontSize="2xl" fontWeight="700">
            Aplicações na Análise de Dados:
          </Text>
          <Text>
            Python é utilizado em diversas áreas da análise de dados, incluindo:
          </Text>
          <Text>
            1 - Limpeza e Preparação de Dados: Python simplifica tarefas como
            remoção de dados duplicados, tratamento de valores ausentes e
            transformação de dados.
          </Text>
          <Text>
            2 - Visualização de Dados: Bibliotecas como Matplotlib e Seaborn
            permitem a criação de gráficos e visualizações informativas.
          </Text>
          <Text>
            3 - Análise Estatística: Com bibliotecas como SciPy e Statsmodels,
            você pode realizar análises estatísticas detalhadas.
          </Text>
          <Text>
            4 - Machine Learning: Python é a escolha preferida para
            desenvolvimento de modelos de aprendizado de máquina, graças a
            bibliotecas como Scikit-Learn e TensorFlow.
          </Text>
          <Text fontSize="2xl" fontWeight="700">
            Pandas e Matplotlib - Simplicando a análise de dados:
          </Text>
          <Text>
            Pandas é uma biblioteca Python amplamente usada na análise de dados.
            Ela oferece estruturas de dados flexíveis, como DataFrames e Series,
            que permitem armazenar, manipular e analisar dados de maneira
            eficaz. Com Pandas, é fácil filtrar, agrupar, ordenar e resumir
            informações, tornando a análise de dados uma tarefa mais eficiente e
            acessível para profissionais de todas as áreas.
          </Text>
          <Text>
            Matplotlib é uma biblioteca Python que oferece uma ampla gama de
            opções de gráficos e visualizações de dados. Sua versatilidade a
            torna valiosa para visualizar dados em relatórios, pesquisa
            científica, exploração de dados e desenvolvimento de aplicativos.
            Com Matplotlib, é possível criar gráficos personalizados para
            comunicar informações de forma eficaz.
          </Text>
          <Text fontSize="2xl" fontWeight="700">
            Quer saber mais? Acesse os links:
          </Text>
        </Text>

        <Box display="flex" alignItems="center" gap="4px">
          <TbBrandPython color="yellow" />
          <Link to="https://docs.python.org/3/" target="_blank">
            Python - Docs
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap="4px">
          <BsFillBadgeWcFill color="green" />
          <Link to="https://www.w3schools.com/python/" target="_blank">
            Aprenda Python - W3Scholls
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap="4px">
          <BsYoutube color="red" />
          <Link
            to="https://www.youtube.com/playlist?list=PLpdAy0tYrnKw37zTY7aOIOzkzPZaTMUNM"
            target="_blank"
          >
            Canal no Youtube - Hashtag Programação
          </Link>
        </Box>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BxMtSb2w9Sk?si=2UAev79EszwYr3xl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Box>
    </Flex>
  );
}
