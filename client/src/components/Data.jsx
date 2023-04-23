import { Link } from 'react-router-dom';
import getStarted1 from '../images/home1.jpg';
import getStarted2 from '../images/home2.jpg';
import getStarted3 from '../images/home3.jpg';
import getStarted4 from '../images/home4.jpg';
import slider1 from '../images/contact1.jpg';
import slider2 from '../images/contact2.jpg';
import slider3 from '../images/contact3.jpg';
import img1 from "../images/justin.jpg";
import img2 from "../images/jim.jpg";
import img3 from "../images/melania.jpg";
import img4 from "../images/jennifer.jpg";

const getStartedData = [{ img: getStarted1, heading: 'Search for your dream College', content: 'Search for your dream college at affordable price. We will be with you till the date of your admission. You can search college by name, coursewise, citywise, statewise and you can also get the list of top colleges in india according to their ranking. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eum numquam, iure nisi corrupti alias. ', button: <Link to='/searchcolleges'><button className='get-started-btn'>Start</button></Link>, navtext: 'Search College' }, { img: getStarted2, heading: 'Want to get help in Academics', content: 'Here, you will get academics related materials for your study. You can download study material like Notes, Important Questions, Sample Papers, Previous years papers and many more things related to your study. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quisquam nostrum ullam dolore provident repellendus ducimus quia ab id sapiente? ', button: <Link to='/academics'><button className='get-started-btn'>Start</button></Link>, navtext: 'Academics' }, { img: getStarted3, heading: 'Read blogs about your Queries', content: 'You can search for blogs which you want to read. You can read blogs in Educational category as well as other category. You can also get list of trending blog on StuAdviasor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet quasi dolor nam pariatur inventore dolorum facere provident eveniet explicabo!', button: <Link to='/blogs'><button className='get-started-btn'>Start</button></Link>, navtext: 'Blogs' }, { img: getStarted4, heading: 'And many more stuff for you...', content: 'You can create account on StuAdviasor and post study materials for other users. You can post files like pdf, word, text etc. for helping other students. You can Post blogs for other students to solve their problems. You can request to add colleges on StuAdviasor which is not showing in search result. We will add college after verification and you can maintain your own profile on StuAdviasor after registration.', button: '' }]

const aboutData = [{ icon: <i className="fa-solid fa-house-chimney"></i>, heading: 'Learn at home', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.' }, { icon: <i className="fa-solid fa-graduation-cap"></i>, heading: 'Search best colleges', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.' }, { icon: <i className="fa-solid fa-pen-to-square"></i>, heading: 'Exam prepration', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.' }, { icon: <i className="fa-solid fa-newspaper"></i>, heading: 'Educational news', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.' }, { icon: <i className="fa-solid fa-book"></i>, heading: 'Academics support', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.' }, { icon: <i className="fa-solid fa-blog"></i>, heading: 'Educational blogs', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.' }]

const aboutData2 = [{ count: '5000+', data: 'Colleges Data' }, { count: '10,000+', data: 'Educational Blogs' }, { count: '8000+', data: 'Study Material' }, { count: 2023, data: 'Supporting Since' }]

const contactSlider = [{ src: slider1, text: 'First slide' }, { src: slider2, text: 'Second slide' }, { src: slider3, text: 'Third slide' }];

const reviewSlider = [{ text: 'Justin', review: 'Amazing platform for students to find colleges at very affordable price.', face: img1 }, { text: 'Jennifer', review: 'Very good website for students to learn and for downloading educational stuff', face: img4 }, { text: 'Jim', review: 'I found best college for my children at StuAdvisor. very helpful website and every student must know about it', face: img2 }, { text: 'Melania', review: 'I found my dream college at StuAdvisor at very affordable price ❤️', face: img3 }];

export default getStartedData;
export { aboutData, aboutData2, contactSlider, reviewSlider };