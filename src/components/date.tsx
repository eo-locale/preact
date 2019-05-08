import { Translator } from '@eo-locale/core';
import { FunctionalComponent, h } from 'preact';

import { EOLocaleContext } from '../context';

export interface IEOLocaleDateProps extends Intl.DateTimeFormatOptions {
  value: Date;

  language?: string;
}

export const EOLocaleDate: FunctionalComponent<IEOLocaleDateProps> = ({
  children,
  language,
  value,
  ...options
}) => {
  return (
    <EOLocaleContext.Consumer>
      {context => {
        if (language && language !== context.language) {
          return new Translator(language).formatDate(value, options);
        }

        return context.translator.formatDate(value, options);
      }}
    </EOLocaleContext.Consumer>
  );
};
