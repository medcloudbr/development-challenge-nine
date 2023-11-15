import { useEffect } from "react";
import { usePatient } from "../hooks";
import { Button, FormControl, TextField, FormLabel } from "@mui/material";

export default function Form() {
    const {
        patients,
        getById,
    } = usePatient();

    useEffect(() => {
        getById(1);
    }, []);

    return (
        <form >
            <FormControl>
                <FormLabel>Nome Completo</FormLabel>
                <TextField></TextField>
                <Button
                    onClick={() => console.log(patients)}
                >Submit</Button>
            </FormControl>
        </form>
    );
}
