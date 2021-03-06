interface SeoProps {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  url: string
}

const Seo = ({ title, description, image, url }: SeoProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.src} />
      <meta property="og:image:alt" content={image.alt} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image.src} />
      <meta name="twitter:image:alt" content={image.alt} />
    </>
  )
}

export default Seo
export type { SeoProps }
