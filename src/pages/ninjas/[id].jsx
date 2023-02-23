export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    //Return an array of objects where each object represent a route
    const paths = data.map(ninja=>{
        return {
            params: {id: ninja.id.toString()} //We need to make it a string because the id is an integer by default
        }
    })

    return {
        paths: paths,
        fallback: false //This enables redirect to 404 page when the user visits a route that does not exist
    }
}

//Get data for each individual ninja..This function will be run for each ninja page that needs to be generated
//i.e if we have 10 objects(paths), the function will be run 10 different times
// The context object must be received to give access to each parameter that is needed
// The id of each item will be attached to the context
export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: {ninja: data}
    }
}

const Details = ({ninja}) => {
  return (
    <> 
    <h1>{ninja.name}</h1>
    <p>{ninja.email}</p>
    <p>{ninja.website}</p>
    <p>{ninja.address.city}</p>
    </>
  )
}

export default Details