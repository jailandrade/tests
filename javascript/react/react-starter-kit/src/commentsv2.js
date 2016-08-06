var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		})
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval)
	},
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		)
	}
})

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			)
		})
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		)
	}
});

var CommentForm = React.createClass({
	getInitialState: function() {
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},
	render: function(){
		return (
			<form className="commentForm">
				<input type="text" placeholder="Your name" />
				<input type="text" placeholder="Say something..." />
				<input type="submit" value="Post" />
			</form>
		)
	}
})

var Comment = React.createClass({
	render: function(){

		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<p>{this.props.children}</p>
			</div>
		)
	}
})

ReactDOM.render(
	<CommentBox url="http://localhost:3333/data/comments" pollInterval={5000}/>,
	document.getElementById('content')
)
