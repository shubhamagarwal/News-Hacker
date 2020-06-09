import React from 'react';
import { HeaderContainer } from './styled';

export default function Header() {
  return (
    <HeaderContainer>
      <span data-testid="site_title">Hacker News</span>
    </HeaderContainer>
  );
}
