import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

import "@components/react/TopBar.scss";

const TopBar = (): JSX.Element => {
	const navigate = useNavigate();

	const handleHomeButton = () => {
		navigate("/", { replace: true });
	};
	return (
		<>
			<motion.div>
				<AppBar className="top-bar" position="fixed">
					<Toolbar>
						<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
							<Link to="/" className="top-bar-text">
								<div className="top-bar-home-button">HRFENG</div>
							</Link>
						</Typography>
						<Typography variant="h5" component="div">
							<Link to="/contact" className="top-bar-text">
								<div className="top-bar-button">CONTACT</div>
							</Link>
						</Typography>
						<Typography variant="h5" component="div">
							<Link to="/stuff" className="top-bar-text">
								<div className="top-bar-button">STUFF</div>
							</Link>
						</Typography>
					</Toolbar>
				</AppBar>
			</motion.div>
		</>
	);
};

export default TopBar;
