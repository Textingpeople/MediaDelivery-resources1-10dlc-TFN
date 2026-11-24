import {
  Calendar, ShoppingCart, Car, CalendarCheck, Wrench, Plane, Ticket, Search,
} from 'lucide-react';

// The 8 service categories shared by Home and Product
export const SERVICES = [
  { icon: Calendar, label: 'Appointment Scheduling', desc: 'Salon, auto service, home services and other everyday appointments booked around your schedule.' },
  { icon: ShoppingCart, label: 'Grocery & Errands', desc: 'Grocery ordering, dry cleaning pickup, package shipping and everyday errands.' },
  { icon: Car, label: 'Transportation', desc: 'Vehicle maintenance scheduling and coordinating rides.' },
  { icon: CalendarCheck, label: 'Household Scheduling', desc: 'Keep your household calendar organized — deliveries, service visits, reminders and more.' },
  { icon: Wrench, label: 'Home Services', desc: 'We coordinate contractors, repairs, installations and deliveries.' },
  { icon: Plane, label: 'Travel Planning', desc: 'Flight and hotel booking, itineraries, restaurant reservations and full trip coordination.' },
  { icon: Ticket, label: 'Events & Tickets', desc: 'Tickets to local attractions, concerts, shows and events.' },
  { icon: Search, label: 'Research & Information', desc: 'Product comparisons, vendor recommendations and information gathering.' },
];
