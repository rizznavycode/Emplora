import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link, useNavigate } from 'react-router-dom' // Tambahkan useNavigate
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'
import toast from 'react-hot-toast' // Tambahkan toast
import axios from 'axios' // Tambahkan axios

const LoginForm = ({role, title, subtitle}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error , setError] = useState("")
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate() // Inisialisasi navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error setiap kali mau submit

    try {
      // 1. Ambil data pegawai dari Backend MySQL kita
      const response = await axios.get('http://localhost:5000/employees');
      const users = response.data;

      // 2. Cek apakah email yang diketik ada di database
      // (Nanti kalau backend Auth udah jadi, endpoint-nya ganti ke /login)
      const userFound = users.find(u => u.email === email);

      if (userFound) {
        // 3. Kalau sukses login
        toast.success(`Selamat datang, ${userFound.name}!`);
        localStorage.setItem('user', JSON.stringify(userFound)); // Simpan sesi login
        navigate('/dashboard'); // Pindah ke halaman dashboard
      } else {
        // 4. Kalau email tidak ditemukan
        setError("Email atau password tidak valid!");
      }
    } catch (err) {
      setError("Gagal terhubung ke server. Pastikan backend menyala!");
    } finally {
      setLoading(false); // Matikan animasi muter-muter
    }
  }
  
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />
      <div className='flex-1 flex items-center justify-center p-6 sm:p-12 bg-white'>
      <div className='w-full max-w-md animate-fade-in'>
        <Link to="/login" className='inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors' >
        <ArrowLeftIcon size={16}/> Back to Portals
        </Link>
        
        <div className='mb-8'>
          <h1 className='text-2xl sm:text-3xl font-medium text-zinc-800'>{title}</h1>
          <p className="text-slate-500 text-sm sm:text-base mt-2">{subtitle}</p>
        </div>

        {error && (
          <div className='mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3 '>
            <div className='w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0'/>
            {error} 
          </div>
        )}

        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-slate-700 mb-2'>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='email@example.com' className='w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:border-indigo-500' />
          </div>
          <div>
            <div className='relative'>
            <label className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
            <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required className='w-full p-3 pr-11 border border-slate-300 rounded-md focus:outline-none focus:border-indigo-500' placeholder='••••••••' />
            <button type='button' className='absolute right-3 top-[38px] text-slate-400 hover:text-slate-600 transition-colors' onClick={()=> setShowPassword (!showPassword)}>
              {showPassword ? <EyeOffIcon size={18}/> : <EyeIcon size={18}/>}
            </button>
            </div>
          </div>
          <button type='submit' disabled={loading} className='w-full py-3 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white rounded-md text-sm font-semibold hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center'> 
          {loading && <Loader2Icon className='animate-spin h-4 w-4 mr-2'/> }
          Sign In
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default LoginForm