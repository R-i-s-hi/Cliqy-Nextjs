import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h2>
                Not found
            </h2>
            <p>this is custom not found page</p>
            <Link href="/">Return home</Link>
        </div>
    )
}