import React, {Component} from "react";
import ListComments from "./../../components/ListComments";
import API from "./../../components/API";
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
        API.createComment({ comments:this.state.input }).then((res) => {
            this.setState({ comments: res.data, input: "" });
        });
        alert("Comment successfully posted!");
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
            <div className="container text-white">
                <h1>Dicussion Forum</h1>
                <textarea
                placeholder="Share your political view ..."
                className="form-control"
                onChange={this.handleInputChange}
                value={this.state.input}
                name="input" />
                <button onClick={this.handleSubmit} className="btn btn-info" style={{ backgroundColor: "rgb(60, 60, 108)", color: "white" }}>
                    Send
                </button>
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