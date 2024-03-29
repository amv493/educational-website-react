import React from 'react'
import Title from '../../common/title/Title'
import './hero.css'

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero