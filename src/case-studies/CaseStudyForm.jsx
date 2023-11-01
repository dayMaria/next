import { DesktopDatePicker } from "@mui/lab";
import {
	IconButton,
	Stack,
	Tab,
	Tabs,
	TextField,
	TextareaAutosize,
} from "@mui/material";
import useSetList from "../common/form/useUniqueList";
import useUniqueList from "../common/form/useUniqueList";
import SelectContextTable from "./SelectContextTable";
import SelectUsersTable from "./SelectUsersTable";
import { Add } from "@mui/icons-material";

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
				<TextField label="Descripcion" />
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
					<IconButton>
						<Add />
					</IconButton>
				</div>
			</Tabs>
			<SelectContextTable data={[]} />
			<SelectUsersTable data={[]} />
		</Stack>
	);
}
