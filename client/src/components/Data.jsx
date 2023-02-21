import { Link } from 'react-router-dom';
import getStarted1 from '../images/home1.jpg';
import getStarted2 from '../images/home2.jpg';
import getStarted3 from '../images/home3.jpg';
import getStarted4 from '../images/home4.jpg';

const getStartedData = [{ img: getStarted1, heading: 'Search for your dream College', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa provident tenetur odit aliquam ratione quae commodi quas unde? Autem quod expedita laudantium eum nihil temporibus ipsam, neque itaque at id ex maxime iusto, quasi optio voluptas fuga ullam dolores quis minus libero accusamus dicta dignissimos a? Veniam voluptas doloremque expedita !', button: <Link to='/searchcolleges'><button className='get-started-btn'>Let's Start</button></Link> }, { img: getStarted2, heading: 'Want to get help in Academics', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa provident tenetur odit aliquam ratione quae commodi quas unde? Autem quod expedita laudantium eum nihil temporibus ipsam, neque itaque at id ex maxime iusto, quasi optio voluptas fuga ullam dolores quis minus libero accusamus dicta dignissimos a? Veniam voluptas doloremque expedita !', button: <Link to='/academics'><button className='get-started-btn'>Let's Start</button></Link> }, { img: getStarted3, heading: 'Read blogs about your Queries', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa provident tenetur odit aliquam ratione quae commodi quas unde? Autem quod expedita laudantium eum nihil temporibus ipsam, neque itaque at id ex maxime iusto, quasi optio voluptas fuga ullam dolores quis minus libero accusamus dicta dignissimos a? Veniam voluptas doloremque expedita !', button: <Link to='/blogs'><button className='get-started-btn'>Let's Start</button></Link> }, { img: getStarted4, heading: 'And many more stuff for you...', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa provident tenetur odit aliquam ratione quae commodi quas unde? Autem quod expedita laudantium eum nihil temporibus ipsam, neque itaque at id ex maxime iusto, quasi optio voluptas fuga ullam dolores quis minus libero accusamus dicta dignissimos a? Veniam voluptas doloremque expedita !', button: '' }]

export default getStartedData;