import { FC } from 'react';
import Image from 'next/image';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import Text from '../Text';
import Socials from '../Socials';
// import resume from '../../../public/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AboutContainer = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;
`;

const AboutRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 65px auto auto 55px;
  width: 340px;
`;

const ResumeContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 124px;
`;

const About: FC = () => {
  return (
    <AboutContainer>    
      <Image src="/headshot.png" width={460} height={700}/>
      <AboutRightContainer>
        <Text>
          I enjoy creating and helping
        </Text>
        <Socials/>
        <ResumeContainer>
          <Document file="./resume.pdf">
            <Page pageNumber={1} renderMode="svg" height={410}/>
          </Document>
        </ResumeContainer>
      </AboutRightContainer>
    </AboutContainer>
  );
};

export default About;