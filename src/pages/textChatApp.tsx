import Link from "next/link"

const  TextChatApp= () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">Text Chat Application</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">Developed the client and server components of a text chat application, consisting of one chat server and multiple chat clients over TCP connections.<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++</span></p></h3>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li><span><Link href="/pdfs/TextChatApp.pdf" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Project Detail Description (PDF)</a></Link></span></li>
                <li>**GitHub Repository review upon request.</li>
            </ul>
        </div>
        </>
    )
}

export default TextChatApp