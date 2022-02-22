import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';

import { Button, Props } from '@/components/common/atoms/Button';

afterEach(cleanup);

describe('【コンポーネントテスト】 Button', () => {
  const renderComponent = (props: Partial<Props> = {}): RenderResult => {
    const defaultProps = {
      children: 'テストボタンテキスト',
    };
    return render(<Button {...defaultProps} {...props} />);
  };

  it('should be render with children', async () => {
    renderComponent();
    const button = await screen.findByRole('button');
    // role = "button" として存在しているか
    expect(button).toBeInTheDocument();
    // childrenが正常に渡っているか
    expect(button.textContent).toMatch('テストボタンテキスト');
  });

  //  todo
  it('should be apply size style', async () => {});

  //  todo
  it('should be apply disabled props', async () => {});

  it('should be call onClick event', async () => {
    const mockOnClick = jest.fn();
    renderComponent({ onClick: mockOnClick });
    fireEvent.click(await screen.findByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
