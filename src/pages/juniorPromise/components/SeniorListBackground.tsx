import { ResetIc, Line292Ic } from '@assets/svgs';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
// eslint-disable-next-line import/namespace
import { FilterButton } from './FilterButton';

interface SeniorListBackgroundProps {
  children: ReactNode;
  handleFilterActiveBtn: (btnText: string) => void;
  handleReset: () => void;
  positionChipNum: number;
  fieldChipNum: number;
}

export const SeniorListBackground: React.FC<SeniorListBackgroundProps> = ({
  children,
  handleFilterActiveBtn,
  handleReset,
  positionChipNum,
  fieldChipNum,
}) => {
  return (
    <ListBackground>
      <SeniorSearchWrapper>
        <SearchTitle>선배를 찾아볼까요?</SearchTitle>
        <BtnLayout>
          <FilterButton
            handleFilterActiveBtn={handleFilterActiveBtn}
            positionChipNum={positionChipNum}
            fieldChipNum={fieldChipNum}
          />
          <LineWrapper>
            <Line292Ic />
          </LineWrapper>
          <ResetIc onClick={handleReset} />
        </BtnLayout>
      </SeniorSearchWrapper>
      {children}
    </ListBackground>
  );
};

const ListBackground = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 4.4rem;
  padding: 1rem 0 2rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWG};
`;

const SeniorSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.h2`
  display: flex;
  align-items: center;

  padding: 1rem 21.8rem 0.9rem 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const BtnLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 2rem;
`;

const LineWrapper = styled.div`
  padding-left: 13.7rem;
`;
