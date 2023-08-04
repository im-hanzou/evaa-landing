import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/evaa-logo.png";
import { Button } from "../style/styled";

const Navbar = styled.nav`
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 16px;
	font-family: Montserrat;
	width: 100%;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 40px 127px;
	}

	.navbarItem {
		display: flex;
		width: 200px;
	}
`;

const Header = () => {
	return (
		<Navbar>
			<div>
				<div className="navbarItem">
					<img src={logo} alt="EVAA logotype" width="48" height="48" />
				</div>
				<NavLinks />
				<div className="navbarItem">
					<Button>App</Button>
				</div>
			</div>
		</Navbar>
	);
};

export default Header;
