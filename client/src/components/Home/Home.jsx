import Navbar from "../Navbar/Navbar"
import "./Home.css"
import spider from '../images/spider.jpg'
import hulu from '../images/hulu.jpg'
import bear from '../images/bear.jpg'
import fire from '../images/fire.jpg'
import batman from '../images/batman.jpg'
import girls from "../images/girls.jpg"
import dog from '../images/dog.jpg'
import shot from '../images/shot.jpg'
import Now from './Now'
import smith from '../images/willsmith.jpg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function Home() {
    
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="first">
                        <div className='follow'>
                        <div dir='rtl' lang='ar'>
                            <div className='p'>
                            <p>تابع ايجي بست</p>
                            </div>
                            <div className='a'>
                                <p><i class="fab fa-facebook" aria-hidden="true"></i> EgyBestOnline</p>
                                <p><i class="fab fa-twitter" aria-hidden="true"></i> EgyBestOnline </p>
                            </div>
                            </div>
                        </div>
                        <div className='film'>
                        <div dir='rtl' lang='ar'>
                            <button>افلام 2022</button>
                            <button>افلام 2022</button> <br />
                            <button> افلام بلورى</button>
                            <button>افلام HD</button><br />
                            <button>افلام  مترجمة</button>
                            <button>افلام امريكية</button> <br />
                            <button>افلام  عربية</button>
                            <button>افلام  مصرية</button><br />
                            <button>افلام  كورية</button>
                            <button>افلام  هندية</button> <br />
                            <button>افلام  يابنية</button>
                            <button>افلام  اسيوية</button><br />

                            <button>افلام  رعب</button>
                            <button>افلام  اكشن</button> <br />
                            <button>افلام رومانسية</button>
                            <button>افلام  كومدية</button><br />
                            <button>افلام  كومدية</button>
                            <button>افلام  الخيال العلمي</button> <br />

                            <button>افلام  رعب</button>
                            <button>افلام  اكشن</button> <br />
                            <button>افلام رومانسية</button>
                            <button>افلام  كومدية</button><br />
                            <button>افلام  كومدية</button>
                            <button>افلام  الخيال العلمي</button> <br />

                            <button>افلام  رعب</button>
                            <button>افلام  اكشن</button> <br />
                            <button>افلام رومانسية</button>
                            <button>افلام  كومدية</button><br />
                            <button>افلام  كومدية</button>
                            <button>افلام  الخيال العلمي</button> <br />

                            <button>افلام  رعب</button>
                            <button>افلام  اكشن</button> <br />
                            <button>افلام رومانسية</button>
                            <button>افلام  كومدية</button><br />
                            <button>افلام  كومدية</button>
                            <button>افلام  الخيال العلمي</button> <br />

                            <button>افلام  رعب</button>
                            <button>افلام  اكشن</button> <br />
                            <button>افلام رومانسية</button>
                            <button>افلام  كومدية</button><br />
                            <button>افلام  كومدية</button>
                            <button>افلام  الخيال العلمي</button> <br />
                            
                            
                            
                         
                            </div>
                        </div>
                    </div>

                    <div className="second">
                    <div dir='rtl' lang='ar'>
                       <h1>مرحباً بكم في موقع ايجي بست الاصلي</h1>

                    </div>
                    <div className='series'>
                    <div dir='rtl' lang='ar'>
                        <ul>
                 
                        <Link to='/'><li className="now">الأفلام الاكثر مشاهدة</li></Link>
                    <Link to='/Now'><li className="now">   الان</li></Link>
                    <Link to='/Today'><li className="today">اليوم</li></Link>
                    <li>هذا الاسبوع</li>
                    <li>هذا الشهر</li>
                        </ul>
                        </div>
                        <div className='parentt'>
                        <div className='childd'>
                            <img src={spider} alt='spiderman'/>
                            <p>spider-man no way home (2021)</p>
                        </div>
                        <div className='childd'>
                            <img src={shot} alt='spiderman'/>
                            <p>shot coller (2022)</p>

                        </div>
                        <div className='childd'>
                            <img src={hulu} alt='spiderman'/>
                            <p>deep water</p>

                        </div>

                        <div className='childd'>
                            <img src={bear} alt='spiderman'/>
                            <p>turning red (2022)</p>

                        </div>

                        <div className='childd'>
                            <img src={fire} alt='spiderman'/>
                            <p>uncharted</p>

                        </div>
                        <div className='childd'>
                            <img src={batman} alt='spiderman'/>
                            <p>batman</p>

                        </div>

                        <div className='childd'>
                            <img src={girls} alt='spiderman'/>
                            <p>very good girls</p>

                        </div>

                        <div className='childd'>
                            <img src={dog} alt='spiderman'/>
                            <p>doog</p>
                        </div>

                        <div className='childd'>
                            <img src={dog} alt='spiderman'/>
                            <p>doog</p>

                        </div>

                        <div className='childd'>
                            <img src={dog} alt='spiderman'/>
                            <p>doog</p>

                        </div>

                        <div className='childd'>
                            <img src={dog} alt='spiderman'/>
                            <p>doog</p>

                        </div>

                        <div className='childd'>
                            <img src={dog} alt='spiderman'/>
                            <p>doog</p>

                        </div>
                    </div>
                    </div>
                    
                    </div>


                    <div className="third">
                    <div dir='rtl' lang='ar'>
                       <div className='infos'>
                           <button>ايجي بيست</button>
                           <button>الاكثر مشاهدة</button>
                           <button>افلام</button>
                           <button>مسلسلات</button>
                           <button> 💪 المصارعة الحرة    </button>
                           <button> 😆 مسرحيات</button>
                           <button>مكتبتي</button>
                         </div>
                       </div>
                    </div>
                
                
                
                
                
                </div>
            </div>
        );
    
}

export default Home;