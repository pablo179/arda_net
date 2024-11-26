import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => {
  return <Button variant="primary">Primary</Button>;
};

export const secondary = () => {
  return <Button variant="secondary">Secondary</Button>;
};
