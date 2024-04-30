import { NavLink } from "react-router-dom";

const MainNav = () => {
    const NavItems=[
        {
            path:'/',
            title:'Home'
        },
        {
            path:'/Profile',
            title:'Profile'
        }
    ]
    return ( 
        <nav className="main-nav flex place-content-between bg-black text-white items-center h-10 text-xl" >
            <h1 className="px-10">Logo</h1>
            <div className="flex h-full items-stretch">
                {
                    NavItems.map((item,index) => (
                    
                      <NavLink key={index} to={item.path} className={({ isActive, isPending }) =>
                        isPending ? "hover:bg-green-900 " : isActive ? "bg-green-800/80 px-6 flex h-full items-center justify-center " : "px-6 hover:bg-green-800/[0.3] flex h-full items-center justify-center "
                      }><p>{item.title}</p></NavLink>
                    ))
                }

            </div>
        </nav>
     );
}
 
export default MainNav;
