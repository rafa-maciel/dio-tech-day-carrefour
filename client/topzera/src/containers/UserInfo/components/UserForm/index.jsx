import React, { memo } from "react";
import { Grid, TextField, Button } from '../../../../components'
import { UIForm } from "./style";

function UserForm({ onValueChange, onFormSubmit }) {

    const handleInputChange = ({target}) => {
        onValueChange(target.name, target.value)
    }

    const handleFormSubmit = (ev) => {
        ev.preventDefault()
        onFormSubmit()
    }

    return (
        <UIForm onSubmit={handleFormSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <TextField name='email' type='email' label='Email' onChange={handleInputChange} fullWidth/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField name='cep' label='CEP' onChange={handleInputChange} fullWidth/>
                </Grid>
            </Grid>
            <Button type="submit" variant="outlined" size="large" fullWidth>Enviar</Button>
        </UIForm>
    )
}

export default memo(UserForm)