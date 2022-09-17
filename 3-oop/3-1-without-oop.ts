{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    const BEANS_GRAMM_PER_SHOT: number =  7;
    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee Beans!');
        }

        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false
        }
    }

    const coffee = makeCoffee(2);
    console.log(coffee)
}