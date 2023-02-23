import Link from 'next/link';
import styles from '../../styles/ninjas.module.css'

export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json(); //Turns the response into an array of objects which we can work with

    return { //return a value from the function which we can then use in the component
        props: { ninjas: data } //Value must be an object
    }
}

const index = ({ninjas}) => {
  return (
    <>
    <h1>All Ninjas</h1>
    {ninjas.map((ninja)=>{
        return (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id} className={styles.single}>
                <h3>{ninja.name}</h3>
        </Link>
    )})}
    </>
  )
}

export default index