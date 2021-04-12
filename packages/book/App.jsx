import React from 'react';
import { Callout, Term } from '@sc/ui';
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
                    {[...Array(3)].map((_, i) => (
                        <P key={i} />
                    ))}
                    <Callout>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                    </Callout>
                    <p>
                        Lorem ipsum dolor sit amet,{' '}
                        <Term>
                            consectetur
                            <Term.Tooltip>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. <br />
                                <a href='#'>Glossary</a>
                            </Term.Tooltip>
                        </Term>{' '}
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    {[...Array(5)].map((_, i) => (
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
                    {[...Array(3)].map((_, i) => (
                        <P key={i} />
                    ))}
                    <p>
                        Lorem ipsum dolor sit amet,{' '}
                        <Term>
                            consectetur
                            <Term.Tooltip>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. <br />
                                <a href='#'>Glossary</a>
                            </Term.Tooltip>
                        </Term>{' '}
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    {[...Array(5)].map((_, i) => (
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
