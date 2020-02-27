import React, { useState } from 'react'

import './create-record.styles.scss'
import FormInput from '../../component/form-input/form-input.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import useFormValidation from '../../component/use-formvalidation/use-formvalidation.component'
import FORM_VALIDATION_RULES from '../../utils/form-validation-rules'
import { connect } from 'react-redux'
import { setMedicalRecord } from '../../redux/record/record.actions'
import { createMedicalRecord } from '../../services/record.services'
import RadioButton from '../../component/radio-button/radio-button.component'


const {create_record} = FORM_VALIDATION_RULES

const CreateMedicalRecord = ({ setMedicalRecord }) => {
    const [data] = useState({male:"male", female:"female", no:"no", yes: "yes", unknown: "unknown"})
    const initialFormState = { first_name: "", last_name: "", age: "", gender: "", city: "", country: "", diabetes:""};

    const createMedicalRecordFunction = () => {
        createMedicalRecord(setMedicalRecord)
    }
    
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialFormState, create_record, createMedicalRecordFunction);

        return (
            <div className="create-record">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-lg-3"></div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <h4>New Medical Record</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.first_name} handleChange={handleChange} onBlur={handleBlur} label="First name" name="first_name" type="text" required/>
                                        {errors.first_name && <p className="error-text">{errors.first_name}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.last_name} handleChange={handleChange} onBlur={handleBlur} label="Last name" name="last_name" type="text" required/>
                                        {errors.last_name && <p className="error-text">{errors.last_name}</p>}
                                    </div>
                                    <div className="form-inline col-md-6">
                                        <div className="form-check">
                                            <RadioButton value={data.male}  isSelected={ values.gender === data.male } name="gender"  id={data.male} handleChange={handleChange} onBlur={handleBlur} label="Male" required/>
                                            
                                        </div>

                                        <div className="form-check">
                                            <RadioButton value={data.female} isSelected={ values.gender === data.female } name="gender" id={data.female} handleChange={handleChange} onBlur={handleBlur} label="Female" required/>
                                        </div>
                                        {errors.gender && <p className="error-text">{errors.gender}</p>}
                                        
                                    </div>
                                    <div className="form-group col-md-6">
                                        <FormInput value={values.age} handleChange={handleChange} onBlur={handleBlur} label="Age" name="age" type="number" min="0" required/>
                                        {errors.age && <p className="error-text">{errors.age}</p>}
                                    </div>
                                    <div className="form-group col-md-6">
                                    <select className="form-control select" onChange={handleChange} onBlur={handleBlur} name="city" required>
                                        <option defaultValue>City</option>
                                        <option value="lagos">Lagos</option>
                                        <option value="ibadan">Ibadan</option>
                                        <option value="yenagoa">Yenagoa</option>

                                    </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                    <select className="form-control select" onChange={handleChange} onBlur={handleBlur} name="country" required>
                                        <option defaultValue>Country</option>
                                        <option value="nigeria">Nigeria</option>
                                        <option value="cameroon">Cameroon</option>
                                        <option value="chad">Chad</option>

                                    </select>    
                                    </div>

                                    <div className="form-group col-md-6">
                                        <h5 className="pt-4 living">Living with diabetes?</h5>
                                    </div>
                                    <div className="form-inline col-md-6">
                                        <div className="form-check">
                                            <RadioButton value={data.yes}  isSelected={ values.diabetes === data.yes } name="diabetes"  id={data.yes} handleChange={handleChange} onBlur={handleBlur} label="Yes" required/>
                                            
                                        </div>

                                        <div className="form-check">
                                            <RadioButton value={data.no} isSelected={ values.diabetes === data.no } name="diabetes" id={data.no} handleChange={handleChange} onBlur={handleBlur} label="No" required/>
                                        </div>
                                        <div className="form-check">
                                            <RadioButton value={data.unknown}  isSelected={ values.diabetes === data.unknown } name="diabetes"  id={data.unknown} handleChange={handleChange} onBlur={handleBlur} label="Unknown" required/>
                                            
                                        </div>
                                       
                                        {errors.diabetes && <p className="error-text">{errors.diabetes}</p>}
                                        
                                    </div>
                                </div>
                                
                                <div className="button mt-5">
                                    <CustomButton disabled={isSubmitting} type="submit">Save</CustomButton>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 col-sm-12 col-lg-3"></div>
                    </div>
                    
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setMedicalRecord: data => dispatch(setMedicalRecord(data)),
})
export default connect(null, mapDispatchToProps)(CreateMedicalRecord)