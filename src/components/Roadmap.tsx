import { styled } from "styled-components";
import { SlScreenDesktop } from "react-icons/sl";
import { useEffect } from "react";

const RoadmapContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	align-self: center;
	width: 86%;
	margin-bottom: 320px;

	h1 {
		color: #3854cc;
		font-size: 44px;
		font-weight: 800;
		margin-bottom: 2em;
	}
`;

const Content = styled.div`
	display: flex;
	border-top: 3px solid #3854cc;
	width: 100%;
	overflow-y: visible;
	overflow-x: hidden;
	scroll-snap-type: x mandatory;
`;

const CheckpointContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 210px;
	min-width: 250px;
	scroll-snap-align: end;

	&:nth-child(2n) {
		.checkpoint {
			background-color: #3854cc;
		}

		p {
			color: #ecf0f6;
		}

		.icon {
			background: none;
			color: white;
		}
	}
`;

const Line = styled.div`
	position: relative;
	width: 0;
	top: -10px;
	height: 50px;
	border-inline: 1px solid #3854cc;
`;

const Intersection = styled.div`
	transform: translateY(-8px) rotate(45deg);
	width: 12px;
	height: 12px;
	background-color: #3854cc;
	border-radius: 3px;
`;

const Checkpoint = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 160px;
	margin-top: -10px;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 50px;
	border-radius: 50%;
	padding: 10px;
	margin-top: 10px;
	background-color: #ebeefa;
	color: #3854cc;
`;

const DateAnnotation = styled.p`
	margin-bottom: 0;
	margin-top: 2em;
	color: #8792a4;
`;

const Explanation = styled.p`
	color: #474b52;
	font-weight: 600;
	margin-top: 0;
	font-family: Montserrat;
`;

const Roadmap = () => {
	useEffect(() => {
		const roadmap = document.getElementById("roadmapContent");
		const interval = setInterval(() => {
            const scrollLeft = roadmap?.scrollLeft ?? 0;
            const scrollWidth = roadmap?.scrollWidth ?? 0;
            const offsetWidth = roadmap?.offsetWidth ?? 0;
			if (scrollLeft !== scrollWidth - offsetWidth) {
				roadmap?.scrollBy({
					left: 100,
					behavior: "smooth",
				});
			} else {
                roadmap?.scroll({
					left: 0,
					behavior: "smooth",
				});
            }
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<RoadmapContainer>
			<h1>Success Roadmap</h1>
			<Content id="roadmapContent">
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlScreenDesktop size={30} />
						</Icon>
						<DateAnnotation>May, 2023</DateAnnotation>
						<Explanation>Testnet v2 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
			</Content>
		</RoadmapContainer>
	);
};

export default Roadmap;
