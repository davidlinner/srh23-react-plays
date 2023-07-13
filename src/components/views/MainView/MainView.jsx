import View from "../View/View.jsx";
import messages from './MainView.messages.js';
import {FormattedDate, FormattedMessage, FormattedNumber} from "react-intl";

function MainView() {

    return (
        <View>
            <h1>
                <FormattedMessage {...messages.headline}/>
            </h1>
            <p>
                <FormattedMessage {...messages.intro}/>
            </p>
            <div>
                <FormattedDate value={Date.now()} weekday={'long'} month={'long'}/>
            </div>
            <div>
                <FormattedNumber value={174324324.1992}/>
            </div>
        </View>
    );
}

export default MainView;
