import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../redux/actions/index';
import { useTranslation } from 'react-i18next';

const Welcome = (props) => {

    const {value, signOut} = props;
    
    const { t } = useTranslation();

    return (
        <div className='welcome'>
            <nav>
                <button onClick={signOut}>{t("Sign Out")}</button>
            </nav>
            <h3>{t("Welcome!")}</h3>
            <h3>{t("you have")} <span style={{color: 'red'}}>{value}</span> {t("successfully")}</h3>
        </div>
    )
}


export default connect(null, { signOut })(Welcome);