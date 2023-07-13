import PropTypes from "prop-types";
import {ErrorMessage, Field, Form, Formik} from "formik";


function FormikForm({onDataChange}) {

    return (
        <Formik
            initialValues={{firstName: '', lastName: '', dateOfBirth: ''}}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'Firstname is required';
                }
                if (!values.lastName) {
                    errors.lastName = 'Lastname is required';
                }
                if (!values.dateOfBirth) {
                    errors.lastName = 'Date of birth is required';
                }
                return errors;
            }}
            onSubmit={(values) => {
                if (onDataChange) {
                    onDataChange(values);
                }
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <span>First name</span>
                        <Field type="text" name="firstName"/>
                        <ErrorMessage name="firstName" component="div"/>
                    </div>
                    <div>
                        <span>Last name</span>
                        <Field type="text" name="lastName"/>
                        <ErrorMessage name="lastName" component="div"/>
                    </div>
                    <div>
                        <span>Date of Birth</span>
                        <Field type="date" name="dateOfBirth"/>
                        <ErrorMessage name="dateOfBirth" component="div"/>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

FormikForm.propTypes = {
    onDataChange: PropTypes.func
}

export default FormikForm;
