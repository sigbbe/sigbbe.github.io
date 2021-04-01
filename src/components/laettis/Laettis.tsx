/* eslint-disable */
import React, { Component } from 'react';
import { SvgIcon, Theme, WithStyles} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './Laettis.sass';

const styles = (theme: Theme) => ({
    root: {
        width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: theme.spacing(1),
    },
});
interface LaettisProps extends WithStyles<typeof styles>{ };

class Laettis extends Component<LaettisProps> {
    constructor(props: any) {
         super(props);
    }
    render(): JSX.Element {
        const { classes } = this.props;
        return (
            <a className={clsx(classes.root, 'Container')} href={'https://github.com/sigbbe'}>
                <SvgIcon className={clsx('Svg')}>
                    <GitHubIcon />
                </SvgIcon>
            </a>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Laettis);
