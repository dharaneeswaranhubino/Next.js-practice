import Link from "next/link"

export const metadata = {
  title: "About next.js"
}

const About = () => {
  return (
    <>
      <Link href="/">Home</Link>

      <div>About me</div>
    </>
  )
}

export default About