{/* <h1 class="title">Ramdom users</h1> */}

const Title = ( label ) => {

    const h1 = document.createElement('h1')
    h1.classList.add('title');
    h1.textContent = label
  
    return h1;
  }