import React, { Component } from 'react';
import FormRap from './FormRap';
import FormFilm from './FormFilm';
import FormNgay from './FormNgay';
import FormSuat from './FormSuat';

class FormSearchRap extends Component {
    render() {
        return (
            <div>
                <FormRap />
                <FormFilm />
                <FormNgay />
                <FormSuat />
            </div>
        );
    }
}

export default FormSearchRap;