import { FC } from 'react';
import styled from 'styled-components';
import ArtItem from './ArtItem';
import ArtCategory from './ArtCategory';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 10px 0 10px;
`;

const DesignSubMenuContainer: FC = () => {
  return (
    <OuterContainer>
      <ArtCategory name='Pen & Ink'>
        <ArtItem
          title='Desensitization'
          type={'[15 x 22.5"] (Pen & Ink) 2020'}
          description='Despite my desire to care, I cannot escape the feeling that I am desensitized to violence and death.'
          descriptionPosition='bottom'
          titlePosition='top'
          image='/art/desensitization.png'
          width={920}
          height={612}
        />
      </ArtCategory>
      <ArtCategory name='Graphite'>
        <ArtItem
            title='Legacy'
            type={'[15 x 22.5"] (Graphite) 2020'}
            description='Depicts and honors my late grandfather who passed recently. Considering that in his younger years he was incredibly talented at drawing but was never supported in his pursuits, I elected to draw him in the form that I best knew him, using the medium he loved most.'
            descriptionPosition='right'
            titlePosition='right'
            image='/art/legacy.png'
            width={600}
            height={940}
        />
        <ArtItem
            title='Eye to Eye'
            type={'[12 x 12"] (Graphite) 2020'}
            description='As an Indian growing up, while I appreciated some aspects of it, I generally despised my culture and nation for the obvious systemic faults that I saw. However, today I have a greater understanding and appreciation for my country which, while still incredibly flawed, can hopefully continue striving to become a place where all people can stand on equal ground and see each other, eye to eye.'
            descriptionPosition='right'
            titlePosition='right'
            image='/art/eyeToEye.png'
            width={600}
            height={650}
        />
      </ArtCategory>
    </OuterContainer>
    
  );
};

export default DesignSubMenuContainer;