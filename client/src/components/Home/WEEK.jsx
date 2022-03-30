import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Home from './Home';
import "./Home.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import FolderIcon from '@material-ui/icons/Folder';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import dato from '../Data/Week.json'

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


                        {dato.map((datas) => ( 
                        <>
                              <div className='childd'>
                            <img key={datas.id}  src={datas.image} />
                            <p key={datas.id}>{datas.title}</p>
                        </div>                       
                         </>
                    ))}
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