import { Typography } from "@mui/material";
import Link from "next/link";

function NavLink({ href, Icon, label }) {
	return (
		<Link href={href}>
			<div className="hover:bg-gray-600 cursor-pointer flex items-center rounded-sm p-1 space-x-2">
				<Icon htmlColor="white" />
				<Typography className="text-white" variant="body2">{label}</Typography>
			</div>
		</Link>
	);
}

export default NavLink;