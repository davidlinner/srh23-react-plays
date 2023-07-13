import './App.css'

import MainView from "./components/views/MainView/MainView.jsx";
import ProfileView from "./components/views/ProfileView/ProfileView.jsx";
import {Link, Route, Switch} from "wouter";
import DataView from "./components/views/DataView/DataView.jsx";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector.jsx";
import FormVariantsView from "./components/views/FormVariantsView/FormVariantsView.jsx";


function App() {

    return (
        <>
            <header className={'navigation'}>
                <Link href={"/"}>
                    <a className={'navigation-item'}>I18n</a>
                </Link>
                <Link href={"/forms"}>
                    <a className={'navigation-item'}>Forms</a>
                </Link>
                <Link href={"/data"}>
                    <a className={'navigation-item'}>Data</a>
                </Link>
                <Link href={"/profile/1"}>
                    <a className={'navigation-item'}>Routing</a>
                </Link>
                <LanguageSelector/>
            </header>
            <Switch>
                <Route path="/profile/:profileId" component={ProfileView}/>
                <Route path="/data" component={DataView}/>
                <Route path="/forms" component={FormVariantsView}/>
                <Route path="/" component={MainView}/>
            </Switch>
        </>
    )
}

export default App