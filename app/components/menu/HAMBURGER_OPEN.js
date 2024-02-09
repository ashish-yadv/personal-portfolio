
const HAMBURGER_OPEN = () => {
  return (
    <div className='bg-red w-6 h-6 flex flex-col justify-center items-end gap-1.5 cursor-pointer'>
      <div className='line w-full h-1 rounded-3xl bg-slate-50 '></div>
      <div className='line w-9/12 h-1 rounded-3xl bg-slate-50 '></div>
    </div>
  )
}

export default HAMBURGER_OPEN;