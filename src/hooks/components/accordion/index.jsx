import { AccordionButton, AccordionContainer, AccordionImage, AccordionText } from "./style";

import { AngleUp } from "./src/svg/index"

export default function Accordion() {
    return (
        <AccordionContainer>
            <AccordionText>What is an accordion component?</AccordionText>
            <AccordionButton>
                <AccordionImage src={AngleUp} />
            </AccordionButton>
        </AccordionContainer>
    )
}