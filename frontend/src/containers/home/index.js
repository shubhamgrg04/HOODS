import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fachevronup from '@fortawesome/fontawesome-free-solid/faChevronUp';
import fachevrondown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import {connect} from 'react-redux';
import fetchPosts from '../../actions/fetch-posts';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

class Home extends React.Component {
    render(){
        var channelPosts = this.props.channelPosts;
        return(
            <div>
                <HomeJumbotron />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <Channels />
                        <Route path={`/:channel/newpost`} render={ (props) => (
                            <NewPost {...props}  />
                        ) } />
                        <Route exact path={`/:channel`} render={ (props) => {
                            return(
                                <Posts {...props} channelPosts={channelPosts}  fetchPosts={this.props.fetchPosts} />
                            );
                        } } />
                    </div>
                </div>
            </div>
        );
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
                <Link to={"/" + this.linkFromName(channel)} className="nav-link">{channel}</Link>
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
        console.log("Component rerendered. " + this.props.match.params.channel);
        console.log(this.props.channelPosts);
        var channelPosts = this.props.channelPosts;
        
        if(channelPosts!=null) {
            console.log("Channel posts not matching channel. Reloading channel Posts. " + this.props.match.params.channel);
            if(channelPosts.channel != this.props.match.params.channel) {
                this.props.fetchPosts(this.props.match.params.channel);
            }
            var posts = channelPosts.posts;
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
        } else {
            console.log("Channelposts is null. " + this.props.match.params.channel);
            this.props.fetchPosts('general');
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
        channelPosts: state.channelPosts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: (channelName) => dispatch(fetchPosts(channelName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);