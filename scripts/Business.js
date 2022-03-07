export const getBusnString = (busnObj) => {
    return `
        <section class="business">
            <h3 class="business__name">${busnObj.companyName}</h3>
            <p class="business__address">${busnObj.addressFullStreet}</p>
            <p class="business__address">${busnObj.addressCity}, ${busnObj.addressStateCode} ${busnObj.addressZipCode}</p>
        </section>

    
    `
}

export const getAgentString = (agentObj) => {
    return `
        <section class="business">
            <h3 class="business__name">${agentObj.fullName}</h3>
            <p class="business__address">${agentObj.company}</p>
            <p class="business__address">${agentObj.phoneNumber}</p>
        </section>
    `
}