import React from 'react';

export const id = 'constructor',
    name = 'Creation (constructor) function';

export const Definition = () => (
    <p>
        <em>{name}</em> for an instance of a class - a function, with a hardcoded title, into which
        data about a particular instance of a previously defined class is transferred via inputs
        (arguments). The function’s title is hardcoded for each particular language. In some
        languages it takes the class’s title, while in others it uses a different word; for example,
        in Python it is called __init__. This can be Googled for the specific language being used.
    </p>
);

export const Additional = () => (
    <p>
        Classes can be thought of as categories of objects. For example, let’s say you have a blue
        BMW car. It belongs to the Car class. The class defines the general properties and
        characteristics of a particular category of car, but does not reflect any one specific car.
        To define your specific car (your blue BMW), we need to create a specific instance of the
        Car class and record its specific properties. We use the creation function to do this.
    </p>
);
