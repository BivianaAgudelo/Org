import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/bivianaagudelo/' target="_blank">
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/BivianaAgudelo' target="_blank">
                <img src="/img/github.png" alt='GitHub' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Biviana Agudelo</strong>
    </footer>
}

export default Footer