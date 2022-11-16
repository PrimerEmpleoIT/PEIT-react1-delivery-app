import React from 'react';
import { useState } from 'react';
import styles from './addressForm.module.css';

const AddressForm = ({handleInfoSubmit}) => {
    const [addressText, setAddressText] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [apartmentText, setApartmentText] = useState('');
    const [extraInfoText, setExtraInfotext] = useState('');
    const [isValidInput, setIsValidInput] = useState({"street": true, "addressNumber": true, "apartmentText": true, "extraInfo": true});

    /* Input validations */
    const validateOnlyLetters = input => {
        return input !== '' && (/^[(A-Za-zÀ-ÖØ-öø-ÿ)|.|']*$/.test(input));
    };
    /* **************** */

    const infoSubmit = e => {
        e.preventDefault();
        const addressTrimmed = addressText.trim();
        let isValidStreet = validateOnlyLetters(addressTrimmed);
        setIsValidInput({street: isValidStreet});
        isValidStreet && handleInfoSubmit(addressTrimmed, addressNumber, apartmentText, extraInfoText);
    };

    return (
        <form className={ styles.addressForm } onSubmit={infoSubmit}>
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressInput">Street</label>
                <input className={ `${ styles.addressFormInput } ${ isValidInput.street ? "" : styles.invalidInput }` }
                       type="text" 
                       required
                       placeholder="Example St." 
                       id="addressInput"
                       name="address"
                       autoComplete="off"
                       spellCheck="false" 
                       value={addressText} 
                       maxLength="25"
                       onChange={e => setAddressText(e.target.value)} />
            </div>
            <div className={ styles.inputWrapper } >
                <label htmlFor="addressNumberInput">Address Number</label>
                <input type="number" 
                       required
                       placeholder="1234" 
                       id="addressNumberInput"
                       name="addressNumber"
                       autoComplete="off"
                       min="1"
                       max="9999"
                       value={addressNumber} 
                       onChange={e => setAddressNumber(e.target.value)} />
            </div>
            <div className={ styles.inputWrapper } >
                <label htmlFor="apartmentInput">Floor/Apartment</label>
                <input type="text" 
                       placeholder="1st floor, ap. A" 
                       id="apartmentInput"
                       name="aparment" 
                       autoComplete="off"
                       spellCheck="false"
                       maxLength="25"
                       value={apartmentText}
                       onChange={e => setApartmentText(e.target.value)} />
            </div>
            <div className={ styles.inputWrapper }>
                <label htmlFor="extraInfoInput">Extra information</label>
                <textarea className={styles.addressTextArea}
                       placeholder="Ex: Flat on a corner"
                       id="extraInfoInput"
                       name="extraInfo" 
                       autoComplete="off"
                       spellCheck="false"
                       maxLength="255"
                       value={extraInfoText} 
                       onChange={e=> setExtraInfotext(e.target.value)} />
                
            </div>
            <button className={styles.formSubmit}
                    type="submit"
                    onClick={e => e.preventDefault}>Save</button>
        </form>
    );
};

export { AddressForm };