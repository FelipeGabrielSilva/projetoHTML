import { Flex, Box, Text } from "@chakra-ui/react";
import { BsYoutube, BsMicrosoft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function PowerBI() {
  return (
    <Flex w="100%" h="auto" bg="#F1EFEF">
      <Box display="flex" flexDir="column" w="60%" p="5em" gap="1em" m="auto">
        <Text fontSize="sm">Descrição imagem</Text>
        <Text fontSize="2xl" fontWeight="bold">
          Introdução ao Power BI
        </Text>
        <Text display="flex" flexDir="column" gap="1em" fontSize="xl">
          O Power BI, uma ferramenta da Microsoft, torna a análise de dados
          fácil e divertida, permitindo que você crie gráficos, painéis e
          relatórios interativos sem a necessidade de habilidades avançadas. Ele
          conecta várias fontes de dados e fornece insights em tempo real, sendo
          valioso para profissionais de negócios e entusiastas de tecnologia. É
          uma ferramenta poderosa para transformar dados em visualizações
          atraentes e informativas.
          <Text>
            Business Intelligence (BI): O Power BI é amplamente utilizado para
            análise de dados de negócios. Empresas usam essa ferramenta para
            criar relatórios e painéis que ajudam na tomada de decisões
            informadas. Ele permite monitorar métricas de desempenho,
            identificar tendências e insights que impulsionam o crescimento dos
            negócios.
          </Text>
          <Text>
            Análise de Dados Avançada: Além do básico de BI, o Power BI também é
            usado para análises avançadas. Ele pode integrar linguagens de
            programação, como R e Python, para realizar análises estatísticas e
            avançadas em seus dados.
          </Text>
          <Text>
            Visualização de Dados Interativa: O Power BI é conhecido por sua
            capacidade de criar visualizações de dados interativas. Isso é útil
            para criar painéis de controle dinâmicos que permitem aos usuários
            explorar e interagir com os dados de maneira mais eficaz.
          </Text>
          <Text>
            Relatórios em Tempo Real: O Power BI pode se conectar a fontes de
            dados em tempo real, permitindo que as organizações monitorem
            continuamente o desempenho e as métricas em tempo real, essencial
            para setores como finanças e monitoramento de sistemas.
          </Text>
          <Text>
            Integração com Aplicativos e Serviços: Ele pode ser integrado a
            outros aplicativos e serviços da Microsoft, como o Excel, o Azure, o
            SharePoint e o Dynamics 365, o que o torna uma parte central de uma
            suíte de ferramentas de negócios.
          </Text>
          <Text fontSize="2xl" fontWeight="700">
            As duas principais linguagens associadas ao Power BI são:
          </Text>
          <Text>
            DAX (Data Analysis Expressions): É uma linguagem de fórmula que
            permite criar medidas personalizadas, colunas calculadas e funções
            para manipular e analisar dados dentro do Power BI. É essencial para
            criar cálculos avançados.
          </Text>
          <Text>
            M (Power Query Formula Language): Essa linguagem é usada no Power
            Query, uma ferramenta integrada ao Power BI para importar,
            transformar e combinar dados de várias fontes. É útil para a
            preparação e limpeza de dados.
          </Text>
          <Text fontSize="2xl" fontWeight="700">
            Quer saber mais? Acesse os links:
          </Text>
        </Text>
        <Box display="flex" alignItems="center" gap="4px">
          <BsMicrosoft color="green" />
          <Link
            to="https://learn.microsoft.com/pt-br/power-bi/"
            target="_blank"
          >
            Microsoft Power BI - Docs
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap="4px">
          <BsYoutube color="red" />
          <Link
            to="https://www.youtube.com/playlist?list=PLxjKFMYkZ9OegeivH4_Laqt2rhCDMnLdi"
            target="_blank"
          >
            Canal no YouTube - Hashtag Treinamentos
          </Link>
        </Box>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i32LFXH_7vA?si=zZ9hUGeu7MBReyOm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </Box>
    </Flex>
  );
}
