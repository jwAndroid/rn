import React, { memo } from 'react';
import styled from '@emotion/native';

const FondlyText = styled.Text(({ theme }) => ({
  fontSize: 40,
  color: theme.color.black,
  fontFamily: 'YDIYGO330',
}));

interface IStyledText {
  text: string;
}

function StyledText({ text }: IStyledText) {
  return <FondlyText>{text}</FondlyText>;
}

export default memo(StyledText);
