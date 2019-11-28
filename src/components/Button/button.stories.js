import React from 'react';
import Button from './button';

export default { title: 'Button' };

export const withText = () => <Button title="Default" />;

export const withType = () => (
  <>
    <Button title="Primary" type="primary" />
    <Button title="Default" />
    <Button title="Danger" type="dashed" />
    <Button title="Danger" type="danger" />
  </>
);

export const withSize = () => (
  <>
    <Button title="Button" size="small" type="primary" />
    <Button title="Button" />
    <Button title="Button" size="large" type="danger" />
  </>
);

export const withOutline = () => (
  <>
    <Button title="Primary" ghost type="primary" />
    <Button title="Default" />
    <Button title="Danger" ghost type="dashed" />
    <Button title="Danger" ghost type="danger" />
  </>
);

export const withShape = () => (
  <>
    <Button title="Round" ghost type="primary" shape="round" />
    <Button title="Round" type="primary" shape="round" />
  </>
);
