import React, { useCallback, useRef } from 'react';
import pt from 'prop-types';
import { addDragHandlers, getCursorPosition } from './utils';
import s from './tag-people.css';

const Tag = ({ top, left, children, onMove }) => {
    const $node = useRef(null),
        delta = useRef({});

    function watchCursor(event) {
        const { x, y } = getCursorPosition(event),
            rect = $node.current.parentElement.getBoundingClientRect();

        const next = {
            top: Math.min(Math.max((y - delta.current.y - rect.y) / rect.height, 0), 1),
            left: Math.min(Math.max((x - delta.current.x - rect.x) / rect.width, 0), 1)
        };

        $node.current.style.top = `${next.top * 100}%`;
        $node.current.style.left = `${next.left * 100}%`;
        onMove(next);
    }

    const handleDragStart = useCallback(
        event => {
            event.stopPropagation();

            const cursor = getCursorPosition(event),
                point = $node.current.getBoundingClientRect();

            delta.current = { x: cursor.x - point.x, y: cursor.y - point.y };
            addDragHandlers(watchCursor);
        },
        [onMove]
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
    onMove: pt.func
};

Tag.defaultProps = {
    onMove: () => {}
};

export default Tag;
