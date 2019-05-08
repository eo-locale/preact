import { Translator } from '@eo-locale/core';
import { FunctionalComponent, h } from 'preact';

import { EOLocaleContext } from '../context';

export interface IEOLocaleNumberProps extends Intl.NumberFormatOptions {
  value: number;

  language?: string;
}

export const EOLocaleNumber: FunctionalComponent<IEOLocaleNumberProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <EOLocaleContext.Consumer>
      {context => {
        if (language && language !== context.language) {
          return new Translator(language).formatNumber(value, options);
        }

        return context.translator.formatNumber(value, options);
      }}
    </EOLocaleContext.Consumer>
  );
};
