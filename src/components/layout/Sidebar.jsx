import Preview from "@mui/icons-material/Preview";
import { Stack } from "@mui/material";
import NavLink from "./NavLink";
import { Typography } from "@mui/material";
import NavLinkCollapse from "./NavLinkCollapse";
import roles from "../../constants/roles";
import { useUser } from "../../auth/auth";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import AddchartIcon from "@mui/icons-material/Addchart";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SummarizeIcon from "@mui/icons-material/Summarize";
import GradingIcon from "@mui/icons-material/Grading";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ListAltIcon from "@mui/icons-material/ListAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Sidebar() {
	const user = useUser();

	return (
		<Stack className="bg-transparent pt-2 px-2" spacing={1}>
			<div className="justify-center flex items-center">
				<Typography variant="h4" className="text-white">
					aica+
				</Typography>
			</div>
			{user.rol === roles.InvestigadorJefe && (
				<NavLink
					href="/case-studies"
					Icon={WysiwygIcon}
					label="Estudios de casos"
				/>
			)}
			{user.rol === roles.InvestigadorJefe && (
				<NavLink href="/context" Icon={ContentPasteIcon} label="Contextos" />
			)}
			{user.rol === roles.InvestigadorJefe && (
				<NavLink
					href="/analysis-unit"
					Icon={AddchartIcon}
					label="Unidades de analisis"
				/>
			)}
			{user.rol === roles.Investigador && (
				<NavLink
					href="/type-evidences"
					Icon={ListAltIcon}
					label="Tipos de evidencia"
				/>
			)}
			{user.rol === roles.Investigador && (
				<NavLink
					href="/misEvidencia"
					Icon={UploadFileIcon}
					label="Evidencias"
				/>
			)}
			{user.rol === roles.Administrador && (
				<NavLink href="/users" Icon={RecentActorsIcon} label="Usuarios" />
			)}

			{user.rol === roles.InvestigadorJefe && (
				<NavLinkCollapse Icon={SummarizeIcon} label="Reportes">
					<NavLink
						href="/reports/repo1"
						Icon={GradingIcon}
						label="Categorizar unidades de análisis por tipo de evidencia"
					/>
					<NavLink
						href="/reports/repo2"
						Icon={GradingIcon}
						label="Contextos, unidades de análisis y tipos de evidencias asociados"
					/>
					<NavLink
						href="/reports/repo3"
						Icon={GradingIcon}
						label="Contextos y estudios de casos asociados por período de tiempo"
					/>
					<NavLink
						href="/reports/repo4"
						Icon={GradingIcon}
						label="Unidades de análisis y estudios de casos asociados por contextos"
					/>
					<NavLink
						href="/reports/repo5"
						Icon={GradingIcon}
						label="Estudios de casos por tipo de evidencia"
					/>
				</NavLinkCollapse>
			)}
		</Stack>
	);
}
