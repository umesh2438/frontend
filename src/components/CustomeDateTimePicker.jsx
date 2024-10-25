import * as React from 'react';
import {MobileDateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Container } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



export const CustomeDateTimePicker = ({
    defaultValue,
    name,
    label,
    values,
    touched,
    errors,
    ampmInClock=true,
    loading=true,
    onChange,
    onClose,
    open=false,
}) => {
    return(
<Container>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<MobileDateTimePicker
name={name}
ampmInClock={ampmInClock}
loading={loading}
label={label}
oneChange={onChange}
onClose={onClose}
open={open}
value={values[name]}
helperText={touched[name] && errors[name]}
error={Boolean(touched[name] && errors[name])}
//defaultValue={dayjs('2024-10-18T12:07').format('DD/MM/YYYY')}
/>
</LocalizationProvider>
</Container>
    )
}


