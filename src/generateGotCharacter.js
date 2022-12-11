import axios from 'axios';
function generateGotCharacter() {
   const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const id=Math.floor(Math.random() * 53);

  axios.get(`https://thronesapi.com/api/v2/Characters/${id}`, config).then((res) => {
    console.log(res)
    const characterImg=document.getElementById('characterImg');
    characterImg.src=res.data.imageUrl;
    document.getElementById('name').innerHTML = res.data.fullName;
    document.getElementById('title').innerHTML = res.data.title;
   
  })
}

export default generateGotCharacter