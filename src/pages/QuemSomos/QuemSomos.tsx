import { Flex, Box, Text } from "@chakra-ui/react";

export default function QuemSomos() {
  return (
    <Flex flexDir="column" w="100vw" h="auto" bg="#F1EFEF">
      <Box display="flex" flexDir="column" w="70%" p="5em" gap="1em">
        <Text
          display="flex"
          flexDir="column"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="justify"
          gap="1em"
        >
          Olá visitante, bem-vindo ao tech no blog!

          <Text
            display="flex"
            flexDir="column"
            gap="1em"
            fontSize="xl"
            fontWeight="normal"
          >
            Em um mundo em constante evolução tecnológica, a informação é a
            chave para desvendar o potencial infinito que a tecnologia nos
            oferece. É com grande prazer que estamos aqui, um
            espaço dedicado a compartilhar informações precisas de forma
            acessível, tornando o vasto universo tecnológico compreensível para
            todos.

            <Text>
              Nosso principal objetivo é simplificar a tecnologia,
              proporcionando a você, leitor, uma fonte confiável e amigável de
              conhecimento. Entendemos que as inovações tecnológicas muitas
              vezes podem parecer complexas e intimidadoras, mas acreditamos
              firmemente que, com a abordagem certa, todos podem se beneficiar e
              aproveitar as maravilhas da era digital.
            </Text>

            <Text>
              Buscamos desmistificar conceitos, explicar termos técnicos de
              maneira descomplicada e oferecer insights valiosos sobre as
              últimas tendências do mundo da tecnologia. Queremos que você se
              sinta capacitado a tomar decisões informadas sobre o uso de
              dispositivos, a adoção de novas plataformas e a compreensão das
              mudanças que a tecnologia traz para a sociedade.
            </Text>

            <Text>
              Nossa abordagem é pautada na clareza, na objetividade e na
              precisão. Acreditamos que, ao compartilhar informações corretas de
              maneira simples, contribuímos para a construção de uma comunidade
              informada e confiante em suas interações com a tecnologia. Seja
              você um iniciante curioso ou um entusiasta experiente.
            </Text>

            <Text>
              Acompanhe-nos em nossa jornada enquanto exploramos juntos o
              fascinante mundo da tecnologia. Estamos aqui para simplificar,
              esclarecer e inspirar. Sinta-se à vontade para explorar nossos
              artigos e aprender. Estamos
              comprometidos em ser sua fonte confiável para informações
              tecnológicas descomplicadas.
            </Text>

            <Text>
              Bem-vindo ao tech no blog - onde a tecnologia se encontra com a
              simplicidade!
            </Text>
          </Text>
        </Text>
      </Box>
    </Flex>
  );
}
