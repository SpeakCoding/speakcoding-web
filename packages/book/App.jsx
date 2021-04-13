import React from 'react';
import { Callout, Highlight, Hint } from '@sc/ui';
import { Header, Layout, Section } from './components';

const P = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
    </p>
);

const App = () => {
    return (
        <Layout>
            <Header>azaza</Header>

            <Section>
                <Section.Main>
                    {[...Array(2)].map((_, i) => (
                        <P key={i} />
                    ))}
                    <Callout>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                    </Callout>
                    <p>
                        Lorem ipsum <Highlight label='l1'>dolor</Highlight> sit amet, consectetur
                        adipiscing elit,{' '}
                        <Highlight color='blue' label='l2'>
                            sed
                        </Highlight>{' '}
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud{' '}
                        <Highlight color='blue' label='l2'>
                            exercitation
                        </Highlight>{' '}
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet,{' '}
                        <Hint>
                            consectetur
                            <Hint.Tooltip>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. <br />
                                <a href='#'>Glossary</a>
                            </Hint.Tooltip>
                        </Hint>{' '}
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    {[...Array(2)].map((_, i) => (
                        <P key={i} />
                    ))}
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>ololo</Section.Sticky>
                </Section.Side>
            </Section>
            <Section.Divider />
            <Section>
                <Section.Main>
                    {[...Array(10)].map((_, i) => (
                        <P key={i} />
                    ))}
                </Section.Main>
                <Section.Side>
                    <Section.Sticky>azaza</Section.Sticky>
                </Section.Side>
            </Section>
        </Layout>
    );
};

export default App;
