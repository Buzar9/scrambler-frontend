import React from 'react';

import './mors-page.styles.scss'
import Cipher from "../../components/cipher/cipher.component";

import {MORS_URL} from "../../const/endpoints.backend";

import {items} from "../../const/info.data.json";

const cipher = 'mors';
const MorsPage = () => (

    <div className='all'>
        <div className='page'>
            <h1> MORS </h1>
            {items
                .filter((item) => item.name === cipher)
                .map(({text, instruction}) =>
                    <Cipher url={MORS_URL} text={text} instruction={instruction} cipher={cipher}/>
                )}
        </div>
    </div>
);

export default MorsPage;
