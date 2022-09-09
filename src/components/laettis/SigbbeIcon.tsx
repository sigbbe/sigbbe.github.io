import { FC } from "react";
import github from "../../assets/github.png";
import './SigbbeIcon.sass';

interface SigbbeIconPropsI {
	size?: "sm" | "md" | "lg" | "xl";
};

const styles = {
	sm: {
		height: "3em",
		width: "2em",
	},
	md: {
		height: "5em",
		width: "5em",
	},
	lg: {
		height: "8em",
		width: "7.5em",
	},
	xl: {
		height: "12em",
		width: "10em",
	},
};

const SigbbeIcon: FC<SigbbeIconPropsI> = (props: SigbbeIconPropsI) => {
	return (
		<section>
			<div className="stacked-img-container" style={ styles[props.size || "md"] }>
				<img className="stacked-img avatar-img spin-with-clock" src={ "https://avatars.githubusercontent.com/u/53899970?v=4" } alt="github-avatar" />
				<img className="stacked-img" src={ github } alt="github-logo" />
			</div>
		</section>
	);
};
export default SigbbeIcon;
