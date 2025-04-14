//IMAGES
import clock from '../images/clock-gold.svg';

// STYLES
import './TrainingGroup.scss';

export default function TrainingGroup(props: {name: string, groupPhoto: string, league?: string, years: Array<string>, trainerName: string, trainerNumber: string, trainerPhoto: string, trainings: Array<{day:string, hour: string}>}) {
    return (
        <section className="training-group">

            <header className="title">
                <h2>{props.name}</h2>
                <p>{props.league}</p>
            </header>
            <section className='training-group-blocks'>
                <section className='training-group-blocks-info'>
                    <section className="training-group-blocks-info-trainer">
                        <section className="training-group-blocks-info-trainer-picture">
                            <img className="training-group-blocks-info-trainer-img" src={props.trainerPhoto} alt="Trener grupy" />
                        </section>
                        <section className="training-group-blocks-info-trainer-info">
                            <h3 className='training-group-blocks-info-trainer-name'>{props.trainerName}</h3>
                            <p><a className="training-group-blocks-info-trainer-name-number" href={"tel:"+props.trainerNumber}>{props.trainerNumber}</a></p>
                        </section>
                    </section>
                    <section className="training-group-blocks-info-bottom-trainings">
                        {
                            props.trainings.map((training, key) =>
                                <section className="time" id={key.toString()}>
                                    <div>
                                        <p className='training-group-blocks-info-day'>{training.day}</p>
                                        <p className='training-group-blocks-info-hour'>{training.hour}</p>
                                    </div>
                                </section>
                            )
                        }
                    </section>
                    <section className="training-group-blocks-info-bottom-years">
                        <p className='training-group-blocks-info-day'>Roczniki</p>
                        <section className='training-group-blocks-info-bottom-years-years'>
                        {
                            props.years.map((year) => <p>{year}</p>)
                        }
                        </section>
                    </section>
                </section>
                <section className='training-group-blocks-info-mobile'>
                    <section className='up'>
                        <section className="training-group-blocks-info-trainer">
                            <section className="training-group-blocks-info-trainer-picture">
                                <img className="training-group-blocks-info-trainer-img" src={props.trainerPhoto} alt="Trener grupy" />
                            </section>
                        </section>
                        <section className="training-group-blocks-info-trainer-info">
                                <h3 className='training-group-blocks-info-trainer-name'>{props.trainerName.split(' ')[0]}</h3>
                                <h3 className='training-group-blocks-info-trainer-name'>{props.trainerName.split(' ')[1]}</h3>
                                <p><a className="training-group-blocks-info-trainer-name-number" href={"tel:"+props.trainerNumber}>{props.trainerNumber}</a></p>
                            </section>
                        <section className="training-group-blocks-info-bottom-years">
                            <p className='training-group-blocks-info-year'>Roczniki</p>
                            <section className='training-group-blocks-info-bottom-years-years'>
                            {
                                props.years.map((year) => <p>{year}</p>)
                            }
                            </section>
                        </section>
                    </section>
                    <section className="training-group-blocks-info-bottom-trainings">
                        {
                            props.trainings.map((training, key) =>
                                <section className="time" id={key.toString()}>
                                    <div>
                                        <p className='training-group-blocks-info-day'>{training.day}</p>
                                        <p className='training-group-blocks-info-hour'>{training.hour}</p>
                                    </div>
                                </section>
                            )
                        }
                    </section>
                </section>
                <section className='training-group-blocks-picture'>
                    <img className="training-group-blocks-picture-img" src={props.groupPhoto} alt='zdjecie'/>
                </section>
            </section>
        </section>
    )
}