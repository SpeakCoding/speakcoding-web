import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import { fixTabs } from '@sc/tools/code';
import { debounce } from '@sc/tools/function';
import { Code, Img, Radio, Textarea } from '@sc/ui';
import L, { useLocale } from '../localize';
import Markdown from '../quiz/blocks/Markdown';
import OpenNewTab from '../quiz/blocks/OpenNewTab';
import s from './assignment.css';

const Content = ({ question, answer, hideAnswer, hideLabel, onChange }) => {
    const { ask, code, details, example, img, title, Asset } = question,
        formattedCode = useMemo(() => (code ? fixTabs(code) : null), [code]),
        { choose } = useLocale(),
        [showField, setShowField] = useState(!ask || !!answer);

    const placeholder = choose({
        en: ask ? 'Please describe the difficulties you encountered' : 'Your answer',
        ru: ask ? 'Опишите, с какими сложностями вы столкнулись' : 'Ваш ответ'
    });

    const handleChange = useCallback(
        debounce(value => {
            onChange(value || undefined);
        }, 300),
        [onChange]
    );

    const handleChangeAsk = value => () => {
        setShowField(value === 'no');
        onChange(value === 'yes' ? '' : undefined);
    };

    return (
        <>
            {!hideLabel && (
                <h3 className={s.label}>
                    <Markdown>{title}</Markdown>
                </h3>
            )}

            {details && (
                <div className={s.text}>
                    <Markdown>{details}</Markdown>
                </div>
            )}

            {img && (
                <div className={s.img}>
                    <OpenNewTab url={img}>
                        <Img src={img} />
                    </OpenNewTab>
                </div>
            )}

            {example && (
                <div className={s.text}>
                    <b>
                        <L lang='en'>Example:</L>
                        <L lang='ru'>Пример:</L>
                    </b>
                    <br />
                    {example}
                </div>
            )}

            {formattedCode && (
                <div className={s.code}>
                    <Code value={formattedCode} />
                </div>
            )}

            {Asset && (
                <div className={s.asset}>
                    <Asset answer={answer} onChange={handleChange} />
                </div>
            )}

            {ask && (
                <div className={s.text}>
                    <div>{ask}</div>
                    {!hideAnswer && (
                        <div className={s.options}>
                            <label className={s.option}>
                                <Radio
                                    name='ask'
                                    value={!answer && answer !== undefined}
                                    onChange={handleChangeAsk('yes')}
                                />
                                <L lang='en'>Yes</L>
                                <L lang='ru'>Да</L>
                            </label>
                            <label className={s.option}>
                                <Radio
                                    name='ask'
                                    value={!!answer}
                                    onChange={handleChangeAsk('no')}
                                />
                                <L lang='en'>No</L>
                                <L lang='ru'>Нет</L>
                            </label>
                        </div>
                    )}
                </div>
            )}

            {!hideAnswer && showField && (
                <Textarea
                    autoheight
                    placeholder={placeholder}
                    rows={1}
                    value={answer}
                    onChange={handleChange}
                />
            )}
        </>
    );
};

Content.propTypes = {
    answer: pt.oneOfType([pt.string, pt.array]),
    hideAnswer: pt.bool,
    hideLabel: pt.bool,
    question: pt.object.isRequired,
    onChange: pt.func
};

Content.defaultProps = {
    answer: undefined,
    hideAnswer: false,
    hideLabel: false,
    onChange: () => {}
};

export default Content;
