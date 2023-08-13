import React, {useState} from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import axios from 'axios';
import DOMPurify from 'dompurify';
import Cookies from 'js-cookie';
import paperplane from "../assets/images/paper.png";
import visitcard from "../assets/images/visite2.webp"

const AUTH_TOKEN = "ZXOoRm5oxtAcGNbGMyHI7NJpIeZzaqdFNteUa0KM";

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {

  const cookieExists = Cookies.get('contacted');

  const [IfMailSend, setIfMailSend] = useState(false);
  const [mailResponse, setMailResponse] = useState(null);
  const [ifError, setIfError] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!replyTo || !name || !text || !phone || !firstname ) {
      setMailResponse("Veuillez remplir tous les champs.");
      setIfMailSend(true);
      setIfError(true);
      return;
    }
    if (!isValidEmail(replyTo)) {
      setMailResponse("Veuillez saisir une adresse email valide");
      setIfMailSend(true);
      setIfError(true);
      return;
    }

    if (cookieExists) {
      setMailResponse('Vous nous avez deja contacter, essayer plus tard.');
      setIfMailSend(true);
      setIfError(true);
      return;
    }

    const sanitizeFirstname = DOMPurify.sanitize(firstname);
    const sanitizeName = DOMPurify.sanitize(name);
    const sanitizePhone = DOMPurify.sanitize(phone);
    const sanitizeText = DOMPurify.sanitize(text);
    const sanitizeReplyTo = DOMPurify.sanitize(replyTo);

    const data = {
      firstname: sanitizeFirstname,
      name: sanitizeName,
      phone: sanitizePhone,
      text: sanitizeText,
      replyTo: sanitizeReplyTo
    };

    try {
      const response = await axios.post('https://email.api.kevinlebot.com/api/sendEmail', data, {
        headers: {
          'authorization': AUTH_TOKEN,
          'dest': "kevin.lebot@gmail.com",
        }
      });
      setIfError(false);
      setIfMailSend(true)
      setMailResponse(response.data)
      Cookies.set('contacted', true, { expires: 1 });
    } catch (error) {
      console.error(error);

    }
  };

  function HandleFirstnameChange(e) {
    setFirstname(e.target.value);
  }
  function HandleNameChange(e) {
    setName(e.target.value);
  }
  function HandleEmailChange(e) {
    setReplyTo(e.target.value);
  }
  function HandlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function HandleMessageChange(e) {
    setText(e.target.value);
  }

    return <section className="contact">
        <Navbar background={true}/>
        <section className="flex flex-col lg:flex-row justify-center items-center m-3 sm:m-12">
            <div className="w-full lg:w-3/5 xl:w-2/4">
                <h1>Contact</h1>
                {IfMailSend ? <p className={`text-2xl text-center h-9 ${ifError ? "text-red-500" : "text-green-500"}`}>{mailResponse}</p> : <p className="h-9"></p>}
                <img className="paper_plane" src={paperplane} alt="paper plane" />
                <img className="paper_plane_bis" src={paperplane} alt="paper plane" />
                <form onSubmit={handleSubmit} className="form_contact flex flex-col justify-center items-center sm:mx-12 mb-12">
                    <input onChange={HandleFirstnameChange} type="text" name="firstname" placeholder="prénom"/>
                    <input onChange={HandleNameChange} type="text" name="name" placeholder="nom"/>
                    <input onChange={HandleEmailChange} type="email" name="email" placeholder="email"/>
                    <input onChange={HandlePhoneChange} type="text" name="phone" placeholder="téléphone"/>
                    <textarea onChange={HandleMessageChange} name="message" id="message" rows="7" placeholder="Message..."></textarea>
                    <button type="submit" className='mr-5 lg:mr-18 mt-12'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                            </svg>
                            </div>
                        </div>
                        <span>envoyer</span>
                    </button>
                </form>
            </div>
            <div className="w-4/5 sm:w-2/3 lg:w-2/5 xl:w-1/3">
                <img src={visitcard} alt="visite card" />
            </div>
        </section>
        <Footer background={"darker"}/>
    </section>
}