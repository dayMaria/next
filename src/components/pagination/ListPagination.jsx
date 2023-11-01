import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";

const { Text } = Typography;

export default function ListPagination({
	disabledPrev,
	disabledNext,
	page,
	total,
	itemsPerPage,
	onPageChange,
}) {
	return (
		<div className="flex justify-end">
			<Space>
				<Text>
					{page} de {Math.floor(total / itemsPerPage)}
				</Text>
				<Button
					disabled={disabledPrev}
					shape="circle"
					type="primary"
					icon={<LeftOutlined />}
					onClick={() => onPageChange(page - 1)}
				/>
				<Button
					disabled={disabledNext}
					shape="circle"
					type="primary"
					icon={<RightOutlined />}
					onClick={() => onPageChange(page + 1)}
				/>
			</Space>
		</div>
	);
}
