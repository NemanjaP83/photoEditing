import React from 'react'

function Form() {
    return (
        <div className='container scrollspy' id='contact-form'>
            <div className="row">
                <div className="col s12 l5">
                    <h3 className='indigo-text text-darken-4'>Get in touch</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis est ab dolores facere possimus accusantium. Perspiciatis eius sint cupiditate dolorum eos quis labore dicta. Vitae quo quia laudantium doloremque quisquam.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis est ab dolores facere possimus accusantium. Perspiciatis eius sint cupiditate dolorum eos quis labore dicta. Vitae quo quia laudantium doloremque quisquam.</p>
                </div>
                <div className="col s12 l5 offset-l2">
                <form action="#" className='z-depth-2'>
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                        <input type="email" name="" id="email" required/>
                        <label htmlFor="email">Your email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">message</i>
                            <textarea className='materialize-textarea' id="message" required></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">event</i>
                            <input type="text" id="date" className='datepicker' />
                            <label htmlFor="date">Choose date you need me for...</label>
                        </div>
                        <div className="input-field">
                            <div className="required valign-wrapper">
                            <i className="material-icons warning">warning</i> 
                                <p className='grey-text text-darken-2'>Services required...</p>
                            </div>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Photography</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Editing</span>
                                </label>
                            </p>
                        </div>
                        <div className="input-field">
                            <button className="btn indigo right">Send</button>
                        </div>
                </form>
            </div>
            </div>
            
        </div>
    )
}

export default Form
