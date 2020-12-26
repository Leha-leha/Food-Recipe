import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import detail from './Detail.module.css'
import { getSingleRecipe } from '../../redux/actionCreators/Recipes'
// import Image from '../../assets/4da51338c06dd21688b82eae3bc9dfa6.jpg'
// import Loading from '../../assets/gifs/spinner.gif'
import LikedIcon from '../../assets/icons/like.png'
import SavedIcon from '../../assets/icons/saved.png'
import PlayIcon from '../../assets/icons/play.png'
import PhotoUser from '../../assets/photo-comment.png'

class Detail extends Component {
	state = {
		recipe: {},
		imgRecipe: '',
		videoRecipe: [],
		idRecipe: 0
	}

	getRecipeById = async () => {
		const { id } = this.props.match.params
		this.setState({
			idRecipe: id
		})
		await this.props.dispatch(getSingleRecipe(id))
		
		const { recipes } = this.props
		if ( recipes.singleRecipe.msg ) {
			this.props.history.push('/recipe')
		} else {
			this.setState({
				recipe: recipes.singleRecipe.data[0]
			})
			const image = JSON.parse(this.state.recipe.img_rcp)[0]
			this.setState({
				imgRecipe: image
			})
			const video = JSON.parse(this.state.recipe.video_rcp)
			this.setState({
				videoRecipe: video
			})
		}
		// console.log(this.state)
	}

	componentDidMount = () => {
		this.getRecipeById()
	}

	render () {
		const { isPending } = this.props.recipes

		return (
			<Container>
				{/* animasi loading */}
				{/* { isPending && <div className={ detail.Loading }>
					<img src={Loading} alt=""/>
				</div> } */}
				{/* comment aja klo ga mau dipake, blom fix juga soalnya */}
				<div className="text-center">
					<h1 className={ 'mx-auto ' + detail.Title }>{ isPending ? 'Loading...' : this.state.recipe.title_rcp }</h1>
				</div>
				<div className={ 'mx-auto ' + detail.ImageSize } style={{ backgroundImage: `url(${ !isPending && this.state.imgRecipe })` }} >
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
							{ !isPending && this.state.recipe.ingridients_rcp }
						</span>
						<br/>
						<span>{ !isPending && this.state.recipe.desc_rcp }</span>
					</div>
					<h2 className={ detail.TextVideo }>Video Step</h2>
					<div className={ detail.VideoList }>
						{ !isPending && this.state.videoRecipe.map((_, index) => {
							index++
							return (
								<Link key={index} to={{ pathname: `/recipe/${this.state.idRecipe}/${index}` }}>
									<div className={ detail.VideoItem }>
										<img src={ PlayIcon } alt="Play" />
									</div>
								</Link>
							)
						}) }
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

const mapsStateToProps = ({ recipes }) => {
	return {
		recipes
	}
}

export default connect(mapsStateToProps)(withRouter(Detail))