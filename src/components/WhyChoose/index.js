import { Container, Icon, SimpleGrid } from "@chakra-ui/react";
import SectionTitle from "../SectionTitle";
import { BiSupport } from "react-icons/bi";
import { MdSchool, MdPayment, MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

import Item from "./Item";

const BaseIcon = ({ as, ...rest }) => {
  return <Icon as={as} mb="4" fontSize="3xl" color="primary" />;
};

const Items = [
  {
    icon: <BaseIcon as={BiSupport} />,
    title: "Soporte de primer nivel",
    content: "Tenemos soporte capacitado para ayudarte con todas tus dudas",
  },
  {
    icon: <BaseIcon as={MdSchool} />,
    title: "Capacitacion",
    content: "Capacitate con los mejores profesionales con años de experiencia",
  },
  {
    icon: <BaseIcon as={MdAttachMoney} />,
    title: "Baja inversion",
    content: "No necesitas una gran inversion para iniciar",
  },
  {
    icon: <BaseIcon as={GiReceiveMoney} />,
    title: "Ganancias ilimitadas",
    content: "Puedes revender nuestro sistema y obtenes ganancias sin limites",
  },
  {
    icon: <BaseIcon as={BsTools} />,
    title: "Herramientas",
    content:
      "Te brindamos todas las herramientas para que puedas obtener los mejores resultados",
  },
  {
    icon: <BaseIcon as={MdPayment} />,
    title: "Unico pago",
    content:
      "Sin mensualidades ni letra chica, un unico pago y obtienes el sistema de por vida",
  },
];

const WhyChoose = () => {
  return (
    <Container
      as="section"
      maxW="none"
      mt="120px"
      background="gray.200"
      py="24"
    >
      <SectionTitle content="¿Por qué elegirnos?" className="wrapped" />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8} className="wrapped">
        {Items.map(({ icon, title, content, index }) => (
          <Item key={index} icon={icon} title={title} content={content} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default WhyChoose;
