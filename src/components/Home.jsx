import React from 'react'
import HomeSlider from './HomeSlider'
import WhyChooseUs from './WhyChooseUs'
import Downloadpdf from './Downloadpdf'
// import { root1 } from 'postcss'

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
//  root1.render(
//         <Downloadpdf
//         />
// );

function Home({setActivePage}) {
    return (
        <div>
            <HomeSlider setActivePage={setActivePage} />
            <WhyChooseUs />
        </div>
    )
}

export default Home