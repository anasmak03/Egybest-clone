import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from './Home';
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
import love from '../images/love.jpg'
import coda from '../images/code.jpg'
import json from '../images/json.jpg'
import dune from '../images/dune.jpg'
import death from '../images/death.jpg'
import disney from '../images/disney.jpg'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import FolderIcon from '@material-ui/icons/Folder';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Today(){
    
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
              
                  
                        <Link to='/'><li> <TrendingUpIcon />الأفلام الاكثر مشاهدة</li></Link>
                    <Link to='/Now'><li className="now"> <TrendingUpIcon />   الان</li></Link>
                    <Link to='/Today'><li className="today">  <TrendingUpIcon />اليوم</li></Link>
                    <Link to='/WEEK'><li className='today'>  <TrendingUpIcon />هذا الاسبوع</li></Link>
                  <Link to='/Month'>  <li className='today'>  <TrendingUpIcon />هذا الشهر</li></Link> 
                        </ul>
                        </div>
                        <div className='parentt'>
                        <div className='childd'>
                            <img src={dune} alt='spiderman'/>
                            <p>Dune</p>

                        </div>
                        <div className='childd'>
                            <img src={love} alt='spiderman'/>
                            <p>love & other drugs (2022)</p>

                        </div>
                        <div className='childd'>
                            <img src={smith} alt='spiderman'/>
                            <p>King Richard (2021)</p>
                        </div>
                        <div className='childd'>
                            <img src={death} alt='spiderman'/>
                            <p>Death of the nile</p>

                        </div>
                       
                        <div className='childd'>
                            <img src={coda} alt='spiderman'/>
                            <p>coda (2021)</p>

                        </div>

                        <div className='childd'>
                            <img src={json} alt='spiderman'/>
                            <p>wrath of man (2022)</p>

                        </div>

                       
                      
                     
                        <div className='childd'>
                            <img src={disney} alt='spiderman'/>
                            <p>Disney Encanio</p>
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
                    </div>
                    </div>
                    
                    </div>


                    <div className="third">
                    <div dir='rtl' lang='ar'>
                    <div className='infos'>
                           <button> <HomeIcon id="iconhome"/>&nbsp;ايجي بيست</button>
                           <button>الاكثر مشاهدة</button>
                           <button> <MovieIcon id="iconhome"/>&nbsp;افلام</button>
                           <button> <TvIcon id="iconhome" />&nbsp;مسلسلات</button>
                           <button> 💪 المصارعة الحرة </button>
                           <button> 😆 مسرحيات</button>
                           <button> <FolderIcon id="folder"/> &nbsp;مكتبتي</button>
                         </div>
                       </div>
                    </div>
                
                
                
                
                
                </div>
            </div>
        );
    
}

export default Today;