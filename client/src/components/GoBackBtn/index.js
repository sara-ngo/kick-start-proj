import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';

const GoBackBtn = () => {
    return (
        <Link to="/">
            <Button buttonStyle='btn--goback' buttonSize='btn-medium'>
                Go Back
            </Button>
        </Link>
    )
}
export default GoBackBtn;