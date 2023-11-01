import {CircularProgress, Typography} from "@mui/material"
import {useEffect} from "react";

export default function AuthFallback() {
  useEffect(() => {
    document.title = `${process.env.NEXT_PUBLIC_APP_NAME} - Inicio`
  }, [])

  return (
		<div className="h-screen w-screen pt-8">
			<div className="flex flex-col items-center justify-center space-y-4">
				<Typography align="center" variant="h4">Sistema de Gestión de la Calidad</Typography>
				<div className="flex justify-center">
					<CircularProgress />
				</div>
			</div>
		</div>
	);
}
