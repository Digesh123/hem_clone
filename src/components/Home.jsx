import React from 'react'
import HomeSlider from './HomeSlider'
import WhyChooseUs from './WhyChooseUs'

function Home({setActivePage}) {
    return (
        <div>
            <HomeSlider setActivePage={setActivePage} />
            <WhyChooseUs />
        </div>
    )
}

export default Home