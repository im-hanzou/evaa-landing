import { styled } from "styled-components";
import { Button } from "../style/styled";
import duck from "../assets/duck.png";
import macbook from "../assets/macbook.png";
import diamond from "../assets/diamond.png";
import { ReactComponent as TonCoin } from "../assets/toncoin.svg";
import { ReactComponent as Blob1 } from "../assets/blob-1.svg";
import { ReactComponent as Blob2 } from "../assets/blob-2.svg";
import { ReactComponent as Medal } from "../assets/medal-icon.svg";
import { ReactComponent as Cross } from "../assets/cross-icon.svg";
import { ReactComponent as Shield } from "../assets/shield-icon.svg";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Point = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	padding: 0px 0px 0px 127px;

	&:nth-child(2) {
		flex-direction: row-reverse;
		align-items: center;

		img {
			position: absolute;
			left: 70px;
			top: 50px;
			width: 650px;
		}
		svg {
			position: relative;
			bottom: 0;
			left: 0;
			z-index: -1;
		}
	}

	&:last-child {
		img {
			position: relative;
			left: 50px;
		}

		svg {
			left: 0;
		}
	}
`;

const SecondPoint = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;

	&:nth-child(2) {
		flex-direction: row-reverse;
		align-items: center;

		img {
			position: absolute;
			left: 35px;
			top: 50px;
			width: 650px;
		}
		svg {
			position: relative;
			bottom: 0;
			left: 0;
			z-index: -1;
		}
	}

	&:last-child {
		img {
			position: relative;
			left: 50px;
		}

		svg {
			left: 0;
		}
	}
`;

const Texts = styled.div`
	text-align: start;
	width: 45%;

	h1 {
		background-image: linear-gradient(
			89.83deg,
			#3854cc -5.92%,
			#278ce5 -5.91%,
			#4c65d1 85.36%
		);
		background-size: 100%;
		background-repeat: repeat;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		font-size: 128px;
		line-height: 120px;
		font-weight: 900;
		letter-spacing: 6px;
		margin-block-end: 0;

		&:nth-child(2) {
			display: inline-block;
			margin-top: -30px;
			font-size: 108px;
			line-height: 128px;
			letter-spacing: 0;
			font-weight: 800;
		}

		& + p {
			margin-top: 1em;
			font-weight: 700;
		}
	}

	h3 {
		color: #3854cc;
		font-size: 44px;
		font-weight: 800;
		margin-bottom: 12px;
		line-height: 40px;
	}

	p {
		color: #8792a4;
		margin-bottom: 2em;
		font-size: 24px;
		line-height: 32px;
		overflow-wrap: break-word;
		word-wrap: break-word;
		min-height: 4em;
		font-weight: 600;
		margin-top: 0;
	}

	b {
		color: #54729b;
	}

	.argument {
		width: 100%;
		display: flex;

		&:first-of-type {
			margin-top: 2em;
		}

		&:last-of-type {
			margin-bottom: 2em;
		}

		p {
			margin-top: 0;
			margin-bottom: 40px;
			width: 85%;
		}

		b {
			display: block;
			color: black;
			font-size: 30px;
			font-weight: 800;
			margin-bottom: 10px;
		}

		svg {
			margin-top: 0.5em;
			margin-right: 1em;
		}
	}
`;

const ImagesTop = styled.div`
	position: relative;
	width: 65%;	
	img {
		position: relative;
		right: -100px;
	}

	svg {
		position: absolute;
		bottom: 50px;
		left: 50%;
	}
`;

const Images = styled.div`
	position: relative;
	width: 50%;	
	img {
		position: relative;
		right: -100px;
	}

	svg {
		position: absolute;
		bottom: 50px;
		left: 50%;
	}
`;

const CarouselIndicatorContainer = styled.div`
	display: flex;
	column-gap: 10px;
`;

const CarouselIndicator = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 3px;
	background-color: #9ea8d3;
	cursor: pointer;
	transition: all 0.5s;

	&.chosen {
		transform: rotate(45deg);
		background-color: #3854cc;
	}
`;

type CarouselItems = {
	title: string;
	description: string;
};
const SellingPoints = () => {
	const [carouselItems, setCarouselItems] = useState<CarouselItems[]>([
		{
			title: "Our innovative protocol",
			description:
				"Our innovative protocol allows borrowers to access capital quickly and easily, while providing lenders with a high-yield investment opportunity.",
		},
		{
			title: "Our platform utilizes",
			description: "Our platform utilizes cutting-edge blockchain technology to ensure the safety and security of all transactions.",
		},
		{
			title: "All loan agreements and repayments",
			description:
				"All loan agreements and repayments are recorded on the blockchain, providing an immutable and transparent record of all activity.",
		},
		{
			title: "User-friendly and easy to navigate",
			description:
				"Our platform is user-friendly and easy to navigate, making it simple for borrowers and lenders to connect and conduct business.",
		},
		{
			title: "Customer support",
			description:
				"And our dedicated customer support team is available to assist you with any questions or concerns you may have.",
		},
	]);
	const [chosenText, setChosenText] = useState(0);

	return (
		<div>
			<Point>
				<Texts>
					<h1>EVAA</h1>
					<h1>protocol</h1>
					<p>
						The first decentralized lending protocol on <b>TON</b> that lets
						users lend or borrow assets without going to a centralized
						intermediary.
					</p>
					<a href="https://app.evaa.finance/">
						<Button>Application</Button>
					</a>
				</Texts>
				<ImagesTop>
					<img src={duck} alt="Duck holding TONcoin" />
					<svg width="300" height="300">
						<defs>
							<linearGradient id="tonColor" x1="0" x2="0" y1="0" y2="1">
								<stop offset="0%" stopColor="#4C65D1" />
								<stop offset="100%" stopColor="#7669F7" />
							</linearGradient>
						</defs>
						<circle cx="150" cy="150" r="150" fill="url(#tonColor)" />
						<TonCoin width="150" height="150" x="80" y="80" />
					</svg>
				</ImagesTop>
			</Point>
			<SecondPoint>
				<Texts>
					<h3>{carouselItems[chosenText].title}</h3>
					<p>{carouselItems[chosenText].description}</p>
					<CarouselIndicatorContainer>
						{carouselItems.map((item, index) => (
							<CarouselIndicator
								key={index}
								className={chosenText === index ? "chosen" : ""}
								onClick={() => setChosenText(index)}
							/>
						))}
					</CarouselIndicatorContainer>
				</Texts>
				<Images>
					<Blob1 />
					<img src={macbook} alt="Macbook with EVAA on screen" />
				</Images>
			</SecondPoint>
			<Point>
				<Texts>
					<h3>Why EVAA</h3>
					<div className="argument">
						<Medal width="24" />
						<p>
							<b>First on TON</b>
							EVAA Protocol is the first TON blockchain lending protocol
						</p>
					</div>
					<div className="argument">
						<Cross width="24" />
						<p>
							<b>TON native and wrapped assets</b>
							Evaa Protocol has TON and TON native tokens besides wrapped tokens
							from other chains
						</p>
					</div>
					<div className="argument">
						<Shield width="24" />
						<p>
							<b>Decentralized</b>
							The protocol is based on smart contracts — fully decentralized
						</p>
					</div>
					<a href="https://app.evaa.finance/">
						<Button>
							Dashboard
							<FaChevronRight size={10} style={{ marginLeft: "1em" }} />
						</Button>
					</a>
				</Texts>
				<Images>
					<Blob2 />
					<img src={diamond} alt="Macbook with EVAA on screen" />
				</Images>
			</Point>
		</div>
	);
};

export default SellingPoints;
