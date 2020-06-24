import React from 'react';

import CustomCipher from "../../components/custom-cipher/custom-cipher.component";

import './pangram-page.styles.scss'
import {items} from "../../assets/info.data.json";


class PangramPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'http://localhost:8080/pangram',
            cipher: 'pangram'
        };
    }

    render() {
        const { url, cipher } = this.state;
        return (
            <div>
                <h1> PANGRAM </h1>
                {items
                    .filter((item) => item.name === cipher)
                    .map(({text}) =>
                        <CustomCipher url={url} text={text}/>
                    )}
            </div>
        )
    }
}

export default PangramPage;
