import { UploadOutlined } from "@ant-design/icons";
import { Checkbox, message, Typography, Upload } from "antd";

import ButtonWithIcon from "./ButtonWithIcon";

const { Text } = Typography;

export default function UploadDocumentButton({
	disabled,
	file,
	label,
	onChange,
}) {
	function handleChange(info) {
		if (info.fileList.length >= 2) {
			message.warning("Solo puede subir un documento");
		} else if (info.fileList.length === 1) {
			onChange(info.fileList[0]);
		} else {
			onChange(null);
		}
	}

	function noAction() {}

	return (
		<div>
			<Upload fileList={file ? [file] : []} onChange={handleChange} required>
				<Text className="mr-1">{label}</Text>
				<ButtonWithIcon
					className="mr-2"
					disabled={disabled || false}
					icon={<UploadOutlined />}
					shape="circle"
					size="small"
				/>
			</Upload>
			<div className="inline-block">
				<Checkbox checked={file} onChange={noAction}>
					Archivo subido
				</Checkbox>
			</div>
		</div>
	);
}
