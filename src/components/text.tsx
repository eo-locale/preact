import { IFormatMessageOptions } from '@eo-locale/core';
import { FunctionalComponent, h } from 'preact';

import { EOLocaleContext } from '../context';

export interface IEOLocaleTextProps extends IFormatMessageOptions {
  id: string;

  html?: boolean;
}

export const EOLocaleText: FunctionalComponent<IEOLocaleTextProps> = ({
  children,
  html,
  id,
  ...values
}) => {
  return (
    <EOLocaleContext.Consumer>
      {context => {
        const result = context.translator.translate(id, values);

        if (html) {
          return <span dangerouslySetInnerHTML={{ __html: result }} />;
        }

        return result;
      }}
    </EOLocaleContext.Consumer>
  );
};
