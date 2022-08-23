
interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name:"HY", age:12});


function SayHello() {
    return <div />
}

export default SayHello;