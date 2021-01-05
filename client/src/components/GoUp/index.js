import React, {Component} from 'react';
import { Button } from '../button/Button';

export default class GoUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }
    componentDidMount(){
        var goUp = this;
        document.addEventListener("scroll", (e) => {
            goUp.toggleVisibility();
        });
    }
    toggleVisibility(){
        if (window.pageYOffset > 300) {
            this.setState({ is_visible: true });
        } else {
            this.setState({ is_visible: false });
        }
    }
    goUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <Button buttonStyle='btn--goback' buttonSize='btn--medium' onClick={() => this.goUp()}>Back to top</Button>
                )}
            </div>
        );
    }
}