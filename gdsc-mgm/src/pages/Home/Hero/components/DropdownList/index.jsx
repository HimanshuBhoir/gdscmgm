import { ReactComponent as IcGithub } from '../../../../../assets/images/icons/github.svg';
import { ReactComponent as IcInstagram } from '../../../../../assets/images/icons/instagram.svg';
import { ReactComponent as IcLinkedIn } from '../../../../../assets/images/icons/linkedin.svg';
import { forwardRef } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu';
import { GithubGDSCMGMCET, InstagramGDSCMGMCET, LinkedInGDSCMGMCET } from '../../../../../constants/constants';

function DropdownList() {
  return (
    <Container>
      <Menus>
        <DropdownMenu
          Icon={<IcLinkedIn />}
          description={'LinkedIn'}
          href={LinkedInGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<IcGithub />}
          description={'Github'}
          href={GithubGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<IcInstagram />}
          description={'Instagram'}
          href={InstagramGDSCMGMCET}
        />
      </Menus>
    </Container>
  );
}

export default forwardRef(DropdownList);

const Container = styled.div`
  width: 275px;
  max-height: 350px;

  padding: 20px;

  position: absolute;
  top: 70px;
  right: 130px;
  z-index: 3000;

  border: 1px solid ${(props) => props.theme.color.lightgrey};
  border-radius: 8px;

  background-color: ${(props) => props.theme.backgroundColor.white};

  font-family: 'Roboto';

  ${({ theme }) => theme.mobile`
    right: 20px;
  `}
`;

const Menus = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;