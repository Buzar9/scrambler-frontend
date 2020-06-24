import React from 'react';

import CustomCipher from "../../components/custom-cipher/custom-cipher.component";

import {items} from '../../assets/info.data.json'

import './sylabic-page.styles.scss'

class SylabicPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'http://localhost:8080/sylabic',
            cipher: 'sylabic'
        };
    }

    render() {
        const { url, cipher } = this.state;
        return (
            <div>
                <h1> SYLABIC </h1>
                {items
                    .filter((item) => item.name === cipher)
                    .map(({ text, instruction }) =>
                        <CustomCipher url={url} text={text} instruction={instruction}/>
                    )}
            </div>
        )
    }
}

export default SylabicPage;
