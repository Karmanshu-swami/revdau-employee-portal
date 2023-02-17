import React, { useEffect } from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Redirect, Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import FeatherIcons from 'feather-icons-react';

// actions
import { resetAuth, loginUser } from '../../redux/actions';

// store
import { RootState, AppDispatch } from '../../redux/store';

// components
import { VerticalForm, FormInput } from '../../components/';

import AuthLayout from './AuthLayout';

// images
import logoDark from '../../assets/images/logo-light.png';
import logoLight from '../../assets/images/logo-light.png';

interface LocationState {
    from?: Location;
}

interface UserData {
    email: string;
    password: string;
}

/* bottom links */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    {t("Don't have an account?")}{' '}
                    <Link to={'/auth/register'} className="text-primary fw-bold ms-1">
                        {t('Sign Up')}
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Login = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { user, userLoggedIn, loading, error } = useSelector((state: RootState) => ({
        user: state.Auth.user,
        loading: state.Auth.loading,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Please enter Email')),
            password: yup.string().required(t('Please enter Password')),
            checkbox: yup.bool().oneOf([true]),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData: UserData) => {
        dispatch(loginUser(formData['email'], formData['password']));
    };

    const location = useLocation<LocationState>();
    const redirectUrl = location.state && location.state.from ? location.state.from.pathname : '/';

    return (
        <>
            {userLoggedIn || user ? <Redirect to={redirectUrl}></Redirect> : null}

            <AuthLayout bottomLinks={<BottomLink />}>
                <div className="auth-logo mx-auto">
                    <Link to="/" className="logo logo-dark text-center">
                        <span className="logo-lg">
                            <img src={logoDark} alt="" height="40" />
                        </span>
                    </Link>

                    <Link to="/" className="logo logo-light text-center">
                        <span className="logo-lg">
                            <img src={logoLight} alt="" height="24" />
                        </span>
                    </Link>
                </div>

               
                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ email: 'test@revdau.com', password: 'test123' }}
                    formClass="authentication-form">
                    <FormInput
                        type="email"
                        name="email"
                        label={t('Email Address')}
                        startIcon={<FeatherIcons icon={'mail'} className="icon-dual" />}
                        placeholder={t('Enter your Email Address')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label={t('Password')}
                        startIcon={<FeatherIcons icon={'lock'} className="icon-dual" />}
                        action={
                            <Link to="/auth/forget-password" className="float-end text-muted text-unline-dashed ms-1">
                                {t('Forgot your password?')}
                            </Link>
                        }
                        placeholder={t('Enter your Password')}
                        containerClass={'mb-3'}></FormInput>

                    <FormInput
                        type="checkbox"
                        name="checkbox"
                        label={t('Remember me')}
                        containerClass={'mb-3'}
                        defaultChecked
                    />

                    <div className="mb-3 text-center d-grid">
                        <Button type="submit" disabled={loading}>
                            {t('Log In')}
                        </Button>
                    </div>
                </VerticalForm>

               
                
            </AuthLayout>
        </>
    );
};

export default Login;
