import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { ButtonCheckIc } from '../../../assets/svgs';
import { WORRY_SELECTION_BUTTON } from '../constants/constants';

interface SelectJuniorWorryButtonProps {
  selectedButtons: string[];
  setSelectedButtons: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectJuniorWorryButton = ({ selectedButtons, setSelectedButtons }: SelectJuniorWorryButtonProps) => {
  const handleButtonClick = (title: string) => {
    setSelectedButtons((prevSelectedButtons: string[]) =>
      prevSelectedButtons.includes(title)
        ? prevSelectedButtons.filter((buttonTitle) => buttonTitle !== title)
        : [...prevSelectedButtons, title]
    );
  };

  return (
    <Wrapper>
      {WORRY_SELECTION_BUTTON.map((item) => (
        <Layout
          key={item.id}
          $isActive={selectedButtons.includes(item.title)}
          onClick={() => handleButtonClick(item.title)}>
          <Title2>{item.title}</Title2>
          {selectedButtons.includes(item.title) && <StyledButtonCheckIc />}
        </Layout>
      ))}
      <WarnDescription isShown={selectedButtons.length === 0} warnText={'최소 1개 이상 선택해주세요.'} />
    </Wrapper>
  );
};

export default SelectJuniorWorryButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;

  margin-bottom: 17.4rem;
`;

const Title2 = styled.span`
  position: relative;
  left: 2rem;

  ${({ theme }) => theme.fonts.Title2_M_16}
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Layout = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWG};

  cursor: pointer;
`;

const StyledButtonCheckIc = styled(ButtonCheckIc)`
  position: relative;
  right: 1rem;

  width: 2rem;
  height: 2rem;
`;
