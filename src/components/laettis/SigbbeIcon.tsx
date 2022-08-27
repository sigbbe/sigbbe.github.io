/* eslint-disable */
import { SvgIcon, Theme, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import clsx from 'clsx';
import { Component } from 'react';
import './SigbbeIcon.sass';

const styles = (theme: Theme) => ({
	root: {
		width: '100px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		lineHeight: theme.spacing(1),
	},
});
interface SigbbeIconPropsI extends WithStyles<typeof styles> { };

class SigbbeIcon extends Component<SigbbeIconPropsI> {
	constructor (props: any) {
		super(props);
	}
	render(): JSX.Element {
		const { classes } = this.props;
		return (
			<a className={ clsx(classes.root, 'Container') } href={ 'https://github.com/sigbbe' }>
				<SvgIcon className={ clsx('Svg') }>
					<GitHubIcon />
				</SvgIcon>
			</a>
		);
	}
}
export default withStyles(styles, { withTheme: true })(SigbbeIcon);
