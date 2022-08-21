export default function Footer({name, email, phone}){
    return (
        <>
        <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Company Name:</span> {name}</li>
            <li><span className="font-bold">Company email: </span>{email}</li>
            <li><span className="font-bold">Company Phone Number:</span> {phone}</li>
        </ul>
        </footer>
        </>
    )
}