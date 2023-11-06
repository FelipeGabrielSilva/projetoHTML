import { Flex, Box, Text } from "@chakra-ui/react";

export default function IntroSQL() {
  return (
    <Flex w="100%" h="auto" bg="#427D9D">
      <Box display="flex" flexDir="column" w="60%" p="5em" gap="1em">
        <Text fontSize="sm">Descrição imagem</Text>
        <Text fontSize="xl" fontWeight="bold">
          Introdução ao SQL para Gerenciamento de Dados
        </Text>
        <Text>
          O SQL, ou Structured Query Language, é uma linguagem de programação
          usada para gerenciar bancos de dados. Ela permite acessar, adicionar,
          atualizar e organizar informações de maneira eficiente. O SQL é
          essencial para muitas aplicações tecnológicas e facilita o
          gerenciamento de dados. Este artigo explora a importância do SQL e
          como ele funciona, tornando-o acessível para todos, independentemente
          de conhecimentos avançados em programação.
        </Text>
        <Text>
          Existem vários sistemas de gerenciamento de banco de dados (SGBDs) que
          utilizam a linguagem SQL para interagir com bancos de dados. Alguns
          dos principais sistemas de SGBD que são baseados em SQL incluem:
        </Text>
        <Text>
          MySQL: O MySQL é um sistema de código aberto amplamente utilizado em
          todo o mundo. Ele é conhecido por sua velocidade e facilidade de uso,
          sendo uma escolha popular para aplicativos da web, incluindo
          WordPress.
        </Text>
        <Text>
          Oracle Database: Desenvolvido pela Oracle Corporation, o Oracle
          Database é um dos sistemas de gerenciamento de banco de dados mais
          robustos do mercado. É amplamente utilizado em grandes empresas para
          aplicações empresariais complexas.
        </Text>
        <Text>
          PostgreSQL: O PostgreSQL é um sistema de código aberto que é altamente
          extensível e oferece recursos avançados de SQL. É uma escolha popular
          para aplicativos empresariais e de código aberto.
        </Text>
        <Text>
          O SQL (Structured Query Language) oferece uma ampla gama de funções e
          cláusulas que podem ser usadas para realizar análises de dados em
          bancos de dados. Abaixo, listo algumas das principais fórmulas e
          funções frequentemente empregadas na análise de dados:
        </Text>
        <Text>
          SELECT: A cláusula SELECT é usada para recuperar dados de uma tabela
          ou exibir resultados de consultas.
        </Text>
        <Text>
          WHERE: A cláusula WHERE permite filtrar os dados com base em condições
          específicas. É útil para restringir o conjunto de dados que você
          deseja analisar.
        </Text>
        <Text>
          GROUP BY: A cláusula GROUP BY é usada para agrupar linhas com base em
          valores comuns em uma ou mais colunas. É frequentemente usado com
          funções de agregação.
        </Text>
        <Text>
          JOIN: A cláusula JOIN é usada para combinar dados de várias tabelas
          com base em chaves relacionadas.
        </Text>
      </Box>
    </Flex>
  );
}
