import { styled } from "styled-components";
import { Button } from "../style/styled";
import { ReactComponent as Blob3 } from "../assets/blob-3.svg";
import { FaChevronRight } from "react-icons/fa";

const InvitationContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: start;
	align-self: center;
	width: 80%;
	padding: 2em;
	background-color: #6272ca;
	color: white;
	border-radius: 10px;

	h1 {
		font-size: 44px;
		font-weight: 700;
		margin: 0;
	}

	p {
		color: #adb9cb;
		font-size: 24px;
		font-weight: 500;
		margin-block: 0;
	}

	& > svg {
		position: absolute;
		top: -170px;
		left: -155px;
		z-index: -1;
	}
`;

const InvitationButton = styled(Button)`
	background-color: white;
	color: #4761d0;
	align-self: end;
`;

const Roadmap = () => {
	return (
		<InvitationContainer>
			<Blob3 />
			<h1>Enjoy fully decentralized platform operated by community</h1>
			<p>Evaa Protocol is brilliant example of community governance.</p>
			<InvitationButton>
				Dashboard
				<FaChevronRight size={10} style={{ marginLeft: "1em" }} />
			</InvitationButton>
		</InvitationContainer>
	);
};

export default Roadmap;
