export const BUY_TRUCK = 'BUY_TRUCK'; 


export function buyTruck(truck) {
    console.log('dispatched buytruck'); 
    return {
        type: BUY_TRUCK,
        truck
    }
}