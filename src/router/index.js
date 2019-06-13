
import Past from '../components/Past';
import Load from '../components/Loader';
import Next from '../components/Next';

export  default [
  {
    path: '/past',
    name: 'past',
    component: Past,
  },
  {
    path: '/load',
    name: 'load',
    component: Load,
  },
  {
    path: '/next',
    name: 'next',
    component: Next,
  },
  {
    path: '*',
    name: 'all',
    component: Past,
  },
]