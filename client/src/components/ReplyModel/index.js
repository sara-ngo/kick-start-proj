import React, { Component } from 'react';
import API from "./../API";

class ReplyModel extends Component {
  state={
    comment_id: 0,
    value: "",
    reply:[]
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  handleReply = (commentId, commentText) => {
    const newReply = {
      reply: commentText,
      comment_id: commentId
    };
    API.createReply(newReply).then(res => {
      this.setState({ reply: res.data, value: "" })
      this.props.renderParent();
    });
  };

  componentDidMount = () => {
    this.setState({comment_id: this.props.comment_id})
  };

  render() {
    return (
      <>
      <textarea placeholder="Write a reply here" className="form-control" onChange={this.handleInputChange} value={this.state.value}/>
        <button className="btn float-right" style={{ backgroundColor: "rgb(143,147,202)"}}
        onClick={() => this.handleReply(this.state.comment_id, this.state.value)} >
          Reply
        </button>
      </>
    );
  }
};

export default ReplyModel;