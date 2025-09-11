import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='p-5 text-center bg-light-dark'>
                    <h1 className='text-light'>Stock Prediction Portal </h1>
                    <p className='text-light lead '>
                        A stock prediction portal is a sophisticated digital platform designed to empower investors with data-driven forecasts and market insights. It leverages the immense power of technology, utilizing complex algorithms, machine learning models, and artificial intelligence to analyze vast datasets. This includes historical price movements, real-time market feeds, company financials, global economic indicators, and even alternative data like news sentiment and social media trends.
                    </p>

                    <Button text='Login' class='btn-info'/>
                    

                </div>
            </div>
        </>
    )
}

export default Main