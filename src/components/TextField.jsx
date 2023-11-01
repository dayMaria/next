import { TextField as MuiTextField } from "@mui/material";

/*
 * La idea es no tener que ajustar manualmente el tamaño (y otras props que más
 * adelante pueden variar). Esto puede cambiar cuando se adapte a varias resoluciones
 * y puede implicar varios cambios que pudieron haberse prevenido
 */
function TextField(props) {
	return <MuiTextField fullWidth size="small" variant="outlined" {...props} />;
}

export default TextField;