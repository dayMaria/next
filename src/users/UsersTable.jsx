import { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Table from "../components/Table";
import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";

const columns = [
	{
		title: "Nombre de usuario",
		key: "username",
	},
	{
		title: "Rol",
		key: "rol",
	},
	{
		title: "Acciones",
		width: 1,
		render: obj => (
			<Stack direction="row" spacing={1}>
				<EditUsers users={obj} />
			</Stack>
		),
	},
];
export default function UsersTable({ data }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredData = searchTerm
		? data.filter(user => {
				const { username } = user;
				const searchValue = searchTerm.toLowerCase();
				return username && username.toLowerCase().includes(searchValue);
		  })
		: data;

	return (
		<Table
			columns={columns}
			data={filteredData}
			title="Usuarios"
			actions={
				<Stack direction="row" spacing={2}>
					<TextField
						placeholder="Search"
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
					<AddUsers />
				</Stack>
			}
		/>
	);
}
