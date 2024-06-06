import {
  AccordionButton,
  AccordionContainer,
  AccordionContent,
  AccordionImage,
  AccordionText,
  AccordionWrapper,
  ContentText,
} from "./style";

import { AngleUp, AngleDown } from "./src/svg/index";
import { useState } from "react";

export default function Accordion() {
  // controle de estado do content
  const [ visible, setVisible ] = useState(false)
  // validação da direção da seta
  const handleAngle = visible ? AngleDown : AngleUp
  // função para abrir e fechar o accordion
  function HandleAccordion() {
    return setVisible(!visible)
  }  

  return (
    <AccordionWrapper>
      <AccordionContainer>
        <AccordionText>What is an accordion component?</AccordionText>
        <AccordionButton onClick={HandleAccordion}>
          <AccordionImage src={handleAngle} />
        </AccordionButton>
      </AccordionContainer>

      {visible && (
        <AccordionContent>
          <ContentText>
            An accordion menu is a vertically stacked list of headers that can
            be clicked to reveal or hide content associated with them. It is one
            of many ways you can expose content to users in a progressive
            manner.
          </ContentText>
        </AccordionContent>
      )}
    </AccordionWrapper>
  );
}
