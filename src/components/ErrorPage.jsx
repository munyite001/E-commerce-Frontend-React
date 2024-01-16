import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div style={{color:"black"}}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Sorry, the page you're looking for doesn't exist</h1>
            <p>Click <Link to="/">here</Link> to go to the homepage</p>
        </div>
    )
}