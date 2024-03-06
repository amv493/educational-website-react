import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26819.99580008693!2d-80.068608!3d32.8320246!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1709744465129!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

  return (
    <>
        <Back title='Contact Us' />
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                    <iframe src={ map } ></iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>Ullam sit neque atque vitae molestias placeat?</p>

                    <div className='items grid2'>
                        <div className='box'>
                            <h4>ADDRESS: </h4>
                            <p>198 west 21st street, suite 751 New York NY 10016</p>
                        </div>
                        <div className='box'>
                            <h4>Email:</h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className='box'>
                            <h4>PHONE</h4>
                            <p>+123 456 7898</p>
                        </div>
                    </div>

                    <form action=''>
                        <div className='flexSB'>
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <input type='email' placeholder='Subject' />
                        <textarea cols='30' rows='10'>
                            Create a message here... 
                        </textarea>
                        <button className='primary-btn'>SEND MESSAGE</button>
                    </form>

                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact