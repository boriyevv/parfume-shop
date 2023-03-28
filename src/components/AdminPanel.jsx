import { Button, FormHelperText, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import React from 'react'


import FormControl from '@mui/material/FormControl';

const AdminPanel = () => {
    return (
        <div className='my-10 '>

            <div className="inp-wrapper pr-80 p-10">
                <FormControl fullWidth={true} variant="standard">
                    <InputLabel htmlFor="my-input" focused="true" variant='outlined'>Product Title</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" focused="true" placeholder='Product name' />
                    <FormHelperText id="my-helper-text">Enter your product title.</FormHelperText>
                </FormControl>
            </div>
            <div className="inp-wrapper pr-80 p-10">
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="my-input" focused="true" variant='outlined'>Product Body</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" focused="true" placeholder='Product body' />
                    <FormHelperText id="my-helper-text">Enter your product info.</FormHelperText>
                </FormControl>
            </div>
            <div className="inp-wrapper pr-80 p-10">
                <FormControl fullWidth={true}>
                    <InputLabel htmlFor="my-input" focused="true" variant='outlined'>Product Price</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" focused="true" placeholder='Product price ' />
                    <FormHelperText id="my-helper-text">Enter your product price.</FormHelperText>
                </FormControl>
            </div>
            <div className="flex gap-16 pl-40">
                <Button variant='outlined' color='error' size='large'>Clear All</Button>
                <Button variant='outlined' color='success' >Add Product</Button>
            </div>
        </div>
    )
}

export default AdminPanel


