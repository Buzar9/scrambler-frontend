import React from 'react';

import './mors-page.styles.scss'
import MorsCipher from "../../components/mors-cipher/mors-cipher.component";
import {items} from "../../assets/info.data.json";


class MorsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cipher: 'mors'
        };
    }

    render() {
        const { cipher } = this.state;
        return (
            <div>
                <h1> MORS </h1>
                {items
                    .filter((item) => item.name === cipher)
                    .map(({ text, instruction }) =>
                        <MorsCipher text={text} instruction={instruction} />
                    )}
            </div>
        );
    }
}

export default MorsPage;
