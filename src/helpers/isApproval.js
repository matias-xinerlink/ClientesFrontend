import { config } from "../config/env";

export const isApproval = (requisitionsApprovals, user) => {
    if (requisitionsApprovals.filter(approval => approval.userId === user.id && approval.approved === false).length > 0) return true;
    return false
}

export const approvalId = (requisitionsApprovals, user) => {
    return requisitionsApprovals.filter(approval => approval.userId === user.id).shift().id;
}

export const approveRequest = (approvalId) => {
    const result = window.confirm("¿Estas seguro de aprobar?")
    if (result) {
        return fetch(`${config.apiUrl}/solicitud/aprobacion/${approvalId}`, { method: 'POST', headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem('sessionToken') } })
            .then(response => response.json())
            .then(result => {
                alert(result.message);
                return true
            })
            .catch(error => {
                alert(error.message);
                return false
            });

    }
}