//STYLES
import './Switch.scss';

//IMPORTS
import { team } from './../atoms/team.tsx';
import { useStore } from '@nanostores/react'

export default function Switch(){
    function Switch(){
        const $team = useStore(team);

        return (
        <div className='switch'>
            <ul className='switch-list'>
                <li onClick={() => team.set('A Klasa')} className={$team == 'A Klasa' ? 'switch-list-item-selected' : 'switch-list-item'}>A Klasa</li>
                <p className='switch-list-separator'>|</p>
                <li onClick={() => team.set('B Klasa')} className={$team == 'B Klasa' ? 'switch-list-item-selected' : 'switch-list-item'}>B Klasa</li>
                <p className='switch-list-separator'>|</p>
                <li onClick={() => team.set('Junior Młodszy')} className={$team == 'Junior Młodszy' ? 'switch-list-item-selected' : 'switch-list-item'}>Junior Młodszy</li>
                <p className='switch-list-separator'>|</p>
                <li onClick={() => team.set('Młodzik')} className={$team == 'Młodzik' ? 'switch-list-item-selected' : 'switch-list-item'}>Młodzik</li>
            </ul>
        </div>)
    }

    return Switch();
}