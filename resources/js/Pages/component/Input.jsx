import React from 'react'

function Input({ register, placeholder, label , error, type}) {
    return (
        <div>
            <div>
                <label htmlFor="email" className="block font-medium leading-6 text-gray-900">
                    {label} {error &&
                        <span className="label-text-alt text-red-600">({error.message})</span>
                    }
                </label>
                <div className="mt-2">
                    <input
                        {...register}
                        placeholder={placeholder}
                        type={type}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>
    )
}

export default Input
