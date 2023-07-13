import {useState} from "react";
import PropTypes from "prop-types";


function SelfManagedForm({onDataChange}) {

    const [patient, setPatient] = useState({})

    const handleChange = field => event => {
        const value = event.target.value;
        const mutatedPatient = {...patient, [field]: value};
        setPatient(mutatedPatient)
        if(onDataChange){
            onDataChange(mutatedPatient)
        }
    }

    const {
        firstName = '',
        lastName = '',
        dateOfBirth
    } = patient;

    return (
        <>
            <div>
                <label htmlFor={'firstName'}>Firstname</label>
                <input name={'firstName'}
                       value={firstName}
                       onChange={handleChange('firstName')}
                       type={'text'}
                       className={"inputText"}/>
            </div>
            <div>
                <label htmlFor={'lastName'}>Last name</label>
                <input name={'lastName'}
                       value={lastName}
                       onChange={handleChange('lastName')}
                       type={'text'}
                       className={"inputText"}/>
            </div>
            <div>
                <label htmlFor={'dateOfBirth'}>Last name</label>
                <input name={'dateOfBirth'}
                       value={dateOfBirth}
                       onChange={handleChange('dateOfBirth')}
                       type={'date'}
                       className={"inputText"}/>
            </div>
        </>
    );
}

SelfManagedForm.propTypes = {
    onDataChange: PropTypes.func
}

export default SelfManagedForm;
