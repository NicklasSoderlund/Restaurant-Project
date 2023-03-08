import { Button } from '../styled/Button';
import './contact.scss';

export function Contact() {

    return (
        <section className="contact">   

        <div className='contact__content'>

        <h3 className='colorClass'>Contact & Location</h3>
            <div className="contact__content__adress">
                <span className="contact__content__name, colorClass">Jucius Steaksar - New York City</span>
                <span className="contact__content__street">20 Cherryblossom Lane </span>
                <span className="contact__content__phone, colorClass">01287-100877</span>
            </div>

            <div>
                <Button color=''>Bajs</Button>
                <Button color=''>Bajs</Button>
            </div>

            <form action="">

                <div className='form__content'>
                
                <div className='form__inputs'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone'/>
                </div>
                <textarea name="" id="" cols={35} rows={7} placeholder="Type your message here"></textarea>

                </div>

                <Button color=''>Bajs</Button>

            </form>

            </div>
        </section>
    )
}