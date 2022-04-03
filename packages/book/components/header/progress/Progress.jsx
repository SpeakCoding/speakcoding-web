import React, { Fragment, useMemo } from 'react';
import classNames from 'classnames';
import { Accordion, Drawer, Icon, Link } from '@sc/ui';
import { round } from '@sc/tools/number';
import { useApp } from '../../../tools';
import L from '../../localize';
import assignments from '../../../assignments';
import s from './progress.css';

const percents = value => Math.min(100, round(value * 100, 0));

const Progress = () => {
    const { courses, profile } = useApp(),
        maxNumber = profile.is_paid ? profile.group.last_chapter_number : 1,
        lang = localStorage.getItem('lang');

    const progress = useMemo(() => {
        let groups = Object.keys(assignments[lang]).reduce((memo, id) => {
            const assignment = assignments[lang][id],
                answers = courses[lang]?.assignments?.[id] || [],
                group = memo[assignment.chapter] || [];

            group.push({
                id,
                done: answers.length === assignment.questions.length
            });

            return { ...memo, [assignment.chapter]: group };
        }, {});

        const overall = { total: 0, done: 0 };

        groups = Object.keys(groups)
            .sort((a, b) => a - b)
            .map(chapter => {
                const items = groups[chapter],
                    countDone = items.filter(item => item.done).length;

                overall.total += items.length;
                overall.done += countDone;

                return {
                    chapter: parseInt(chapter, 10),
                    progress: percents(countDone / items.length),
                    items
                };
            });

        return {
            groups,
            available: groups.filter(item => item.chapter <= maxNumber),
            unavailable: groups.filter(item => item.chapter > maxNumber),
            overall: percents(overall.done / overall.total),
            expanded: courses[lang]?.pos?.chapter
        };
    }, [courses, maxNumber]);

    const getLink = ({ chapter }, { id, done }) =>
        `/${lang}/chapter-${chapter}?assignment=${id}&action=${done ? 'review' : 'edit'}`;

    return (
        <>
            <h3 className={s.overall}>
                <div>
                    <L lang='en'>Overall progress:</L>
                    <L lang='ru'>Общий прогресс:</L>
                </div>
                <div>{progress.overall}%</div>
            </h3>

            <div className={s.bar}>
                <div className={s.done} style={{ width: `${progress.overall}%` }} />
            </div>

            <Drawer.ScrollView>
                <Accordion key={progress.expanded}>
                    {progress.available.map(group => (
                        <Fragment key={group.chapter}>
                            <div className={s.label}>
                                <Accordion.Label
                                    name={group.chapter}
                                    align='center'
                                    expanded={progress.expanded === group.chapter}
                                >
                                    <Accordion.Arrow />
                                    <h3 className={s.chapter}>
                                        <div>
                                            <L lang='en'>Chapter #</L>
                                            <L lang='ru'>Глава №</L>
                                            {group.chapter}
                                        </div>
                                        <div>{group.progress}%</div>
                                    </h3>
                                </Accordion.Label>
                            </div>

                            <Accordion.Content name={group.chapter}>
                                <div>
                                    {group.items.map(assignment => (
                                        <div key={assignment.id} className={s.assignment}>
                                            <Icon
                                                name={
                                                    assignment.done
                                                        ? 'check-circle'
                                                        : 'exclamation-circle-filled'
                                                }
                                                size={24}
                                            />
                                            <div>
                                                <L lang='en'>Assignment #</L>
                                                <L lang='ru'>Задание №</L>
                                                {assignment.id}
                                            </div>
                                            <Link href={getLink(group, assignment)}>
                                                <div className={s.action}>
                                                    {assignment.done && (
                                                        <>
                                                            <L lang='en'>See review</L>
                                                            <L lang='ru'>Разбор</L>
                                                        </>
                                                    )}
                                                    {!assignment.done && (
                                                        <>
                                                            <L lang='en'>Do now</L>
                                                            <L lang='ru'>Пройти</L>
                                                        </>
                                                    )}
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </Accordion.Content>
                        </Fragment>
                    ))}
                </Accordion>

                {progress.unavailable.map(group => (
                    <Fragment key={group.chapter}>
                        <div className={classNames(s.label, s.disabled)}>
                            <Icon name='padlock-closed' size={24} />
                            <h3 className={s.chapter}>
                                <div>
                                    <L lang='en'>Chapter #</L>
                                    <L lang='ru'>Глава №</L>
                                    {group.chapter}
                                </div>
                            </h3>
                        </div>
                    </Fragment>
                ))}
            </Drawer.ScrollView>
        </>
    );
};

export default Progress;
