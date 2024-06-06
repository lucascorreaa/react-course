import Relume from "./src/svg/Relume.svg"
import * as S from "./style"

export default function DropdownMenu() {
    return (
        <S.Container>
            <S.Content>
                <S.Image src={Relume} />
                <S.ContentText>
                    <S.Title>Page one</S.Title>
                    <S.Description> Lorem ipsum dolor, sit amet consectetur adipisicing. </S.Description>
                </S.ContentText>
            </S.Content>
        </S.Container>
    )
}