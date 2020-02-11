

 import Bord from './board';
 const initBoard= (n,...colors)=> {
     let bord = new Bord(n,n,colors);

 }
 initBoard(6,"red","blue","yellow");