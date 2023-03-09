import { Button } from '../styled/Button';
import './contact.scss';



export function Contact() {

    return (
        <section className="contact">   

        <div className='contact__content'>

        <h3 className='colorClass'>Contact and Location</h3>
            <div className="contact__content__adress">
                <span className="contact__content__name, colorClass">Jucius Steaksar - New York City</span>
                <span className="contact__content__street">20 Cherryblossom Lane </span>
                <span className="contact__content__phone, colorClass">01287-100877</span>
            </div>

            <div className='contact__buttons'>
              <a href="http://maps.google.com/?q=Clinton Street, Brooklyn, NY, USA"> <Button color='#C67B47' width='' textColor='black'>Directions</Button> </a>
               <a href="tel:123-123-1234"> <Button color='' width='' textColor=''>Call</Button> </a>
            </div>

            <form action="">

                <div className='form__content'>
                
                <div className='form__inputs'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone'/>
                </div>
                <textarea name="" id="" rows={10} placeholder="Type your message here"></textarea>

                </div>

              <div> <Button color='' width='11em' textColor=''>Submit</Button>  </div> 

            </form>

            </div>
        </section>
    )
}