import React, { useContext, useEffect, useMemo, useRef } from 'react';
import pt from 'prop-types';
import { useLocationState } from '@sc/ui/hooks';
import { context } from '@sc/ui/components/expand';
import s from './card.css';

const Anchor = ({ id, type, openEdit, openReview }) => {
    const [, itemId] = useMemo(() => id.split('/'), [id]),
        [{ query }, , replaceState] = useLocationState(),
        $ref = useRef(),
        { expand } = useContext(context);

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query[type] && itemId === query[type] && $ref.current) {
                await expand();
                $ref.current.scrollIntoView();
                if (query.action === 'edit') openEdit();
                if (query.action === 'review') openReview();
                replaceState('?');
            }
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [query]);

    return <div ref={$ref} className={s.anchor} />;
};

Anchor.propTypes = {
    id: pt.string.isRequired,
    type: pt.oneOf(['assignment', 'quiz']),
    openEdit: pt.func,
    openReview: pt.func
};

Anchor.defaultProps = {
    type: 'assignment',
    openEdit: () => {},
    openReview: () => {}
};

export default Anchor;
