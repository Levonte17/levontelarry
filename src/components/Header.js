import headerr from '../assets/headerr.png'


function Header(props) {
    return(
        <div className='header'>
        <h1>
            <img className='img1' src={headerr} alt='img' />
        </h1>
        </div>
    )
};

export default Header;