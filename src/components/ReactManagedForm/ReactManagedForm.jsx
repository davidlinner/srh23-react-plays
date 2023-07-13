import PropTypes from "prop-types";


function ReactManagedForm({onDataChange}) {

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            dateOfBirth: formData.get('dateOfBirth'),
        }

        if(onDataChange){
            onDataChange(data);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={'firstName'}>Firstname</label>
                <input name={'firstName'}
                       type={'text'}
                       className={"inputText"}/>
            </div>
            <div>
                <label htmlFor={'lastName'}>Last name</label>
                <input name={'lastName'}
                       type={'text'}
                       className={"inputText"}/>
            </div>
            <div>
                <label htmlFor={'dateOfBirth'}>Last name</label>
                <input name={'dateOfBirth'}
                       type={'date'}
                       className={"inputText"}/>
            </div>
            <button type={'submit'}>Save</button>
        </form>
    );
}

ReactManagedForm.propTypes = {
    onDataChange: PropTypes.func
}

export default ReactManagedForm;
