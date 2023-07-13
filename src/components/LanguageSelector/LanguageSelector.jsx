
import {useAtom} from "jotai";
import {FormattedMessage} from "react-intl";
import messages from './LanguageSelector.messages.js'
import {localeAtom} from "../Localized/localeAtom.js";

function LanguageSelector() {

    const [locale, setLocale] = useAtom(localeAtom);

    const handleChange = event => {
        const {value = 'en'} = event.currentTarget;
        setLocale(value);
    }


   return (
      <select onChange={handleChange} value={locale}>
          <option value={'en'}><FormattedMessage {...messages.english}/></option>
          <option value={'de'}><FormattedMessage {...messages.german}/></option>
          <option value={'fr'}><FormattedMessage {...messages.french}/></option>
      </select>   )
}

export default LanguageSelector;
