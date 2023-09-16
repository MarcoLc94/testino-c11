import style from "./Modal.module.css"

function Modal(){
    return (
        <div>
            <p>This is a Modal</p>
            <button className={style.button}>Close Modal</button>
        </div>
    )
}

export default Modal