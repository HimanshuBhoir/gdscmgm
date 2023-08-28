import { ReactComponent as SiGithub } from '../../../../../assets/images/icons/github.svg';
import { ReactComponent as SiNotion } from '../../../../../assets/images/icons/notion.svg';
import { forwardRef } from 'react';
import styled from 'styled-components';

import DropdownMenu from '../DropdownMenu';
import { GithubGDSCMGMCET, InstagramGDSCMGMCET, LinkedInGDSCMGMCET } from '../../../../../Constants';

function DropdownList() {
  return (
    <Container>
      <Menus>
        <DropdownMenu
          Icon={<NotionIcon />}
          description={'LinkedIn'}
          href={LinkedInGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<GithubIcon />}
          description={'Github'}
          href={GithubGDSCMGMCET}
        />
        <DropdownMenu
          Icon={<GithubIcon />}
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

const NotionIcon = styled(SiNotion)`
  width: 36px;
  height: 36px;
  path {
    fill: ${(props) => props.theme.backgroundColor.black};
  }
`;

const GithubIcon = styled(SiGithub)`
  width: 36px;
  height: 36px;
  path {
    fill: ${(props) => props.theme.backgroundColor.black};
  }
`;
