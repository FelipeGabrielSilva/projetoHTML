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
          imagem="src\imgs\Excel\excel.png"
          titulo="Microsoft Excel"
          texto="Excel - Organize, Analise, Simplifique."
          pagina="/AnaliseDados/"
          etiqueta="Excel"
          etiquetaCor="green"
        />
        <Cartao
          imagem="src\imgs\Python\pythonLogo.png"
          titulo="Programação em Python para Análise de Dados"
          texto="Python: Linguagem de programação versátil e acessível."
          pagina="/IntroducaoAoPythonParaProgramacao/"
          etiqueta="Python"
          etiquetaCor="yellow"
        />
        <Cartao
          imagem="src\imgs\PBI\PBI2.png"
          titulo="Visualização de Dados com Power BI"
          texto="Power BI: Ferramenta de visualização de dados interativa."
          pagina="/IntroducaoAoPowerBI/"
          etiqueta="power bi"
          etiquetaCor="orange"
        />
        <Cartao
          imagem="src\imgs\SQL\SQL1.png"
          titulo="SQL para consulta de Dados"
          texto="SQL: Linguagem para gerenciar dados em bancos de dados."
          pagina="/IntroducaoASQLParaGerenciamento/"
          etiqueta="sql"
          etiquetaCor="blue"
        />
      </Box>
    </Flex>
  );
}
