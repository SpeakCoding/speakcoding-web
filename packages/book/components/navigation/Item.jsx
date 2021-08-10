import React from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { useLocationState } from '@sc/ui/hooks';
import { Link } from '@sc/ui';
import s from './navigation.css';

const Item = ({ disabled, href, children }) => {
    const [{ match }] = useLocationState({ path: href });

    if (disabled) return <div className={classNames(s.item, s.text, s.disabled)}>{children}</div>;

    return (
        <div className={s.item}>
            <Link href={href}>
                <div className={classNames(s.text, match && s.active)}>{children}</div>
            </Link>
        </div>
    );
};

Item.propTypes = {
    disabled: pt.bool,
    href: pt.string
};

Item.defaultProps = {
    disabled: false,
    href: undefined
};

export default Item;
