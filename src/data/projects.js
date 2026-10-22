import shopyImage from '../../images/shopy.png';
import blogImage from '../../images/blog.jpg';
import recordBookImage from '../../images/rb.png';
import todoImage from '../../images/todo.jpg';
import ticTacToeImage from '../../images/tic.jpg';

export const projects = [
 {number:'01',name:'TrendCraze',type:'FULL-STACK',description:'An e-commerce experience with product browsing, cart management and Razorpay payment integration.',technologies:['Django','Python','Bootstrap','Razorpay'],image:shopyImage,imageAlt:'TrendCraze e-commerce project preview',source:'https://github.com/harsh9756/django-Ecommerce',featured:true},
 {number:'02',name:'BlogBeast',type:'WEB APP',description:'A publishing platform for creating accounts, sharing articles and discovering ideas across topics.',technologies:['PHP','Bootstrap','MySQL'],image:blogImage,imageAlt:'BlogBeast publishing platform preview',source:'https://github.com/harsh9756/BlogApp-php'},
 {number:'03',name:'Record Book',type:'DESKTOP APP',description:'A Python desktop user-management tool with secure login and add, update, search and delete workflows.',technologies:['Python','Tkinter','SQLite'],image:recordBookImage,imageAlt:'Record Book desktop application preview',source:'https://github.com/harsh9756/RecorBook---Python-tkinter'},
 {number:'04',name:'Todo App',type:'REACT APP',description:'A focused task manager for adding, editing, completing and deleting everyday tasks.',technologies:['React','Tailwind CSS'],image:todoImage,imageAlt:'React to-do application preview',source:'https://github.com/harsh9756/ToDo-App-React'},
 {number:'05',name:'Tic-Tac-Toe',type:'MINI GAME',description:'A classic two-player game built with React, with an interactive 3×3 board and win-state logic.',technologies:['React','JavaScript'],image:ticTacToeImage,imageAlt:'Tic-Tac-Toe game preview',source:'https://github.com/harsh9756/Tic-Tac-Toe--React',wide:true},
];
export const skills=[
 {number:'01',title:'Frontend',items:['HTML5','CSS3','JavaScript','React','Redux','Bootstrap','Tailwind CSS']},
 {number:'02',title:'Backend',items:['Python','PHP','Node.js','Express','Django']},
 {number:'03',title:'Data & tools',items:['MongoDB','MySQL','SQLite','GitHub']},
];
