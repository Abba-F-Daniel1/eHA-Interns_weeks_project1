export const Footer = () =>{
    return(
        <footer className="flex items-center justify-center bg-blue-500 mx-auto h-40 mt-20">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="text-1xl sm:text-2xl font-bold">BINMS</div>
                <ul className="">
                    <li><a href='#'>About me</a></li>
                    <li><a href='#'>Contact me</a></li>
                </ul>
              </div>
            </div>
        </footer>
    )
}