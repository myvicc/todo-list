import React, { useState } from "react";
import {Box, Button, Container, Stack, TableHead} from "@mui/material";
import { TableContainer, Table, TableBody, TableCell, TableRow, Switch } from "@mui/material";
import {Form, Formik} from "formik";
import {InputField} from "./Input";


export const Todo = () => {
    const [todos, setTodos] = useState([{id: 1, title: "Do somthing",  }]);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Box sx={{paddingTop: 3}}>
            <Container>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Number</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>is completed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                todos.map(({id, title}, index) => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{title}</TableCell>
                                            <TableCell><Switch {...label} /></TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Formik initialValues={{title: ""}} onSubmit={(values, formikHelpers) => {
                    setTodos((prevState) => {
                        return [
                            ...prevState,
                            {
                            ...values,
                            id: crypto.randomUUID(),
                        },];
                    });
                    console.log(values);
                    formikHelpers.resetForm();
                }}>
                    <Form>
                        <Stack spacing={2}>
                            <InputField name="title" label="To do"/>
                            <Button variant="contained" type="submit">
                                Create
                            </Button>
                        </Stack>
                    </Form>
                </Formik>
            </Container>
        </Box>
    )
}