import React from 'react'

import './compare.styles.scss'
import CustomButton from '../../component/custom-button/custom-button.component'
import FormInput from '../../component/form-input/form-input.component'
import FORM_VALIDATION_RULES from '../../utils/form-validation-rules'
import useFormValidation from '../../component/use-formvalidation/use-formvalidation.component'
import { compareSubmissions } from '../../redux/compare/compare.actions'
import { compareSubmissionsResult } from '../../services/compare.services'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const {compare} = FORM_VALIDATION_RULES

const ComparePage = ({ compareSubmissions, history }) => {

    const initialFormState = { first_student_name: "", second_student_name: "", first_student_file: "", second_student_file: ""};

    const compareFunction = () => {
        compareSubmissionsResult(compareSubmissions, history)
    }
    
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialFormState, compare, compareFunction);


    return(
        <header className="compare-page">
            <div className="container">
                <form className="row" onSubmit={handleSubmit}>
                    
                    <div className="col-md-1"></div>
                    <div className="col-md-5 form">
                            <h1 className="compare-heading">First Student </h1>
                            <FormInput handleChange={handleChange}  label="First Student Name" name="first_student_name" type="text" value={values.first_student_name} required/>
                            {errors.first_student_name && <p className="error-text">{errors.first_student_name}</p>}
                           
                            <FormInput handleChange={handleChange}  label="First Student File" name="first_student_file" type="file" value={values.first_student_file} required/>
                            {errors.first_student_file && <p className="error-text">{errors.first_student_file}</p>}

                    </div>
                    <div className="col-md-5 form">
                            <h1 className="compare-heading">Second Student </h1>

                            <FormInput handleChange={handleChange}  label="Second Student Name" name="second_student_name" type="text" value={values.second_student_name} required/>
                            {errors.second_student_name && <p className="error-text">{errors.second_student_name}</p>}

                            <FormInput handleChange={handleChange}  label="Second Student File" name="second_student_file" type="file" value={values.second_student_file} required/>
                            {errors.second_student_file && <p className="error-text">{errors.second_student_file}</p>}

                    </div>
                    <div className="col-md-1"></div>
                    
                    <div className="col-md-12 text-center mt-5">
                        <CustomButton disabled={isSubmitting}>Compare</CustomButton>
                    </div>
                </form>
            </div>
        </header>
    )
}


const mapDispatchToProps = dispatch => ({
    compareSubmissions: data => dispatch(compareSubmissions(data)),
})
export default withRouter(connect(null, mapDispatchToProps)(ComparePage))