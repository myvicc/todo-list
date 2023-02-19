import React from "react";
import { useField } from "formik";
import {TextField} from "@mui/material";

export const InputField = ({ name, label= "" }) => {
    const [{value, onChange, onBlur}] = useField(name);

    return <TextField name={name} label={label} onBlur={onBlur} value={value} onChange={onChange}/>;
};