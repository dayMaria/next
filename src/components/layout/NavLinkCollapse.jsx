import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";

import useToggle from "../../hooks/useToggle";

function NavLinkCollapse({ children, Icon, label }) {
	const [open, toggle] = useToggle();

	return (
		<>
			<div
				className="hover:bg-gray-600 cursor-pointer flex items-center rounded-sm p-1 space-x-2"
				onClick={toggle}
			>
				<Icon htmlColor="white" />
				<Typography className="flex-1 text-white" variant="body2">{label}</Typography>
				{open ? <ArrowCircleUp htmlColor="white" /> : <ArrowCircleDown htmlColor="white" />}
			</div>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<div className="pl-2">
					{children}
				</div>
			</Collapse>
		</>
	);
}

export default NavLinkCollapse;