import { DesktopDatePicker } from "@mui/lab";
import { Stack, Tab, Tabs, TextField, TextareaAutosize } from "@mui/material";
import useSetList from "../common/form/useUniqueList";
import useUniqueList from "../common/form/useUniqueList";
import SelectContextTable from "./SelectContextTable";
import SelectUsersTable from "./SelectUsersTable";
import AddYears from "./AddYears";

export default function CaseStudyForm() {
	const { selected: years, addOrRemove: addOrRemoveYear } = useUniqueList({});
	return (
		<Stack spacing={2}>
			<Stack spacing={1}>
				<Stack direction="row" spacing={1}>
					<TextField label="Nombre" required />
					<DesktopDatePicker
						label="Fecha inicio"
						renderInput={props => <TextField {...props} />}
					/>
					<DesktopDatePicker
						label="Fecha fin"
						renderInput={props => <TextField {...props} />}
					/>
				</Stack>
				<TextareaAutosize
					style={{
						width: "1300px",
						fontFamily: "IBM Plex Sans, sans-serif",
						fontSize: "0.875rem",
						fontWeight: 400,
						lineHeight: 1.5,
						padding: "18px 12px",
						color: "#C7D0DD",
						border: "1px solid",
						borderColor: "#BBC5C8",
						outline: 0,
						color: "black",
						borderRadius: "4px",
					}}
					onChange={ev => setDescription(ev.target.value)}
					maxRows={4}
					aria-label="maximum height"
					placeholder="Descripción"
				/>
			</Stack>
			<Tabs>
				<Tab label="2023" />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<AddYears />
				</div>
			</Tabs>
			<SelectContextTable data={[]} />
			<SelectUsersTable data={[]} />
		</Stack>
	);
}
