import { IconButton as MuiIconButton } from "@mui/material";
import { forwardRef } from "react";

/*
 * La idea es no tener que ajustar manualmente el tamaño (y otras props que más
 * adelante pueden variar). Esto puede cambiar cuando se adapte a varias resoluciones
 * y puede implicar varios cambios que pudieron haberse prevenido
 */
const IconButton = forwardRef((props, ref) => (
	<MuiIconButton size="small" {...props} ref={ref} />
));

export default IconButton;