export const merchants = [
  {
    id: '45231234123',
    firstName: 'May',
    lastName: 'Cowgill',
    avatarUrl: 'https://picsum.photos/50/50?random=1',
    email: 'May@gmail.com',
    phone: '498-123-41-23',
    hasPremium: 'true',
    bids: [{
      id: '98435',
      carTitle: 'Toyota',
      amount: '1',
      created: `${Date.now() - 42341452}`
    },{
      id: '8798234',
      carTitle: 'Tesla',
      amount: '1',
      created: `${Date.now() - 2345342349}`
    },{
      id: '412423',
      carTitle: 'Honda',
      amount: '1',
      created: `${Date.now() - 23453451223}`
    }]
  },
  {
    id: 'string',
    firstName: 'Shiela',
    lastName: 'Schommer',
    avatarUrl: 'https://picsum.photos/50/50?random=3',
    email: 'Shiela@gmail.com',
    phone: '678-123-41-23',
    hasPremium: 'false',
    bids: [{
      id: '45432',
      carTitle: 'Nissan',
      amount: '2',
      created: `${Date.now() - 53459234899}`
    },{
      id: '342323',
      carTitle: 'Lexus',
      amount: '1',
      created: `${Date.now() - 2345345683}`
    }]
  },
  {
    id: '41234123',
    firstName: 'Tandy',
    lastName: 'Thistle',
    avatarUrl: 'https://picsum.photos/50/50?random=4',
    email: 'Tandy@gmail.com',
    phone: '789-123-43-23',
    hasPremium: 'true',
    bids: [{
      id: '34523542',
      carTitle: 'Honda',
      amount: '3',
      created: `${Date.now() - 2398765123}`
    }]
  }
];