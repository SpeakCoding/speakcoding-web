import React, { useCallback, useRef } from 'react';
import pt from 'prop-types';
import { addDragHandlers, getCursorPosition } from './utils';
import s from './tag-people.css';

const bounds = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };

const Tag = ({ top, left, children, onChange }) => {
    const $node = useRef(null),
        delta = useRef({}),
        next = useRef({ top, left });

    function watchCursor(event) {
        const { x, y } = getCursorPosition(event),
            rect = $node.current.parentElement.getBoundingClientRect();

        next.current = {
            top: Math.min(
                Math.max((y - delta.current.y - rect.y) / rect.height, bounds.y.min),
                bounds.y.max
            ),
            left: Math.min(
                Math.max((x - delta.current.x - rect.x) / rect.width, bounds.x.min),
                bounds.x.max
            )
        };

        $node.current.style.top = `${next.current.top * 100}%`;
        $node.current.style.left = `${next.current.left * 100}%`;
    }

    const handleDragStart = useCallback(
        event => {
            event.stopPropagation();

            const cursor = getCursorPosition(event),
                point = $node.current.getBoundingClientRect();

            delta.current = { x: cursor.x - point.x, y: cursor.y - point.y };
            next.current = null;
            addDragHandlers(watchCursor, () => {
                onChange(next.current);
            });
        },
        [onChange]
    );

    return (
        <div
            ref={$node}
            className={s.point}
            style={{
                top: `${top * 100}%`,
                left: `${left * 100}%`
            }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
        >
            <div className={s.triangle} />
            <div className={s.tag}>{children}</div>
        </div>
    );
};

Tag.propTypes = {
    top: pt.number.isRequired,
    left: pt.number.isRequired,
    onChange: pt.func
};

Tag.defaultProps = {
    onChange: () => {}
};

export default Tag;
