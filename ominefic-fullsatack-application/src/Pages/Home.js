 import React from 'react';
import { Helmet } from 'react-helmet';
 
 class Home extends React.Component {
    render(){
        return(

	<div> 	

	{/* <!-- WRAPPER ALL --> */}
	<div className="edrea_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInUp" data-exit="">
	
		<div className="waves"></div>


		{/* <!-- SETTINGS --> */}
		<div class="edrea_tm_settings">
			<div class="icon">
				<img class="svg" src="assets/img/setting.svg" alt="" />
				<a class="link" href="#"></a>
			</div>
			<div class="wrapper">
				{/* <span class="title">Unlimited Colors</span>
				<ul class="colors">
					<li><a href="#" data-color="#4169e1"></a></li>
					<li><a href="#" data-color="#0a0e27"></a></li>
					<li><a href="#" data-color="#ff9800"></a></li>
					<li><a href="#" data-color="#f7a305"></a></li>
					<li><a href="#" data-color="#fa5b0f"></a></li>
					<li><a href="#" data-color="#f39977"></a></li>
					<li><a href="#" data-color="#9200ee"></a></li>
					<li><a href="#" data-color="#00D4BD"></a></li>
					<li><a href="#" data-color="#5e9e9f"></a></li>
					<li><a href="#" data-color="#EB4A4C"></a></li>
					<li><a href="#" data-color="#666d41"></a></li>
					<li><a href="#" data-color="#fe0000"></a></li>
				</ul>
				<span class="title">Magic Cursor</span>
				<ul class="cursor">
					<li><a class="showme show" href="#"></a></li>
					<li><a class="hide" href="#"><img class="svg" src="assets/img/arrow.svg" alt="" /></a></li>
				</ul> */}
			</div>
		</div>
		{/* <!-- /SETTINGS --> */}


		{/* <!-- HEADER --> */}
		<div class="edrea_tm_header">
			<div class="header_inner">
				<div class="logo">
					<img src="assets/img/logo/logo.png" alt="" />
				</div>
				<div class="menu">
					<ul class="transition_link">
						<li class="active"><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#news">Services</a></li>
						<li><a href="#joinus">Join Us</a></li>
						<li><a href="#contact">Contact</a></li>
						<li><a href="#login">Login</a></li>
					</ul>
				</div>
			</div>
		</div>
		{/* <!-- /HEADER --> */}


		{/* <!-- CONTENT --> */}
		<div className="edrea_tm_content">

		{/* <!-- HOME --> */}
			<div class="edrea_tm_section animated" id="home">
				<div class="section_inner">
					<div class="edrea_tm_home">
						<h3 class="name">Being All <span class="coloring">Creating</span></h3>
						<h3 class="job">
							<span class="cd-headline zoom"> {/* <!-- ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  --> */}
								{/* <span class="blc">Creative </span> */}
								<span class="cd-words-wrapper">
								  <b class="is-visible">Social Media Marketing</b>
								  <b><center>Search Engine Optimization</center></b>
								  <b><center>Influencer Marketing</center></b>
								  <b><center>Pay-Per-Click Marketing</center></b>
								  <b><center>Content Marketing</center></b>
								  <b><center>Email Marketing</center></b>
								  <b><center>Mobile Application Development</center></b>
								  <b><center>Web Designing and Development</center></b>
								</span>
							</span>
						</h3>
						<div class="edrea_tm_button transition_link">
							<a href="#contact">Get in Touch</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /HOME --> */}



			{/* <!-- CONTACT --> */}
			<div className="edrea_tm_section" id="contact">
				<div className="section_inner">
					<div className="edrea_tm_contact">
						<div className="edrea_tm_main_title">
							<h3>Get in <span className="coloring">Touch</span></h3>
						</div>
						<div className="wrapper">
							<div className="left">
								<ul>
									<li>
										<div className="list_inner">
											<i className="icon-location"></i>
											<span><a href="#" className="href_location">Co-nnect, Shangri-La Hotel, Colombo</a></span>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<i className="icon-phone"></i>
											<span><a href="#">+94 71 488 9000</a></span>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<i className="icon-mail-1"></i>
											<span><a href="mailto:shenaya@ominefic.com">shenaya@ominefic.com</a></span>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<i className="icon-facebook-rect"></i>
											<span><a href="https://web.facebook.com/ominefic">@facebookOminefic</a></span>
										</div>
									</li>
								</ul>
							</div>
							<div className="right">
								<div className="fields">
									<form action="/" method="post" class="contact_form" id="contact_form">
										<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										<div className="first">
											<ul>
												<li>
													<div className="list_inner">
														<input id="name" type="text" placeholder="Name" autocomplete="off"/>
													</div>
												</li>
												<li>
													<div className="list_inner">
														<input id="email" type="text" placeholder="Email" autocomplete="off"/>
													</div>
												</li>
												<br/><br/>
												<li>
													<div className="list_inner">
														<input id="mobile" type="text" placeholder="Mobile Number" autocomplete="off"/>
													</div>
												</li>
											</ul>
											
											
										</div>
										<div className="last">
											<textarea id="message" placeholder="Message"></textarea>
										</div>
										<div className="edrea_tm_button">
											<a id="send_message" href="#">Send Message</a>
										</div>

										{/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}

									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /CONTACT --> */}


			{/* <!-- JOIN US --> */}
			<div className="edrea_tm_section" id="joinus">
				<div className="section_inner">
					<div className="edrea_tm_contact">
						<div className="edrea_tm_main_title">
							<h3>Apply Your <span className="coloring">CV </span>To Us</h3>
						</div>
						<div className="wrapper">
							<div className="left">
								<p>As a growing digital and creative marketing agency in Sri Lanka, we, Ominefic (Pvt) Ltd offer the young and dynamic individuals to expand and advance their career to something big. To become the global leader in creative marketing arena, we are always ready to invest in our team to achieve our vision together as one family. If you have relevant experience but no formal qualifications, you are still welcome to join our team.Let's explore a position at Ominefic and thrive with us.</p>
							</div>
							<div className="right">
								<div className="fields">
									<form action="/" method="post" class="contact_form" id="contact_form">
										<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										<div className="first">
											<ul>
												<li>
													<div className="list_inner">
														<input id="fname" type="text" placeholder="Frist Name" autocomplete="off"/>
													</div>
												</li>
												<li>
													<div className="list_inner">
														<input id="lname" type="text" placeholder="Last Name" autocomplete="off"/>
													</div>
												</li>
												<br/><br/>
												<center>
												<li>
													<div className="list_inner">
														<input id="email" type="text" placeholder="E-mail" autocomplete="off"/>
													</div>
												</li>
												<br/><br/>
												<li>
													<div className="list_inner">
														<input id="mobile" type="text" placeholder="Linkedln URL" autocomplete="off"/>
													</div>
												</li>
												{/* <li>
												<div class="apply__field ">
                										<input type="file" class="apply_input file_input"/>
            										</div>
												</li> */}
												</center>
											</ul>
											
											
										</div>
										{/* <div className="last">
											<textarea id="message" placeholder="Message"></textarea>
										</div> */}
										<div className="edrea_tm_button">
											<a id="applu_now" href="#">Apply Now</a>
										</div>

										{/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}

									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /JOIN US --> */}




			{/* <!-- LOGIN --> */}
			<div className="edrea_tm_section" id="login">
				<div className="section_inner">
					<div className="edrea_tm_contact">
						<div className="edrea_tm_main_title">
							<h3>Log<span className="coloring">in</span></h3>
						</div>
						<div className="wrapper">
							
							<div className="right">
								<div className="fields">
									<form action="/" method="post" class="contact_form" id="contact_form">
										<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										<div className="first">
											<ul>
												<li>
													<div className="list_inner">
														<input id="username" type="text" placeholder="User Name" autocomplete="off"/>
													</div>
												</li>
												<li>
													<div className="list_inner">
														<input id="password" type="text" placeholder="Password" autocomplete="off"/>
													</div>
												</li>
											</ul>
										</div>
										
										<div className="edrea_tm_button">
											<a id="send_message" href="#">Send Message</a>
										</div>

										{/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}

									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /LOGIN --> */}




			{/* <!-- SERVICES --> */}
			<div className="edrea_tm_section" id="news">
				<div className="section_inner">
					<div className="edrea_tm_news swiper-section">
						<div className="edrea_tm_main_title">
							<h3>Services and  <span class="coloring">Products</span></h3>
						</div>
						<div className="news_list">
							<div className="swiper-container">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/1.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Social Media Marketing</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>The majority of internet businesses ignore the true value of social media leads. In order to ensure that your audience is drawn into the community and is consistently engaged with a brand that enables them extra quality and passion over the network's introduction point, our social media marketing campaigns are built with top originations and confinement in mind.</p>
														
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>
									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/2.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Search Engine Optimization</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>Stop using the usual tricks. We assist you in obtaining great exposure and focused traffic from international searches. We are all aware of the potential audience we may bring to your company. No filler, just thorough findings you can take to the bank. To deliver essential outcomes for your company, get in touch with us.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>
									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/3.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Digital Strategy</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>A digital strategy, sometimes called a digital media strategy, is a plan for maximizing the business benefits of data assets and technology-focused initiatives. A successful digital strategy requires a cross-functional team with executive leadership, marketing and information technology (IT) members.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>
									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/4.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Influencer Marketing</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>Influencer marketing involves brands collaborating with online influencers to market products or services. Some influencer marketing collaborations are less tangible than that – brands simply work with influencers to improve brand recognition.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>
									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/5.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Conversion Rate Optimization</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>Conversion rate optimization (CRO) is the process of increasing the percentage of conversions from a website or mobile app. CRO typically involves generating ideas for elements on your site or app that can be improved and then validating those hypotheses through A/B testing and multivariate testing.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>
									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/6.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Pay-Per-Click Marketing</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>PPC stands for pay-per-click, a model of internet marketing in which advertisers pay a fee each time one of their ads is clicked. Essentially, it's a way of buying visits to your site, rather than attempting to “earn” those visits organically.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>

									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/7.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Content Marketing</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and other media. This approach establishes expertise, promotes brand awareness, and keeps your business top of mind when it's time to buy what you sell.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>

									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/8.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Email Marketing	</a></h3>
												<span><a href="#">Digital Marketing</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services. It can also be a softer sell to educate your audience on the value of your brand or keep them engaged between purchases. It can also be anything in between.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>

									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/9.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Mobile Application Development</a></h3>
												<span><a href="#">Development</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>Top-notch mobile app developers make applications for a variety of mobile operating systems, which can help you establish a brand, if you want to achieve intense success and more business with a wealthy audience. Set up your sincere notions and ideas on any platform. Ask Ominefic to build your own mobile application for a set fee. Unsurpassed quality!</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>

									<div className="swiper-slide">
										<div className="list_inner">
											<div className="image">
												<img src="assets/img/thumbs/4-3.jpg" alt="" />
												<div className="main" data-img-url="assets/img/news/10.jpg"></div>
												<a className="edrea_tm_full_link news_popup" href="#"></a>
											</div>
											<div className="details">
												<h3><a href="#">Web Designing and Development</a></h3>
												<span><a href="#">Development</a></span>
											</div>
											
											
											{/* <!-- News Popup Informations --> */}
											<div className="edrea_tm_hidden_content">
												<div className="news_popup_details">
													<div className="text">
														<p>When someone finds you online, your website is typically their only chance to give a positive impression of you. We create cutting-edge, modern, adaptable, user-centered websites that are SEO-friendly and provide your company a significant boost. Put an end to your customary tactics. We help you get excellent visibility and targeted visitors from global searches. We are all aware of the audience we may potentially attract to your business. Just detailed results you can rely on—no filler. Contact us to generate crucial results for your business. Stop using the usual tricks. We assist you in obtaining great exposure and focused traffic from international searches.</p>
													</div>
												</div>
											</div>
											{/* <!-- /News Popup Informations --> */}
											
											
										</div>
									</div>
								</div>
								<div className="edrea_tm_swiper_progress fill">
									<div className="my_pagination_in">
										<span className="current"></span>
										<span className="pagination_progress"><span className="all"><span></span></span></span>
										<span className="total"></span>
									</div>
									<div className="my_navigation">
										<ul>
											<li><a className="my_prev" href="#"><i className="icon-left-open-1"></i></a></li>
											<li><a className="my_next" href="#"><i className="icon-right-open-1"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /SERVICES --> */}



			

			
			{/* <!-- PORTFOLIO --> */}
			{/* <div class="edrea_tm_section" id="portfolio">
				<div class="section_inner">
					<div class="edrea_tm_portfolio swiper-section">
						<div class="edrea_tm_main_title">
							<h3>Creative <span class="coloring">Portfolio</span></h3>
						</div>
						<div class="portfolio_list gallery_zoom">
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="list_inner">
											<div class="image">
												<img src="assets/img/thumbs/1-1.jpg" alt="" />
												<div class="main" data-img-url="assets/img/portfolio/1.jpg"></div>
											</div>
											<div class="details">
												<h3>Sweet Fruit</h3>
												<span>Vimeo</span>
											</div>
											<a class="edrea_tm_full_link popup-vimeo" href="https://vimeo.com/321091335"></a>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="list_inner">
											<div class="image">
												<img src="assets/img/thumbs/1-1.jpg" alt="" />
												<div class="main" data-img-url="assets/img/portfolio/2.jpg"></div>
											</div>
											<div class="details">
												<h3>Good Present</h3>
												<span>Youtube</span>
											</div>
											<a class="edrea_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=toClS5fCudA"></a>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="list_inner">
											<div class="image">
												<img src="assets/img/thumbs/1-1.jpg" alt="" />
												<div class="main" data-img-url="assets/img/portfolio/3.jpg"></div>
											</div>
											<div class="details">
												<h3>Mockup Cream</h3>
												<span>Soundcloud</span>
											</div>
											<a class="edrea_tm_full_link soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="list_inner">
											<div class="image">
												<img src="assets/img/thumbs/1-1.jpg" alt="" />
												<div class="main" data-img-url="assets/img/portfolio/4.jpg"></div>
											</div>
											<div class="details">
												<h3>Delicious Apple</h3>
												<span>Detail</span>
											</div>
											<a class="edrea_tm_full_link portfolio_popup" href="#"></a>
											 */}
											
											{/* <!-- Portfolio Popup Informations --> */}
											{/* <div class="edrea_tm_hidden_content">
												<div class="portfolio_popup_details">
													<div class="text">
														<p>An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.</p>
														<p>Apples grown from seed tend to be very different from those of the parents, and the resultant fruit frequently lack desired characteristics. Generally then, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be larger and much slower to fruit after planting.</p>
													</div>
													<div class="additional_images">
														<ul class="gallery_zoom">
															<li>
																<div class="list_inner">
																	<div class="image">
																		<img src="assets/img/thumbs/4-2.jpg" alt="" />
																		<div class="main" data-img-url="assets/img/portfolio/7.jpg"></div>
																		<a class="edrea_tm_full_link zoom" href="assets/img/portfolio/7.jpg"></a>
																	</div>
																</div>
															</li>
															<li>
																<div class="list_inner">
																	<div class="image">
																		<img src="assets/img/thumbs/4-2.jpg" alt="" />
																		<div class="main" data-img-url="assets/img/portfolio/8.jpg"></div>
																		<a class="edrea_tm_full_link zoom" href="assets/img/portfolio/8.jpg"></a>
																	</div>
																</div>
															</li>
															<li>
																<div class="list_inner">
																	<div class="image">
																		<img src="assets/img/thumbs/4-2.jpg" alt="" />
																		<div class="main" data-img-url="assets/img/portfolio/9.jpg"></div>
																		<a class="edrea_tm_full_link zoom" href="assets/img/portfolio/9.jpg"></a>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div> */}
											{/* <!-- /Portfolio Popup Informations --> */}
											
											
											
										{/* </div>
									</div>
									<div class="swiper-slide">
										<div class="list_inner">
											<div class="image">
												<img src="assets/img/thumbs/1-1.jpg" alt="" />
												<div class="main" data-img-url="assets/img/portfolio/5.jpg"></div>
											</div>
											<div class="details">
												<h3>Blue Lemon</h3>
												<span>Image</span>
											</div>
											<a class="edrea_tm_full_link zoom" href="assets/img/portfolio/5.jpg"></a>
										</div>
									</div>
									<div class="swiper-slide">
										<div class="list_inner">
											<div class="image">
												<img src="assets/img/thumbs/1-1.jpg" alt="" />
												<div class="main" data-img-url="assets/img/portfolio/6.jpg"></div>
											</div>
											<div class="details">
												<h3>Sweet Cheery</h3>
												<span>Image</span>
											</div>
											<a class="edrea_tm_full_link zoom" href="assets/img/portfolio/6.jpg"></a>
										</div>
									</div>
								</div>
								<div class="edrea_tm_swiper_progress fill">
									<div class="my_pagination_in">
										<span class="current"></span>
										<span class="pagination_progress"><span class="all"><span></span></span></span>
										<span class="total"></span>
									</div>
									<div class="my_navigation">
										<ul>
											<li><a class="my_prev" href="#"><i class="icon-left-open-1"></i></a></li>
											<li><a class="my_next" href="#"><i class="icon-right-open-1"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* <!-- /PORTFOLIO --> */}


			{/* <!-- ABOUT --> */}
			<div class="edrea_tm_section" id="about">
				<div class="section_inner">
					<div class="edrea_tm_about">
						<div class="left">
							<div class="image">
								<img src="assets/img/thumbs/1-1.jpg" alt="" />
								<div class="main" data-img-url="assets/img/about/1.jpg"></div>
							</div>
						</div>
						<div class="right">
							<div class="short">
								<h3 class="name">Omin<span class="coloring">efic</span></h3>
								<h3 class="job">
									<span class="cd-headline rotate-1"> {/* <!-- ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  --> */}
										<span class="blc">Creative</span>
										<span class="cd-words-wrapper">
										  <b class="is-visible">Designer</b>
										  <b>Developer</b>
										  <b>Freelancer</b>
										</span>
									</span>
								</h3>
							</div>
							<div class="text">
								<p>We are an <span>innovative</span> and a <span>creative</span> social media agency, catering to current digital marketing trends that helps organisations to improve their brand awareness, sales and corporate image.</p>
								<ul>
									<span><li>Creative Think Tank</li></span>
									<li>Corporate Advertising</li>
									<span><li>Mobile App Development</li></span>
									<li>Data Analytics</li>
									<span><li>Social Media Content Creation</li></span>
									<li>Event-based Marketing Strategy Building</li>
								</ul>
							
							</div>
							{/* <div class="edrea_tm_button">
								<a href="#">Learn More</a>
							</div> */}
							
							
							{/* <!-- About Popup Informations --> */}
							{/* <div class="edrea_tm_hidden_content">
								<div class="about_popup_details">
									<div class="left">
										<div class="left_inner">
											<div class="author">
												<div class="avatar_image">
													<img src="assets/img/thumbs/1-1.jpg" alt="" />
													<div class="main" data-img-url="assets/img/about/1.jpg"></div>
												</div>
												<div class="short">
													<h3 class="name">David <span class="coloring">Parker</span></h3>
													<h3 class="job">
														<span class="cd-headline rotate-1"> */} {/* <!-- ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  --> */}
															{/* <span class="blc">Creative</span>
															<span class="cd-words-wrapper">
															  <b class="is-visible">Designer</b>
															  <b>Developer</b>
															  <b>Freelancer</b>
															</span>
														</span>
													</h3>
												</div>
											</div>
											<div class="list">
												<ul>
													<li>
														<div class="list_inner">
															<i class="icon-user"></i>
															<span>David Parker</span>
														</div>
													</li>
													<li>
														<div class="list_inner">
															<i class="icon-calendar"></i>
															<span>01.07.1990</span>
														</div>
													</li>
													<li>
														<div class="list_inner">
															<i class="icon-location"></i>
															<span><a href="#" class="href_location">Avon str. 22, NYC, USA</a></span>
														</div>
													</li>
													<li>
														<div class="list_inner">
															<i class="icon-phone"></i>
															<span><a href="#">+77 022 155 02 02</a></span>
														</div>
													</li>
													<li>
														<div class="list_inner">
															<i class="icon-mail-1"></i>
															<span><a href="mailto:example@gmail.com">example@gmail.com</a></span>
														</div>
													</li>
												</ul>
											</div>
											<div class="edrea_tm_button full">
												<a href="assets/img/about/1.jpg" download>Download CV</a>
											</div>
										</div>
									</div>
									<div class="right">
										<div class="right_inner">
											<div class="biography">
												<div class="about_title">
													<h3><span>About <span class="coloring">Me</span></span></h3>
												</div>
												<div class="text">
													<p>Hello everybody! My name is <span>David Parker.</span> I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge.</p>
												</div>
											</div>
											<div class="service">
												<div class="about_title">
													<h3><span>Quality <span class="coloring">Services</span></span></h3>
												</div>
												<div class="list">
													<ul>
														<li><i class="icon-right-dir"></i>Website Development</li>
														<li><i class="icon-right-dir"></i>Digital Experience</li>
														<li><i class="icon-right-dir"></i>Content Marketing</li>
														<li><i class="icon-right-dir"></i>Social Media Design</li>
														<li><i class="icon-right-dir"></i>Shared Web Hosting</li>
													</ul>
												</div>
											</div>
											<div class="prog_skill">
												<div class="about_title">
													<h3><span>Programming <span class="coloring">Skills</span></span></h3>
												</div>
												<div class="oki_progress">
													<div class="progress_inner" data-value="95">
														<span><span class="label">WordPress</span><span class="number">95%</span></span>
														<div class="background"><div class="bar"><div class="bar_in"></div></div></div>
													</div>
													<div class="progress_inner" data-value="80" >
														<span><span class="label">JavaScript</span><span class="number">80%</span></span>
														<div class="background"><div class="bar"><div class="bar_in"></div></div></div>
													</div>
													<div class="progress_inner" data-value="90">
														<span><span class="label">Angular</span><span class="number">90%</span></span>
														<div class="background"><div class="bar"><div class="bar_in"></div></div></div>
													</div>
												</div>
											</div>
											<div class="lang_skill">
												<div class="about_title">
													<h3><span>Language <span class="coloring">Skills</span></span></h3>
												</div>
												<div class="circular_progress_bar">
													<ul>
														<li>
															<div class="list_inner">
																<div class="myCircle" data-value="0.95"></div>
																<div class="title"><span>English</span></div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="myCircle" data-value="0.8"></div>
																<div class="title"><span>Russian</span></div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="myCircle" data-value="0.9"></div>
																<div class="title"><span>Arabic</span></div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div class="timeline">
												<div class="about_title">
													<h3><span>Education <span class="coloring">Timeline</span></span></h3>
												</div>
												<div class="list">
													<ul>
														<li>
															<div class="list_inner">
																<div class="time">
																	<span>2014 - 2016</span>
																</div>
																<div class="place">
																	<h3>Oxford Univercity</h3>
																	<span>Master Degree</span>
																</div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="time">
																	<span>2010 - 2014</span>
																</div>
																<div class="place">
																	<h3>Texas Univercity</h3>
																	<span>Bachelor Degree</span>
																</div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="time">
																	<span>2008 - 2010</span>
																</div>
																<div class="place">
																	<h3>Simone College</h3>
																	<span>Associate Degree</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div class="timeline">
												<div class="about_title">
													<h3><span>Working <span class="coloring">Timeline</span></span></h3>
												</div>
												<div class="list">
													<ul>
														<li>
															<div class="list_inner">
																<div class="time">
																	<span>2018 - running</span>
																</div>
																<div class="place">
																	<h3>Envato Elements</h3>
																	<span>Exclusive Author</span>
																</div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="time">
																	<span>2015 - 2018</span>
																</div>
																<div class="place">
																	<h3>Avo Corporation</h3>
																	<span>Content Manager</span>
																</div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="time">
																	<span>2012 - 2015</span>
																</div>
																<div class="place">
																	<h3>FC Barcelona</h3>
																	<span>Football Player</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div class="partners">
												<div class="about_title">
													<h3><span>My <span class="coloring">Partners</span></span></h3>
												</div>
												<div class="list">
													<ul>
														<li>
															<div class="list_inner">
																<img src="assets/img/partners/1.png" alt="" />
																<a class="cavani_tm_full_link" href="#"></a>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<img src="assets/img/partners/2.png" alt="" />
																<a class="cavani_tm_full_link" href="#"></a>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<img src="assets/img/partners/3.png" alt="" />
																<a class="cavani_tm_full_link" href="#"></a>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<img src="assets/img/partners/4.png" alt="" />
																<a class="cavani_tm_full_link" href="#"></a>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div class="testimonial">
												<div class="about_title">
													<h3><span>Clients <span class="coloring">Feedback</span></span></h3>
												</div>
												<div class="list">
													<ul class="owl-carousel">
														<li>
															<div class="list_inner">
																<div class="text">
																	<i class="icon-quote-left"></i>
																	<p>Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!</p>
																</div>
																<div class="details">
																	<div class="image">
																		<div class="main" data-img-url="assets/img/testimonials/1.jpg"></div>
																	</div>
																	<div class="info">
																		<h3>Alexander Walker</h3>
																		<span>Graphic Designer</span>
																	</div>
																</div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="text">
																	<i class="icon-quote-left"></i>
																	<p>These people really know what they are doing! Great customer support availability and supperb kindness.</p>
																</div>
																<div class="details">
																	<div class="image">
																		<div class="main" data-img-url="assets/img/testimonials/2.jpg"></div>
																	</div>
																	<div class="info">
																		<h3>Armin Van Buuren</h3>
																		<span>Content Manager</span>
																	</div>
																</div>
															</div>
														</li>
														<li>
															<div class="list_inner">
																<div class="text">
																	<i class="icon-quote-left"></i>
																	<p>I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.</p>
																</div>
																<div class="details">
																	<div class="image">
																		<div class="main" data-img-url="assets/img/testimonials/3.jpg"></div>
																	</div>
																	<div class="info">
																		<h3>Baraka Clinton</h3>
																		<span>English Teacher</span>
																	</div>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
							{/* <!-- /About Popup Informations --> */}
							
							
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /ABOUT --> */}

			</div>
			{/* <!-- CONTENT --> */}


			{/* <!-- MAGIC CURSOR --> */}
			<div class="mouse-cursor cursor-outer"></div>
			<div class="mouse-cursor cursor-inner"></div>
			{/* <!-- /MAGIC CURSOR --> */}


			</div>
		{/* <!-- / WRAPPER ALL --> */}
			<Helmet>

				<script src="assets/js/jquery.js"></script>
				<script type="text/javascript" src="assets/js/ie8.js"></script>	
				<script src="assets/js/plugins.js"></script>
				<script src="assets/js/init.js"></script>

			</Helmet>


        	</div>

			
        );
    }
 
 }

 export default Home;
 