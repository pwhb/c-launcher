import { signInWithPopup, signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { auth, provider } from "../firebase";

export default function Navbar()
{
    const { currentUser } = useSelector((state: any) => state.auth);
    const { t } = useTranslation();
    return <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="text-xl">{t('title')}</a>
        </div>
        <div className="flex-none">

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    {currentUser ? <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={currentUser.photoURL} />
                    </div> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>}
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {currentUser && <li>
                        <a className="font-semibold">{currentUser.displayName}</a>
                    </li>}
                    {currentUser ? <li><button onClick={() => signOut(auth)}>Logout</button></li> :
                        <li><button onClick={() => signInWithPopup(auth, provider)}>Sign In</button></li>
                    }
                </ul>
            </div>
        </div>
    </div>;
}