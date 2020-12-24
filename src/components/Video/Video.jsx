import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ExampleVideo from '../../assets/example.mp4'
import NextVideo from '../../assets/step-video.jpg'
import video from './Video.module.css'

class Video extends Component {
	render () {
		return (
			<> 
				<div className={ video.LeftBar }></div>
				<Container>
					<Row className={ "mt-4" }>
						<Col xs={12} sm={12} md={12} lg={8} xl={8} className={ "mb-3"}>
							<video className={ video.VideoSize } src={ ExampleVideo } controls></video>
							<span className={ video.VideoTitle }>Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it</span>
							<br/>
							<span className={ video.VideoDate }>3 month ago</span>
						</Col>
						<Col xs={12} sm={12} md={12} lg={4} xl={4}>
							<h4>Next</h4>
							<div className={ video.NextVideoCard }>
								<div className={ video.VideoImageCard } style={{ backgroundImage: `url(${NextVideo})` }}>
									<span className={ video.VideoNextText }>[Step 2]</span>
								</div>
								<span className={ video.VideoCardTitle }>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</span>
								<br/>
								<span className={ video.VideoCardDate }>HanaLohana - 3 month ago</span>
							</div>

							<div className={ video.NextVideoCard }>
								<div className={ video.VideoImageCard } style={{ backgroundImage: `url(${NextVideo})` }}>
									<span className={ video.VideoNextText }>[Step 2]</span>
								</div>
								<span className={ video.VideoCardTitle }>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</span>
								<br/>
								<span className={ video.VideoCardDate }>HanaLohana - 3 month ago</span>
							</div>

							<div className={ video.NextVideoCard }>
								<div className={ video.VideoImageCard } style={{ backgroundImage: `url(${NextVideo})` }}>
									<span className={ video.VideoNextText }>[Step 2]</span>
								</div>
								<span className={ video.VideoCardTitle }>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</span>
								<br/>
								<span className={ video.VideoCardDate }>HanaLohana - 3 month ago</span>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default Video