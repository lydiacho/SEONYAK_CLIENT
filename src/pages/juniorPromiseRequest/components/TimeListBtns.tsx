import styled from '@emotion/styled';

interface EachButtonPropType {
  startTime: string;
  endTime: string;
  isActive: boolean;
  onClick: () => void;
}

const TimeListBtns = ({ startTime, endTime, isActive, onClick }: EachButtonPropType) => {
  return (
    <Wrapper $isActive={isActive} onClick={onClick}>
      {startTime} ~ {endTime}
    </Wrapper>
  );
};

export default TimeListBtns;

const Wrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.8rem;
  border: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.colors.Blue}` : `1px solid ${theme.colors.grayScaleLG2}`};
  border-radius: 8px;

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleBG};

  cursor: pointer;
`;
