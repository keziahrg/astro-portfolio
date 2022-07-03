import Link from './Link'

const Hero = () => {
  return (
    <section>
      <h1>
        <span>Kia ora, I'm</span> Keziah.
      </h1>
      <p>
        A <strong>web developer</strong> from Aotearoa New Zealand.
      </p>
      <Link href="#contact" ariaLabel="Get in touch">
        Get in touch
      </Link>
      <Link href="#projects" ariaLabel="View projects">
        View projects
      </Link>
    </section>
  )
}

export default Hero
