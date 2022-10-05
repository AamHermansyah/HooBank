import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';

const CardDeal = () => (
    <section className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni quaerat accusamus dicta et ratione! Beatae fugiat perspiciatis, distinctio sint odio non exercitationem possimus et.</p>
            <Button styles="mt-10 rounded-[10px]" />
        </div>
        <div className={`${layout.sectionImg}`}>
            <img src={card} alt="card" className='w-[100%] h-[100%]' />
        </div>
    </section>
)

export default CardDeal