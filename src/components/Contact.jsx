import '../App.css'

function Contact () {
    
    return (
        <div>
            <h1 className='font-neue-montreal text-orange-200 text-3xl font-bold text-center'>Get in touch!</h1>
            <form className='grid grid-cols-1 mt-12 gap-5 place-items-center'>
                <div className='flex flex-col gap-2'>
                    <label className='text-orange-200 text-md'>Your email</label>
                    <input type='email' className='form-input rounded-xl shadow-md shadow-black font-semibold w-96' placeholder='name@gmail.com' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-orange-200 text-md'>Subject</label>
                    <input type='text' className='form-input rounded-xl shadow-md shadow-black font-semibold w-96' placeholder='Let me know how i can help you' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-orange-200 text-md'>Your message</label>
                    <textarea className='form-textarea rounded-xl shadow-md shadow-black font-semibold w-96 h-24' placeholder='Leave a comment...' />
                </div>
                <button type='submit' className='font-semibold bg-slate-200 shadow-md shadow-black rounded-lg w-32 h-10 hover:bg-sky-900 hover:text-white'>Send message</button>
            </form>
        </div>
    )
}

export default Contact