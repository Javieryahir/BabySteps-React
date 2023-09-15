import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

import 'aos/dist/aos.css';
import 'aos/dist/aos.css';


  const Comentarios = () => {
  const form = useRef<HTMLFormElement | null>(null);
 
  

  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [correctBoolean, setCorrectBoolean] = useState<boolean>(false);
  const [warningBoolean, setWarningBoolean] = useState<boolean>(false);
  const [errorBoolean, setErrorBoolean] = useState<boolean>(false);
  const [loadingBoolean, setLoadingBoolean] = useState<boolean>(false);

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue((event.target as HTMLInputElement).value);
    
  }
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameValue((event.target as HTMLInputElement).value);
    
  }
  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessageValue((event.target as HTMLTextAreaElement).value);
    
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (emailValue.trim() === "" || nameValue.trim() === "" || messageValue.trim() === "") {
      setWarningBoolean(true);
      setTimeout(() => {
        setWarningBoolean(false);
      }, 3000);
    } else {
      sendEmail(event);
    }
  }
  

  async function sendEmail(e: React.FormEvent<HTMLFormElement>)  {
    e.preventDefault();

    if (form.current) {
      try {
        setLoadingBoolean(true)
         await emailjs.sendForm(
          
          'service_n213lqr',
          'template_fwriw3t',
          form.current,
          'JsM6w-CTq6k90h4Kv'
        );
        setLoadingBoolean(false)
        setCorrectBoolean(true);
        setTimeout(() => {
          setCorrectBoolean(false);
        }, 3000);
      } catch (error) {
        setErrorBoolean(true);
        setTimeout(() => {
          setErrorBoolean(false);
        }, 3000);
      }
    }
  };
    
    return (
        <div id='comentariosPage' className="flex items-center justify-center p-12 bg-slate-200">
           

  <div className="mx-auto w-full max-w-[850px] ">
  <h2 className="text-center py-10 text-4xl font-bold ">Contactanos</h2>
    <form ref={form} onSubmit={handleSubmit}>
      {correctBoolean ? (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Envio Exitoso!</span> Has enviado de forma exitosa tu comentario.
        </div>
      ) : (
        <div></div>
      )}
      {errorBoolean ? (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Envio Erroneo!</span> Hubo un problema a la hora de enviar tu comentario.
        </div>
      ) : (
        <div></div>
      )}
      {warningBoolean ? (
        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          <span className="font-medium">Revisa tu Comentario!</span> Hubo un problema en el formato de tu comentario (Espacios en blanco). 
        </div>
      ) : (
        <div></div>
      )}
      
      
      
      <div  data-aos="fade-left" className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre Completo"
          value={emailValue} 
          onChange={handleEmailChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md bg-slate-50"
        />
      </div>
      <div data-aos="fade-left" className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Correo Electronico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ejemplo@dominio.com"
          value={nameValue}
          onChange={handleNameChange}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md bg-slate-50"
        />
      </div>
      
      <div data-aos="fade-left" className="mb-5">
        <label
          
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Mensaje
        </label>
        <textarea
          rows={4}
          name="message"
          id="message"
          placeholder="Escribe tu mensaje"
          value={messageValue}
          onChange={handleMessageChange}
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  bg-slate-50 bg-slate-50"
        ></textarea>
      </div>
      <div>
      {loadingBoolean? (
        <button disabled type="button" className="text-white bg-slate-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        Loading...
      </button>
      ) : (
        <button
           
          className="hover:bg-slate-500 rounded-md bg-slate-400 py-3 px-8 text-base font-semibold text-white outline-none ${color}"
          
        >
          Enviar
        </button>
      )}
        
        
      </div>
    </form>
  </div>
</div>
    )
}

export default Comentarios