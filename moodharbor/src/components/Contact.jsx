import React, { useContext, useState } from 'react';
import UserContext from './Auth/UserContext';
import Header from './Header';
import Footer from './Footer';


const Contact = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState({
    title: '',
    message: '',
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
};

  return (
    <> 
        <Header 
            title="" 
            subtitle="" 
            name={user && `Hi ${user}`} 
            pageTitle="CONTACT US"
        />
      
        <div className="contact-container"> 
        {/* <main className="login-container">    */}   
        <div className='form-container'>

          <form className="form" autoComplete="new-password">
            <div className='form-title'>
              Contact Us
            </div>
            <div className="input-control">
              <label className="form-label" >
                Title
                <input type="text" 
                name="title" 
                className='form-group' 
                placeholder='Enter Your Message Title...'
                autoComplete="new-password"
                value={data.title}
                onChange={handleChange}
                />
                
              </label>
              </div>
              
              <div className="input-control">
                <label htmlFor="password" className='form-label'>Enter Your Message
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  cols="70" 
                  rows="10" 
                  placeholder="Enter Your Message here..."
                  // className='form-group'
                  ></textarea>
                
                
                
              </div>
              <div className='button-section'>
                <button className='button' type='submit'>
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        {/* </main>  */}
        </div>
        <Footer/>        
    </> 
  );
};

export default Contact;