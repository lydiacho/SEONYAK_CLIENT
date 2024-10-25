import styled from '@emotion/styled';

interface PromiseTimerBtnPropType {
  isActive: boolean;
  diff: string;
  page: string;
  onClick?: () => void;
}

const PromiseTimerBtn = (props: PromiseTimerBtnPropType) => {
  const { isActive, diff, page, onClick } = props;
  return (
    <Wrapper $page={page} disabled={!isActive} onClick={onClick}>
      {isActive ? '지금 입장하기' : page === 'recent' ? `약속 시간까지 ${diff}` : `약속 시간까지 ${diff} 남았어요`}
    </Wrapper>
  );
};

export default PromiseTimerBtn;

const Wrapper = styled.button<{ $page: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  width: 100%;
  height: ${({ $page }) => ($page === 'recent' ? '3.4rem' : '5rem')};
  margin-top: 1rem;
  padding: 0.6rem 0 0.5rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ $page, theme }) => ($page === 'recent' ? theme.fonts.Title1_SB_16 : theme.fonts.Head2_SB_18)};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;
