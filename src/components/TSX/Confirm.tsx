import  { useState } from 'react'
import style from '../style/config.module.scss'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Confirm() {

    const [passwordState,setPasswordState] = useState<string>('')

    const noti = ()=>toast.error("Falsches Passwort",{
        position: "bottom-center",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })

    const nav = useNavigate();

    const handleConfirm = () =>{
        if(passwordState == "$firebasePass"){
            localStorage.setItem('auth','true')
            nav('/');
            return
        }
        noti()
    }

  return (
    <main className={style.wrapper}>
        <div className={style.box}>
            <input onChange={(e)=>setPasswordState(e.target.value)} placeholder='password' type='password'/>
            <button onClick={()=>handleConfirm()}>Login</button>
        </div>
        <ToastContainer
            position="bottom-right"
            autoClose={600}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            stacked={true}
         />
    </main>
  )
}

export default Confirm
