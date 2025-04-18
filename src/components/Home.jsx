import React from 'react'
import HomeSlider from './HomeSlider'
import WhyChooseUs from './WhyChooseUs'
import Downloadpdf from './Downloadpdf'
import { root } from 'postcss'

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
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