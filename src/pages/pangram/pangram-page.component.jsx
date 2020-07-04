import React from 'react';

import Cipher from "../../components/cipher/cipher.component";

import pangramUrl from '../../backend/url.js';
import './pangram-page.styles.scss'
import {items} from "../../const/info.data.json";

const cipher = 'pangram';
const PangramPage = () => (

    <div className="page-body">
        <h1> PANGRAM </h1>
        <div>
            {items
                .filter((item) => item.name === cipher)
                .map(({text, instruction}) =>
                    <Cipher url={pangramUrl} text={text} instruction={instruction} cipher={cipher} />
                )}
        </div>
    </div>
)

export default PangramPage;
