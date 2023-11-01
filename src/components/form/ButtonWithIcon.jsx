import { Button } from "antd";

export default function ButtonWithIcon({ className, ...props }) {
	return (
		<Button
			className={"inline-flex justify-center items-center " + className}
			{...props}
		/>
	);
}
