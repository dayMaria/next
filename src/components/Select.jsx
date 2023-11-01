import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";

/*
 * La idea es no tener que ajustar manualmente el tamaño (y otras props que más
 * adelante pueden variar). Esto puede cambiar cuando se adapte a varias resoluciones
 * y puede implicar varios cambios que pudieron haberse prevenido.
 */
function Select({
									disabled = false,
									id,
									label,
									loading = false,
									onChange,
									options = [],
									rootProps = {},
									selectProps = {},
									value,
									variant = "outlined"
								}) {
	const menuProps = { MenuListProps: { dense: true } };

	function handleChange(ev) {
		onChange(ev.target.value);
	}

	return (
		<FormControl size="small" variant={variant} {...rootProps}>
			<InputLabel id={id}>{label}</InputLabel>
			<MuiSelect
				disabled={disabled}
				size="small"
				{...selectProps}
				label={label}
				labelId={id}
				MenuProps={menuProps}
				onChange={handleChange}
				value={value}
			>
				<MenuItem value="">{loading ? "Cargando" : ""}</MenuItem>
				{options.map(opt =>
					<MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
				)}
			</MuiSelect>
		</FormControl>
	);
}

export default Select;