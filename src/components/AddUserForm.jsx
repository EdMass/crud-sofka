import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                {
                    ...register
                            ("name", {
                                required: true,                                
                                maxLength: 30
                              })
                }
            />
            {
                errors.name && errors.name.type === "required"
                && <span>This is required</span>    
            }

            <label>Username</label>
            <input 
                type="text" 
                name="username"
                {
                     ...register
                            ("username", {
                                required: true,                                
                                maxLength: 30
                              })
                }
            />
            {
                errors.username && errors.username.type === "required"
                && <span>This is required</span>    
            }
            <ul></ul>
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUserForm;