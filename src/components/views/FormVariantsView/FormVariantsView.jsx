import View from "../View/View.jsx";
import {useState} from "react";
import Collapsible from "../../Collapsible/Collapsible.jsx";
import SelfManagedForm from "../../SelfManagedForm/SelfManagedForm.jsx";
import ReactManagedForm from "../../ReactManagedForm/ReactManagedForm.jsx";
import FormikForm from "../../FormikForm/FormikForm.jsx";


function FormVariantsView() {

    const [simpleFormData, setSimpleFormData] = useState({});
    const [reactManagedFormData, setReactManagedFormData] = useState({});
    const [formikFormData, setFormikFormData] = useState({});

    return (
        <View>
            <h1>Variants of forms</h1>
            <Collapsible title={'Simple form fields outside of a form'}>
                <p>In this type of form we process the data whenever there is a change to one of the fields.</p>
                <SelfManagedForm onDataChange={setSimpleFormData}/>

                <div><em>Firstname:</em> {simpleFormData?.firstName}</div>
                <div><em>Lastname:</em> {simpleFormData?.lastName}</div>
                <div><em>Date of birth:</em> {simpleFormData?.dateOfBirth}</div>
            </Collapsible>

            <Collapsible title={'Form managed by react'}>
                <p>In this type of form we process the data on form submit.</p>
                <ReactManagedForm onDataChange={setReactManagedFormData}/>

                <div><em>Firstname:</em> {reactManagedFormData?.firstName}</div>
                <div><em>Lastname:</em> {reactManagedFormData?.lastName}</div>
                <div><em>Date of birth:</em> {reactManagedFormData?.dateOfBirth}</div>
            </Collapsible>

            <Collapsible title={'Form managed by Formik'}>
                <p>Formik forms are also designed around the submit event but help you with form state management, e.g. by keeping track of visited fields and validating field values.</p>
                <FormikForm onDataChange={setFormikFormData}/>
                <div><em>Firstname:</em> {formikFormData?.firstName}</div>
                <div><em>Lastname:</em> {formikFormData?.lastName}</div>
                <div><em>Date of birth:</em> {formikFormData?.dateOfBirth}</div>
            </Collapsible>
        </View>
    );
}

export default FormVariantsView;
