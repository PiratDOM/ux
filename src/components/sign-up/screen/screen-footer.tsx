import React from 'react';

import { Flex } from '@blockstack/ui';

interface ScreenFooterProps {}

export const ScreenFooter: React.FC<ScreenFooterProps> = ({ children, ...rest }) => (
  <Flex as="footer" px={5} fontSize={['12px', '14px']} color="ink.600" fontWeight="medium" justify="space-between" {...rest}>
    {children}
  </Flex>
);
