import Link from './Link'

const Work = () => {
  return (
    <section id="work">
      <h2>My work</h2>
      <p>
        {`A selection of my experimental tinkerings. If you'd like to learn about the larger projects I'm working on, `}
        <Link href="#contact">let's chat</Link>
        {`.`}
      </p>
    </section>
  )
}

export default Work
