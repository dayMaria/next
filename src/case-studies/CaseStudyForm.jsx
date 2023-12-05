import { DesktopDatePicker } from "@mui/lab";
import {
	Stack,
	Tab,
	Tabs,
	TextField,
	TextareaAutosize,
	Button,
} from "@mui/material";
import useUniqueList from "../common/form/useUniqueList";
import SelectContextTable from "./SelectContextTable";
import SelectUsersTable from "./SelectUsersTable";
import AddYears from "./AddYears";
import { useEffect, useState } from "react";
import { useUser } from "../auth/auth";

export default function CaseStudyForm({ obj, onSubmit, loading }) {
	const userLog = useUser();
	const {
		state: years,
		addOrRemove: addOrRemoveYear,
		setState: setYears,
	} = useUniqueList({});
	const {
		state: contexts,
		addOrRemove: addOrRemoveContext,
		setState: setContexts,
	} = useUniqueList({
		comparisonFunction: (a, b) => a.year === b.year && a.id === b.id,
	});
	const {
		state: analysisUnits,
		addOrRemove: addOrRemoveAnalysisUnit,
		setState: setAus,
	} = useUniqueList({
		comparisonFunction: (a, b) =>
			a.year === b.year && a.id === b.id && a.context === b.context,
	});
	const {
		state: users,
		addOrRemove: addOrRemoveUsers,
		setState: setUsers,
	} = useUniqueList({});
	const [tab, setTab] = useState("");
	const [selectedYear, setSelectedYear] = useState();
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (obj) {
			setName(obj.name);
			setDescription(obj.description);
			setStartDate(new Date(obj.commit_date));
			setEndDate(obj.endDate ?? "");
			const objYears = [];
			const objContexts = [];
			const objAus = [];
			obj.years.forEach(y => {
				objYears.push(y.year);
				y.contexts.forEach(c => {
					const { aus, ...rest } = c;
					objContexts.push(rest);
					aus.forEach(au => objAus.push(au));
				});
			});
			setYears(objYears);
			setContexts(objContexts);
			setAus(objAus);
			setUsers(obj.members);
		}
	}, [obj]);

	const handleStartDateChange = date => {
		setStartDate(date);
	};

	const handleEndDateChange = date => {
		setEndDate(date);
	};

	const isButtonDisable = () => {
		if (
			!name ||
			!startDate ||
			years.length === 0 ||
			contexts.length === 0 ||
			analysisUnits === 0 ||
			users.length === 0
		) {
			return true;
		}
		return loading;
	};

	const handleSubmit = event => {
		const YearsDto = [];
		for (const year of years) {
			const yearDto = {
				year,
				contexts: [],
			};
			for (const c of contexts.filter(c => c.year === year)) {
				yearDto.contexts.push({
					id: c.id,
					aus: analysisUnits
						.filter(ua => ua.year === year && ua.context === c.id)
						.map(ua => ua.id),
				});
			}
			YearsDto.push(yearDto);
		}
		const caseToAdd = {
			name,
			description,
			commit_date: startDate,
			end_date: endDate,
			years: YearsDto,
			users: users.map(u => u.id),
			user: userLog.id,
		};
		onSubmit(caseToAdd);
	};

	const isEndDateInvalid = endDate && startDate > endDate;

	const yearDate = startDate ? startDate.getFullYear() : null;
	const yearDateEnd = endDate ? endDate.getFullYear() : null;

	return (
		<Stack spacing={2}>
			<Stack spacing={1}>
				<Stack direction="row" spacing={1}>
					<TextField
						label="Nombre"
						required
						value={name}
						onChange={ev => setName(ev.target.value)}
					/>
					<DesktopDatePicker
						label="Fecha inicio *"
						value={startDate}
						onChange={handleStartDateChange}
						renderInput={props => <TextField {...props} error={false} />}
						required
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
					value={description}
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
					{yearDate && (
						<AddYears
							onAdd={addOrRemoveYear}
							yearDate={yearDate}
							yearDateEnd={yearDateEnd}
						/>
					)}
				</div>
			</Tabs>
			{selectedYear && (
				<SelectContextTable
					contexts={contexts.filter(x => x.year === selectedYear)}
					onToggle={x => addOrRemoveContext({ ...x, year: selectedYear })}
					onToggleAU={addOrRemoveAnalysisUnit}
					analysisUnits={analysisUnits.filter(x => x.year === selectedYear)}
					selectedYear={selectedYear}
				/>
			)}
			<SelectUsersTable users={users} onToggle={addOrRemoveUsers} />
			<div className="flex justify-end">
				<Button
					variant="contained"
					onClick={handleSubmit}
					disabled={isButtonDisable()}
				>
					Guardar
				</Button>
			</div>
		</Stack>
	);
}
