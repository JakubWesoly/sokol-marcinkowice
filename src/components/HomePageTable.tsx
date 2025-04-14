//STYLES
import './HomePageTable.scss'
import Swr from './Swr';

export default function HomePageTable() {

    function HomePageTable(){
        return (
            <>
                <table className='home-page-table'>
                    <tbody>
                        <tr>
                            <th className='home-page-table-mobile-position'>Poz.</th>
                            <th className='home-page-table-mobile-team-header'>Nazwa Zespołu</th>
                            <th className='home-page-table-mobile-points'>Punkty</th>
                            <th className='home-page-table-mobile-header'>Wygrane</th>
                            <th className='home-page-table-mobile-header'>Remisy</th>
                            <th className='home-page-table-mobile-header'>Porażki</th>
                            <th className='home-page-table-mobile-header'>B+</th>
                            <th className='home-page-table-mobile-header'>B-</th>
                            <th className='home-page-table-mobile-header'>BB</th>
                        </tr>
                        <tr>
                            <td className='home-page-table-mobile-position'>1</td>
                            <td className='home-page-table-mobile-team'>Polonia Jaszowice</td>
                            <td className='home-page-table-mobile-points'>68</td>
                            <td className='home-page-table-mobile-header'>22</td>
                            <td className='home-page-table-mobile-header'>2</td>
                            <td className='home-page-table-mobile-header'>4</td>
                            <td className='home-page-table-mobile-header'>36</td>
                            <td className='home-page-table-mobile-header'>62</td>
                            <td className='home-page-table-mobile-header'>96</td>
                        </tr>
                        <tr>
                            <td className='home-page-table-mobile-position'>11</td>
                            <td className='home-page-table-mobile-team'>GKS Kobierzyce</td>
                            <td className='home-page-table-mobile-points'>68</td>
                            <td className='home-page-table-mobile-header'>22</td>
                            <td className='home-page-table-mobile-header'>2</td>
                            <td className='home-page-table-mobile-header'>4</td>
                            <td className='home-page-table-mobile-header'>36</td>
                            <td className='home-page-table-mobile-header'>62</td>
                            <td className='home-page-table-mobile-header'>96</td>
                        </tr>
                        <tr>
                            <td className='home-page-table-mobile-position-sokol'>12</td>
                            <td className='home-page-table-mobile-team'>Sokół Marcinkowice</td>
                            <td className='home-page-table-mobile-points'>68</td>
                            <td className='home-page-table-mobile-header'>22</td>
                            <td className='home-page-table-mobile-header'>2</td>
                            <td className='home-page-table-mobile-header'>4</td>
                            <td className='home-page-table-mobile-header'>36</td>
                            <td className='home-page-table-mobile-header'>62</td>
                            <td className='home-page-table-mobile-header'>96</td>
                        </tr>
                        <tr>
                            <td className='home-page-table-mobile-position'>13</td>
                            <td className='home-page-table-mobile-team'>KS Semafor Brochów</td>
                            <td className='home-page-table-mobile-points'>68</td>
                            <td className='home-page-table-mobile-header'>22</td>
                            <td className='home-page-table-mobile-header'>2</td>
                            <td className='home-page-table-mobile-header'>4</td>
                            <td className='home-page-table-mobile-header'>36</td>
                            <td className='home-page-table-mobile-header'>62</td>
                            <td className='home-page-table-mobile-header'>96</td>
                        </tr>
                    </tbody>
                </table> 
                <Swr />
        </>)
    }

    return HomePageTable();
}