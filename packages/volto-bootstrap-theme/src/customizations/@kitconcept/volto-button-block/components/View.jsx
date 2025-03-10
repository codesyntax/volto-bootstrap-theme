import React from 'react';
import { ConditionalLink } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
// import './styles.scss';

const messages = defineMessages({
    ButtonText: {
        id: 'Button text',
        defaultMessage: 'Button text',
    },
});

const View = (props) => {
    const { data, isEditMode, blocksConfig } = props;
    const intl = useIntl();
    const isBlockModelv3 = blocksConfig?.__button?.blockModel === 3;

    const getButtonClasses = () => {
        let buttonClass = 'btn';

        if (data.button_type) {
            buttonClass += ` btn-${data.button_type}`;
        }

        if (data.Outline) {
            buttonClass = buttonClass.replace('btn-', 'btn-outline-');
        }

        if (data.size) {
            switch (data.size) {
                case "large":
                    buttonClass += ' btn-lg';
                    break;
                case "small":
                    buttonClass += ' btn-sm';
                    break;
                default:
                    break;
            }
        }

        return buttonClass;
    };

    const button = (
        <button className={getButtonClasses()}>
            {data.title || intl.formatMessage(messages.ButtonText)}
        </button>
    );

    return (
        <div className="button-container bootstrap-container">
            {isEditMode ? (
                button
            ) : data.href?.length > 0 ? (
                <ConditionalLink
                    to={data.href[0]?.['@id']}
                    condition={!isEditMode}
                    openLinkInNewTab={data.openLinkInNewTab}
                >
                    {button}
                </ConditionalLink>
            ) : (
                button
            )}
        </div>
    );
};

export default View;
