import React, { Fragment, useMemo } from 'react';
import classNames from 'classnames';
import qs from 'qs';
import { Accordion, Drawer, Icon, Link } from '@sc/ui';
import { round } from '@sc/tools/number';
import { useApp } from '../../../tools';
import L from '../../localize';
import assignments from '../../../assignments';
import quizzes from '../../../quizzes';
import { structure } from './constants';
import Circle from './Circle';
import s from './progress.css';

const percents = value => Math.min(100, round(value * 100, 0));

const Progress = () => {
    const { courses, profile } = useApp(),
        lang = localStorage.getItem('lang'),
        maxNumber = profile.group.last_chapter_number;

    const progress = useMemo(() => {
        const overall = { total: 0, done: 0 };

        const groups = structure.map(chapter => {
            const items = chapter.items.map(item => {
                let done = false,
                    review = false;

                if (item.type === 'assignment') {
                    const assignment = assignments[lang][item.id];
                    review = !!assignment.review;
                    done =
                        assignment.questions.length ===
                        (courses[lang]?.assignments?.[item.id] || []).length;
                }

                if (item.type === 'quiz') {
                    done =
                        quizzes[lang][item.id].questions.length ===
                        (courses[lang]?.quizzes?.[item.id] || []).length;
                }

                return {
                    key: `${item.type}-${item.id}`,
                    id: item.id,
                    type: item.type,
                    done,
                    review,
                    linkReview:
                        review &&
                        `/${lang}/chapter-${chapter.id}?${qs.stringify({
                            [item.type]: item.id,
                            action: 'review'
                        })}`,
                    linkEdit: `/${lang}/chapter-${chapter.id}?${qs.stringify({
                        [item.type]: item.id,
                        action: 'edit'
                    })}`
                };
            });

            const countDone = items.filter(item => item.done).length;

            overall.total += items.length;
            overall.done += countDone;

            return {
                chapter: chapter.id,
                progress: items.length > 0 ? percents(countDone / items.length) : 100,
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

    return (
        <>
            <h3 className={s.overall}>
                <div>
                    <L lang='en'>Your progress:</L>
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
                                        <Circle value={group.progress} />
                                    </h3>
                                </Accordion.Label>
                            </div>

                            <Accordion.Content name={group.chapter}>
                                <div>
                                    {group.items.map(item => (
                                        <div key={item.key} className={s.item}>
                                            <div className={s.status}>
                                                {item.done && (
                                                    <Icon name='check-circle' size={24} />
                                                )}
                                            </div>

                                            {item.type === 'assignment' && (
                                                <div>
                                                    <L lang='en'>Assignment #</L>
                                                    <L lang='ru'>Задание №</L>
                                                    {item.id}
                                                </div>
                                            )}
                                            {item.type === 'quiz' && (
                                                <div>
                                                    <L lang='en'>Quiz #</L>
                                                    <L lang='ru'>Тест №</L>
                                                    {item.id}
                                                </div>
                                            )}

                                            <div className={s.actions}>
                                                {item.done && item.type === 'assignment' && (
                                                    <>
                                                        <Link href={item.linkEdit}>
                                                            <Icon name='pencil' size={24} />
                                                        </Link>

                                                        {item.review && (
                                                            <Link href={item.linkReview}>
                                                                <Icon
                                                                    name='play-circle'
                                                                    size={24}
                                                                />
                                                            </Link>
                                                        )}
                                                    </>
                                                )}

                                                {item.done && item.type === 'quiz' && (
                                                    <Link href={item.linkEdit}>
                                                        <Icon name='play-circle' size={24} />
                                                    </Link>
                                                )}

                                                {!item.done && (
                                                    <Link href={item.linkEdit}>
                                                        <span className={s.do}>
                                                            <L lang='en'>Do now</L>
                                                            <L lang='ru'>Пройти</L>
                                                        </span>
                                                    </Link>
                                                )}
                                            </div>
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
