import React from 'react'

import './homepage.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Contrast } from '../../assets/img/undraw_contrast_vb82.svg'
import CustomButton from '../../component/custom-button/custom-button.component'

const HomePage = () => (
    <header className="home-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-8 left-section">
                    <h1 className="home-heading animated fadeIn delay-1s">Simply compare text submissions for similarity</h1>
                    <Link to="/signin" className="animated fadeIn delay-2s">
                        <CustomButton>Sign In</CustomButton>
                    </Link>
                </div>
                <div className="col-md-12 col-lg-4 col-sm-12 right-section animated fadeIn delay-2s">
                   <Contrast className="img-fluid"/>
                </div>
            </div>
        </div>
    </header>
)

export default HomePage