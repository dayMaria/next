import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	TextField,
	Checkbox,
	Stack,
	FormControlLabel,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import AddContext from "../context/AddContext";

export default function AddSelectContextTable() {
	const [submitted, setSubmitted] = useState(false);
	const [open, setOpen] = useState(false);
	const [checkboxValues, setCheckboxValues] = useState({
		hello: false,
		prueba: false,
		operaciones: false,
		analisis: false,
	});
	const [searchTerm, setSearchTerm] = useState("");

	const toggle = () => {
		if (submitted) {
			setSubmitted(false);
		}
		setOpen(!open);
	};

	const handleSubmit = () => {
		// Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario.
		setSubmitted(true);
		setOpen(false);
		setCheckboxValues({
			hello: false,
			prueba: false,
			operaciones: false,
			analisis: false,
		});
	};

	const handleClose = () => {
		if (submitted) {
			setSubmitted(false);
		}
		setOpen(false);
		setCheckboxValues({
			hello: false,
			prueba: false,
			operaciones: false,
			analisis: false,
		});
		setSearchTerm("");
	};

	const handleCheckboxChange = event => {
		const { name, checked } = event.target;
		setCheckboxValues(prevValues => ({
			...prevValues,
			[name]: checked,
		}));
	};

	const handleSearchChange = event => {
		setSearchTerm(event.target.value);
	};

	const filteredCheckboxes = Object.keys(checkboxValues).filter(key =>
		key.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<Button startIcon={<Add />} variant="contained" onClick={toggle}>
				Añadir
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<Stack direction="row" spacing={2} style={{ marginTop: 10 }}>
						<TextField
							placeholder="Search"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
						<AddContext />
					</Stack>
					<Stack
						direction="column"
						alignItems="flex-start"
						style={{
							marginTop: 10,
							border: "1px solid",
							borderColor: "#B5B9B9",
							outline: 0,
							color: "black",
							borderRadius: "4px",
							maxHeight: "320px",
							overflowY: "scroll",
						}}
					>
						{filteredCheckboxes.map(key => (
							<FormControlLabel
								key={key}
								label={key}
								control={
									<Checkbox
										name={key}
										checked={checkboxValues[key]}
										onChange={handleCheckboxChange}
									/>
								}
							/>
						))}
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleSubmit} variant="contained">
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
