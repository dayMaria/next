import Preview from "@mui/icons-material/Preview";
import { Stack } from "@mui/material";
import NavLink from "./NavLink";
import { Typography } from "@mui/material";
import NavLinkCollapse from "./NavLinkCollapse";

export default function Sidebar() {
	return (
		<Stack className="bg-transparent pt-2 px-2" spacing={1}>
			<div className="justify-center flex items-center">
				<Typography variant="h4" className="text-white">
					aica+
				</Typography>
			</div>
			<NavLink href="/case-studies" Icon={Preview} label="Estudios de casos" />
			<NavLink href="/context" Icon={Preview} label="Contextos" />
			<NavLink
				href="/analysis-unit"
				Icon={Preview}
				label="Unidades de analisis"
			/>
			<NavLink
				href="/type-evidences"
				Icon={Preview}
				label="Tipos de evidencia"
			/>
			<NavLink href="/users" Icon={Preview} label="Usuarios" />
			<NavLinkCollapse Icon={Preview} label="Reportes">
				<NavLink href="/" Icon={Preview} label="Reporte 1" />
			</NavLinkCollapse>
		</Stack>
	);
}
