import { DesktopDatePicker } from "@mui/lab";
import { Stack, Tab, Tabs, TextField, TextareaAutosize } from "@mui/material";
import useSetList from "../common/form/useUniqueList";
import useUniqueList from "../common/form/useUniqueList";
import SelectContextTable from "./SelectContextTable";
import SelectUsersTable from "./SelectUsersTable";
import AddYears from "./AddYears";
import { useState } from "react";

export default function CaseStudyForm() {
	const { state: years, addOrRemove: addOrRemoveYear } = useUniqueList({});
	const { state: contexts, addOrRemove: addOrRemoveContext } = useUniqueList({
		comparisonFunction: (a, b) => a.year === b.year && a.id === b.id,
	});
	const [tab, setTab] = useState("");
	const [selectedYear, setSelectedYear] = useState();
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleStartDateChange = date => {
		setStartDate(date);
	};

	const handleEndDateChange = date => {
		setEndDate(date);
	};

	const isEndDateInvalid = endDate && startDate > endDate;

	return (
		<Stack spacing={2}>
			<Stack spacing={1}>
				<Stack direction="row" spacing={1}>
					<TextField label="Nombre" required />
					<DesktopDatePicker
						label="Fecha inicio"
						value={startDate}
						onChange={handleStartDateChange}
						renderInput={props => <TextField {...props} error={false} />}
					/>
					<DesktopDatePicker
						label="Fecha fin"
						value={endDate}
						onChange={handleEndDateChange}
						renderInput={props => (
							<TextField
								{...props}
								error={isEndDateInvalid}
								helperText={
									isEndDateInvalid
										? "La fecha de fin no puede ser anterior a la fecha de inicio"
										: ""
								}
							/>
						)}
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
			<Tabs onChange={(_, newTab) => setTab(newTab)} value={tab}>
				{years.map(x => (
					<Tab key={x} label={x} onClick={() => setSelectedYear(x)} />
				))}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					onClick={() => setTab(tab)}
				>
					<AddYears onAdd={addOrRemoveYear} />
				</div>
			</Tabs>
			{selectedYear && (
				<SelectContextTable
					contexts={contexts.filter(x => x.year === selectedYear)}
					onToggle={x => addOrRemoveContext({ ...x, year: selectedYear })}
				/>
			)}
			<SelectUsersTable data={[]} />
		</Stack>
	);
}
