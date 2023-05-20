import { stats } from '../constants';
import styles from '../styles';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-col sm:flex-row flex-wrap sm:mb-20 mb:6`}>
        {stats.map(stat => (
            <div className={`flex-1 ${styles.flexCenter} flex-col sm:flex-row mr-3`} key={stat.id}>
                <h4 className="font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white" >{stat.value}</h4>
                <p className='font-poppins font-normal text-[20px] xs:text-[15px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-3'>{stat.title}</p>
            </div>
        ))}
    </section>
)

export default Stats;
