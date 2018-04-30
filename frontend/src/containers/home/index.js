import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fachevronup from '@fortawesome/fontawesome-free-solid/faChevronUp';
import fachevrondown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import {connect} from 'react-redux';
import fetchPosts from '../../actions/fetch-posts';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import homeImage from './img.svg';

class Home extends React.Component {
    render(){
        var channelPosts = this.props.channelPosts;
        var classifieds = [
            {
                title: "Software Engineering Intership @ Microsoft",
                description: "Microsoft is looking for interns for summer of 2018 for software development roles"
            },
            {
                title: "Research Opportunities @ TA Deutcheland",
                description: "TA Deutcheland is accepting applications for its annual intake of student researchers who will work for 3 months in the summer."
            },
            {
                title: "Anita Borg Women Hackathon",
                description: "Anita Borg Hackathon is organized annualy to promote women in technology"
            }
        ];

        
        return(
            <div>
                <HomeJumbotron />
                <div className="container mt-5">
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
                        <Classifieds classifieds={classifieds} />
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
                <div className="d-flex flex-row">
                    <div className="col-md-6 m-2" >
                        <p className="heading">College Communities</p>
                        <p className="sub-heading">
                            Interact with fellow students and do amazing things. Hoods is a platform to connect college students to discuss ideas, 
                            exchange things, make plans and connect with like minded people. There exist reddit, tumble etc. but they are not closed
                            communites which doesn't allow to effectively discuss local issues.
                        </p>
                        <a href="/signup" className="btn btn-primary btn-custom pl-4 pr-4 pt-2 pb-2 mt-2">SIGN UP</a>
                    </div>
                    <div className="col-md-6 m-2" >
                        <img className="float-right my-auto" style={{width: "300px"}} src={homeImage} />
                    </div>
                </div>
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
                        <div className="d-flex flex-column my-auto">
                            <div className="justify-content-center align-self-center">
                                <div className="p-0  post-upvote text-center"><a href="upvote()"><FontAwesomeIcon icon={fachevronup} size="3x"/></a></div>
                                <div className="h5 p-0 post-votes text-center">{post.votes}</div>
                                <div className="p-0 post-downvote text-center"><a href="downvote()"><FontAwesomeIcon icon={fachevrondown} size="3x"/></a></div>
                            </div>
                        </div>
                        <div className="ml-4 p-2 my-auto">
                            <p className="post-details" ><a className="post-author"  href="profiles/454df8">{post.author}</a></p>
                            <h4 className="post-heading">{post.title}</h4>
                            <p className="post-details" >{post.description}</p>
                            <p className="post-actions">
                                <a><span className="color-primary">{post.comments} ANSWERS</span></a>
                                <a className="ml-2">SHARE</a>
                                <span className="time-ago ml-2">7 HOURS AGO</span>
                            </p>
                        </div>
                    </div>
                );
            });
        } else {
            console.log("Channelposts is null. " + this.props.match.params.channel);
            this.props.fetchPosts('general');
        }
        
        return (
            <div className="posts col-md-7">
                <Link to={"/" + this.props.match.params.channel + "/newpost"} role="button" class="btn btn-primary btn-custom float-right mb-3" >New Post</Link>
                <div class="clearfix"></div>
                {postItems}
            </div>
        );
    }
    
}

class Classifieds extends React.Component {
    render() {
        var classifieds = this.props.classifieds;
        
        if(classifieds!=null) {
            var classifiedItems = classifieds.map((classified) => {
                return (
                    <div class="post d-flex flex-column p-2 m-0">
                        <div class="ml-2 p-2 my-auto">
                            <h4 class="classified-heading">{classified.title}</h4>
                            <p class="post-actions">
                                <a class="">SHARE</a>
                                <span class="time-ago ml-2">7 HOURS AGO</span>
                            </p>
                        </div>
                    </div>
                );
            });
        } else {
            console.log("No classifieds present.");
        }
        
        return (
            <div className="classifieds col-md-3">
                {classifiedItems}
            </div>
        );
    }
    
}

class NewPost extends  React.Component {

    submit = (values) => {
        fetch(
            "http://localhost:8080/" + this.props.match.params.channel + "/newpost",
            {   
                method : 'post',
                mode : 'no-cors',
                body : JSON.stringify(values)
            }            
        )
    };

    render() {
        let NewPostForm = (props) => {
            console.log(props);
            const {handleSubmit} = props;
            return (
                <form class="col-md-7" onSubmit={handleSubmit}>
                    <div>
                        <Field name="title" component="textarea" type="text" />
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            );
        };
        NewPostForm = reduxForm({form : 'newpost'})(NewPostForm);
        return <NewPostForm onSubmit={this.submit} /> ;
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