export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

export const locations: Location[] = [
  {
    id: 'karaikal-main',
    name: 'Karaikal Main Branch',
    address: 'Gandhi Road, Near Bus Stand, Karaikal - 609602',
    phone: '+91 98765 43210',
    mapUrl: 'https://maps.google.com/maps?q=Karaikal,Puducherry,India'
  },
  {
    id: 'karaikal-beach',
    name: 'Karaikal Beach Road',
    address: 'Beach Road, Near Lighthouse, Karaikal - 609602',
    phone: '+91 98765 43211',
    mapUrl: 'https://maps.google.com/maps?q=Karaikal+Beach,Puducherry,India'
  }
];