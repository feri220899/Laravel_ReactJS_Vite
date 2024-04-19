import React, { useState } from 'react'
import Auth from '../Layout/Auth'
import { useForm } from 'react-hook-form'
import Input from '../component/Input'
import { router, usePage } from '@inertiajs/react'
import Button from '../component/Button'

function Login() {
    const { props } = usePage();
    const [showMessage, setShowMessage] = useState(!!props.flash.message);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        router.get('/mesinlogin', data)
    }
    return (
        <div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className={`fixed z-50 bottom-2 right-3 w-1/4 transition-transform transform  ${showMessage ? 'translate-x-0' : 'translate-x-full'}`}>
                {showMessage && (
                    <div role="alert" className="alert shadow-lg bg-slate-600">
                        <span className='text-white'> </span>
                        <div className='text-white'>
                            <h3 className="font-bold">{props.flash.message}!</h3>
                            <div className="text-xs"></div>
                        </div>
                        <button className="btn btn-xs top-1" onClick={() => setShowMessage(false)}></button>
                    </div>
                )}
                </div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        register={register("email", { required: "Wajib diisi" })}
                        placeholder='Input email'
                        label='E-mail'
                        type="text"
                        error={errors.email}
                    />
                    <Input
                        register={register("password", { required: "Wajib diisi" })}
                        placeholder='Input password'
                        label='Password'
                        type="password"
                        error={errors.password}
                    />
                    <div>
                        <Button
                            type="submit"
                            option="primary"
                            label="Sign in"
                        >
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
Login.layout = page => <Auth children={page} title="Sign-In" />
export default Login
