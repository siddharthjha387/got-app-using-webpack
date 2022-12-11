import generateGotCharacter from './generateGotCharacter';
import './styles/main.scss'


const btn=document.getElementById('changeBtn');
btn.addEventListener('click',generateGotCharacter)


generateGotCharacter()

