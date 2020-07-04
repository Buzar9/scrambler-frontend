import React from 'react';

import Cipher from "../../components/cipher/cipher.component";

import {PANGRAM_URL} from '../../const/endpoints.backend.js';
import './pangram-page.styles.scss'
import {items} from "../../const/info.data.json";

const cipher = 'pangram';
const PangramPage = () => (

    <div class="all">
        <div className="page">
            <h1> PANGRAM </h1>
            <>
                {items
                    .filter((item) => item.name === cipher)
                    .map(({text, instruction}) =>
                        <Cipher url={PANGRAM_URL} text={text} instruction={instruction} cipher={cipher}/>
                    )}
            </>
        </div>
    </div>
)

export default PangramPage;
