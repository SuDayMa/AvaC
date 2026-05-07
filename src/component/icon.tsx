function Icon(props: { name: string }) {
    if(props.name === 'language') {
        return (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m2.247-2.247H21m-2.247-2.247a11.953 11.953 0 0 1-5.74-1.1" />
          </svg>
          )
        }
      else if(props.name === 'link') {
        return <i className='bx bx-link'></i> 
      }
      else if(props.name === 'medal') {
        return <i className='bx bxs-medal'></i> 
      }
      else if(props.name === 'facebook') {
        return <i className='bx bxl-facebook'></i>
      }
      else if(props.name === 'right') {
        return <i className='bx bx-right-arrow-circle' ></i>
      }
      else if(props.name === 'down') {
        return <i className='bx bx-chevron-down'></i>
      }
      else if(props.name === 'up') {
        return <i className='bx bx-chevron-up' ></i>
      }
      else if(props.name === 'left') {
        return <i className='bx bx-chevron-left' ></i>
      }
      else if(props.name === 'menu') {
        return<i className='bx bx-menu'></i>
      }
      else if(props.name === 'close') {
        return<i className='bx bx-x' ></i>
      }
}
export default Icon;