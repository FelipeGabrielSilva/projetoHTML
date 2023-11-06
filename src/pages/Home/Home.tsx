import { Flex, Box } from "@chakra-ui/react";
import Cartao from "./Cartao/Cartao";

export default function Home() {
  return (
    <Flex w="100%" h="auto" bg="#427D9D">
      <Box
        display="flex"
        flexDir="row"
        flexWrap="wrap"
        gap="2em"
        w="60%"
        h="auto"
        m="5em auto"
      >
        <Cartao
          imagem="src\imgs\excel.png"
          titulo="Bem-vindo à Análise de Dados"
          texto="Uma introdução à análise de dados, explicando sua importância em diversos setores, como negócios, ciência e governança."
          pagina="/AnaliseDados/"
          etiqueta="Excel"
          etiquetaCor="green"
        />
        <Cartao
          imagem="src\imgs\python-logo.png"
          titulo="Programação em Python para Análise de Dados"
          texto="Introdução ao Python como uma linguagem de programação versátil amplamente usada em análise de dados devido à sua rica ecossistema de bibliotecas."
          pagina="/IntroducaoAoPythonParaProgramacao/"
          etiqueta="Python"
          etiquetaCor="blue"
        />
        <Cartao
          imagem="src\imgs\PBI2.png"
          titulo="Visualização de Dados com Power BI"
          texto="Uma introdução ao Power BI, uma ferramenta de visualização de dados poderosa da Microsoft, e sua capacidade de transformar dados brutos em informações significativas."
          pagina="/IntroducaoAoPowerBI/"
          etiqueta="power bi"
          etiquetaCor="orange"
        />
        <Cartao
          imagem="src\imgs\SQL1.png"
          titulo="Introdução ao SQL para Gerenciamento de Dados"
          texto="Explicação sobre o SQL (Structured Query Language) como uma linguagem de consulta usada para gerenciar bancos de dados relacionais."
          pagina="/IntroducaoASQLParaGerenciamento/"
          etiqueta="sql"
          etiquetaCor="#000"
        />
      </Box>
    </Flex>
  );
}
