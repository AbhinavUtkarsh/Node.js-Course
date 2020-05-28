// const square = function (x) {
//     return x * x
// }
// const square2 = (x) => {
//     return x * x
// }

// const square3 = (x) => x * x
// console.log("regular version " + square(4));
// console.log("short version " + square2(4));
// console.log("shortest version " + square3(4));

const event = {
    name: "Birthday Party",
    guestList: ["aman", "anand", "nani", "abhinav", "aniket"],
    printGuestList() {
        console.log("Guest List for " + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}
event.printGuestList()