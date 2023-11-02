import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Link,
  Badge,
} from "@chakra-ui/react";

type CartaoProps = {
  imagem?: string;
  descricaoImagem?: string;
  titulo: string;
  texto: string;
  pagina: string;
  etiqueta?: string;
  etiquetaCor?: string;
};

export default function Cartao({
  imagem,
  descricaoImagem,
  titulo,
  texto,
  pagina,
  etiqueta,
  etiquetaCor,
}: CartaoProps) {
  return (
    <Card maxW="sm" h="auto" w="400px">
      <CardBody>
        <Image src={imagem} alt={descricaoImagem} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{titulo}</Heading>
          <Text>{texto} </Text>
        </Stack>
        <Badge w="auto" colorScheme={etiquetaCor}>{etiqueta}</Badge>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          <Link href={pagina}>VISUALIZAR</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
