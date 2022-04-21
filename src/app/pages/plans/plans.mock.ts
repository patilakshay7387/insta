export const PLANSMOCK = {

    PLAYERS: [
        "Sachin Tendulkar",
        "Ricky Ponting",
        "Virat Kohli",
        "Kumar Sangakkara",
        "Jacques Kallis",
        "Hashim Amla    ",
        "Mahela Jayawardene    ",
        "Brian Lara",
        "Rahul Dravid",
        "AB de Villiers"
    ],


    COUNTRIES: [
        { name: 'Germany', states: [{ name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }], planId: 101 },
        { name: 'Spain', states: [{ name: 'B', cities: ['Barcelona'] }], planId: 102 },
        { name: 'USA', states: [{ name: 'C', cities: ['Downers Grove'] }], planId: 103 },
        { name: 'Mexico', states: [{ name: 'D', cities: ['Puebla'] }], planId: 102 },
        { name: 'India', states: [{ name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] }], planId: 104 },
    ],
    PLANS: [
        {
            planName: 'Premiuns',
            planId: 101,
            planPrice: 300,
            city: 'Germany'
        },
        {
            planName: 'unlimited',
            planId: 102,
            planPrice: 333,
            city: 'Spain'

        },
        {
            planName: 'test1',
            planId: 103,
            planPrice: 32200,
            city: 'USA'

        },
        {
            planName: 'test2',
            planId: 104,
            planPrice: 30033,
            city: 'Mexico'

        },
    ]
}

