import '../../../styles.css'

import { Dribble, EmptyImage, Linkedin, X } from "../../assets/images"

export default function Content(props) {
    return (
        <div className='content-container'>
            <img src={props.image ? props.image : EmptyImage} alt="" className='content-image' />
            <div className="content-title">
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
            </div>
            <p className='content-description'>
            {props.description}
            </p>
            <div className="content-icons">
                <a href={props.linkedin} target='_blank'>
                    <img src={Linkedin} alt="" />
                </a>
                <a href={props.x} target='_blank'>
                    <img src={X} alt="" />
                </a>
                <a href={props.dribble} target='_blank'>
                    <img src={Dribble} alt="" />
                </a>    
            </div>
        </div>
    )
}