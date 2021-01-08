import React, {Component} from "react";
import ListComments from "./../../components/ListComments";
import API from "./../../components/API";
import GoBackBtn from "./../../components/GoBackBtn";
import {Button} from "./../../components/button/Button";
import {animateScroll} from 'react-scroll';
import './discussion.css';

class Comments extends Component {
    state = {
        input: "",
        reply: [],
        comments: []
    };
    async componentDidMount(){
        this.getComments();
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.input === "") {
            console.log("work")
            alert("Your comment can't be empty.");
        } else {
            API.createComment({ comments:this.state.input }).then((res) => {
                this.setState({ comments: res.data, input: "" });
            });
            alert("Your comment successfully posted!");
            animateScroll.scrollToBottom();
        }
    };
    handleReply = (commentId, commentText) => {
        const newReply = {
            reply: commentText,
            comment_id: commentId
        };
        API.createReply(newReply).then(res => {
            this.setState({ reply: res.data })
        });
    };
    getComments = () => {
        try {
            API.getComment().then((response) => {
                this.setState({ comments: response.data });
            });
            API.getReply().then((res) => {
                this.setState({ reply: res.data });
            })
        } catch (e) {
            console.log(e);
        }
    }
    reRenderParent = () => {
        this.getComments();
    }
    render() {
        return (
            <div className="text-white">
                <textarea
                placeholder="Share your political view ..."
                className="form-control"
                onChange={this.handleInputChange}
                value={this.state.input}
                name="input" />
                <Button onClick={this.handleSubmit} buttonStyle='btn--form' buttonSize='btn--medium'className="btn" >
                    Send
                </Button>
                <GoBackBtn />
                <ListComments
                renderParent={this.reRenderParent}
                reply={this.state.reply}
                handleInputChange={this.handleInputChange}
                items={this.state.comments}
                handleReply={this.handleReply} />
            </div>
        );
    }
}
export default Comments;