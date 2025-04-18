import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeSlider from '../components/HomeSlider'
import ClientSlider from '../components/ClientSlider'

function NFWrapper({ children, setActivePage, activePage }) {
    return (
        <div className='bg-gradient-to-b from-orange-50 to-orange-100 ' >
            <Navbar setActivePage={setActivePage} activePage={activePage} />
            {
                children
            }
            <ClientSlider activePage={activePage} />
            {activePage != "contact" && (<div className="  rounded-xl shadow-lg p-12 text-center ">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">Become Our Client</h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Join our growing list of satisfied clients and experience our professional debt recovery services tailored to your specific needs.
                </p>
                <button onClick={()=>{setActivePage('contact'); window.scrollTo({ top: 0, behavior: "smooth" });}} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 cursor-pointer">
                    Contact Us Today
                </button>
            </div>)}
            <Footer setActivePage={setActivePage} activePage={activePage} />
        </div>
    )
}

export default NFWrapper