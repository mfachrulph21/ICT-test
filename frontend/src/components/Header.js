function Header() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#bbdefb',  padding: 10}}>
            <img src={process.env.PUBLIC_URL + '/Logo-ICT.webp'} width='150' height='50'/>
        </div>
    )
}

export default Header;