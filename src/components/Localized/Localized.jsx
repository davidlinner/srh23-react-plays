import {IntlProvider} from "react-intl";

import messages_de from '../../../lang/de.json';
import messages_fr from '../../../lang/fr.json';
import messages_en from '../../../lang/en.json';
import {useAtom} from "jotai";
import PropTypes from "prop-types";
import {localeAtom} from "./localeAtom.js";

const DEFAULT_LOCALE = 'en';

const MESSAGES = {
    'de': messages_de,
    'fr': messages_fr,
    'en': messages_en,
}


export default function Localized({children}) {
    const [locale] = useAtom(localeAtom);

    return (
        <IntlProvider locale={locale} defaultLocale={DEFAULT_LOCALE} messages={MESSAGES[locale]}>
            {children}
        </IntlProvider>
    )
}

Localized.propTypes = {
    children: PropTypes.node,
}
