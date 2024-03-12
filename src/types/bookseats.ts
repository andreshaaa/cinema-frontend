export type BookSeats = {
    
    id: string
    startTime: string
    movieName: string
    seats: Seat[]
    

}
export type Seat = {

    seatNo: number
    occupied: boolean

}
