export const enableViewAll = () => {
    document.getElementById("viewAllBtn").disabled = false;
    document.getElementById("viewAllBtn").classList.remove('btn-secondary');
    document.getElementById("viewAllBtn").classList.add('btn-outline-primary');

}

export const disableViewAll = () => {
    document.getElementById("viewAllBtn").disabled = true;
    document.getElementById("viewAllBtn").classList.add('btn-secondary');
    document.getElementById("viewAllBtn").classList.remove('btn-outline-primary');
}