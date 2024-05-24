import "./styles.css"
import { Team } from "./src/pattern/composition"

const TeamUsers = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5two6GvgUnTKCvY5MFEQyCBIvBtKLY7l59Q&s",
        name: "Lucas Correa",
        role: "Professor",
        description: "Rei do Tigrinho",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
]

export default function TeamComposition() {
    return (
        <div className="team-container">
        <Team.Section />
        <div className="team-content-wrapper">

            {
            TeamUsers.map((user, key) => {
                return (
                    <Team.Content 
                        key={key}
                        image={user.image}
                        name={user.name}
                        role={user.role}
                        description={user.description}
                        linkedin={user.mediaSocial.linkedin}
                        x={user.mediaSocial.x}
                        dribble={user.mediaSocial.dribble}
                    />
                )
            })
        }
        </div>
        <Team.Main />
        </div>
    )
}