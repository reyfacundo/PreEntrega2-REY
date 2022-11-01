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
        <div className="container contForm">
        <form onSubmit={form} ref={formData}>
            <div className="mb-3 textForm">
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" className="form-control formShadow" name="email" placeholder="Enter email" required/>
            </div>
            <div className="mb-3 textForm">
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" className="form-control formShadow" name="name" placeholder="Enter your name"required />
            </div>
            <div className="mb-3 textForm">
                <textarea className="textArea formShadow" name="consulta" rows={10} cols={50} placeholder="How can we help you?" required/>
            </div>
            <div className="sendForm">
            <button type="submit" className="btn btn-primary">Send</button>
            </div>
            </form>
        </div>
        </>
    );
}

export default Contacto;