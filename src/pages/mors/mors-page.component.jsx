import React from 'react';

import './mors-page.styles.scss'
import Cipher from "../../components/cipher/cipher.component";
import {items} from "../../const/info.data.json";

const cipher = 'mors';
const MorsPage = () => (

    <>
        <h1> MORS </h1>
        {items
            .filter((item) => item.name === cipher)
            .map(({text, instruction}) =>
                <Cipher text={text} instruction={instruction} cipher={cipher}/>
            )}
    </>
);

export default MorsPage;
