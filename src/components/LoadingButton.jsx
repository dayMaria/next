import { LoadingButton as MuiLoadingButton } from "@mui/lab";

/*
 * La idea es no tener que ajustar manualmente el tamaño (y otras props que más
 * adelante pueden variar). Esto puede cambiar cuando se adapte a varias resoluciones
 * y puede implicar varios cambios que pudieron haberse prevenido
 */
function LoadingButton(props) {
	return <MuiLoadingButton size="small" {...props} />;
}

export default LoadingButton;