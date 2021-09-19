import React from 'react';
import pt from 'prop-types';
import { Icon, Link } from '@sc/ui';
import s from './blocks.css';

const OpenNewTab = ({ url, children }) => (
    <Link href={url} blank>
        <div className={s.hover}>
            {children}
            <div className={s.newTab}>
                <Icon name='new-window' size={24} />
            </div>
        </div>
    </Link>
);

OpenNewTab.propTypes = {
    url: pt.string.isRequired
};

export default OpenNewTab;
