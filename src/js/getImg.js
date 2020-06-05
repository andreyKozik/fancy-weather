export async function getImg() {

  const timesOfDay = localStorage.getItem('timesOfDay');
  const timeOfYear = document.querySelector('.date').innerHTML.slice(6);
  console.log(timesOfDay, timeOfYear)

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${timeOfYear} ${timesOfDay}&client_id=ad7b8df9714d5ff6ddf2bb4eb38fe4a0d1a4647bbebd8aa3b7e5ee34bfdfe5ae`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.errors) {

    document.querySelector('.background-img').src = data.urls.full;

    document.querySelector('.background-img').onload = function () {

      setTimeout(() => {
        document.querySelector('.reverse').classList.remove('reverse-animation');
      }, 2500)

      document.querySelector('.background-img').classList.add('animation-background');

    };

  } else {

    document.querySelector('.reverse').classList.remove('reverse-animation');
    document.querySelector('.background-img').src = "./assets/img/background.jpg"
    
  }

}


export function changeImg() {

	document.querySelector('.background-change').addEventListener('mousedown', () => {

    document.querySelector('.reverse').classList.add('reverse-animation');

    document.querySelector('.background-img').classList.remove('animation-background');

    getImg();
    
  });
  
}
