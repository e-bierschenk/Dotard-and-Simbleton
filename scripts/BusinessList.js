import { getBusnString, getAgentString } from "./Business.js"
import { getBusinesses, getNYBusinesses, getManufacturingBusinesses, getAgents, findBusiness } from "./BusinessData.js"


//Prints the full businesslist to the DOM
export const renderAll = () => {
    const busnEl = document.querySelector(".businessList--active")
    

    busnEl.innerHTML = "<h2>Active Businesses</h2>"

    getBusinesses().forEach(
        (business) => {
            busnEl.innerHTML += getBusnString(business)
        }
    )
}

//Prints just NY businesses to the DOM
export const renderNY = () => {
    const nyBusnEl = document.querySelector(".businessList--newYork")
    nyBusnEl.innerHTML = "<h2>New York Businesses</h2>"
    
    getNYBusinesses().forEach(
        (business) => {
            nyBusnEl.innerHTML += getBusnString(business)
        }
    )

}

//prints the manufacturing companies
export const renderManufacturing = () => {
    const manufacturingbusnEl = document.querySelector(".businessList--manufacturing")
    manufacturingbusnEl.innerHTML = "<h2>Manufacturing Businesses</h2>"
    
    getManufacturingBusinesses().forEach(
        (business) => {
            manufacturingbusnEl.innerHTML += getBusnString(business)
        }
    )
}

//finds agents and prints to DOM
export const renderAgents = () => {
    const agentsEl = document.querySelector(".agents")
    agentsEl.innerHTML = "<h2>Purchasing Agents</h2>"
    
    getAgents().forEach(
        (agent) => {
            agentsEl.innerHTML += getAgentString(agent)
        }
    )
}


export const searchbox = () => {
    const companySearchResultArticle = document.querySelector(".foundCompanies")
    
    document
        .querySelector("#companySearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                /*
                    When user presses enter, find the matching business.
                    You can use the `.includes()` method strings to
                    see if a smaller string is part of a larger string.
    
                    Example:
                        business.companyName.includes(keyPressEvent.target.value)
                */
    
                const foundBusiness = findBusiness(keyPressEvent.target.value)
    
    
                companySearchResultArticle.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
                    <section>
                    ${foundBusiness.addressFullStreet}
    
                    </section>
                    <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                    </section>
                `;
            }
        });
}