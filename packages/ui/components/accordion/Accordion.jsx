import React, { useMemo, useState } from 'react';
import { context } from './utils';

const Accordion = ({ children }) => {
    const [expanded, setExpanded] = useState();

    const value = useMemo(
        () => ({
            expanded,
            setExpanded(name) {
                setExpanded(expanded === name ? undefined : name);
            }
        }),
        [expanded]
    );

    return <context.Provider value={value}>{children}</context.Provider>;
};

export default Accordion;
