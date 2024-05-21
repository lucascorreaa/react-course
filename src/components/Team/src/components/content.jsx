import '../../styles.css'

import EmptyImage from '../assets/images/Empty-Image.png'
import Dribble from '../assets/images/Dribble.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import X from '../assets/images/X.png'

export default function Content() {
    return (
        <div className='content-container'>
            <img src={EmptyImage} alt="" className='content-image' />
            <div className="content-title">
                <h1>Full name</h1>
                <h2>Job title</h2>
            </div>
            <p className='content-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="content-icons">
                <a href="https://br.linkedin.com/" target='_blank'>
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https:/x.com/" target='_blank'>
                    <img src={X} alt="" />
                </a>
                <a href="https://dribble.com/" target='_blank'>
                    <img src={Dribble} alt="" />
                </a>    
            </div>
        </div>
    )
}