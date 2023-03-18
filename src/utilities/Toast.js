const Toast = (toast) => {
    return (
    <div className={`toast show align-items-center text-white border-0 ${toast.toastType}`} class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="d-flex">
      <div className="toast-body">
      {toast.toastMessage}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>)
}

export default Toast;