import "./styles.css"
import { Contact } from "./src/pattern/composition"

export default function ContactComposition() {
    return (
        <div className="contact-container">
            <Contact.Title />
            <Contact.Form />
        </div>
    )
} 