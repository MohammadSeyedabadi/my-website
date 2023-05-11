export default function Blog(props){
    let darkMode = props.darkMode

    return(
        <main className="mt-5 d-flex justify-content-center">
            <h1 className={darkMode ? "text-light" : "text-black"}>Coming soon ...</h1>
        </main>
    )
}