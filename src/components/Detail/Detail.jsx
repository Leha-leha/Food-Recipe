import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import detail from './Detail.module.css'
import Image from '../../assets/4da51338c06dd21688b82eae3bc9dfa6.jpg'
import LikedIcon from '../../assets/icons/like.png'
import SavedIcon from '../../assets/icons/saved.png'
import PlayIcon from '../../assets/icons/play.png'
import PhotoUser from '../../assets/photo-comment.png'

class Detail extends Component {
	render () {
		return (
			<Container>
				<div className="text-center">
					<h1 className={ 'mx-auto ' + detail.Title }>Loream Sandwich</h1>
				</div>
				<div className={ 'mx-auto ' + detail.ImageSize } style={{ backgroundImage: `url(${Image})` }} >
					<div className={ detail.ButtonList }>
						<div className={ detail.SavedButton }>
							<img src={ SavedIcon } alt=""/>
						</div>
						<div className={ detail.LikedButton }>
							<img src={ LikedIcon } alt=""/>
						</div>
					</div>
				</div>
				<div className={ 'mx-auto ' + detail.Description }>
					<h2 className={ detail.TextDesc }>Ingredients</h2>
					<div className={ detail.StepList }>
						<span style={{ whiteSpace: 'pre-line' }}>
							- 2 eggs <br/>
							- 2 tbsp mayonnaise <br/>
							- 3 slices bread <br/>
							- a little butter <br/>
							- ⅓ carton of cress <br/>
							- 2-3 slices of tomato or a lettuce leaf <br/>
							and a slice of ham or cheese
							- crisps , to serve <br/>
						</span>
					</div>
					<h2 className={ detail.TextVideo }>Video Step</h2>
					<div className={ detail.VideoList }>
						<div className={ detail.VideoItem }>
							<img src={ PlayIcon } alt="Play" />
						</div>
						<div className={ detail.VideoItem }>
							<img src={ PlayIcon } alt="Play" />
						</div>
						<div className={ detail.VideoItem }>
							<img src={ PlayIcon } alt="Play" />
						</div>
						<div className={ detail.VideoItem }>
							<img src={ PlayIcon } alt="Play" />
						</div>
						<div className={ detail.VideoItem }>
							<img src={ PlayIcon } alt="Play" />
						</div>
					</div>
					<div className={ 'text-center ' + detail.CommentSection }>
						<textarea name="comment" id="" className={ detail.CommentForm } placeholder="Comment"></textarea>
						<button className={ detail.CommentButton }>Send</button>
					</div>
					<div className={ detail.CommentList }>
						<h2 className={ detail.TextComment }>Comment</h2>
						<div className={ 'd-flex ' + detail.CommentItem }>
							<div className={ detail.ImageItem } style={{ backgroundImage: `url(${PhotoUser})` }}></div>
							<div className={ detail.CommentUser }>
								<span className={ detail.CommentUserName }>Ayudia</span>
								<br/>
								<span className={ detail.CommentUserText }>Nice recipe. simple and delicious, thankyou</span>
							</div>
						</div>
						<div className={ 'd-flex ' + detail.CommentItem }>
							<div className={ detail.ImageItem } style={{ backgroundImage: `url(${PhotoUser})` }}></div>
							<div className={ detail.CommentUser }>
								<span className={ detail.CommentUserName }>Ayudia</span>
								<br/>
								<span className={ detail.CommentUserText }> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem est temporibus qui nisi porro natus fuga similique repudiandae, iste, non quisquam ea nostrum laborum repellendus voluptatum eum quasi velit.	</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
		)
	}
}

export default Detail