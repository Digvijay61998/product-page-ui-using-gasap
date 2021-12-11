import React from 'react'
import "./index.css"
import figures1 from "../../assets/figures1.png";
import figures2 from "../../assets/figures2.png";
import figures3 from "../../assets/figures3.png";
import figures4 from "../../assets/figures4.png";
import figures5 from "../../assets/figures5.png";
import figures6 from "../../assets/figures6.png";

export default function ContactDetails() {
    return (
        <div className="ContactDetails">
        <div className="Contact-contacts">
              <div className="Contact-contacts__center center">
                <div className="Contact-contacts__container">
                  <div className="Contact-contacts__wrap">
                    <div className="Contact-contacts__stage stage aos-init aos-animate" data-aos="animation-scale-y">Say hello 👋</div>
                    <h2 className="Contact-contacts__title h1 aos-init aos-animate" data-aos="animation-scale-y" data-aos-delay="200">Let’s Work <br/>Together.</h2>
                    <div className="Contact-contacts__info aos-init aos-animate" data-aos="animation-scale-y" data-aos-delay="400">I’d love to meet up with you to discuss your venture, and potential collaborations.</div>
                  </div>
                  <div className="Contact-contacts__row">
                    <div className="Contact-contacts__details aos-init aos-animate" data-aos="animation-translate-y"><a className="Contact-contacts__line" href="mailto:hello@ui8.net">
                        <div className="Contact-contacts__icon">
                          <svg className="Contact-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="15" fill="none" viewBox="0 0 18 15">
                            <path fill-rule="evenodd" d="M2.422.267C1.244.267.289 1.222.289 2.4v9.956c0 1.178.955 2.133 2.133 2.133h12.8c1.178 0 2.133-.955 2.133-2.133V2.4c0-1.178-.955-2.133-2.133-2.133h-12.8zM1.711 2.4a.71.71 0 0 1 .711-.711h12.8a.71.71 0 0 1 .711.711v9.956a.71.71 0 0 1-.711.711h-12.8a.71.71 0 0 1-.711-.711V2.4zm2.636.919a.71.71 0 1 0-1.006 1.006l4.978 4.978a.71.71 0 0 0 1.006 0l4.978-4.978a.71.71 0 1 0-1.006-1.006L8.822 7.794 4.347 3.319zm1.422 5.689a.71.71 0 0 1 0 1.006l-1.422 1.422a.71.71 0 1 1-1.006-1.006l1.422-1.422a.71.71 0 0 1 1.006 0zm7.111 0a.71.71 0 1 0-1.006 1.006l1.422 1.422a.71.71 0 1 0 1.006-1.006l-1.422-1.422z" fill="#4c40f7"></path>
                          </svg>
                        </div>
                        <div className="Contact-contacts__text">hello@ui8.net</div></a>
                      <div className="Contact-contacts__line">
                        <div className="Contact-contacts__icon">
                          <svg className="Contact-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                            <path fill-rule="evenodd" d="M9.273.85a.71.71 0 0 0-.901 0L.55 7.25a.71.71 0 0 0 .901 1.101l7.372-6.032 5.85 4.786a.71.71 0 1 0 .901-1.101L9.273.85zM3.845 9.222a.71.71 0 1 0-1.422 0v7.111a.71.71 0 0 0 .711.711h6.4a.71.71 0 1 0 0-1.422H3.845v-6.4zm9.932 0a2.04 2.04 0 0 0-2.11 2.008c.001.243.112.6.358 1.053.239.44.567.901.908 1.328l.867.996.867-.996c.341-.427.669-.887.908-1.328.246-.453.357-.81.358-1.053a2.04 2.04 0 0 0-2.11-2.008h-.047zm2.868 2.004h.711c0 .599-.245 1.21-.531 1.736-.294.542-.678 1.075-1.047 1.537l-1.018 1.163-.336.344-.096.095-.027.026-.007.007-.003.003-.491-.514-.491.514-.003-.003-.007-.007-.026-.026-.096-.095-.336-.344-1.017-1.163c-.37-.462-.753-.995-1.047-1.537-.286-.526-.531-1.138-.531-1.736v-.01c.012-.931.399-1.817 1.072-2.46.668-.637 1.561-.981 2.483-.957.922-.024 1.816.32 2.483.957.673.643 1.06 1.529 1.072 2.46l-.711.01zm-3.335 4.911c0 0 0 0 .491-.514l.491.514a.71.71 0 0 1-.982 0zm.491-4.07a.71.71 0 1 0 0-1.422.71.71 0 1 0 0 1.422z" fill="#4c40f7"></path>
                          </svg>
                        </div>
                        <div className="Contact-contacts__text"> 
                          <p>4074 Ebert Summit Suite 375</p>
                          <p>Lake Leonardchester</p>
                        </div>
                      </div><a className="Contact-contacts__line" href="tel:+441236547890">
                        <div className="Contact-contacts__icon">
                          <svg className="Contact-svg" xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                            <path fill-rule="evenodd" d="M6.689 2.978a.71.71 0 0 1 .711-.711h7.111a.71.71 0 0 1 .711.711v4.267a.71.71 0 0 1-.711.711H8.822a.71.71 0 0 0-.318.075l-1.815.908V2.978zM7.4.844c-1.178 0-2.133.955-2.133 2.133v7.111a.71.71 0 0 0 1.029.636L8.99 9.378h5.521c1.178 0 2.133-.955 2.133-2.133V2.978c0-1.178-.955-2.133-2.133-2.133H7.4zM2.422 2.267C1.244 2.267.289 3.222.289 4.4v11.378c0 1.178.955 2.133 2.133 2.133h7.822c1.178 0 2.133-.955 2.133-2.133V10.8a.71.71 0 1 0-1.422 0v4.978a.71.71 0 0 1-.711.711H2.422a.71.71 0 0 1-.711-.711V4.4a.71.71 0 0 1 .711-.711h1.422a.71.71 0 1 0 0-1.422H2.422z" fill="#4c40f7"></path>
                          </svg>
                        </div>
                        <div className="Contact-contacts__text">+44 123 654 7890</div></a>
                    </div>
                    <form className="Contact-contacts__form aos-init aos-animate" data-aos="animation-translate-y" data-aos-delay="200">
                      <div className="Contact-contacts__field field">
                        <div className="Contact-field__wrap">
                          <input className="Contact-field__input" type="text" name="name" placeholder="Name"/>
                          <div className="Contact-field__icon">
                            <svg className="Contact-svg"  xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="none" viewBox="0 0 17 18">
                              <path fill-rule="evenodd" d="M8.5.875a4.5 4.5 0 0 0-4.5 4.5v2a4.5 4.5 0 1 0 9 0v-2a4.5 4.5 0 0 0-4.5-4.5zM6 5.375a2.5 2.5 0 1 1 5 0v2a2.5 2.5 0 1 1-5 0v-2zM3.547 12.25a1 1 0 0 0-.969-1.75A5 5 0 0 0 0 14.875v2a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-2a5 5 0 0 0-2.578-4.375 1 1 0 1 0-.969 1.75A3 3 0 0 1 15 14.875v1H2v-1a3 3 0 0 1 1.547-2.625z" fill="#111029"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="Contact-contacts__field field">
                        <div className="Contact-field__wrap">
                          <input className="Contact-field__input" type="email" name="email" placeholder="Email"/>
                          <div className="Contact-field__icon">
                            <svg className="Contact-svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                              <path fill-rule="evenodd" d="M16.707.668a1 1 0 0 1 .238 1.033l-5 14.5a1 1 0 0 1-1.853.093l-3-6.5a1 1 0 0 1 .201-1.126l3-3a1 1 0 0 1 1.414 1.414L9.2 9.589l1.665 3.608 3.52-10.208-10.207 3.52 2.223 1.026a1 1 0 1 1-.838 1.816L1.081 7.283a1 1 0 0 1 .093-1.853l14.5-5a1 1 0 0 1 1.033.238z" fill="#4c40f7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="Contact-contacts__field field">
                        <div className="Contact-field__wrap">
                          <select className="Contact-field__select Contact-field__input" name="question">
                            <option>What are you working on?</option>
                            <option>What are you working on? 2</option>
                          </select>
                          <div className="Contact-field__icon">
                            <svg className="Contact-svg" xmlns="http://www.w3.org/2000/svg" width="12" height="18" fill="none" viewBox="0 0 12 18">
                              <path fill-rule="evenodd" d="M6.664 1.128a1 1 0 0 0-1.329 0l-4.5 4a1 1 0 0 0 1.329 1.495L6 3.213l3.836 3.409a1 1 0 1 0 1.329-1.495l-4.5-4zm-4.5 11a1 1 0 1 0-1.329 1.495l4.5 4a1 1 0 0 0 1.329 0l4.5-4a1 1 0 0 0-1.329-1.495L6 15.537l-3.836-3.41z" fill="#111029"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="Contact-contacts__field field field_textarea">
                        <div className="Contact-field__wrap">
                          <textarea className="Contact-field__textarea" name="message" placeholder="Message"></textarea>
                          <div className="Contact-field__icon">
                            <svg className="Contact-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                              <path fill-rule="evenodd" d="M.5 2.875a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3.532l-2.2 2.64a1 1 0 0 1-1.536 0l-2.2-2.64H2.5a2 2 0 0 1-2-2v-10zm15 0h-13v10h4a1 1 0 0 1 .768.36L9 15.313l1.732-2.078a1 1 0 0 1 .768-.36h4v-10zm-12 3a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2h-9z" fill="#111029"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="Contact-contacts__btn">
                        <button className="Contact-btn Contact-btn_purple"><span className="Contact-btn__text">Let’s Talk</span>
                          <svg className="Contact-svg"  xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none" viewBox="0 0 22 16">
                            <path fill-rule="evenodd" d="M14.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L18.586 7H1a1 1 0 1 0 0 2h17.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7c.183-.183.28-.419.292-.659L22 8m-.076-.383c-.049-.118-.121-.228-.217-.324l-7-7m7.217 7.324c.048.115.075.241.076.374z" fill="#fff"></path>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                    <div className="Contact-figures__preview"><img className="Contact-figures__pic" src={figures1} alt=""/></div>
                </div>
              </div>
            </div>
      </div>
    )
}



