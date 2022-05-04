import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Michael Carr Contact Form',
    honeypot: '',
    message: '',
    accessKey: '69061fe1-e3ec-4546-ae81-629260c9b78f'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out! I\'ll be in touch.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };
  return (
    <>
    <div
    className={
      response.type === 'success'
        ? 'font-bold mb-44 p-4 border border-blue-primary rounded-lg'
        : 'hidden'
    }
  >
    <p>{response.message}</p>
  </div>
  <div
    className={
      response.type === 'error'
        ? 'text-red'
        : 'hidden'
    }
  >
    <p>{response.message}</p>
  </div>
  {!response.message
  ? <form className="w-full flex flex-col"
      action='https://api.staticforms.xyz/submit'
      method='post'
      onSubmit={handleSubmit}
    >
  
                <div className="input-control mt-2">
                  <label htmlFor="name">Name</label>
                  <input type="text" required name="name" onChange={handleChange} />
                </div>
                <div className="input-control mt-2">
                  <label htmlFor="email">Email</label>
                  <input type="email" required onChange={handleChange} name="email" />
                </div>
                <input type='text'
                  name='honeypot'
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <input
                  type='hidden'
                  name='subject'
                  onChange={handleChange}
                />
                <div className="input-control mt-2">
                  <label htmlFor="message">Message</label>
                  <textarea onChange={handleChange} required rows="3" name="message" />
                </div>
                <button type='submit' className="
                  mt-3 hover:scale-95 flex justify-center items-center flex-row gap-3 active:border-b-0 active:mt-4 transition-all border-b-4 border-b-blue-shadow hover:border-b-blue-900 bg-blue-secondary hover:bg-blue-shadow rounded-md text-white py-3 px-8 w-42 ml-auto
                ">
                  <FontAwesomeIcon icon={solid('paper-plane')} size="sm" />
                  Send
                </button>
              </form>
  : null
  }
            </>);
}
  