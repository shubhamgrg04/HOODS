import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fachevronup from '@fortawesome/fontawesome-free-solid/faChevronUp';
import fachevrondown from '@fortawesome/fontawesome-free-solid/faChevronDown';

export default class Home extends React.Component {
    render(){
        return(
            <div>
                <HomeJumbotron />
                <div className="container mt-5">
                    <div className="row">
                        <Channels />
                        <Posts />
                    </div>
                </div>
            </div>
        );
    }
}

function HomeJumbotron(props) {
    return (
    <div className="jumbotron mb-0 mt-5 bg-white">
        <div className="container">
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
                <a href={this.linkFromName(channel)} className="nav-link">{channel}</a>
            </li>
            );
        });
        return (
            <div className="col-md-3 channels" >
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
        var posts = [
            {
                title : "Credit Suisse is offering course in BITS",
                publishDate : "",
                author : "Shubham Garg",
                votes : 204,
                comments : 20,
            }, 
            {
                title : "Meditation Session by Mini Sadhguru",
                publishDate : "",
                author : "Suryansh Tiwari",
                votes : 44,
                comments : 6,
            },
        ];
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
        return (
            <div className="posts col-md-9">
                {postItems}
            </div>
        );
    }
}