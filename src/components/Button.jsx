import { LoadingButton } from "@mui/lab";

/*
 * La idea es no tener que ajustar manualmente el tamaño (y otras props que más
 * adelante pueden variar). Esto puede cambiar cuando se adapte a varias resoluciones
 * y puede implicar varios cambios que pudieron haberse prevenido
 */
function Button(props) {
	return <LoadingButton size="small" {...props} />;
}

export default Button;
