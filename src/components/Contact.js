import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact__container'>
                <div className='flip-card-column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div id='facebook-contact' className="flip-card-front">
                            </div>
                            <div className="flip-card-back">
                                <h1>facebook</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flip-card-column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div id='email-contact' className="flip-card-front">
                            </div>
                            <div className="flip-card-back">
                                <h1>email</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flip-card-column'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div id='phone-contact' className="flip-card-front">
                            </div>
                            <div className="flip-card-back">
                                <h1>0123456789</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
