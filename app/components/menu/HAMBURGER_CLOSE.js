
const HAMBERGUR_CLOSE = () => {
    return (
        <div className='bg-red w-6 h-6 flex flex-col justify-between items-center gap-1.5 cursor-pointer'>
            <div className='line w-8 h-1 rounded-3xl bg-white origin-top-left rotate-45 relative -top-px left-1.5'></div>
            <div className='line w-8 h-1 rounded-3xl bg-white origin-bottom-left -rotate-45 relative left-1.5'></div>
        </div>
    )
}

export default HAMBERGUR_CLOSE;