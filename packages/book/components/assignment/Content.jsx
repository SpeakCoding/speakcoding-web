import React, { useCallback, useMemo, useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import { fixTabs } from '@sc/tools/code';
import { debounce } from '@sc/tools/function';
import { Code, Img, Radio, Textarea } from '@sc/ui';
import L, { useLocale } from '../localize';
import Markdown from '../quiz/blocks/Markdown';
import OpenNewTab from '../quiz/blocks/OpenNewTab';
import s from './assignment.css';

const Content = ({ answer, onChange, ...props }) => {
    const { ask, code, details, example, img, title, Asset } = props,
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
            <h2 className={s.label}>{title}</h2>

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
                    <Asset />
                </div>
            )}

            {ask && (
                <div className={s.text}>
                    <div>{ask}</div>
                    <div className={classNames(s.options, answer !== undefined && s.disabled)}>
                        <label className={s.option}>
                            <Radio
                                name='ask'
                                value={!answer && answer !== undefined}
                                disabled={answer !== undefined}
                                onChange={handleChangeAsk('yes')}
                            />
                            <L lang='en'>Yes</L>
                            <L lang='ru'>Да</L>
                        </label>
                        <label className={s.option}>
                            <Radio
                                name='ask'
                                value={!!answer}
                                disabled={answer !== undefined}
                                onChange={handleChangeAsk('no')}
                            />
                            <L lang='en'>No</L>
                            <L lang='ru'>Нет</L>
                        </label>
                    </div>
                </div>
            )}

            {showField && (
                <Textarea
                    autoheight
                    placeholder={placeholder}
                    readonly={answer !== undefined}
                    rows={1}
                    value={answer}
                    onChange={handleChange}
                />
            )}
        </>
    );
};

Content.propTypes = {
    answer: pt.string,
    ask: pt.string,
    code: pt.string,
    details: pt.string,
    example: pt.string,
    img: pt.string,
    title: pt.string,
    Asset: pt.func,
    onChange: pt.func
};

Content.defaultProps = {
    answer: undefined,
    ask: undefined,
    code: undefined,
    details: undefined,
    example: undefined,
    img: undefined,
    title: undefined,
    Asset: undefined,
    onChange: () => {}
};

export default Content;