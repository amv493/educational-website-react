import React from 'react'
import './footer.css'
import { blog } from '../../../dummydata'

const Footer = () => {
  return (
    <>
        <section className='newsletter'>
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter -Stay tune and get the lastest update</h1>
                    <span>far far away, behind the word mountains</span>
                </div>
                <div className="right row">
                    <input type='text' placeholder='Enter email address' />
                    <i className='fa fa-paper-plane'></i>
                </div>
            </div>
        </section>

        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>ACADEMIA</h1>
                    <span>online education & learning</span>
                    <p>Voluptas a loluptatem eos neceesitatibus fugit commodi tenetur odio, expedita amet accusamus error.</p>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box link">
                <h3>Quick Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Recent Post</h3>
                    {blog.slice(0,3).map((val) => {
                       return ( 
                            <div className="items flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <span>
                                        <i className='fa fa-user'></i>
                                        <label htmlFor=''>{val.type}</label>
                                    </span>
                                     <span>
                                        <i className='fa fa-calendar-alt'></i>
                                        <label htmlFor=''>{val.date}</label>
                                     </span>
                                     <h4>{val.title}</h4>
                                </div>
                            </div>
                       )
                    })}
                </div>
                <div className="box last">
                    <h3>Have a Question?</h3>
                    <ul>
                        <li>
                            <i className='fa fa-map'></i>
                            203 Fake St. Mount View San Francisco, California, US 
                        </li>
                        <li>
                            <i className='fa fa-phone-alt'></i>
                            +123 456 7897
                        </li>
                        <li>
                            <i className='fa fa-paper-plane'></i>
                            example@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <p>
                Copyright @2024 All rights reserved 
            </p>
        </div>
    </>
  )
}

export default Footer