import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

export default function Excel() {
  return (
    <Flex w="100%" h="auto" bg="#427D9D">
      <Box display="flex" flexDir="column" w="60%" p="5em" gap="1em" m="auto">
        <Text fontSize="sm">Descrição imagem</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Introdução ao Microsoft Excel
        </Text>
        <Text fontSize="xl">
          Bem-vindos ao nosso blog de tecnologia! Hoje, vamos explorar uma das
          ferramentas mais icônicas do mundo da computação e negócios - o
          Microsoft Excel. O Excel é um software de planilhas que tem sido um
          aliado confiável para profissionais e entusiastas de dados por
          décadas. Com suas poderosas capacidades de organização, cálculo e
          visualização, o Excel desempenha um papel crucial na análise de dados,
          gerenciamento de projetos e muito mais. Vamos dar uma olhada mais
          profunda nas diversas facetas do Excel e como ele continua a ser uma
          peça-chave no quebra-cabeça da tecnologia e produtividade. Prepare-se
          para explorar o universo do Excel, além do que você já conhece.
        </Text>
        <Text fontSize="xl">
          O Microsoft Excel é uma ferramenta poderosa para trabalhar com dados e
          análises. Mostraremos agora algumas das fórmulas e aplicações mais
          importantes que tornam o Excel uma escolha popular em escritórios e
          empresas de todo o mundo.
        </Text>
        <Text fontSize="2xl" fontWeight="700">
          Formulas:
        </Text>
        <Text fontSize="xl">
          A fórmula PROCV é uma das mais avançadas e úteis. Ela é usada para
          pesquisar um valor em uma tabela e retornar um valor correspondente em
          outra coluna. Isso é especialmente útil para a busca de informações em
          grandes conjuntos de dados.
        </Text>
        <Text fontSize="xl">
          A <strong>fórmula SE</strong> permite criar condições lógicas. Com
          ela, você pode definir ações com base em condições específicas. Por
          exemplo, =SE(A1 'maior' 10, "Aprovado", "Reprovado") retornará
          "Aprovado" se o valor em A1 for maior que 10, caso contrário,
          retornará "Reprovado".
        </Text>
        <Text fontSize="xl">
          Essas são apenas duas das muitas fórmulas e aplicações disponíveis no
          Excel. Compreender essas funções básicas ajudará você a começar a
          trabalhar com dados e análises de forma eficaz. O Excel é uma
          ferramenta versátil que pode ser usada em várias situações, desde a
          simples organização de dados até análises complexas. Fique à vontade
          para explorar e experimentar, e você descobrirá o potencial do Excel
          em suas tarefas diárias.
        </Text>
        <Text fontSize="2xl" fontWeight="700">
          Tabela dinâmica:
        </Text>
        <Text fontSize="xl">
          Uma tabela dinâmica é uma tabela interativa que permite resumir
          grandes volumes de dados de maneira organizada e eficiente. Com uma
          tabela dinâmica, você pode agrupar, filtrar e resumir informações de
          acordo com suas necessidades específicas, tornando a análise de dados
          mais acessível, mesmo para aqueles que não são especialistas em Excel.
        </Text>
        <Text fontSize="2xl" fontWeight="700">
          Quer saber mais? Acesse os links abaixo:
        </Text>
        <Text>
          <Link
            to="https://support.microsoft.com/pt-br/office/funções-do-excel-por-categoria-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb"
            target="_blank"
          >
            Microsoft Excel - Docs
          </Link>
        </Text>
        <Text>https://www.w3schools.com/EXCEL/index.php</Text>

        <Box display="flex" alignItems="center" gap="4px">
          <BsYoutube color="red" />
          <Link to="https://www.youtube.com/@ninjadoexcel" target="_blank">
            Ninja do Excel
          </Link>
        </Box>
        
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qQLT_uoMN0U?si=1wjJAtOGlQfo9lWh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </Flex>
  );
}
