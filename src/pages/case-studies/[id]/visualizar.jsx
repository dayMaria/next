import Head from "next/head";
import { useRouter } from "next/router";
import useCaseStudy from "../../../case-studies/useCaseStudy";
import PageContainer from "../../../components/layout/PageContainer";
import { CircularProgress, Stack, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Visualizar() {
	const router = useRouter();
	const [data, loading] = useCaseStudy(router.query.id);
	const [yearIndex, setYearIndex] = useState(-1);

	useEffect(() => {
		if (data) {
			setYearIndex(0);
		}
	}, [data]);

	function parseDate(date) {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	return (
		<>
			<Head>
				<title>
					{process.env.NEXT_PUBLIC_APP_NAME} - Visualizar estudio de caso
				</title>
			</Head>
			<PageContainer page="Visualizar caso de estudio">
				{loading || !data ? (
					<CircularProgress />
				) : (
					<Stack>
						<Stack spacing={2}>
							<Stack spacing={3} direction="row">
								<Typography>Nombre: {data.name}</Typography>
								<Typography>
									Fecha de inicio: {parseDate(new Date(data.commit_date))}
								</Typography>
								{data.end_date && (
									<Typography>
										Fecha de fin: {parseDate(new Date(data.end_date))}
									</Typography>
								)}
							</Stack>
							<Typography>Descripción: {data.description}</Typography>
							{yearIndex > -1 && (
								<div className="space-y-2">
									<div className="grid grid-cols-3 gap-6">
										{data.years[yearIndex].contexts.map(x => (
											<div
												key={x.id}
												className="shadow-md  rounded-md p-4 space-y-2"
											>
												<Typography variant="h6">{x.name}</Typography>
												<div className="grid grid-cols-2 gap-4">
													{x.aus.map(au => (
														<div
															key={au.id}
															className="rounded-md px-2 py-1 border-gray-200"
															style={{ borderWidth: "1px" }}
														>
															<Typography>{au.name}</Typography>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
									<div className="flex space-x-2 items-center justify-center">
										<IconButton
											disabled={yearIndex === 0}
											onClick={() => setYearIndex(yearIndex - 1)}
										>
											<ArrowBack />
										</IconButton>
										<div className="flex justify-center">
											{data.years[yearIndex].year}
										</div>
										<IconButton
											disabled={yearIndex === data.years.length - 1}
											onClick={() => setYearIndex(yearIndex + 1)}
										>
											<ArrowForward />
										</IconButton>
									</div>
								</div>
							)}
						</Stack>
					</Stack>
				)}
			</PageContainer>
		</>
	);
}
