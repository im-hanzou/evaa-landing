import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/evaa-logo.png";
import { Button } from "../style/styled";
import { LuMenu } from "react-icons/lu";

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

const MobileMenu = styled.button`
	display: none;

	@media only screen and (max-width: 880px) {
		display: flex;
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
					<a href="https://app.evaa.finance/" >
						<Button >
							App
						</Button>
					</a>
				</div>
				<MobileMenu>
					<LuMenu size={45} />
					<NavLinks />
				</MobileMenu>
			</div>
		</Navbar>
	);
};

export default Header;
