export const errorAlert = (texto) => {
    Swal.fire({
        title: 'Error',
        text: texto,
        icon: 'error'
    });
}

export const warningAlert = (texto) => {
    Swal.fire({
        title: 'Atencion',
        text: texto,
        icon: 'warning'
    });
}