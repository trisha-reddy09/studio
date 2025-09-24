export const communities = [
  { id: 'uni', name: 'University Campus' },
  { id: 'techpark', name: 'Tech Park Central' },
  { id: 'gated', name: 'Greenwood Gated Society' },
];

export const rideAlerts = [
  {
    id: '1',
    from: 'Hostel A',
    to: 'Library Complex',
    seatsLeft: 2,
    departureTime: '10:00 AM',
    driver: 'Jane Doe',
  },
  {
    id: '2',
    from: 'Tech Park Gate 1',
    to: 'Cafeteria',
    seatsLeft: 1,
    departureTime: '12:30 PM',
    driver: 'John Smith',
  },
  {
    id: '3',
    from: 'Tower C',
    to: 'Main Gate',
    seatsLeft: 3,
    departureTime: '5:00 PM',
    driver: 'Alex Ray',
  },
];

export const user = {
  name: 'Alex Johnson',
  avatarUrl: 'https://picsum.photos/seed/user1/100/100',
};

export const rideDetails = {
  id: '1',
  from: 'Hostel A',
  to: 'Library Complex',
  eta: '12 minutes',
  driver: {
    name: 'Jane Doe',
    avatarUrl: 'https://picsum.photos/seed/driver1/100/100',
    car: 'Blue Sedan - XYZ 1234',
  },
};
