import React from 'react';

import Cipher from "../../components/cipher/cipher.component";
import {items} from '../../const/info.data.json'
import sylabicUrl from '../../backend/url.js'

import './sylabic-page.styles.scss'

const cipher = 'sylabic';
const url = sylabicUrl;
const SylabicPage = () => (

    <div>
        <h1> SYLABIC </h1>
        {items
            .filter((item) => item.name === cipher)
            .map(({text, instruction}) =>
                <Cipher url={url} text={text} instruction={instruction}/>
            )}
    </div>
);

export default SylabicPage;
