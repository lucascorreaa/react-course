import { useState } from "react"
import * as S from "./style"
import DropdownMenu from "../DropdownMenu"
import { Link } from "react-router-dom"

export default function Navbar() {

    const [open, setOpen] = useState(false)

    // Arrow function
    const handleMenu = () => {
      return setOpen(!open)
    }

    const listPages = [
        {
          title: "Page one",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page two",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page three",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
          title: "Page four",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
      ];

    return (
        <S.Container>
            <S.Logo>Logo</S.Logo>
            <S.Nav>
                <S.Link>
                  <Link to="/page-one" >Page One</Link>
                </S.Link>
                <S.Link>
                  <Link to="/page-two">Page Two</Link>
                </S.Link>
                <S.Link>
                  <Link to="/page-three">Page Three</Link>
                </S.Link>
                <S.Link onClick={handleMenu}>Link 4</S.Link>
                {
                    open && <DropdownMenu pages={listPages} /> 
                }
                <S.ContainerButton>
                    <S.Button>Button</S.Button>
                    <S.Button bgColor="black">Button</S.Button>
                </S.ContainerButton>
            </S.Nav>
        </S.Container>  
    )
}