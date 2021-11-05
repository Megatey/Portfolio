import './Contact.css'
import React, { useState } from 'react'

const Contact = () => {

    const customerInput = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const [textInput, setTextInput] = useState(customerInput);

    const onChange = (e) => {
        const { name, value } = e.target;
        setTextInput({ ...textInput, [name]: value });
    }

    const submitData = (e) => {
        console.log(textInput);
        e.preventDefault()
    }
    return (
        <div className="Contact">
            <div className="Contact-details">
                <div className="Contact-text">
                    <span>Contact</span>
                    <h2>Let's discuss your project</h2>
                </div>
                <div className="short-list">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg" fill="#f52225"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" /></svg>
                            <a href="Tel: +2349024343853">09024343853</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg" fill="#f52225"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
                            <a href="gmail.com">megatey97@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-container">
                <div className="title">
                    <p>I am always open to discussing product <br /> <span>projects or partnership</span></p>
                </div>
                <div className="fields">
                    <form className="contact-form" onSubmit={submitData}>
                        <div className="first-row">
                            <input name="name" type="text" placeholder="Name *" value={textInput.name} onChange={onChange} />
                        </div>
                        <div className="second-row">
                            <div className="left">
                                <input name="email" type="email" placeholder="Email *" value={textInput.email} onChange={onChange} />
                            </div>
                            <div className="right">
                                <input name="subject" type="text" placeholder="Subject *" value={textInput.subject} onChange={onChange} />
                            </div>
                        </div>
                        <div className="third-row">
                            <textarea name="message" placeholder="Message *" value={textInput.message} onChange={onChange}>

                            </textarea>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="color">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
