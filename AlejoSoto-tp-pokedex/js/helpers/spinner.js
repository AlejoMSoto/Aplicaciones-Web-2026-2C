export const showSpinner = () => {
    document.getElementById("spinner").classList.remove("d-none");
}

export const hideSpinner = () => {
    document.getElementById("spinner").classList.add("d-none");
}