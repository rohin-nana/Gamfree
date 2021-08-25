import './contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0m908vl', 'template_kejclgv', e.target, 'user_HMcgU52N6DAFICRqTn3Wq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div className='contact'>
            <form onSubmit={sendEmail} className='contact-box'>
                    <div className='email-box'>
                        <label className='contact-header'>Email</label>
                        <input className='email-box-text' type='email' name='email'>
                        </input>
                    </div>
                    <div className='subject-box'>
                        <label className='contact-header'>Subject</label>
                        <input className='subject-box-text' type='text' name='subject'>
                        </input>
                    </div>
                    <div className='message-box'>
                        <label className='contact-header'>Message</label>
                        <textarea  className='message-box-text' type='text' name='message'>
                        </textarea>
                    </div>
                    <button className='send-button' type='submit'>
                        <div className='send-button-text'>
                            <h2>Send</h2>
                        </div>
                    </button>
            </form>
        </div>
    );
}
 
export default Contact;