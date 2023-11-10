import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	TextField,
	Checkbox,
	Stack,
	FormControlLabel,
	IconButton,
	CircularProgress,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import AddContext from "../context/AddContext";
import useContexts from "../context/useContexts";

export default function AddSelectContextTable({ contexts, onToggle }) {
	const [open, setOpen] = useState(false);
	const [items, loading] = useContexts();
	const [searchTerm, setSearchTerm] = useState("");

	const toggle = () => {
		setOpen(!open);
	};

	const handleSubmit = () => {
		setOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
		setSearchTerm("");
	};

	const handleSearchChange = event => {
		setSearchTerm(event.target.value);
	};

	const filteredCheckboxes = items.filter(x => x.name.includes(searchTerm));

	return (
		<>
			<IconButton onClick={toggle}>
				<Add />
			</IconButton>
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
						{loading ? (
							<CircularProgress />
						) : (
							filteredCheckboxes.map(x => (
								<FormControlLabel
									key={x.id}
									className="hover:bg-gray-100 w-full"
									label={x.name}
									control={
										<Checkbox
											checked={contexts.some(c => c.id === x.id)}
											//onChange={() => console.log({ contexts })}
											onChange={() => onToggle(x)}
										/>
									}
								/>
							))
						)}
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
