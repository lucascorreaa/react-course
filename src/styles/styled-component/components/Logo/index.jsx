import { Logo } from "./src/pattern/composition";
import { LogoContainer } from "./style";

export default function LogoComposition() {
    return (
        <LogoContainer>
            <h1>coloque o composition aqui</h1>
            <Logo.Brand />
        </LogoContainer>
    )
}