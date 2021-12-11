import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
            <div className="FooterPage">
                <div className="container">
                    <div className="footer_top_container">
                        <div className="brand_container"><h3>"We believe that the Sking team is best positioned to help us with this journey"</h3></div>
                        <div className="productcontainer">
                            <div className="footer_column">
                                <div className="footer_title">Product</div>
                                <a href="#" className="footer_link">Starter Features</a>
                                <a href="#" className="footer_link">Pro Features</a>
                                <a href="#" className="footer_link">Boss Mode Features</a>
                                <a href="#" className="footer_link">25+ Languages</a>
                                <a href="#" className="footer_link">Pricing</a></div>
                        </div>
                        <div className="footer_column">
                            <div className="footer_title">Content</div>
                            <a href="#" className="footer_link">Reviews</a>
                            <a href="#" className="footer_link">The AI Blog</a>
                            <a href="#" className="footer_link">Expert Videos</a>
                        </div>
                        <div className="footer_column">
                        </div>
                        <div className="footer_column">
                            <div className="footer_title">Customer Support</div>
                            <a href="#" className="footer_link">Live 101 Trainings</a>
                            <a href="#" className="footer_link">Official Bootcamp</a>
                            <a href="#" target="_blank" className="footer_link">FAQ&nbsp;&amp;&nbsp;Help Center</a>
                            <a href="#" target="_blank" className="footer_link">App Status</a>
                            <a href="#" className="footer_link">Sking@Gmail.com</a>
                        </div>
                    </div>

                </div>
                <div className="footerbottomcontainer">
                    <div className="socialicon">
                        <a href="#" target="_blank" className="es.socialicon twitter" >
                            <img src="https://uploads-ssl.webflow.com/60a295eaddb3e10f7bae5980/60a295eaddb3e13304ae59fb_twitter-white.svg" alt="" />
                        </a>
                        <a href="#" target="_blank" className="es.socialicon facebook">
                            <img src="https://uploads-ssl.webflow.com/60a295eaddb3e10f7bae5980/60a295eaddb3e11b74ae59ef_facebook-white.svg" alt="" />
                        </a><a href="#" target="_blank" className="es.socialicon instagram">
                            <img src="https://uploads-ssl.webflow.com/60a295eaddb3e10f7bae5980/60a295eaddb3e1022dae59fc_instagram-white.svg" alt="" />
                        </a><a href="#" target="_blank" className="es.socialicon linkedin">
                            <img src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b8684a7c30e11_linkedin.svg" alt="" />
                        </a><a href="#" target="_blank" className="es.socialicon youtube">
                            <img src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/6116b6f6638346eecc2b604f_youtube%201.svg" alt="" />
                        </a></div>
                    <div className="footerlinklegal"><a href="/privacy">Privacy</a>
                        <a href="/terms" className="footerlinklegal">Terms</a>
                        <div className="footerlinklegal">@ 2021 Blog.ai</div></div></div>
            </div>
            </>
  )
}
