import React, { useState } from 'react';
import { Button } from '@sc/ui';
import L from '../localize';
import PaymentModal from './PaymentModal';

const Skip = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button color='black' onClick={() => setOpened(true)}>
                <L lang='en'>Skip</L>
                <L lang='ru'>Skip</L>
            </Button>
            <PaymentModal opened={opened} onClose={() => setOpened(false)} />
        </>
    );
};

export default Skip;
