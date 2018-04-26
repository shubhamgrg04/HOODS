import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fachevronup from '@fortawesome/fontawesome-free-solid/faChevronUp';
import fachevrondown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import {connect} from 'react-redux';
import fetchPosts from '../../actions/fetch-posts';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div>
                <HomeJumbotron />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <Channels fetchPosts={this.props.fetchPosts} />
                        <Route path={`/:channel/newpost`} render={ (props) => (
                            <NewPost {...props}  />
                        ) } />
                        <Route exact path={`/:channel`} render={ (props) => {
                            return(
                                <Posts {...props} posts={this.props.posts}  />
                            );
                        } } />
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchPosts('general');
    }
}
 
function HomeJumbotron(props) {
    return (
    <div className="jumbotron mb-0 mt-5 bg-white">
        <div className="container-fluid">
            <p className="display-4" style={{color:"#d2d8ea"}}>Ask and Discuss with fellow BITSians</p>
        </div>
    </div>
    );
}

class Channels extends React.Component {

    linkFromName(channelName) {
        return channelName.toLowerCase().replace(/ /g,'-');
    }

    render() {
        var channels = [
            "General",
            "Internships",
            "Placements",
            "Cab Sharing"
        ];
        var channelItems = channels.map((channel) => {
            return (
            <li className="nav-item">
                <Link to={"/" + this.linkFromName(channel)} onClick={this.props.fetchPosts(channel)} className="nav-link">{channel}</Link>
            </li>
            );
        });
        return (
            <div className="col-lg-2 channels" >
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <h5 className="nav-link">Channels</h5>
                    </li>
                    {channelItems}
                </ul>
            </div>
        );
    }
}

class Posts extends React.Component {
    render() {
        var posts = this.props.posts;
        if(posts!=null) {
            var postItems = posts.map((post) => {
                return (
                    <div className="post d-flex flex-row p-4 m-0">
                        <div className="d-flex flex-column" style={{color:"#7f7f7f"}}>
                            <div className="p-0  post-upvote text-center"><a href="upvote()"><FontAwesomeIcon icon={fachevronup} size="3x"/></a></div>
                            <div className="h5 p-0 post-votes text-center">{post.votes}</div>
                            <div className="p-0 post-downvote text-center"><a href="downvote()"><FontAwesomeIcon icon={fachevrondown} size="3x"/></a></div>
                        </div>
                        <div className="ml-4 p-2">
                            <h4 className="post-heading">{post.title}</h4>
                            <p className="post-details" >posted 3 days ago by <a className="post-author"  href="profiles/454df8">{post.author}</a></p>
                            <a className="post-comments mt-2">{post.comments} Comments</a>
                        </div>
                    </div>
                );
            });
        }
        
        return (
            <div className="posts col-md-5">
                <Link to={"/" + this.props.match.params.channel + "/newpost"} role="button" class="btn float-right add-new mb-3" >New Post</Link>
                <div class="clearfix"></div>
                {postItems}
            </div>
        );
    }
    
}

class NewPost extends  React.Component {
    render() {
        return (
            <div>add new post here</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: (channelName) => dispatch(fetchPosts(channelName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);