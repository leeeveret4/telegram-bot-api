import React from 'react';
import Button from "../button/button";
import {useTelegram} from "../../Hooks/useTelegram";

const Header = () => {
    const tg = window.Telegram.WebApp;
 const  { user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;