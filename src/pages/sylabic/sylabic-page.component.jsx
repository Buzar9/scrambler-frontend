import React from 'react';

import Cipher from "../../components/cipher/cipher.component";
import {items} from '../../const/info.data.json'
import {SYLABIC_URL} from '../../const/endpoints.backend.js'

import './sylabic-page.styles.scss'

const cipher = 'sylabic';
const SylabicPage = () => (

    <div>
        <h1> SYLABIC </h1>
        {items
            .filter((item) => item.name === cipher)
            .map(({text, instruction}) =>
                <Cipher url={SYLABIC_URL} text={text} instruction={instruction}/>
            )}
    </div>
);

export default SylabicPage;
