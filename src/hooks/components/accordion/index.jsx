import {
  AccordionButton,
  AccordionContainer,
  AccordionContent,
  AccordionImage,
  AccordionText,
  AccordionWrapper,
  ContentText,
} from "./style";

import { AngleUp } from "./src/svg/index";

export default function Accordion() {
  const isVisible = true;

  return (
    <AccordionWrapper>
      <AccordionContainer>
        <AccordionText>What is an accordion component?</AccordionText>
        <AccordionButton>
          <AccordionImage src={AngleUp} />
        </AccordionButton>
      </AccordionContainer>

      {isVisible && (
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
