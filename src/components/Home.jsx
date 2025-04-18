import React from 'react'
import HomeSlider from './HomeSlider'
import WhyChooseUs from './WhyChooseUs'
import Downloadpdf from './Downloadpdf'

const approot = ReactDOM.createRoot(document.getElementById('root1'));
 approot.render(
        <Downloadpdf
        />
);

function Home({setActivePage}) {
    return (
        <div>
            <HomeSlider setActivePage={setActivePage} />
            <WhyChooseUs />
        </div>
    )
}

export default Home