function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


export default {
  rows: [
    {
      id: 1,
      email: 'yuval@gmail.com',
      profile: {
        firstName: 'Юваль',
        lastName: 'АНой',
      },
      registeredAt: randomDate(new Date(2022, 0, 1), new Date()),
      lastLogonAt: randomDate(new Date(2022, 0, 1), new Date())
    },
    {
      id: 2,
      email: 'kharari@gmail.com',
      profile: {
        firstName: 'Харари',
        lastName: 'ННой',
      },
      registeredAt: randomDate(new Date(2022, 0, 1), new Date()),
      lastLogonAt: randomDate(new Date(2022, 0, 1), new Date())
    },
    {
      id: 3,
      email: 'akharari@gmail.com',
      profile: {
        firstName: 'АХарари',
        lastName: 'НМой',
      },
      registeredAt: randomDate(new Date(2022, 0, 1), new Date()),
      lastLogonAt: randomDate(new Date(2022, 0, 1), new Date())
    },
    {
      id: 4,
      email: 'bkharari@gmail.com',
      profile: {
        firstName: 'ДХарари',
        lastName: 'ЖНой',
      },
      registeredAt: randomDate(new Date(2022, 0, 1), new Date()),
      lastLogonAt: randomDate(new Date(2022, 0, 1), new Date())
    },
  ],
  count: 4,
}