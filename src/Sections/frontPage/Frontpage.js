import React from 'react'
import "./Frontpage.css"
import space1 from "../../assets/space1.svg"
import space2 from "../../assets/space2.svg"


export default function Frontpage() {
	return (
		<>
			<div className="Home-section">
				<div className="Home-Cname">
					<div className="sun"></div>
					<div className="overlay">
						<div className="Home-Splash-Container">
							<div class="splash"></div>
							<div class="splash delay-1"></div>
							<div class="splash delay-2"></div>
							<div class="splash splash-4 delay-2"></div>
							<div class="splash splash-4 delay-3"></div>
							<div class="splash splash-4 delay-4"></div>
						</div>
					</div>
					<div className="Home-container">
						<div className="text">
							<div className="wrapper">
								<div id="L" className="letter">S</div>
								<div className="shadow">S</div>
							</div>
							<div className="wrapper">
								<div id="I" className="letter">K</div>
								<div className="shadow">K</div>
							</div>
							<div className="wrapper">
								<div id="G" className="letter">I</div>
								<div className="shadow">I</div>
							</div>
							<div className="wrapper">
								<div id="H" className="letter">N</div>
								<div className="shadow">N</div>
							</div>
							<div className="wrapper">
								<div id="T" className="letter">G</div>
								<div className="shadow">G</div>
							</div>
							<div className="wrapper">
								<div id="N" className="letter">S</div>
								<div className="shadow">S</div>
							</div>
						</div>

						<div className="Home-section section-bg" >
							<div className="Home-ellipses-container">
								<div className="Home-socialicons">


								</div>
								<div className="Home-ellipses Home-ellipses__inner">
								</div>
								<div className="Home-ellipses Home-ellipses__outer--thin">
									<div className="Home-ellipses Home-ellipses__orbit"></div>
								</div>
								<div className="Home-ellipses Home-ellipses__outer--thick"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<img src={space1} alt="space" className="spaceimg space1" />
				<img src={space2} alt="space" className="spaceimg space2" />

			</div>
			<div className="sky">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
		</div>
		<div className="shinestarsky">
        <div className="shinestar"></div>
		<div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
		<div className="shinestar"></div>
		<div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
        <div className="shinestar"></div>
		
		
		</div>
		</>
	)
}
