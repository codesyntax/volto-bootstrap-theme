import { getPreviousNextBlock } from '@plone/volto/helpers/Blocks/Blocks';
import { getCurrentStyleByName } from '../helpers/helpers';

export default function install(config) {

  config.settings.styleClassNameExtenders = config.settings.styleClassNameExtenders || [];

  config.settings.styleClassNameExtenders.unshift(
    ({ data, classNames }) => [...classNames, 'block', 'caracol'],
  );

  config.settings.styleClassNameExtenders.push(
    ({ block, content, data, classNames }) => {
      const styles = [];
      const [prev, next] = getPreviousNextBlock({ content, block });
      if (!data?.__isFooter) {
        if (next?.['@type']) {
          styles.push(`next--is--${next['@type']}`);
        }
        if (data?.['@type'] === prev?.['@type']) {
          styles.push('previous--is--same--block-type');
        }
        if (data?.['@type'] === next?.['@type']) {
          styles.push('next--is--same--block-type');
        }
        if (data?.['@type'] !== prev?.['@type']) {
          styles.push('is--first--of--block-type');
        }
        if (data?.['@type'] !== next?.['@type']) {
          styles.push('is--last--of--block-type');
        }
        if (data?.headline || prev?.['@type'] === 'heading') {
          styles.push('has--headline');
        }
      }
      const prevColor = prev?.theme || 'default';
      const curColor = data?.theme || 'default';
      const nextColor = next?.theme || 'default';

      styles.push(
        curColor === prevColor
          ? 'previous--has--same--backgroundColor'
          : 'previous--has--different--backgroundColor',
      );
      styles.push(
        curColor === nextColor
          ? 'next--has--same--backgroundColor'
          : 'next--has--different--backgroundColor',
      );

      return [...classNames, ...styles];
    },
  );

  config.settings.styleClassNameExtenders.push(
    ({ data, classNames }) => {
      const bw = getCurrentStyleByName(config.blocks.widths, 'blockWidth:noprefix', data) || 'default';
      return [...classNames, `has--block-width--${bw}`];
    },
  );

  config.settings.styleClassNameExtenders.push(
    ({ data, classNames }) => {
      const bg = data?.theme || 'default';
      return [...classNames, `has--background-color--${bg}`];
    },
  );


  config.settings.styleClassNameExtenders.push(
    ({ data, classNames }) => {
      const blockType = data?.['@type'];
      const isFooter = data?.__isFooter;
      return isFooter && blockType
        ? [...classNames, `COCOTERO----${blockType}`]
        : classNames;
    },
  );
  return config;
}
