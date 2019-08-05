export const BUY_TRUCK = 'BUY_TRUCK'; 
export const BUY_EQUIPMENT = 'BUY_EQUIPMENT'; 


export function buyTruck(truck) {
    return {
        type: BUY_TRUCK,
        truck
    }
}

export function buyAppliance(appliance) {
    return {
        type: BUY_EQUIPMENT,
        appliance
    }
}