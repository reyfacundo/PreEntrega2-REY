import React from 'react';

const Contacto = () => {

    const formData = React.useRef()

    const form = (e) => {
        e.preventDefault()
        const dataForm = new FormData(formData.current)
        console.log(Object.fromEntries(dataForm))
    }
    return (
        <>
        <div className="container">
        <form onSubmit={form} ref={formData}>
            <div className="mb-3">
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter your name"required />
            </div>
            <div className="mb-3">
                <textarea name="consulta" rows={10} cols={50} placeholder="How can we help you?" required/>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
        </>
    );
}

export default Contacto;
