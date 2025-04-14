
import invitation from '../images/zaproszenie.webp';
import closeIcon from  '../images/close.svg';

import './Invitation.scss'
    

export default function Inviation() {
function setCookie(name:string, value:string, expiresInDays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (expiresInDays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
}

function getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function closeInvitation() {
    const invitationDiv = document.querySelector('.youth-invitation');

    setCookie("youth", "closed", 14);
    if(invitationDiv) {
        (invitationDiv as HTMLDivElement).style.display = "none";
    }
}
    return (
        <>
        {
            getCookie("youth") === "" && 
            <div className="youth-invitation">
                <img src={closeIcon.src} alt="Zamknij" className="youth-invitation-close" onClick={closeInvitation} />
                <img src={invitation.src} alt="Prowadzimy nabór do grup młodzieżowych" className="youth-invitation-picture"/>
            </div>
        }
        </>
    )
}